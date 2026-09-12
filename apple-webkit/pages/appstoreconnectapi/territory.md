> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/territory](https://developer.apple.com/documentation/appstoreconnectapi/territory)

# Territory

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

An App Store region (country or territory) where apps, subscriptions, and in-app purchases are offered.

## Declaration

```
object Territory
```

## Properties

- `attributes` — `Territory.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `territories`

## Topics

### Objects

- [Territory.Attributes](territory/attributes-data.dictionary.md): Attributes that describe a Territories resource.

## See Also

### Objects

- [TerritoryResponse](territoryresponse.md): The response body for endpoints that read a single App Store territory.
- [TerritoriesWithoutIncludesResponse](territorieswithoutincludesresponse.md): A response containing a list of App Store territories, without related resources.
- [TerritoriesResponse](territoriesresponse.md): The response body for endpoints that list available App Store territories.
