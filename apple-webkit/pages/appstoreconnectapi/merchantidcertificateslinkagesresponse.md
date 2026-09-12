> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/merchantidcertificateslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/merchantidcertificateslinkagesresponse)

# MerchantIdCertificatesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object MerchantIdCertificatesLinkagesResponse
```

## Properties

- `data` — `[MerchantIdCertificatesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [MerchantIdCertificatesLinkagesResponse.Data](merchantidcertificateslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [MerchantId](merchantid.md): An Apple Pay merchant identifier registered to your account, used to associate payment capabilities with your app’s bundle ID.
- [MerchantIdResponse](merchantidresponse.md): A response containing a single Apple Pay merchant identifier.
- [MerchantIdsResponse](merchantidsresponse.md): A response containing a list of Apple Pay merchant identifiers registered to your account.
- [MerchantIdCreateRequest](merchantidcreaterequest.md): The request body you use to create a merchant ID.
- [MerchantIdUpdateRequest](merchantidupdaterequest.md): The request body you use to update a merchant ID.
