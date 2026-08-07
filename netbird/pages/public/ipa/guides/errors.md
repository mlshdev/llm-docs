> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/ipa/guides/errors.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/ipa/guides/errors.mdx)

# Errors

When working with APIs, it's important to understand the different types of HTTP errors that you might encounter. These errors can help you diagnose issues with your API requests and determine how to resolve them.&#x20;

You can tell if your request was successful by checking the status code when receiving an API response. If a response comes back unsuccessful, you can use the error type and error message to figure out what has gone wrong and do some rudimentary debugging.

> **Note**
>
> The API is still in Beta state so some errors might not be handled properly yet.

***

## Status codes

Here is a list of the different categories of status codes returned by the NetBird API. Use these to understand if a request was successful.

**2xx**

A 2xx status code indicates a successful response.

**4xx**

A 4xx status code indicates a client error - those are mostly related to missing permissions or invalid parameters inside the request.

**5xx**

A 5xx status code indicates a server error - in this case please reach out to us via Slack or [GitHub](https://github.com/netbirdio/netbird/issues).

***
