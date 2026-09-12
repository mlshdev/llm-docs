> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/prereleaseversionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/prereleaseversionsresponse)

# PreReleaseVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A response containing a list of pre-release versions for an app.

## Declaration

```
object PreReleaseVersionsResponse
```

## Properties

- `data` — `[PrereleaseVersion]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[*]`: **Allowed types:** `App`, `Build`

## See Also

### Related Documentation

- [List prerelease versions](get-v1-prereleaseversions.md): Get a list of prerelease versions for all apps.

### Objects

- [PrereleaseVersion](prereleaseversion.md): A pre-release version associated with a build, representing a development or beta software version before App Store submission.
- [PrereleaseVersionResponse](prereleaseversionresponse.md): The response body for endpoints that read a single prerelease version of an app.
- [PrereleaseVersionWithoutIncludesResponse](prereleaseversionwithoutincludesresponse.md): A response containing a single pre-release version, without related resources.
- [PreReleaseVersionsWithoutIncludesResponse](prereleaseversionswithoutincludesresponse.md): A response containing a list of pre-release versions, without related resources.
- [AppPreReleaseVersionsLinkagesResponse](appprereleaseversionslinkagesresponse.md)
- [PrereleaseVersionAppLinkageResponse](prereleaseversionapplinkageresponse.md)
- [PrereleaseVersionBuildsLinkagesResponse](prereleaseversionbuildslinkagesresponse.md)
