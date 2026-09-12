> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/territorieswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/territorieswithoutincludesresponse)

# TerritoriesWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of App Store territories, without related resources.

## Declaration

```
object TerritoriesWithoutIncludesResponse
```

## Properties

- `data` — `[Territory]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [Territory](territory.md): An App Store region (country or territory) where apps, subscriptions, and in-app purchases are offered.
- [TerritoryResponse](territoryresponse.md): The response body for endpoints that read a single App Store territory.
- [TerritoriesResponse](territoriesresponse.md): The response body for endpoints that list available App Store territories.
