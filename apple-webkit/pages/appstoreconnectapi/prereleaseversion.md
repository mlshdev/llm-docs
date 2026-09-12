> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/prereleaseversion](https://developer.apple.com/documentation/appstoreconnectapi/prereleaseversion)

# PrereleaseVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A pre-release version associated with a build, representing a development or beta software version before App Store submission.

## Declaration

```
object PrereleaseVersion
```

## Properties

- `attributes` — `PrereleaseVersion.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `PrereleaseVersion.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `preReleaseVersions`

## Topics

### Objects

- [PrereleaseVersion.Attributes](prereleaseversion/attributes-data.dictionary.md): Attributes that describe a Prerelease Versions resource.
- [PrereleaseVersion.Relationships](prereleaseversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [PrereleaseVersionResponse](prereleaseversionresponse.md): The response body for endpoints that read a single prerelease version of an app.
- [PreReleaseVersionsResponse](prereleaseversionsresponse.md): A response containing a list of pre-release versions for an app.
- [PrereleaseVersionWithoutIncludesResponse](prereleaseversionwithoutincludesresponse.md): A response containing a single pre-release version, without related resources.
- [PreReleaseVersionsWithoutIncludesResponse](prereleaseversionswithoutincludesresponse.md): A response containing a list of pre-release versions, without related resources.
- [AppPreReleaseVersionsLinkagesResponse](appprereleaseversionslinkagesresponse.md)
- [PrereleaseVersionAppLinkageResponse](prereleaseversionapplinkageresponse.md)
- [PrereleaseVersionBuildsLinkagesResponse](prereleaseversionbuildslinkagesresponse.md)
