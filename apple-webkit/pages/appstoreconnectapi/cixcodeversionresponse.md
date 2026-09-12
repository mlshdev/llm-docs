> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cixcodeversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/cixcodeversionresponse)

# CiXcodeVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single Xcode version available in Xcode Cloud.

## Declaration

```
object CiXcodeVersionResponse
```

## Properties

- `data` — `CiXcodeVersion` (required): The resource data.
- `included` — `[CiMacOsVersion]`: The requested relationship data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [CiXcodeVersion](cixcodeversion.md): An Xcode version available in Xcode Cloud for running workflow builds and tests.
- [CiXcodeVersionsResponse](cixcodeversionsresponse.md): The response body for endpoints that list Xcode versions available for Xcode Cloud.
- [CiXcodeVersionMacOsVersionsLinkagesResponse](cixcodeversionmacosversionslinkagesresponse.md)
