> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbundletype](https://developer.apple.com/documentation/appstoreconnectapi/buildbundletype)

# BuildBundleType

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 2.0+

A string that represents the possible components of a build bundle.

## Declaration

```
string BuildBundleType
```

## Possible Values

- `APP`:
- `APP_CLIP`:
- `WATCH_APP`:

## See Also

### Objects

- [BuildBundle](buildbundle.md): A specific binary bundle within a build, such as an app extension, App Clip, or nested app target.
- [AppClipDomainStatus](appclipdomainstatus.md): The validation status of the associated domains configured for an App Clip, indicating whether each domain is reachable and correctly set up.
- [BuildBundleFileSize](buildbundlefilesize.md): The estimated and actual download and install sizes for a build bundle, broken down by device type.
- [AppClipDomainStatusResponse](appclipdomainstatusresponse.md): A response containing the validation status of associated domains configured for an App Clip.
- [BetaAppClipInvocationsResponse](betaappclipinvocationsresponse.md): A response containing a list of TestFlight App Clip invocations for a beta build.
- [BuildBundleFileSizesResponse](buildbundlefilesizesresponse.md): A response containing a list of download and install size estimates for a build’s bundles.
