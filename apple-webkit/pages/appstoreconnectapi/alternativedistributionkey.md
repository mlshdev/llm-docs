> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionkey](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionkey)

# AlternativeDistributionKey

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

A public key used to authorize an alternative marketplace or web distribution to offer your app outside the App Store.

## Declaration

```
object AlternativeDistributionKey
```

## Properties

- `attributes` — `AlternativeDistributionKey.Attributes`:
- `id` — `string` (required): An opaque resource ID that uniquely identifies the alternative distribution key.
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `alternativeDistributionKeys`

<a id="Discussion"></a>

## Discussion

For more information about the response that includes this alternative distribution key object, see [AlternativeDistributionKeyResponse](alternativedistributionkeyresponse.md).

## Topics

### Objects

- [AlternativeDistributionKey.Attributes](alternativedistributionkey/attributes-data.dictionary.md): Attributes that describe an alternative distribution key resource.

## See Also

### Objects

- [AlternativeDistributionKeyResponse](alternativedistributionkeyresponse.md): The response body for endpoints that create or read a single alternative distribution key.
- [AlternativeDistributionKeysResponse](alternativedistributionkeysresponse.md): The response body for endpoints that list alternative distribution keys.
- [AlternativeDistributionKeyCreateRequest](alternativedistributionkeycreaterequest.md): The request body you use to create an alternative distribution key.
- [AppAlternativeDistributionKeyLinkageResponse](appalternativedistributionkeylinkageresponse.md)
