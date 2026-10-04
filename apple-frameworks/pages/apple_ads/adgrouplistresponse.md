> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adgrouplistresponse

# AdGroupListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The response details of ad group requests.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object AdGroupListResponse
```

## Properties

- `data` — `[AdGroup]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Ad Group Request and Response Objects

- [AdGroup](adgroup.md): Deprecated. The response to ad group requests.
- [AdGroupUpdate](adgroupupdate.md): Deprecated. The list of ad group fields that are updatable.
- [AdGroupResponse](adgroupresponse.md): Deprecated. A container for the ad group response body.
