> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cimacosversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/cimacosversionresponse)

# CiMacOsVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A response containing a single macOS version available in Xcode Cloud.

## Declaration

```
object CiMacOsVersionResponse
```

## Properties

- `data` — `CiMacOsVersion` (required): The resource data.
- `included` — `[CiXcodeVersion]`: The requested relationship data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [CiMacOsVersion](cimacosversion.md): A macOS version available in Xcode Cloud infrastructure for running workflow builds.
- [CiMacOsVersionsResponse](cimacosversionsresponse.md): A response containing a list of macOS versions supported by Xcode Cloud.
- [CiMacOsVersionXcodeVersionsLinkagesResponse](cimacosversionxcodeversionslinkagesresponse.md)
