> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/searchresponse/links-data.dictionary](https://developer.apple.com/documentation/applenewsapi/searchresponse/links-data.dictionary)

# SearchResponse.Links

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Object  
**Availability:** Apple News API 1.0+

See the links the search article endpoints returned.

## Declaration

```
object SearchResponse.Links
```

## Properties

- `self` — `string`: The URL for the current page of search results.
- `next` — `string`: The URL for the next page of search results. If `next` is null, there are no more pages. The `next` link may occasionally return an empty page of results.
