> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adservingstatus

# AdServingStatus

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The status of whether the ad is serving.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string AdServingStatus
```

## Possible Values

- `RUNNING`: The ad is running.
- `NOT_RUNNING`: The ad isn’t running.

## See Also

### Data Types

- [AdServingStateReasons](adservingstatereasons.md): Deprecated. Reasons the system provides when an ad isn’t running.
- [AdStatus](adstatus.md): Deprecated. The user-controlled status of the ad.
