> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/internalbetastate](https://developer.apple.com/documentation/appstoreconnectapi/internalbetastate)

# InternalBetaState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.0+

String that represents a build’s availability for internal testing.

## Declaration

```
string InternalBetaState
```

## Possible Values

- `PROCESSING`:
- `PROCESSING_EXCEPTION`:
- `MISSING_EXPORT_COMPLIANCE`:
- `READY_FOR_BETA_TESTING`:
- `IN_BETA_TESTING`:
- `EXPIRED`:
- `IN_EXPORT_COMPLIANCE_REVIEW`:

<a id="discussion"></a>

## Discussion

-`PROCESSING`: -`PROCESSING_EXCEPTION`: -`MISSING_EXPORT_COMPLIANCE`: -`READY_FOR_BETA_TESTING`: -`IN_BETA_TESTING`: -`EXPIRED`: -`IN_EXPORT_COMPLIANCE_REVIEW`:

## See Also

### Objects and Data Types

- [BuildBetaDetail](buildbetadetail.md): The TestFlight distribution settings for a build, including whether it is available for external testing.
- [BuildBetaDetailUpdateRequest](buildbetadetailupdaterequest.md): The request body you use to update a Build Data Detail.
- [BuildBetaDetailResponse](buildbetadetailresponse.md): The response body for endpoints that read or modify beta testing details for a build.
- [BuildBetaDetailsResponse](buildbetadetailsresponse.md): The response body for endpoints that list beta testing details across builds.
- [ExternalBetaState](externalbetastate.md): String that represents a build’s availability for external testing.
- [BuildBuildBetaDetailLinkageResponse](buildbuildbetadetaillinkageresponse.md)
- [BuildBundleAppClipDomainCacheStatusLinkageResponse](buildbundleappclipdomaincachestatuslinkageresponse.md)
- [BuildBundleAppClipDomainDebugStatusLinkageResponse](buildbundleappclipdomaindebugstatuslinkageresponse.md)
- [BuildBundleBetaAppClipInvocationsLinkagesResponse](buildbundlebetaappclipinvocationslinkagesresponse.md)
- [BuildBundleBuildBundleFileSizesLinkagesResponse](buildbundlebuildbundlefilesizeslinkagesresponse.md)
