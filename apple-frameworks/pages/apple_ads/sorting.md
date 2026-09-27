> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/sorting

# Sorting

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The order of grouped results.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object Sorting
```

## Properties

- `field` — `string`: The name of a field.
- `ignoreCase` — `boolean`:
- `sortOrder` — `string`: The order of grouped results.
  **Allowed values:** `ASCENDING`, `DESCENDING`

## See Also

### API Usability

- [Condition](condition.md): Deprecated. The list of condition objects that allow users to filter a list of records.
- [PageDetail](pagedetail.md): Deprecated. The number of items that return in the page.
- [Pagination](pagination.md): Deprecated. The procedure to refine returned results using limit and offset parameters.
- [Selector](selector.md): Deprecated. The selector objects available to filter returned data.
