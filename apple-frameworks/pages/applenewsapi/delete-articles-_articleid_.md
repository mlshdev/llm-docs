> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/delete-articles-_articleid_](https://developer.apple.com/documentation/applenewsapi/delete-articles-_articleid_)

# Delete an Article

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Web Service Endpoint  
**Availability:** Apple News API 1.0+

Delete the specified article from your channel.

## URL

```http
DELETE https://news-api.apple.com/articles/{articleId}
```

## Path Parameters

- `articleId` — `string` (required): The UUID or the Share URL ID of the article you want to delete. The server returns the article ID and the Share URL when you create an article (see [Create an Article](post-channels-_channelid_-articles.md)) and in [Read Article Information](get-articles-_articleid_.md) and [Update an Article](post-articles-_articleid_.md) responses.

## Response Codes

- `204` No Content: The request was successful but there was no response in the body.
- `400` Bad Request — `Error`: - You didn’t include the article `UUID` or the Share URL ID field in the request. Key path: \*
  - The Apple News team optimized the article, so your article wasn’t deleted. Contact your Apple News technical representative if you need to delete it.
- `401` Unauthorized — `Error`: You didn’t include the `Authorization` header. Key path: N/A
- `403` Forbidden — `Error`: You tried to access an article your API key doesn’t have permission to access. Key path: N/A
- `404` Not Found — `Error`: - The endpoint you tried to access doesn’t exist. Key path: N/A
  - The article you tried to access doesn’t exist. Key path: `articleId`.

<a id="Discussion"></a>

## Discussion

If the article is viewed on a device, it may take some time for the News app to refresh the cache so the article disappears on that device.

> **Important**

>  Once you delete the specified article, the action is irrevocable. If you want to remove the article temporarily, use the update operation with `isHidden` set to `true`. See [Update an Article](post-articles-_articleid_.md) and [Update Article Metadata Fields](update-article-metadata-fields.md).

<a id="Example"></a>

### Example

**Request**

```
DELETE /articles/a3caeb08-b9db-4002-b379-cde305d74be7 HTTP/1.1
Host: news-api.apple.com
Accept: application/json
Authorization: HHMAC; key="1e3gfc5e-e9f8-4232-a6be-17bf40edad09"; signature="irqw07DCRQLtx/40Z2VhNc7sl3nB1PKII374R7AHjUQ="; date="2015-02-28T00:03:31Z"
```

**Response**

```json
HTTP/1.1 204 No Content
Date: Sat, 28 Feb 2015 00:51:41 GMT
```

## See Also

### Articles

- [Create an Article](post-channels-_channelid_-articles.md): Publish an article to your channel.
- [Read Article Information](get-articles-_articleid_.md): Retrieve information about an article, such as the revision number and maturity rating.
- [Search Articles in a Channel](get-channels-_channelid_-articles.md): See a list of all articles in a channel that match the specified search criteria.
- [Search Articles in a Section](get-sections-_sectionid_-articles.md): See a list of all articles in a section that match the specified search criteria.
- [Update an Article](post-articles-_articleid_.md): Update an existing article in your channel.
- [Create Article Metadata Fields](create-article-metadata-fields.md): See the optional metadata fields for the Create an Article Request.
- [ArticleLinksRequest](articlelinksrequest.md): See the required field for the Create an Article request.
- [Update Article Metadata Fields](update-article-metadata-fields.md): See the metadata fields for the Update an Article request.
- [Article](article.md): See the fields the article endpoints returned.
- [ArticleResponse](articleresponse.md): See which objects make up the Create an Article, Read an Article, and Update an Article responses.
- [ArticleLinksResponse](articlelinksresponse.md): See the links the article endpoints returned.
- [SearchResponse](searchresponse.md): See the fields the search article endpoints returned.
- [Meta](meta.md): See the object that wraps the throttling information that’s returned for the Create an Article and Read an Article endpoints.
- [Throttling](throttling.md): See the object that wraps the throttling information that’s returned for the Create an Article and Update an Article endpoints.
