> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionkeycreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionkeycreaterequest)

# AlternativeDistributionKeyCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The request body you use to create an alternative distribution key.

## Declaration

```
object AlternativeDistributionKeyCreateRequest
```

## Properties

- `data` — `AlternativeDistributionKeyCreateRequest.Data` (required):

<a id="Discussion"></a>

## Discussion

Use this object to create a new alternative distribution key association in App Store Connect. For more infomation about the request that includes this request body, see [Add an Alternative Distribution Key](post-v1-alternativedistributionkeys.md).

## Topics

### Objects

- [AlternativeDistributionKeyCreateRequest.Data](alternativedistributionkeycreaterequest/data-data.dictionary.md): The request body you use to create an alternative distribution key.

## See Also

### Objects

- [AlternativeDistributionKey](alternativedistributionkey.md): A public key used to authorize an alternative marketplace or web distribution to offer your app outside the App Store.
- [AlternativeDistributionKeyResponse](alternativedistributionkeyresponse.md): The response body for endpoints that create or read a single alternative distribution key.
- [AlternativeDistributionKeysResponse](alternativedistributionkeysresponse.md): The response body for endpoints that list alternative distribution keys.
- [AppAlternativeDistributionKeyLinkageResponse](appalternativedistributionkeylinkageresponse.md)
