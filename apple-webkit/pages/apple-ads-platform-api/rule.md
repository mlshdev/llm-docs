> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/rule](https://developer.apple.com/documentation/apple-ads-platform-api/rule)

# Rule

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single filter rule for a dynamic location group.

## Declaration

```
object Rule
```

## Properties

- `field` — `string` (required): The location attribute to filter on. Values: `adminArea` (state or province name, for example, `"California"`), `locality` (city or locality, formatted as `countryOrRegion|adminArea|locality`, for example, `"US|New York|Brooklyn"`), `postalCode` (postal code, for example, `"94107"`), `locationId` (location ID, for example, `"7205759403792794"`). Cannot be `null`.
  **Allowed values:** `adminArea`, `locality`, `postalCode`, `locationId`
- `operator` — `string` (required): Comparison operator to apply against `field`. Cannot be `null`.
  **Allowed values:** `EQUALS`, `NOT_EQUALS`, `IN`, `NOT_IN`
- `value` — `Rule.Value` (required): The value to match against. Pass a string for `EQUALS` and `NOT_EQUALS`. Pass an array of strings for `IN` and `NOT_IN`.

<a id="Discussion"></a>

## Discussion

The `Rule` object defines a filter for a `DYNAMIC` `LocationGroup`, specifying how the system selects locations at query time. Rules can mix different `field` values within the same group, and the system re-evaluates location membership whenever rules change, setting `LocationGroup.systemStatus` to `PENDING` until evaluation completes.

<a id="Example"></a>

### Example

```json
{
  "field": "adminArea",
  "operator": "IN",
  "value": ["California", "New York"]
}
```

## Topics

### Dictionaries

- [Rule.Value](rule/value-data.dictionary.md): The comparison value for a targeting rule, as either a single string or an array of strings.

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
