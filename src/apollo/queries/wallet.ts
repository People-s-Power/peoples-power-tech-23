import { gql } from "@apollo/client"


export const VERIFY_BANK_ACCOUNT = gql`
  mutation verifyBankAccount($account_number: String!, $code: String!){
    verifyBankAccount(account_number: $account_number, code: $code){
      account_number
      account_name
    }
  }
`


export const GET_BANKS = gql`
 {
  getBanks{
    name
    code
    slug  
  }
 }
`
export const GET_WALLET = gql`
  query wallet($id: String! ){
    wallet(id: $id){
      balance
      userId{
        _id
        name
      }
    }
  }
`

export const GET_TRANSACTIONS = gql`
  query walletTx($userId: ID!, $page: Int!, $limit: Int!){
    walletTx(userId: $userId, page: $page, limit: $limit){
      tx{
        amount
        currency
        paymentMethod
        status
        walletId
        isInflow
      }
    }
  }
`

export const WiTHDRAW = gql`
  mutation requestWithdraw($userId: ID!, $amount: Float! ){
    requestWithdraw(userId: $userId, amount: $amount)
  }
`
