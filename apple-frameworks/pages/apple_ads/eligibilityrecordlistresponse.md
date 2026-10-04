> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/eligibilityrecordlistresponse

# EligibilityRecordListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.10+ (deprecated in 5.2)

The response details to an app eligibility request.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object EligibilityRecordListResponse
```

## Properties

- `data` — `[EligibilityRecord]`: Response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### App Eligibility Request and Response Objects

- [EligibilityRecord](eligibilityrecord.md): Deprecated. App eligibility parameters that an API response returns.
