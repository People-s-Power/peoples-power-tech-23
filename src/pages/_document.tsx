import Document, {
	DocumentContext,
	Html,
	Main,
	Head,
	NextScript,
} from "next/document";

import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props: any) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="/nprogress.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
