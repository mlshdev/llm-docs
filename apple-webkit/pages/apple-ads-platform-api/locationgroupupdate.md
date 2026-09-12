> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/locationgroupupdate](https://developer.apple.com/documentation/apple-ads-platform-api/locationgroupupdate)

# LocationGroupUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body object for updating an existing location group.

## Declaration

```
object LocationGroupUpdate
```

## Properties

- `name` — `string`: Updated display name for the location group.
- `groupType` — `LocationGroupType`: Type of location grouping. Values: `STATIC`, `DYNAMIC`. Immutable after creation. To switch a group between types, delete the group and recreate it. See groupType Details in [LocationGroupCreate](locationgroupcreate.md).
- `rules` — `[Rule]`: Updated array of [Rule](rule.md) objects for `DYNAMIC` groups. Replaces the existing rules and transitions `systemStatus` to `PENDING`. Wait for `systemStatus: VALID` before relying on the updated membership in active targeting.
- `locationIds` — `[string]`: Updated array of location IDs for `STATIC` groups. Replaces the existing list and may briefly set `systemStatus` to `PENDING`.
- `description` — `string`: Updated description of the location group.

<a id="Discussion"></a>

## Discussion

The `LocationGroupUpdate` object is the partial-update payload sent to [Update Location Group](update-location-group.md). All fields are optional. The system changes only the fields you provide. Omitted fields retain their current values.

<a id="Example"></a>

### Example

```json
{
  "name": "West Coast Stores (Updated)",
  "description": "All AwayFinder retail stores on the West Coast, including new Pacific Northwest locations"
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
- [LocationGroupResponse](locationgroupresponse.md): The response object returned by the Get Location Group endpoint.
- [LocationGroupQueryResponse](locationgroupqueryresponse.md): The response object returned by the Query Location Groups endpoint.
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
