> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/includeexclude](https://developer.apple.com/documentation/apple-ads-platform-api/includeexclude)

# IncludeExclude

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Targeting criteria object specifying values to include or exclude in ad delivery.

## Declaration

```
object IncludeExclude
```

## Properties

- `include` — `[string]`: An array of string values to target. Accepted values depend on the field using this object. Read-only.

<a id="Discussion"></a>

## Discussion

The `IncludeExclude` object is a shared targeting wrapper used by [BrandsTargetingProjection](brandstargetingprojection.md) and [AppsTargetingProjection](appstargetingprojection.md). The `include` array accepts different value sets depending on context:

| Field | Accepted values |
| --- | --- |
| `supplyPlacement` | Apps: `APPSTORE_SEARCH_RESULTS`, `APPSTORE_SEARCH_TAB`, `APPSTORE_TODAY_TAB`, `APPSTORE_PRODUCT_PAGES`. Brands: `MAPS_SEARCH_RESULTS`, `MAPS_SEARCH_HOME` |
| `supplySource` | `MAPS` |
| `countryOrRegion` | ISO 3166-1 alpha-2 country codes, for example, `US`, `GB` |
| `lifetimeStorefronts` | ISO 3166-1 alpha-2 storefront codes |
| `promotedLocationGroup` | Location group IDs associated with the brand |
| `promotedLocation` | Individual brand location IDs |

<a id="Example"></a>

### Example

```json
{
  "include": [
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
