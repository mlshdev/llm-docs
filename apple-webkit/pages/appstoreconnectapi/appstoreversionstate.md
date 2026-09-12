> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionstate](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionstate)

# AppStoreVersionState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.7)

String that represents the state of an app version in the App Store.

> Use \`AppVersionState\`\` instead.

## Declaration

```
string AppStoreVersionState
```

## Possible Values

- `ACCEPTED`:
- `DEVELOPER_REMOVED_FROM_SALE`:
- `DEVELOPER_REJECTED`:
- `IN_REVIEW`:
- `INVALID_BINARY`:
- `METADATA_REJECTED`:
- `PENDING_APPLE_RELEASE`:
- `PENDING_CONTRACT`:
- `PENDING_DEVELOPER_RELEASE`:
- `PREPARE_FOR_SUBMISSION`:
- `PREORDER_READY_FOR_SALE`:
- `PROCESSING_FOR_APP_STORE`:
- `READY_FOR_REVIEW`:
- `READY_FOR_SALE`:
- `REJECTED`:
- `REMOVED_FROM_SALE`:
- `WAITING_FOR_EXPORT_COMPLIANCE`:
- `WAITING_FOR_REVIEW`:
- `REPLACED_WITH_NEW_VERSION`:
- `NOT_APPLICABLE`:

## See Also

### Objects and Data Types

- [AppStoreVersionUpdateRequest](appstoreversionupdaterequest.md): The request body you use to update an App Store Version.
- [AgeRatingDeclaration](ageratingdeclaration.md): A set of content descriptors for your app that App Store Connect uses to assign an age rating.
- [AppStoreVersion](appstoreversion.md): The data structure that represent an App Store Versions resource.
- [AppStoreVersionResponse](appstoreversionresponse.md): The response body for endpoints that create, read, or modify an App Store version.
- [AppStoreVersionsResponse](appstoreversionsresponse.md): The response body for endpoints that list App Store versions for an app.
- [AppStoreVersionCreateRequest](appstoreversioncreaterequest.md): The request body you use to create an App Store Version.
- [AppStoreVersionBuildLinkageRequest](appstoreversionbuildlinkagerequest.md): The request body you use to attach a build to an App Store version.
- [AppStoreVersionBuildLinkageResponse](appstoreversionbuildlinkageresponse.md): A response body that contains the ID of a single related resource.
- [AppStoreVersionAppClipDefaultExperienceLinkageRequest](appstoreversionappclipdefaultexperiencelinkagerequest.md): The request body you use to attach a default App Clip experience to an App Store version.
- [AppStoreVersionAppClipDefaultExperienceLinkageResponse](appstoreversionappclipdefaultexperiencelinkageresponse.md): A response that contains the ID of a single related Default App Clip Experiences resource.
- [AppVersionState](appversionstate.md): String that represents the state of an app version.
- [AppStoreVersionAlternativeDistributionPackageLinkageResponse](appstoreversionalternativedistributionpackagelinkageresponse.md)
- [AppStoreVersionAppStoreReviewDetailLinkageResponse](appstoreversionappstorereviewdetaillinkageresponse.md)
- [AppStoreVersionAppStoreVersionExperimentsLinkagesResponse](appstoreversionappstoreversionexperimentslinkagesresponse.md): Deprecated.
- [AppStoreVersionAppStoreVersionExperimentsV2LinkagesResponse](appstoreversionappstoreversionexperimentsv2linkagesresponse.md)
