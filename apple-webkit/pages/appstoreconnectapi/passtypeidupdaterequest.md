> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/passtypeidupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/passtypeidupdaterequest)

# PassTypeIdUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The request body you use to update a pass type id update request.

## Declaration

```
object PassTypeIdUpdateRequest
```

## Properties

- `data` — `PassTypeIdUpdateRequest.Data` (required):

## Topics

### Dictionaries

- [PassTypeIdUpdateRequest.Data](passtypeidupdaterequest/data-data.dictionary.md): The data wrapper for a pass type ID update request.

## See Also

### Object and data types

- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
- [PassTypeId](passtypeid.md): A pass type identifier used to create and manage Wallet passes such as boarding passes, coupons, or loyalty cards.
- [PassTypeIdCertificatesLinkagesResponse](passtypeidcertificateslinkagesresponse.md): A response containing the resource identifiers of signing certificates associated with a pass type identifier.
- [PassTypeIdCreateRequest](passtypeidcreaterequest.md): The request body for registering a new pass type identifier for Wallet pass signing.
- [PassTypeIdResponse](passtypeidresponse.md): A response containing a single Wallet pass type identifier.
- [PassTypeIdsResponse](passtypeidsresponse.md): A response containing a list of Wallet pass type identifiers registered in your account.
