> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/marketplacesearchdetail](https://developer.apple.com/documentation/appstoreconnectapi/marketplacesearchdetail)

# MarketplaceSearchDetail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The search configuration for an alternative marketplace, specifying how apps are indexed and surfaced in search.

## Declaration

```
object MarketplaceSearchDetail
```

## Properties

- `attributes` — `MarketplaceSearchDetail.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `marketplaceSearchDetails`

## Topics

### Objects

- [MarketplaceSearchDetail.Attributes](marketplacesearchdetail/attributes-data.dictionary.md): Attributes that describe a marketplace search detail resource.

## See Also

### Objects

- [MarketplaceSearchDetailCreateRequest](marketplacesearchdetailcreaterequest.md): The request body you use to create an alternative marketplace search detail.
- [MarketplaceSearchDetailResponse](marketplacesearchdetailresponse.md): A response containing the search configuration for a single alternative marketplace.
- [MarketplaceSearchDetailUpdateRequest](marketplacesearchdetailupdaterequest.md): The request body you use to update an alternative marketplace search detail.
- [AppMarketplaceSearchDetailLinkageResponse](appmarketplacesearchdetaillinkageresponse.md)
