> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/eligibility](https://developer.apple.com/documentation/apple-ads-platform-api/eligibility)

# Eligibility

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Eligibility status and constraint details for a Business domain entity.

## Declaration

```
object Eligibility
```

## Properties

- `status` — `EligibilityStatus`: Overall eligibility status (`ELIGIBLE`, `INELIGIBLE`, `LIMITED`, `PENDING`, or `UNDEFINED`). See [EligibilityStatus](eligibilitystatus.md). Read-only.
- `blockedGroups` — `[ConstraintGroup]`: Constraint groups where the entity is blocked from serving. See [ConstraintGroup](constraintgroup.md). Read-only.
- `allowedGroups` — `[ConstraintGroup]`: Constraint groups where the entity is allowed to serve. See [ConstraintGroup](constraintgroup.md). Read-only.
- `modificationTime` — `date-time`: Timestamp of the last eligibility evaluation. Read-only.

<a id="Discussion"></a>

## Discussion

The `Eligibility` object captures the serving eligibility state for a Business domain entity, such as a brand or location, across supply sources and geographic markets.

Geo and brand eligibility lookup responses typically include this object, so you can use it to understand which supply placements and markets are accessible before configuring ad group targeting.

<a id="Example"></a>

### Example

```json
{
  "status": "LIMITED",
  "blockedGroups": [
    {
      "supplyPlacement": ["SEARCH_TAB", "TODAY_TAB"],
      "countryOrRegion": ["CN"]
    }
  ],
  "allowedGroups": [
    {
      "supplyPlacement": ["SEARCH_TAB", "SEARCH_RESULTS"],
      "countryOrRegion": ["US", "GB"]
    }
  ],
  "modificationTime": "2025-01-10T08:00:00.000"
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
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
