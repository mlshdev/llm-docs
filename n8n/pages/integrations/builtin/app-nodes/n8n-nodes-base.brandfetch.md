> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.brandfetch.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.brandfetch.md)

# Brandfetch node <a id="brandfetch-node"></a>

Use the Brandfetch node to automate work in Brandfetch, and integrate Brandfetch with other applications. n8n has built-in support for a wide range of Brandfetch features, including retrieving logos, and colors and brand data.

On this page, you'll find a list of operations the Brandfetch node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Brandfetch credentials](https://docs.n8n.io/integrations/builtin/credentials/brandfetch) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- **Return Logos, Symbols and Icon**: Get all logo variants for a brand, including symbols and icons.
- **Return Accent and Brand Colors**: Get the accent and brand color palette for a brand.
- **Return All of a Brand's Data**: Get all available Brandfetch attributes, including name, description, logos, colors, company data and more.
- **Return Brand Context**: Get structured brand context for any company on the internet, including voice, mission, positioning, audience, competitors and more.

## Identifier types

All operations require you to identify the brand using a **Type** and an **Identifier**.

Select a **Type** from the following options:

- **Domain**: A company's website domain, for example `n8n.io`.
- **Stock/ETF Ticker**: A stock or ETF ticker symbol, for example `AAPL`.
- **Crypto Symbol**: A crypto symbol, for example `BTC`.
- **ISIN**: An International Securities Identification Number, for example `US0378331005`.

Enter the corresponding value in the **Identifier** field.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Brandfetch node documentation integration templates](https://n8n.io/integrations/brandfetch) or [search all templates](https://n8n.io/workflows/)
