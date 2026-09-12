> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/merchantid](https://developer.apple.com/documentation/appstoreconnectapi/merchantid)

# MerchantId

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.8+

An Apple Pay merchant identifier registered to your account, used to associate payment capabilities with your app’s bundle ID.

## Declaration

```
object MerchantId
```

## Properties

- `attributes` — `MerchantId.Attributes`: Attributes that describe a merchant ID resource.
- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the merchant ID resource ID from the [List merchant ids](get-v1-merchantids.md) response.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `MerchantId.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `merchantIds`

## Topics

### Dictionaries

- [MerchantId.Attributes](merchantid/attributes-data.dictionary.md): Attributes that describe a merchant ID resource.
- [MerchantId.Relationships](merchantid/relationships-data.dictionary.md): The relationship you include in the request and those on which you can operate.

## See Also

### Objects

- [MerchantIdResponse](merchantidresponse.md): A response containing a single Apple Pay merchant identifier.
- [MerchantIdsResponse](merchantidsresponse.md): A response containing a list of Apple Pay merchant identifiers registered to your account.
- [MerchantIdCreateRequest](merchantidcreaterequest.md): The request body you use to create a merchant ID.
- [MerchantIdUpdateRequest](merchantidupdaterequest.md): The request body you use to update a merchant ID.
- [MerchantIdCertificatesLinkagesResponse](merchantidcertificateslinkagesresponse.md)
