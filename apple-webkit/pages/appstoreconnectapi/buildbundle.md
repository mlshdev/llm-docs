> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbundle](https://developer.apple.com/documentation/appstoreconnectapi/buildbundle)

# BuildBundle

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A specific binary bundle within a build, such as an app extension, App Clip, or nested app target.

## Declaration

```
object BuildBundle
```

## Properties

- `attributes` — `BuildBundle.Attributes`: The attributes that describe the Build Bundles resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Build Bundles resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `BuildBundle.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `buildBundles`

## Topics

### Objects

- [BuildBundle.Attributes](buildbundle/attributes-data.dictionary.md): The attributes that describe a Build Bundles resource.
- [BuildBundle.Relationships](buildbundle/relationships-data.dictionary.md): The relationships of the Build Bundles resource you included in the request and those on which you can operate.

## See Also

### Objects

- [BuildBundleType](buildbundletype.md): A string that represents the possible components of a build bundle.
- [AppClipDomainStatus](appclipdomainstatus.md): The validation status of the associated domains configured for an App Clip, indicating whether each domain is reachable and correctly set up.
- [BuildBundleFileSize](buildbundlefilesize.md): The estimated and actual download and install sizes for a build bundle, broken down by device type.
- [AppClipDomainStatusResponse](appclipdomainstatusresponse.md): A response containing the validation status of associated domains configured for an App Clip.
- [BetaAppClipInvocationsResponse](betaappclipinvocationsresponse.md): A response containing a list of TestFlight App Clip invocations for a beta build.
- [BuildBundleFileSizesResponse](buildbundlefilesizesresponse.md): A response containing a list of download and install size estimates for a build’s bundles.
