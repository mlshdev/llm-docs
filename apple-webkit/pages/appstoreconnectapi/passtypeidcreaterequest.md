> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/passtypeidcreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/passtypeidcreaterequest)

# PassTypeIdCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The request body for registering a new pass type identifier for Wallet pass signing.

## Declaration

```
object PassTypeIdCreateRequest
```

## Properties

- `data` — `PassTypeIdCreateRequest.Data` (required):

## Topics

### Dictionaries

- [PassTypeIdCreateRequest.Data](passtypeidcreaterequest/data-data.dictionary.md): The data wrapper for a pass type ID create request, containing the resource type and identifier attributes.

## See Also

### Object and data types

- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
- [PassTypeId](passtypeid.md): A pass type identifier used to create and manage Wallet passes such as boarding passes, coupons, or loyalty cards.
- [PassTypeIdCertificatesLinkagesResponse](passtypeidcertificateslinkagesresponse.md): A response containing the resource identifiers of signing certificates associated with a pass type identifier.
- [PassTypeIdResponse](passtypeidresponse.md): A response containing a single Wallet pass type identifier.
- [PassTypeIdUpdateRequest](passtypeidupdaterequest.md): The request body you use to update a pass type id update request.
- [PassTypeIdsResponse](passtypeidsresponse.md): A response containing a list of Wallet pass type identifiers registered in your account.
