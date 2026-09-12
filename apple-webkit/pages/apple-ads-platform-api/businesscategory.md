> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/businesscategory](https://developer.apple.com/documentation/apple-ads-platform-api/businesscategory)

# BusinessCategory

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A category in the Apple Maps business taxonomy used to classify brands and locations.

## Declaration

```
object BusinessCategory
```

## Properties

- `id` — `string` (required): MUID (Maps Unique Identifier) for this category. Read-only.
- `name` — `string`: English locale display name of the category. Example: `"Association or Organization"`. Read-only.
- `qualifiedId` — `string`: Dot-delimited taxonomy path encoding the category hierarchy. A dot always marks a hierarchy boundary, but an individual level’s name can itself contain underscores (for example, `association_or_organization`). Example: `"dining.restaurant"`. Use this value as the `text` on a `CATEGORY` match-type Keyword. Read-only.
- `description` — `string`: Human-readable description of the category. Example: `"Sporting venues where animals are involved."` Read-only.
- `eligibility` — `Eligibility`: Ad serving eligibility for this category. See [Eligibility](eligibility.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `BusinessCategory` object represents a leaf or branch node in the Apple Maps category taxonomy. Categories classify brands and locations and scope which businesses Apple Maps campaigns can reach.

You can associate active Apple Maps campaigns only with categories that have `eligibility.status: ELIGIBLE`. Check eligibility before using a category in a production campaign.

<a id="Example"></a>

### Example

```json
{
  "id": "cat-restaurant-042",
  "name": "Restaurant",
  "qualifiedId": "dining.restaurant",
  "description": "Establishments that prepare and serve food and beverages to customers.",
  "eligibility": {
    "status": "ELIGIBLE",
    "blockedGroups": [],
    "allowedGroups": [
      {
        "supplyPlacement": ["SEARCH_TAB", "SEARCH_RESULTS"],
        "countryOrRegion": ["US", "GB"]
      }
    ],
    "modificationTime": "2025-01-10T08:00:00.000"
  }
}
```

## See Also

- [Brand](brand.md): A brand eligible for promotion through Apple Maps ads.
- [BrandResponse](brandresponse.md): The Get Brand by ID endpoint returns this response object.
- [BrandQueryResponse](brandqueryresponse.md): The Query Brands endpoint returns this response object.
- [BrandRejectionReasonResponse](brandrejectionreasonresponse.md): A single policy assignment with rejection reason details for a brand entity.
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
