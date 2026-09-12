> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/externalbetastate](https://developer.apple.com/documentation/appstoreconnectapi/externalbetastate)

# ExternalBetaState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.0+

String that represents a build’s availability for external testing.

## Declaration

```
string ExternalBetaState
```

## Possible Values

- `PROCESSING`:
- `PROCESSING_EXCEPTION`:
- `MISSING_EXPORT_COMPLIANCE`:
- `READY_FOR_BETA_TESTING`:
- `IN_BETA_TESTING`:
- `EXPIRED`:
- `READY_FOR_BETA_SUBMISSION`:
- `IN_EXPORT_COMPLIANCE_REVIEW`:
- `WAITING_FOR_BETA_REVIEW`:
- `IN_BETA_REVIEW`:
- `BETA_REJECTED`:
- `BETA_APPROVED`:
- `NOT_APPLICABLE`:

## See Also

### Objects and Data Types

- [BuildBetaDetail](buildbetadetail.md): The TestFlight distribution settings for a build, including whether it is available for external testing.
- [BuildBetaDetailUpdateRequest](buildbetadetailupdaterequest.md): The request body you use to update a Build Data Detail.
- [BuildBetaDetailResponse](buildbetadetailresponse.md): The response body for endpoints that read or modify beta testing details for a build.
- [BuildBetaDetailsResponse](buildbetadetailsresponse.md): The response body for endpoints that list beta testing details across builds.
- [InternalBetaState](internalbetastate.md): String that represents a build’s availability for internal testing.
- [BuildBuildBetaDetailLinkageResponse](buildbuildbetadetaillinkageresponse.md)
- [BuildBundleAppClipDomainCacheStatusLinkageResponse](buildbundleappclipdomaincachestatuslinkageresponse.md)
- [BuildBundleAppClipDomainDebugStatusLinkageResponse](buildbundleappclipdomaindebugstatuslinkageresponse.md)
- [BuildBundleBetaAppClipInvocationsLinkagesResponse](buildbundlebetaappclipinvocationslinkagesresponse.md)
- [BuildBundleBuildBundleFileSizesLinkagesResponse](buildbundlebuildbundlefilesizeslinkagesresponse.md)
