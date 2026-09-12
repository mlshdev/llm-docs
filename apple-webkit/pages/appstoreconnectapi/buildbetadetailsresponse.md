> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbetadetailsresponse](https://developer.apple.com/documentation/appstoreconnectapi/buildbetadetailsresponse)

# BuildBetaDetailsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that list beta testing details across builds.

## Declaration

```
object BuildBetaDetailsResponse
```

## Properties

- `data` — `[BuildBetaDetail]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[Build]`:

## See Also

### Related Documentation

- [List build beta details](get-v1-buildbetadetails.md): Find and list build beta details for all builds.

### Objects and Data Types

- [BuildBetaDetail](buildbetadetail.md): The TestFlight distribution settings for a build, including whether it is available for external testing.
- [BuildBetaDetailUpdateRequest](buildbetadetailupdaterequest.md): The request body you use to update a Build Data Detail.
- [BuildBetaDetailResponse](buildbetadetailresponse.md): The response body for endpoints that read or modify beta testing details for a build.
- [ExternalBetaState](externalbetastate.md): String that represents a build’s availability for external testing.
- [InternalBetaState](internalbetastate.md): String that represents a build’s availability for internal testing.
- [BuildBuildBetaDetailLinkageResponse](buildbuildbetadetaillinkageresponse.md)
- [BuildBundleAppClipDomainCacheStatusLinkageResponse](buildbundleappclipdomaincachestatuslinkageresponse.md)
- [BuildBundleAppClipDomainDebugStatusLinkageResponse](buildbundleappclipdomaindebugstatuslinkageresponse.md)
- [BuildBundleBetaAppClipInvocationsLinkagesResponse](buildbundlebetaappclipinvocationslinkagesresponse.md)
- [BuildBundleBuildBundleFileSizesLinkagesResponse](buildbundlebuildbundlefilesizeslinkagesresponse.md)
