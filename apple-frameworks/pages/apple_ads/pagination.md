> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/pagination

# Pagination

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The procedure to refine returned results using limit and offset parameters.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

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

- [Condition](condition.md): Deprecated. The list of condition objects that allow users to filter a list of records.
- [PageDetail](pagedetail.md): Deprecated. The number of items that return in the page.
- [Selector](selector.md): Deprecated. The selector objects available to filter returned data.
- [Sorting](sorting.md): Deprecated. The order of grouped results.
