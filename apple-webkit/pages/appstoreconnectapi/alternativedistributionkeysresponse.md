> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionkeysresponse](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionkeysresponse)

# AlternativeDistributionKeysResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4.2+

The response body for endpoints that list alternative distribution keys.

## Declaration

```
object AlternativeDistributionKeysResponse
```

## Properties

- `data` — `[AlternativeDistributionKey]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

<a id="Discussion"></a>

## Discussion

For more information about the response that includes this alternative distribution key object, see [AlternativeDistributionKeyResponse](alternativedistributionkeyresponse.md).

## See Also

### Objects

- [AlternativeDistributionKey](alternativedistributionkey.md): A public key used to authorize an alternative marketplace or web distribution to offer your app outside the App Store.
- [AlternativeDistributionKeyResponse](alternativedistributionkeyresponse.md): The response body for endpoints that create or read a single alternative distribution key.
- [AlternativeDistributionKeyCreateRequest](alternativedistributionkeycreaterequest.md): The request body you use to create an alternative distribution key.
- [AppAlternativeDistributionKeyLinkageResponse](appalternativedistributionkeylinkageresponse.md)
