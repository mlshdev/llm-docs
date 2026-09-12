> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/post-sections-_sectionid_-promotedarticles](https://developer.apple.com/documentation/applenewsapi/post-sections-_sectionid_-promotedarticles)

# Promote Articles in a Section

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Web Service Endpoint  
**Availability:** Apple News API 1.0+

Set the list of promoted articles for the specified section.

## URL

```http
POST https://news-api.apple.com/sections/{sectionId}/promotedArticles
```

## Path Parameters

- `sectionId` — `string` (required): The UUID of the section.

## HTTP Body

Content type: `application/json`

Type: `PromoteArticleRequest`

The list of IDs for articles you want to promote.

## Response Codes

- `200` OK — `PromoteArticleResponse`: The request was successful.
- `400` Bad Request — `Error`: The specified article ID isn’t a valid `UUID`.

  Key path: `data.promotedArticle.`
- `401` Unauthorized — `Error`: You didn’t include the `Authorization` header.

  Key path: None.
- `403` Forbidden — `Error`: The channel doesn’t have permission to promote the article.

  Key path: `data.promotedArticle.`

  Value: `Invalid ID.`
- `404` Not Found — `Error`: - The endpoint you tried to access doesn’t exist. Key path: None.
  - `NOT_FOUND`. The specified section ID  doesn’t exist. Key path: None. Value: None.
  - `NOT_FOUND`. The article with the specified ID doesn’t exist. Key path: `data.promotedArticle.` Value: `Article ID.`
- `422` — `Error`: `MISSING_THUMBNAIL_FOR_PROMOTED_ARTICLE`. The list of articles you promoted has at least one article without a thumbnail image.

  Key path: `data.promotedArticles.`

<a id="Discussion"></a>

## Discussion

A Promote Articles in a Section request sets the list of promoted articles for the specified section. You can promote up to six articles per section. Note that each article promoted in a section should have a thumbnail image. The system generates an error if an article in the list doesn’t include a thumbnail image. The list of articles given in the body of this request replaces any previous list of promoted articles. You can remove the list of promoted articles for the section by specifying an empty list. The promoted articles list is valid for a system-defined time period after it is set.

The request body must be in JSON, in the following format:

```json
{
  "data": {
    "promotedArticles": [
      "F59D1784-CAFC-432A-9A1A-EF2FCE1E1C60",
      "2027DD1B-2794-4B0A-B9DC-F7EE696411FF"
    ]
  }
}
```

<a id="Example"></a>

### Example

**Request**

```
POST /sections/a3caeb08-b9db-4002-b379-cde305d74be7/promotedArticles HTTP/1.1
Host: news-api.apple.com
Accept: application/json
Authorization: HHMAC; key="1e3gfc5e-e9f8-4232-a6be-17bf40edad09";
signature="irqw07DCRQLtx/40Z2VhNc7sl3nB1PKII374R7AHjUQ=";
date="2017-12-08T00:03:31Z"
{
  "data": {
    "promotedArticles": [
      "F59D1784-CAFC-432A-9A1A-EF2FCE1E1C60",
      "2027DD1B-2794-4B0A-B9DC-F7EE696411FF"
    ]
  }
}
```

**Response**

```json
HTTP/1.1 200 OK
Date: Fri, 08 Dec 2017 00:04:41 GMT
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
{
  "data": {
    "promotedArticles": [
      "https://news-api.apple.com/articles/F59D1784-CAFC-432A-9A1A-EF2FCE1E1C60",
      "https://news-api.apple.com/articles/2027DD1B-2794-4B0A-B9DC-F7EE696411FF"
    ]
  }
}
```

## See Also

### Sections

- [List All Sections](get-channels-_channelid_-sections.md): See a list of available sections in your channel.
- [Read Section Information](get-sections-_sectionid_.md): Get information about the specified section, including its name, its channel, and whether it’s a default section.
- [Section](section.md): See the fields the section endpoints returned.
- [SectionLinks](sectionlinks.md): See the links the section endpoints returned.
- [SectionResponse](sectionresponse.md): See which objects make up the section response.
- [PromoteArticleRequest](promotearticlerequest.md): See the required field for the Promote an Article request.
- [PromoteArticleResponse](promotearticleresponse.md): See the field the Promote an Article response returned.
