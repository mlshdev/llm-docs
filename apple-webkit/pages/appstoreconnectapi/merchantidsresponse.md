> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/merchantidsresponse](https://developer.apple.com/documentation/appstoreconnectapi/merchantidsresponse)

# MerchantIdsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.8+

A response containing a list of Apple Pay merchant identifiers registered to your account.

## Declaration

```
object MerchantIdsResponse
```

## Properties

- `data` — `[MerchantId]` (required):
- `included` — `[Certificate]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [MerchantId](merchantid.md): An Apple Pay merchant identifier registered to your account, used to associate payment capabilities with your app’s bundle ID.
- [MerchantIdResponse](merchantidresponse.md): A response containing a single Apple Pay merchant identifier.
- [MerchantIdCreateRequest](merchantidcreaterequest.md): The request body you use to create a merchant ID.
- [MerchantIdUpdateRequest](merchantidupdaterequest.md): The request body you use to update a merchant ID.
- [MerchantIdCertificatesLinkagesResponse](merchantidcertificateslinkagesresponse.md)
