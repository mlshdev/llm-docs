> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/businesscategoryqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/businesscategoryqueryresponse)

# BusinessCategoryQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The Query Business Categories endpoint returns this response object.

## Declaration

```
object BusinessCategoryQueryResponse
```

## Properties

- `result` — `[BusinessCategory]`: Array of matching business categories. See [BusinessCategory](businesscategory.md). Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The [Query Business Categories](query-categories.md) returns `BusinessCategoryQueryResponse` as the top-level envelope. It extends the standard [QueryResponse](queryresponse.md) envelope: on success, `result` contains an array of [BusinessCategory](businesscategory.md) objects matching the query criteria. The standard `pagination` field handles pagination.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": "cat-din-001",
      "name": "Restaurant",
      "qualifiedId": "dining.restaurant",
      "description": "Establishments that serve prepared food and beverages for on-site consumption.",
      "eligibility": {
        "status": "ELIGIBLE",
        "blockedGroups": [],
        "allowedGroups": []
      }
    }
  ],
  "pagination": {
    "totalCount": 1,
    "offset": 0,
    "pageSize": 20
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
- [Location](location.md): The brand location object.
- [LocationResponse](locationresponse.md): The response object returned by the Get a Location endpoint.
- [LocationGroup](locationgroup.md): A collection of business locations associated with a brand, used to target geos in Apple Maps campaigns.
- [LocationGroupCreate](locationgroupcreate.md): The request body object for creating a new location group.
- [LocationGroupUpdate](locationgroupupdate.md): The request body object for updating an existing location group.
- [LocationGroupResponse](locationgroupresponse.md): The response object returned by the Get Location Group endpoint.
- [LocationGroupQueryResponse](locationgroupqueryresponse.md): The response object returned by the Query Location Groups endpoint.
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
