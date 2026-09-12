> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/build](https://developer.apple.com/documentation/appstoreconnectapi/build)

# Build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A processed binary uploaded to App Store Connect, ready for TestFlight distribution or App Store submission.

## Declaration

```
object Build
```

## Properties

- `attributes` — `Build.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `Build.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `builds`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Attributes and Relationships

- [Build.Attributes](build/attributes-data.dictionary.md): Attributes that describe a Builds resource.
- [Build.Relationships](build/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and data types

- [BuildResponse](buildresponse.md): The response body for endpoints that read or modify a single build.
- [BuildWithoutIncludesResponse](buildwithoutincludesresponse.md): A response containing a single build, without related resources.
- [BuildsResponse](buildsresponse.md): The response body for endpoints that list builds.
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
