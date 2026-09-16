> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingcreate/postalcode-data.dictionary

# AdGroupTargetingCreate.PostalCode

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Postal code geographic targeting.

## Declaration

```
object AdGroupTargetingCreate.PostalCode
```

## Properties

- `include` — `[string]`: Postal code IDs restricting delivery to those areas. Mutable.
- `exclude` — `[string]`: Has no effect. `postalCode` is include-only.

<a id="Discussion"></a>

## Discussion

Postal code IDs are returned by [Search Geo Locations](../searches-for-a-list-of-geo-locations.md) or [Query Geo Locations](../gets-a-list-of-geo-locations.md). Used with Apple Maps campaigns. Uses the [TargetingDataCreate](../targetingdatacreate.md) `include`/`exclude` shape.

```json
"postalCode": {
  "include": ["11412181"]
}
```
