> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildindividualtesterslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/buildindividualtesterslinkagesresponse)

# BuildIndividualTestersLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A response body that contains a list of related resource IDs.

## Declaration

```
object BuildIndividualTestersLinkagesResponse
```

## Properties

- `data` — `[BuildIndividualTestersLinkagesResponse.Data]` (required): The object types and IDs of the related resources.
- `links` — `PagedDocumentLinks` (required): Navigational links including the self-link and links to the related data.
- `meta` — `PagingInformation`: Paging information.

## Topics

### Objects

- [BuildIndividualTestersLinkagesResponse.Data](buildindividualtesterslinkagesresponse/data-data.dictionary.md): The data element of the response body.

## See Also

### Related Documentation

- [Get all resource ids of individual testers for a build](get-v1-builds-_id_-relationships-individualtesters.md): Get a list of resource IDs of individual testers associated with a build.

### Objects and data types

- [Build](build.md): A processed binary uploaded to App Store Connect, ready for TestFlight distribution or App Store submission.
- [BuildResponse](buildresponse.md): The response body for endpoints that read or modify a single build.
- [BuildWithoutIncludesResponse](buildwithoutincludesresponse.md): A response containing a single build, without related resources.
- [BuildsResponse](buildsresponse.md): The response body for endpoints that list builds.
- [BuildsWithoutIncludesResponse](buildswithoutincludesresponse.md): A response containing a list of builds, without related resources.
- [BuildUpdateRequest](buildupdaterequest.md): The request body you use to update a Build.
- [BuildAppEncryptionDeclarationLinkageRequest](buildappencryptiondeclarationlinkagerequest.md): The request body you use to attach an app encryption declaration to a build.
- [BuildAppEncryptionDeclarationLinkageResponse](buildappencryptiondeclarationlinkageresponse.md): A response body that contains the ID of a single related resource.
- [BuildIndividualTestersLinkagesRequest](buildindividualtesterslinkagesrequest.md): A request body you use to add or remove a build from multiple beta groups.
- [BuildBetaGroupsLinkagesRequest](buildbetagroupslinkagesrequest.md): A request body you use to add or remove beta groups from a build.
- [ImageAsset](imageasset.md): An image asset, including its height, width, and template URL.
- [BetaBuildUsagesV1MetricResponse](betabuildusagesv1metricresponse.md): A response that contains one or more beta build metric resources.
- [BuildAppLinkageResponse](buildapplinkageresponse.md)
- [BuildAppStoreVersionLinkageResponse](buildappstoreversionlinkageresponse.md)
- [BuildBetaAppReviewSubmissionLinkageResponse](buildbetaappreviewsubmissionlinkageresponse.md)
