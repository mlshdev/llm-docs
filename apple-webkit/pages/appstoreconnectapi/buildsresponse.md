> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildsresponse](https://developer.apple.com/documentation/appstoreconnectapi/buildsresponse)

# BuildsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that list builds.

## Declaration

```
object BuildsResponse
```

## Properties

- `data` — `[Build]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[*]`: **Allowed types:** `AppEncryptionDeclaration`, `AppStoreVersion`, `App`, `BetaAppReviewSubmission`, `BetaBuildLocalization`, `BetaGroup`, `BetaTester`, `BuildBetaDetail`, `BuildBundle`, `BuildIcon`, `BuildUpload`, `PrereleaseVersion`

## See Also

### Related Documentation

- [List all builds for a beta group](get-v1-betagroups-_id_-builds.md): Get a list of builds associated with a specific beta group.

### Objects and data types

- [Build](build.md): A processed binary uploaded to App Store Connect, ready for TestFlight distribution or App Store submission.
- [BuildResponse](buildresponse.md): The response body for endpoints that read or modify a single build.
- [BuildWithoutIncludesResponse](buildwithoutincludesresponse.md): A response containing a single build, without related resources.
- [BuildsWithoutIncludesResponse](buildswithoutincludesresponse.md): A response containing a list of builds, without related resources.
- [BuildUpdateRequest](buildupdaterequest.md): The request body you use to update a Build.
- [BuildAppEncryptionDeclarationLinkageRequest](buildappencryptiondeclarationlinkagerequest.md): The request body you use to attach an app encryption declaration to a build.
- [BuildAppEncryptionDeclarationLinkageResponse](buildappencryptiondeclarationlinkageresponse.md): A response body that contains the ID of a single related resource.
- [BuildIndividualTestersLinkagesRequest](buildindividualtesterslinkagesrequest.md): A request body you use to add or remove a build from multiple beta groups.
- [BuildIndividualTestersLinkagesResponse](buildindividualtesterslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [BuildBetaGroupsLinkagesRequest](buildbetagroupslinkagesrequest.md): A request body you use to add or remove beta groups from a build.
- [ImageAsset](imageasset.md): An image asset, including its height, width, and template URL.
- [BetaBuildUsagesV1MetricResponse](betabuildusagesv1metricresponse.md): A response that contains one or more beta build metric resources.
- [BuildAppLinkageResponse](buildapplinkageresponse.md)
- [BuildAppStoreVersionLinkageResponse](buildappstoreversionlinkageresponse.md)
- [BuildBetaAppReviewSubmissionLinkageResponse](buildbetaappreviewsubmissionlinkageresponse.md)
