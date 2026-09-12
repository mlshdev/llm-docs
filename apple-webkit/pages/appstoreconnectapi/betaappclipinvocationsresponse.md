> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationsresponse)

# BetaAppClipInvocationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing a list of TestFlight App Clip invocations for a beta build.

## Declaration

```
object BetaAppClipInvocationsResponse
```

## Properties

- `data` — `[BetaAppClipInvocation]` (required): The resource data.
- `included` — `[BetaAppClipInvocationLocalization]`: The requested relationship data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [BuildBundle](buildbundle.md): A specific binary bundle within a build, such as an app extension, App Clip, or nested app target.
- [BuildBundleType](buildbundletype.md): A string that represents the possible components of a build bundle.
- [AppClipDomainStatus](appclipdomainstatus.md): The validation status of the associated domains configured for an App Clip, indicating whether each domain is reachable and correctly set up.
- [BuildBundleFileSize](buildbundlefilesize.md): The estimated and actual download and install sizes for a build bundle, broken down by device type.
- [AppClipDomainStatusResponse](appclipdomainstatusresponse.md): A response containing the validation status of associated domains configured for an App Clip.
- [BuildBundleFileSizesResponse](buildbundlefilesizesresponse.md): A response containing a list of download and install size estimates for a build’s bundles.
