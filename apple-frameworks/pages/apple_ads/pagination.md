> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/pagination](https://developer.apple.com/documentation/apple_ads/pagination)

# Pagination

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The procedure to refine returned results using limit and offset parameters.

## Declaration

```
object Pagination
```

## Properties

- `limit` — `int32`: The number of items to return per request. For most objects, the default is `20` and the maximum is `1000`.
- `offset` — `int32`: The offset pagination that limits the number of returned records. The start of each page is offset by the specified number. You can apply `offset` to most API calls, but not all GET endpoints support it. The default is `0`.

<a id="Discussion"></a>

## Discussion

In the following example, the two optional parameters limit the number of campaigns that return. You specify `offset` and `limit` as query string parameters.

```console
GET https://api.searchads.apple.com/api/v5/campaigns?limit=<LIMIT>&offset=<OFFSET>
```

## See Also

### API Usability

- [Condition](condition.md): The list of condition objects that allow users to filter a list of records.
- [PageDetail](pagedetail.md): The number of items that return in the page.
- [Selector](selector.md): The selector objects available to filter returned data.
- [Sorting](sorting.md): The order of grouped results.
