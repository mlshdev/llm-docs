> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adgroupresponse

# AdGroupResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

A container for the ad group response body.

## Declaration

```
object AdGroupResponse
```

## Properties

- `data` — `AdGroup`: Response data that the API provides.
- `error` — `ApiErrorResponse`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Ad Group Request and Response Objects

- [AdGroup](adgroup.md): The response to ad group requests.
- [AdGroupUpdate](adgroupupdate.md): The list of ad group fields that are updatable.
- [AdGroupListResponse](adgrouplistresponse.md): The response details of ad group requests.
