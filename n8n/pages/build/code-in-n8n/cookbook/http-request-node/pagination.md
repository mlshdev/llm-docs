> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/http-request-node/pagination.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/build/code-in-n8n/cookbook/http-request-node/pagination.md)

# Pagination in the HTTP Request node <a id="pagination-in-the-http-request-node"></a>

The HTTP Request node supports pagination. This page provides some example configurations, including using the [HTTP node variables](https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts/http-node).

Refer to [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) for more information on the node.

> **Info**
> **API differences**
>
> Different APIs implement pagination in different ways. Check the API documentation for the API you're using for details. You need to find out things like:
>
> - Does the API provide the URL for the next page?
> - Are there API-specific limits on page size or page number?
> - The structure of the data that the API returns.

## Enable pagination <a id="enable-pagination"></a>

In the HTTP Request node, select **Add Option** > **Pagination**.

## Use a URL from the response to get the next page using `$response` <a id="use-a-url-from-the-response-to-get-the-next-page-using-dollarresponse"></a>

If the API returns the URL of the next page in its response:

1. Set **Pagination Mode** to **Response Contains Next URL**. n8n displays the parameters for this option.
2. In **Next URL**, use an expression[^1] to set the URL. The exact expression depends on the data returned by your API. For example, if the API includes a parameter called `next-page` in the response body:
   ```javascript
   {{ $response.body["next-page"] }}
   ```

## Get the next page by number using `$pageCount` <a id="get-the-next-page-by-number-using-dollarpagecount"></a>

If the API you're using supports targeting a specific page by number:

1. Set **Pagination Mode** to **Update a Parameter in Each Request**.
2. Set **Type** to **Query**.
3. Enter the **Name** of the query parameter. This depends on your API and is usually described in its documentation. For example, some APIs use a query parameter named `page` to set the page. So **Name** would be `page`.
4. Hover over **Value** and toggle **Expression** on.
5. Enter `{{ $pageCount + 1 }}`

`$pageCount` is the number of pages the HTTP Request node has fetched. It starts at zero. Most API pagination counts from one (the first page is page one). This means that adding `+1` to `$pageCount` means the node fetches page one on its first loop, page two on its second, and so on.

## Navigate pagination through body parameters <a id="navigate-pagination-through-body-parameters"></a>

If the API you're using allows you to paginate through the body parameters:

1. Set the HTTP Request Method to **POST**
2. Set **Pagination Mode** to **Update a Parameter in Each Request**.
3. Select **Body** in the **Type** parameter.
4. Enter the **Name** of the body parameter. This depends on the API you're using. `page` is a common key name.
5. Hover over **Value** and toggle **Expression** on.
6. Enter `{{ $pageCount + 1 }}`

## Set the page size in the query <a id="set-the-page-size-in-the-query"></a>

If the API you're using supports choosing the page size in the query:

1. Select **Send Query Parameters** in main node parameters (this is the parameters you see when you first open the node, not the settings within options).
2. Enter the **Name** of the query parameter. This depends on your API. For example, a lot of APIs use a query parameter named `limit` to set page size. So **Name** would be `limit`.
3. In **Value**, enter your page size.

[^1]: In n8n, expressions allow you to populate node parameters dynamically by executing JavaScript code. Instead of providing a static value, you can use the n8n expression syntax to define the value using data from previous nodes, other workflows, or your n8n environment.
