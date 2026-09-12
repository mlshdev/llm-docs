> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/brandqueryresponse)

# BrandQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The Query Brands endpoint returns this response object.

## Declaration

```
object BrandQueryResponse
```

## Properties

- `result` — `[Brand]`: Array of [Brand](brand.md) objects matching the query. Empty array if no brands match. Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the result set. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The [Query Brands](query-brands.md) returns `BrandQueryResponse` as the top-level envelope. The `result` array contains all [Brand](brand.md) objects that match the supplied filters, subject to pagination. To page through large result sets, use `pagination.totalCount` and `pagination.offset`.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": "123456789",
      "name": "AwayFinder",
      "countryOrRegion": "US",
      "categories": [
        "shopping.retail",
        "dining.restaurant"
      ],
      "eligibility": {
        "status": "ELIGIBLE",
        "blockedGroups": [],
        "allowedGroups": [],
        "modificationTime": "2025-01-10T08:00:00.000"
      },
      "creationTime": "2025-01-10T08:00:00.000",
      "modificationTime": "2025-01-10T08:00:00.000"
    }
  ],
  "pagination": {
    "offset": 0,
    "pageSize": 20,
    "totalCount": 1
  }
}
```

## See Also

- [Brand](brand.md): A brand eligible for promotion through Apple Maps ads.
- [BrandResponse](brandresponse.md): The Get Brand by ID endpoint returns this response object.
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
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
