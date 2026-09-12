> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/locationqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/locationqueryresponse)

# LocationQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The paginated response envelope returned by the Query Locations endpoint.

## Declaration

```
object LocationQueryResponse
```

## Properties

- `result` — `[Location]`: Array of [Location](location.md) objects matching the supplied query filters. Empty array if no locations match. Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the result set, including `totalCount`, `offset`, and `pageSize`. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. Read-only.

<a id="Discussion"></a>

## Discussion

The `LocationQueryResponse` object is the top-level envelope returned by [Query for Locations](query-locations.md). The `result` array contains [Location](location.md) objects matching the filters you supplied in the request body. Use `pagination.totalCount` together with `pagination.offset` and `pagination.pageSize` to page through large result sets.

Always filter by `brandId` to scope results to a specific brand. Omitting a brand filter returns locations across all brands in the ad account, which can produce very large result sets.

You can assign only locations with `eligibility.status: ELIGIBLE` to ad group targeting. Use the `status` filter to narrow to `OPEN` locations before referencing them in a [LocationGroup](locationgroup.md).

<a id="Example"></a>

### Example

```json
{
  "result": [
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
        "fullAddress": "1 Infinite Loop, Cupertino, California 95014, US"
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
  ],
  "pagination": {
    "pageSize": 20,
    "offset": 0,
    "totalCount": 1
  }
}
```

## See Also

- [Brand](brand.md): A brand eligible for promotion through Apple Maps ads.
- [BrandResponse](brandresponse.md): The Get Brand by ID endpoint returns this response object.
- [BrandQueryResponse](brandqueryresponse.md): The Query Brands endpoint returns this response object.
- [BrandRejectionReasonResponse](brandrejectionreasonresponse.md): A single policy assignment with rejection reason details for a brand entity.
- [BusinessCategory](businesscategory.md): A category in the Apple Maps business taxonomy used to classify brands and locations.
- [BusinessCategoryResponse](businesscategoryresponse.md): The Get Business Category endpoint returns this response object.
- [BusinessCategoryQueryResponse](businesscategoryqueryresponse.md): The Query Business Categories endpoint returns this response object.
- [Location](location.md): The brand location object.
- [LocationResponse](locationresponse.md): The response object returned by the Get a Location endpoint.
- [LocationGroup](locationgroup.md): A collection of business locations associated with a brand, used to target geos in Apple Maps campaigns.
- [LocationGroupCreate](locationgroupcreate.md): The request body object for creating a new location group.
- [LocationGroupUpdate](locationgroupupdate.md): The request body object for updating an existing location group.
- [LocationGroupResponse](locationgroupresponse.md): The response object returned by the Get Location Group endpoint.
- [LocationGroupQueryResponse](locationgroupqueryresponse.md): The response object returned by the Query Location Groups endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
