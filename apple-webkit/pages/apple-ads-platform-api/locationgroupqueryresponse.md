> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/locationgroupqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/locationgroupqueryresponse)

# LocationGroupQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object returned by the Query Location Groups endpoint.

## Declaration

```
object LocationGroupQueryResponse
```

## Properties

- `result` — `[LocationGroup]`: Array of [LocationGroup](locationgroup.md) objects matching the query. Empty array if none match. Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the result set. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `LocationGroupQueryResponse` object is the top-level envelope returned by [Query Location Groups](query-location-groups.md). The `result` array contains all [LocationGroup](locationgroup.md) objects that match the supplied filters, subject to pagination. Use `pagination.totalCount` and `pagination.offset` to page through large result sets.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": "5764607523034238976",
      "name": "AwayFinder West Coast Stores",
      "brandId": "9151314442816847872",
      "groupType": "DYNAMIC",
      "systemStatus": "VALID",
      "groupTotal": 42,
      "isAllLocationsGroup": false,
      "eligibility": {
        "status": "ELIGIBLE"
      },
      "creationTime": "2025-02-01T09:00:00.000",
      "modificationTime": "2025-03-25T16:00:00.000"
    }
  ],
  "pagination": {
    "totalCount": 1,
    "offset": 0,
    "pageSize": 100
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
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
