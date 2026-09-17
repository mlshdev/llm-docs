> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/cixcodeversionsresponse

# CiXcodeVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that list Xcode versions available for Xcode Cloud.

## Declaration

```
object CiXcodeVersionsResponse
```

## Properties

- `data` — `[CiXcodeVersion]` (required): The resource data.
- `included` — `[CiMacOsVersion]`: The requested relationship data.
- `links` — `PagedDocumentLinks` (required): The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [CiXcodeVersion](cixcodeversion.md): An Xcode version available in Xcode Cloud for running workflow builds and tests.
- [CiXcodeVersionResponse](cixcodeversionresponse.md): The response body for endpoints that read a single Xcode version available in Xcode Cloud.
- [CiXcodeVersionMacOsVersionsLinkagesResponse](cixcodeversionmacosversionslinkagesresponse.md)
