> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/customreportresponsebody

# CustomReportResponseBody

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.7+ (deprecated in 5.2)

A container for the Impression Share report response body.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object CustomReportResponseBody
```

## Properties

- `data` — `[CustomReportResponse]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Impression Share Report Request and Response Objects

- [CustomReportRequest](customreportrequest.md): Deprecated. The Impression Share report request body.
- [CustomReportResponse](customreportresponse.md): Deprecated. A container for Impression Share report metrics.
- [SovCondition](sovcondition.md): Deprecated. The list of condition objects that allow users to filter a list of records.
