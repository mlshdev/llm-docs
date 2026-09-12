> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/recommendationresponseerrordetail/info-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/recommendationresponseerrordetail/info-data.dictionary)

# RecommendationResponseErrorDetail.Info

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Additional context that supplements the error message, varying by endpoint and error type.

## Declaration

```
object RecommendationResponseErrorDetail.Info
```

<a id="Discussion"></a>

## Discussion

The `info` field supplements the parent detail’s `message` with structured context, such as the field name, the invalid value, or acceptable alternatives. Its shape depends on the endpoint and the error condition. For example, a `MISSING_REQUIRED_FILTER` error includes the missing filter’s field name and location, as in `{"field": "promotedObjectId", "location": "filters"}`.
