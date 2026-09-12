> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionkeyresponse](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionkeyresponse)

# AlternativeDistributionKeyResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The response body for endpoints that create or read a single alternative distribution key.

## Declaration

```
object AlternativeDistributionKeyResponse
```

## Properties

- `data` — `AlternativeDistributionKey` (required):
- `links` — `DocumentLinks` (required):

<a id="Discussion"></a>

## Discussion

This object is the response from the alternative distribution key endpoints. For more information about alternative distribution keys, see Creating and reading keys.

```javascript
{
  "data": {
     "type": "alternativeDistributionKeys",
     "id": "string",
     "attributes": {
       "publicKey": "string"
     },
     "links": {
       "self": "string"
     }
  },
  "links": {
    "self": "string"
  }
}
```

## See Also

### Objects

- [AlternativeDistributionKey](alternativedistributionkey.md): A public key used to authorize an alternative marketplace or web distribution to offer your app outside the App Store.
- [AlternativeDistributionKeysResponse](alternativedistributionkeysresponse.md): The response body for endpoints that list alternative distribution keys.
- [AlternativeDistributionKeyCreateRequest](alternativedistributionkeycreaterequest.md): The request body you use to create an alternative distribution key.
- [AppAlternativeDistributionKeyLinkageResponse](appalternativedistributionkeylinkageresponse.md)
