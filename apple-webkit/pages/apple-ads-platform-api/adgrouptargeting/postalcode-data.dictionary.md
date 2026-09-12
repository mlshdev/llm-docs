> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargeting/postalcode-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/postalcode-data.dictionary)

# AdGroupTargeting.PostalCode

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Postal code geographic targeting.

## Declaration

```
object AdGroupTargeting.PostalCode
```

## Properties

- `include` — `[string]`: Postal code IDs restricting delivery to those areas. Mutable.
- `exclude` — `[string]`: Has no effect. `postalCode` is include-only.

<a id="Discussion"></a>

## Discussion

Postal code IDs are returned by [Search Geo Locations](../searches-for-a-list-of-geo-locations.md) or [Query Geo Locations](../gets-a-list-of-geo-locations.md). Used with Apple Maps campaigns. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

```json
"postalCode": {
  "include": ["11412181"]
}
```
