> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brand](https://developer.apple.com/documentation/apple-ads-platform-api/brand)

# Brand

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A brand eligible for promotion through Apple Maps ads.

## Declaration

```
object Brand
```

## Properties

- `id` — `string` (required): ID of the brand. Filterable with `EQUALS`, `IN`.
- `name` — `string`: Primary display name for the brand.
- `countryOrRegion` — `string`: 2-character ISO 3166-1 alpha-2 country or region code.
- `categories` — `[string]`: Modern category taxonomy identifiers. The first entry is the primary category. See [BusinessCategory](businesscategory.md).
- `eligibility` — `Eligibility`: Ad serving eligibility for this brand. See [Eligibility](eligibility.md). Read-only. Filterable with `EQUALS` on `eligibility.status`.
- `creationTime` — `date-time`: ISO-8601 timestamp when the brand record was created. Read-only.
- `modificationTime` — `date-time`: ISO-8601 timestamp of the last modification. Read-only.

<a id="Discussion"></a>

## Discussion

The `Brand` object represents a business entity registered in Apple Ads. Use the `id` field as the `promotedObjectId` when creating a `BUSINESS_BRAND` campaign. You can actively promote only brands with `eligibility.status: ELIGIBLE`.

To understand the business type, use the `categories` field. The `countryOrRegion` field identifies the primary market for the brand. Use [Query Brands](query-brands.md) to list brands accessible to your ad account, and [Get Brand by ID](get-brand-by-id.md) to retrieve a specific brand by its identifier.

Query endpoint requests support fields marked **Filterable** in the properties as filter criteria. See [Calling the Apple Ads Platform API](calling-apple-ads-platform-api.md) for details on constructing queries.

<a id="Example"></a>

### Example

```json
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
```

## See Also

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
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
