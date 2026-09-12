> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/territoriesresponse](https://developer.apple.com/documentation/appstoreconnectapi/territoriesresponse)

# TerritoriesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that list available App Store territories.

## Declaration

```
object TerritoriesResponse
```

## Properties

- `data` — `[Territory]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [Territory](territory.md): An App Store region (country or territory) where apps, subscriptions, and in-app purchases are offered.
- [TerritoryResponse](territoryresponse.md): The response body for endpoints that read a single App Store territory.
- [TerritoriesWithoutIncludesResponse](territorieswithoutincludesresponse.md): A response containing a list of App Store territories, without related resources.
