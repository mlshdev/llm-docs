> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/sovcondition

# SovCondition

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.6+ (deprecated in 5.2)

The list of condition objects that allow users to filter a list of records.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object SovCondition
```

## Properties

- `field` — `string`: A list of field names to return within each record.
- `operator` — `string`: The operator values compare attributes to a list of specified values.

  The `IN` operator matches any value in a list of specified values.  
  **Allowed values:** `IN`
- `values` — `[string]`: A list of matching values.

<a id="Discussion"></a>

## Discussion

The `Condition` object functionality is similar to the `WHERE` clause in SQL.

## See Also

### Impression Share Report Request and Response Objects

- [CustomReportRequest](customreportrequest.md): Deprecated. The Impression Share report request body.
- [CustomReportResponse](customreportresponse.md): Deprecated. A container for Impression Share report metrics.
- [CustomReportResponseBody](customreportresponsebody.md): Deprecated. A container for the Impression Share report response body.
