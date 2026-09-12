> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/prereleaseversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/prereleaseversionresponse)

# PrereleaseVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that read a single prerelease version of an app.

## Declaration

```
object PrereleaseVersionResponse
```

## Properties

- `data` — `PrereleaseVersion` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[*]`: **Allowed types:** `App`, `Build`

## See Also

### Related Documentation

- [Read the prerelease version of a build](get-v1-builds-_id_-prereleaseversion.md): Get the prerelease version for a specific build.

### Objects

- [PrereleaseVersion](prereleaseversion.md): A pre-release version associated with a build, representing a development or beta software version before App Store submission.
- [PreReleaseVersionsResponse](prereleaseversionsresponse.md): A response containing a list of pre-release versions for an app.
- [PrereleaseVersionWithoutIncludesResponse](prereleaseversionwithoutincludesresponse.md): A response containing a single pre-release version, without related resources.
- [PreReleaseVersionsWithoutIncludesResponse](prereleaseversionswithoutincludesresponse.md): A response containing a list of pre-release versions, without related resources.
- [AppPreReleaseVersionsLinkagesResponse](appprereleaseversionslinkagesresponse.md)
- [PrereleaseVersionAppLinkageResponse](prereleaseversionapplinkageresponse.md)
- [PrereleaseVersionBuildsLinkagesResponse](prereleaseversionbuildslinkagesresponse.md)
