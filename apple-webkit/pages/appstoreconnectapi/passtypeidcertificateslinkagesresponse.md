> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/passtypeidcertificateslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/passtypeidcertificateslinkagesresponse)

# PassTypeIdCertificatesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing the resource identifiers of signing certificates associated with a pass type identifier.

## Declaration

```
object PassTypeIdCertificatesLinkagesResponse
```

## Properties

- `data` — `[PassTypeIdCertificatesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [PassTypeIdCertificatesLinkagesResponse.Data](passtypeidcertificateslinkagesresponse/data-data.dictionary.md): The resource linkage data identifying a certificate linked to a pass type identifier.

## See Also

### Object and data types

- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
- [PassTypeId](passtypeid.md): A pass type identifier used to create and manage Wallet passes such as boarding passes, coupons, or loyalty cards.
- [PassTypeIdCreateRequest](passtypeidcreaterequest.md): The request body for registering a new pass type identifier for Wallet pass signing.
- [PassTypeIdResponse](passtypeidresponse.md): A response containing a single Wallet pass type identifier.
- [PassTypeIdUpdateRequest](passtypeidupdaterequest.md): The request body you use to update a pass type id update request.
- [PassTypeIdsResponse](passtypeidsresponse.md): A response containing a list of Wallet pass type identifiers registered in your account.
