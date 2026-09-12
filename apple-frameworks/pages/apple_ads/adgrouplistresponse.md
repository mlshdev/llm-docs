> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/adgrouplistresponse](https://developer.apple.com/documentation/apple_ads/adgrouplistresponse)

# AdGroupListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response details of ad group requests.

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

- [AdGroup](adgroup.md): The response to ad group requests.
- [AdGroupUpdate](adgroupupdate.md): The list of ad group fields that are updatable.
- [AdGroupResponse](adgroupresponse.md): A container for the ad group response body.
