> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/searchentitylistresponse

# SearchEntityListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The response details of geosearch requests.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object SearchEntityListResponse
```

## Properties

- `data` — `[SearchEntity]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Search Geolocation Request and Response Objects

- [GeoRequest](georequest.md): Deprecated. The geosearch request object.
- [SearchEntity](searchentity.md): Deprecated. The list of geolocations that includes the geoidentifier and entity type.
