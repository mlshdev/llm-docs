> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/location](https://developer.apple.com/documentation/apple-ads-platform-api/location)

# Location

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The brand location object.

## Declaration

```
object Location
```

## Properties

- `id` — `string` (required): ID of the location. Read-only.
- `brandId` — `string`: Associated brand identifier. Read-only.
- `status` — `string`: Possible values: `OPEN`, `CLOSED`, `MOVED`, `TEMPORARILY_CLOSED`, `OPENING_SOON`. Read-only.
  **Allowed values:** `OPEN`, `OPENING_SOON`, `CLOSED`, `MOVED`, `TEMPORARILY_CLOSED`
- `name` — `string`: The location’s display name. Read-only.
- `categories` — `[string]`: Category identifiers (first is primary). Read-only.
- `address` — `Location.Address`: Postal address of the location, sourced from Apple Maps. See [Location.Address](location/address-data.dictionary.md) for the full subfield breakdown. Read-only.
- `displayPoint` — `Location.DisplayPoint`: Geographic coordinates used for map placement rendering. Read-only.
- `countryOrRegion` — `string`: ISO 3166-1 alpha-2 country code, for example, `"US"`, `"GB"`. Read-only.
- `creationTime` — `date-time`: ISO-8601 timestamp when the location record was created. Read-only.
- `modificationTime` — `date-time`: ISO-8601 timestamp of the last modification to the location record. Read-only.
- `eligibility` — `Eligibility`: Eligibility details for this location. See [Eligibility](eligibility.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `Location` object represents a physical brand location sourced from Apple Maps. An `id` identifies each location, and each location belongs to a `brandId`. The `status` field reflects the operational state of the location. Typically, `brands` campaigns target only `OPEN` locations.

The API always returns the `eligibility` field, which describes whether the location can be promoted through ads. Use `categories` to understand the business type, and `address.countryOrRegion` to verify country or region targeting compatibility. The `address` and `displayPoint` provide the geographic data used for map placement rendering.

<a id="Example"></a>

### Example

```json
{
  "id": "123456789",
  "brandId": "987654321",
  "status": "OPEN",
  "name": "AwayFinder Downtown",
  "categories": [
    "shopping.retail",
    "technology"
  ],
  "address": {
    "countryOrRegion": "US",
    "adminArea": "California",
    "adminAreaCode": "CA",
    "locality": "Cupertino",
    "subLocality": "De Anza",
    "subAdminArea": "Santa Clara County",
    "postalCode": "95014",
    "thoroughfare": "Infinite Loop",
    "subThoroughfare": "1",
    "fullThoroughfare": "1 Infinite Loop",
    "fullAddress": "1 Infinite Loop, Cupertino, California 95014, US",
    "unit": "Suite 100",
    "floor": "1",
    "building": "Main Building"
  },
  "displayPoint": {
    "latitude": "37.3318",
    "longitude": "-122.0312"
  },
  "countryOrRegion": "US",
  "creationTime": "2025-01-10T08:00:00.000",
  "modificationTime": "2025-03-20T14:45:00.000",
  "eligibility": {
    "status": "ELIGIBLE",
    "blockedGroups": [],
    "allowedGroups": [
      {
        "supplyPlacement": [
          "SEARCH_TAB",
          "TODAY_TAB"
        ],
        "countryOrRegion": [
          "US"
        ]
      }
    ]
  }
}
```

## Topics

### Dictionaries

- [Location.Address](location/address-data.dictionary.md): The postal address of a brand location.
- [Location.DisplayPoint](location/displaypoint-data.dictionary.md)

## See Also

- [Brand](brand.md): A brand eligible for promotion through Apple Maps ads.
- [BrandResponse](brandresponse.md): The Get Brand by ID endpoint returns this response object.
- [BrandQueryResponse](brandqueryresponse.md): The Query Brands endpoint returns this response object.
- [BrandRejectionReasonResponse](brandrejectionreasonresponse.md): A single policy assignment with rejection reason details for a brand entity.
- [BusinessCategory](businesscategory.md): A category in the Apple Maps business taxonomy used to classify brands and locations.
- [BusinessCategoryResponse](businesscategoryresponse.md): The Get Business Category endpoint returns this response object.
- [BusinessCategoryQueryResponse](businesscategoryqueryresponse.md): The Query Business Categories endpoint returns this response object.
- [LocationResponse](locationresponse.md): The response object returned by the Get a Location endpoint.
- [LocationGroup](locationgroup.md): A collection of business locations associated with a brand, used to target geos in Apple Maps campaigns.
- [LocationGroupCreate](locationgroupcreate.md): The request body object for creating a new location group.
- [LocationGroupUpdate](locationgroupupdate.md): The request body object for updating an existing location group.
- [LocationGroupResponse](locationgroupresponse.md): The response object returned by the Get Location Group endpoint.
- [LocationGroupQueryResponse](locationgroupqueryresponse.md): The response object returned by the Query Location Groups endpoint.
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
