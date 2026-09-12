> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/merchantidresponse](https://developer.apple.com/documentation/appstoreconnectapi/merchantidresponse)

# MerchantIdResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.8+

A response containing a single Apple Pay merchant identifier.

## Declaration

```
object MerchantIdResponse
```

## Properties

- `data` — `MerchantId` (required):
- `included` — `[Certificate]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [MerchantId](merchantid.md): An Apple Pay merchant identifier registered to your account, used to associate payment capabilities with your app’s bundle ID.
- [MerchantIdsResponse](merchantidsresponse.md): A response containing a list of Apple Pay merchant identifiers registered to your account.
- [MerchantIdCreateRequest](merchantidcreaterequest.md): The request body you use to create a merchant ID.
- [MerchantIdUpdateRequest](merchantidupdaterequest.md): The request body you use to update a merchant ID.
- [MerchantIdCertificatesLinkagesResponse](merchantidcertificateslinkagesresponse.md)
