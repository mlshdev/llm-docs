> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/georequest](https://developer.apple.com/documentation/apple_ads/georequest)

# GeoRequest

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The geosearch request object.

## Declaration

```
object GeoRequest
```

## Properties

- `entity` — `string` (required): The type of geography for targeting locations. Search results are in the preferred language according to your organization.
  **Allowed values:** `AdminArea`, `Country`, `Locality`
- `id` — `string` (required): The geographic location in the format of [CountryOrRegion](countryorregion.md)|`adminArea`|`locality`. A `countryCode` is an ISO alpha-2 country code string. An `adminArea` is a state or the equivalent according to its associated `country`. A `locality` is a city or the equivalent according to its associated `adminArea`.

  Use the `id` that returns in the response in the [TargetingDimensions](targetingdimensions.md) object.

## See Also

### Search Geolocation Request and Response Objects

- [SearchEntity](searchentity.md): The list of geolocations that includes the geoidentifier and entity type.
- [SearchEntityListResponse](searchentitylistresponse.md): The response details of geosearch requests.
