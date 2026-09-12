> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/searchentitylistresponse](https://developer.apple.com/documentation/apple_ads/searchentitylistresponse)

# SearchEntityListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response details of geosearch requests.

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

- [GeoRequest](georequest.md): The geosearch request object.
- [SearchEntity](searchentity.md): The list of geolocations that includes the geoidentifier and entity type.
