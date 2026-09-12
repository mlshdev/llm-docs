> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/searchentity](https://developer.apple.com/documentation/apple_ads/searchentity)

# SearchEntity

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The list of geolocations that includes the geoidentifier and entity type.

## Declaration

```
object SearchEntity
```

## Properties

- `adminArea` — `string`: A state or the equivalent according to its associated country.
- `countryOrRegion` — `string`: The geoterritory where you’re promoting your app in ISO alpha-2 country code format.
- `displayName` — `string`: The geographic targeting location in the format of `locality`,`adminArea,countryOrRegion`.
- `entity` — `string`: The type of geography for targeting locations. Search results are in the preferred language according to your organization.
- `id` — `string`: The geographic location in the format of [CountryOrRegion](countryorregion.md)|`adminArea`|`locality`.
- `locality` — `string`: A city or the equivalent according to its associated `adminArea`.

<a id="Discussion"></a>

## Discussion

Use the [Search for Geolocations](search-for-geolocations.md) endpoint to fetch a `displayName` for a geolocation.

<a id="Example-Search-Entity-Object"></a>

### Example Search Entity Object

```json
{
  "id": "US|CA|Cupertino",
  "entity": "locality",
  "displayName": "Cupertino, California, United States",
  "countryOrRegion": "US",
  "adminArea": "CA",
  "locality": "Cupertino"
}
```

## See Also

### Search Geolocation Request and Response Objects

- [GeoRequest](georequest.md): The geosearch request object.
- [SearchEntityListResponse](searchentitylistresponse.md): The response details of geosearch requests.
