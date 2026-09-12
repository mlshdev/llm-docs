> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/customreportresponsebody](https://developer.apple.com/documentation/apple_ads/customreportresponsebody)

# CustomReportResponseBody

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.7+

A container for the Impression Share report response body.

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

- [CustomReportRequest](customreportrequest.md): The Impression Share report request body.
- [CustomReportResponse](customreportresponse.md): A container for Impression Share report metrics.
- [SovCondition](sovcondition.md): The list of condition objects that allow users to filter a list of records.
