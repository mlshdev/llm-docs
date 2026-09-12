> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandrejectionreasonresponse](https://developer.apple.com/documentation/apple-ads-platform-api/brandrejectionreasonresponse)

# BrandRejectionReasonResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single policy assignment with rejection reason details for a brand entity.

## Declaration

```
object BrandRejectionReasonResponse
```

## Properties

- `id` — `int64`: Policy assignment identifier. Read-only.
- `promotedObjectId` — `string`: The brand or promoted object ID. Read-only.
- `promotedObjectType` — `string`: The type of the promoted object (for example, `BUSINESS_BRAND`). Read-only.
- `entityId` — `string`: Identifier of the affected entity. Read-only.
- `entityType` — `string`: Type of the affected entity (for example, `BUSINESS_BRAND`). Read-only.
- `componentType` — `string`: Type of the entity component that triggered the policy (for example, `ENTITY_ASSET`). Read-only.
- `component` — `string`: Identifier of the specific entity component (for example, an asset UUID). Read-only.
- `code` — `string`: Rejection reason code from the associated default rejection reason (for example, `PERSONAL_INFORMATION`). Read-only.
- `title` — `string`: Human-readable title of the rejection reason. Read-only.
- `body` — `string`: Detailed explanation of the rejection reason. Read-only.

<a id="Discussion"></a>

## Discussion

A `PolicyAssignmentQueryResponse` returns `BrandRejectionReasonResponse` in its `result` array. Each entry identifies the affected brand, the entity and component that triggered the policy assignment, and the rejection reason code, title, and body text.

To programmatically handle specific rejection categories, use `code`. To surface human-readable messaging to advertisers, use `title` and `body`.

## See Also

- [Brand](brand.md): A brand eligible for promotion through Apple Maps ads.
- [BrandResponse](brandresponse.md): The Get Brand by ID endpoint returns this response object.
- [BrandQueryResponse](brandqueryresponse.md): The Query Brands endpoint returns this response object.
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
