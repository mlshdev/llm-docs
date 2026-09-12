> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/constraintgroup](https://developer.apple.com/documentation/apple-ads-platform-api/constraintgroup)

# ConstraintGroup

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A constraint group defining the supply placements and countries or regions where a location is blocked or allowed to serve ads.

## Declaration

```
object ConstraintGroup
```

## Properties

- `supplyPlacement` — `[string]`: Supply placement identifiers scoped by this constraint. A generic string array with no enumerated values. Example values: `SEARCH_TAB`, `TODAY_TAB`, `APPSTORE_SEARCH_RESULTS`, `APPSTORE_TODAY_TAB`.
- `countryOrRegion` — `[string]`: ISO 3166-1 alpha-2 country or region codes scoped by this constraint. Example values: `US`, `GB`.

<a id="Discussion"></a>

## Discussion

The `ConstraintGroup` object defines a pairing of supply placements and geographic markets that collectively describe where an eligibility rule applies. The [Eligibility](eligibility.md) objects embed it to specify the exact scope of blocking or allowing a business entity from serving ads.

When you populate both `supplyPlacement` and `countryOrRegion`, the constraint applies to the intersection of those placements and markets.

<a id="Example"></a>

### Example

```json
{
  "supplyPlacement": [
    "SEARCH_TAB",
    "TODAY_TAB"
  ],
  "countryOrRegion": [
    "US",
    "GB"
  ]
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
