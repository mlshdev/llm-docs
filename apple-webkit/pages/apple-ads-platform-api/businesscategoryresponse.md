> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/businesscategoryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/businesscategoryresponse)

# BusinessCategoryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The Get Business Category endpoint returns this response object.

## Declaration

```
object BusinessCategoryResponse
```

## Properties

- `result` — `BusinessCategory`: The retrieved business category. Omitted from the response entirely if not found (see the 404 case above), rather than being present as `null`. See [BusinessCategory](businesscategory.md). Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The [Get Business Category](get-category-by-id.md) returns `BusinessCategoryResponse` as the top-level envelope. On success, `result` contains a single [BusinessCategory](businesscategory.md) object. On failure (for example, 404 Not Found), the response contains only the `error` object. The response omits the `result` key entirely rather than setting it to `null`.

<a id="Example"></a>

### Example

```json
{
  "result": {
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
}
```

## See Also

- [Brand](brand.md): A brand eligible for promotion through Apple Maps ads.
- [BrandResponse](brandresponse.md): The Get Brand by ID endpoint returns this response object.
- [BrandQueryResponse](brandqueryresponse.md): The Query Brands endpoint returns this response object.
- [BrandRejectionReasonResponse](brandrejectionreasonresponse.md): A single policy assignment with rejection reason details for a brand entity.
- [BusinessCategory](businesscategory.md): A category in the Apple Maps business taxonomy used to classify brands and locations.
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
