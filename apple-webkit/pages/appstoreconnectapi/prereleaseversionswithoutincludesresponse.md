> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/prereleaseversionswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/prereleaseversionswithoutincludesresponse)

# PreReleaseVersionsWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of pre-release versions, without related resources.

## Declaration

```
object PreReleaseVersionsWithoutIncludesResponse
```

## Properties

- `data` — `[PrereleaseVersion]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [PrereleaseVersion](prereleaseversion.md): A pre-release version associated with a build, representing a development or beta software version before App Store submission.
- [PrereleaseVersionResponse](prereleaseversionresponse.md): The response body for endpoints that read a single prerelease version of an app.
- [PreReleaseVersionsResponse](prereleaseversionsresponse.md): A response containing a list of pre-release versions for an app.
- [PrereleaseVersionWithoutIncludesResponse](prereleaseversionwithoutincludesresponse.md): A response containing a single pre-release version, without related resources.
- [AppPreReleaseVersionsLinkagesResponse](appprereleaseversionslinkagesresponse.md)
- [PrereleaseVersionAppLinkageResponse](prereleaseversionapplinkageresponse.md)
- [PrereleaseVersionBuildsLinkagesResponse](prereleaseversionbuildslinkagesresponse.md)
