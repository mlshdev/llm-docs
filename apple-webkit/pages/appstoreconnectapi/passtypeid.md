> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/passtypeid](https://developer.apple.com/documentation/appstoreconnectapi/passtypeid)

# PassTypeId

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A pass type identifier used to create and manage Wallet passes such as boarding passes, coupons, or loyalty cards.

## Declaration

```
object PassTypeId
```

## Properties

- `attributes` — `PassTypeId.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `PassTypeId.Relationships`:
- `type` — `string` (required): **Allowed values:** `passTypeIds`

## Topics

### Dictionaries

- [PassTypeId.Attributes](passtypeid/attributes-data.dictionary.md): The configurable attributes of a pass type identifier, including its identifier string and description.
- [PassTypeId.Relationships](passtypeid/relationships-data.dictionary.md): The relationships for a pass type identifier, linking it to its associated signing certificates.

## See Also

### Object and data types

- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
- [PassTypeIdCertificatesLinkagesResponse](passtypeidcertificateslinkagesresponse.md): A response containing the resource identifiers of signing certificates associated with a pass type identifier.
- [PassTypeIdCreateRequest](passtypeidcreaterequest.md): The request body for registering a new pass type identifier for Wallet pass signing.
- [PassTypeIdResponse](passtypeidresponse.md): A response containing a single Wallet pass type identifier.
- [PassTypeIdUpdateRequest](passtypeidupdaterequest.md): The request body you use to update a pass type id update request.
- [PassTypeIdsResponse](passtypeidsresponse.md): A response containing a list of Wallet pass type identifiers registered in your account.
