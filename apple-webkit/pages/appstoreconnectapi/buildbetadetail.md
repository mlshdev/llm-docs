> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbetadetail](https://developer.apple.com/documentation/appstoreconnectapi/buildbetadetail)

# BuildBetaDetail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The TestFlight distribution settings for a build, including whether it is available for external testing.

## Declaration

```
object BuildBetaDetail
```

## Properties

- `attributes` — `BuildBetaDetail.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `BuildBetaDetail.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `buildBetaDetails`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [BuildBetaDetail.Attributes](buildbetadetail/attributes-data.dictionary.md): Attributes that describe a Build Beta Details resource.
- [BuildBetaDetail.Relationships](buildbetadetail/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and Data Types

- [BuildBetaDetailUpdateRequest](buildbetadetailupdaterequest.md): The request body you use to update a Build Data Detail.
- [BuildBetaDetailResponse](buildbetadetailresponse.md): The response body for endpoints that read or modify beta testing details for a build.
- [BuildBetaDetailsResponse](buildbetadetailsresponse.md): The response body for endpoints that list beta testing details across builds.
- [ExternalBetaState](externalbetastate.md): String that represents a build’s availability for external testing.
- [InternalBetaState](internalbetastate.md): String that represents a build’s availability for internal testing.
- [BuildBuildBetaDetailLinkageResponse](buildbuildbetadetaillinkageresponse.md)
- [BuildBundleAppClipDomainCacheStatusLinkageResponse](buildbundleappclipdomaincachestatuslinkageresponse.md)
- [BuildBundleAppClipDomainDebugStatusLinkageResponse](buildbundleappclipdomaindebugstatuslinkageresponse.md)
- [BuildBundleBetaAppClipInvocationsLinkagesResponse](buildbundlebetaappclipinvocationslinkagesresponse.md)
- [BuildBundleBuildBundleFileSizesLinkagesResponse](buildbundlebuildbundlefilesizeslinkagesresponse.md)
