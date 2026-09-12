> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/articlelinksrequest](https://developer.apple.com/documentation/applenewsapi/articlelinksrequest)

# ArticleLinksRequest

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Object  
**Availability:** Apple News API 2.2+

See the required field for the Create an Article request.

## Declaration

```
object ArticleLinksRequest
```

## Properties

- `sections` — `[string]`: The URL of the sections, if any, in which this article appears.

## See Also

### Articles

- [Create an Article](post-channels-_channelid_-articles.md): Publish an article to your channel.
- [Read Article Information](get-articles-_articleid_.md): Retrieve information about an article, such as the revision number and maturity rating.
- [Search Articles in a Channel](get-channels-_channelid_-articles.md): See a list of all articles in a channel that match the specified search criteria.
- [Search Articles in a Section](get-sections-_sectionid_-articles.md): See a list of all articles in a section that match the specified search criteria.
- [Update an Article](post-articles-_articleid_.md): Update an existing article in your channel.
- [Delete an Article](delete-articles-_articleid_.md): Delete the specified article from your channel.
- [Create Article Metadata Fields](create-article-metadata-fields.md): See the optional metadata fields for the Create an Article Request.
- [Update Article Metadata Fields](update-article-metadata-fields.md): See the metadata fields for the Update an Article request.
- [Article](article.md): See the fields the article endpoints returned.
- [ArticleResponse](articleresponse.md): See which objects make up the Create an Article, Read an Article, and Update an Article responses.
- [ArticleLinksResponse](articlelinksresponse.md): See the links the article endpoints returned.
- [SearchResponse](searchresponse.md): See the fields the search article endpoints returned.
- [Meta](meta.md): See the object that wraps the throttling information that’s returned for the Create an Article and Read an Article endpoints.
- [Throttling](throttling.md): See the object that wraps the throttling information that’s returned for the Create an Article and Update an Article endpoints.
