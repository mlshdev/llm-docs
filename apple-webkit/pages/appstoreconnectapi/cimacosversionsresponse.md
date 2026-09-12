> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cimacosversionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/cimacosversionsresponse)

# CiMacOsVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A response containing a list of macOS versions supported by Xcode Cloud.

## Declaration

```
object CiMacOsVersionsResponse
```

## Properties

- `data` — `[CiMacOsVersion]` (required): The resource data.
- `included` — `[CiXcodeVersion]`: The requested relationship data.
- `links` — `PagedDocumentLinks` (required): The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [CiMacOsVersion](cimacosversion.md): A macOS version available in Xcode Cloud infrastructure for running workflow builds.
- [CiMacOsVersionResponse](cimacosversionresponse.md): A response containing a single macOS version available in Xcode Cloud.
- [CiMacOsVersionXcodeVersionsLinkagesResponse](cimacosversionxcodeversionslinkagesresponse.md)
