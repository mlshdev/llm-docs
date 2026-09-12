> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversion](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversion)

# AppStoreVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Store Versions resource.

## Declaration

```
object AppStoreVersion
```

## Properties

- `attributes` — `AppStoreVersion.Attributes`:
- `id` — `string` (required):
- `relationships` — `AppStoreVersion.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreVersions`
- `links` — `ResourceLinks`:

## Topics

### Objects

- [AppStoreVersion.Attributes](appstoreversion/attributes-data.dictionary.md): Attributes that describe an App Store Versions resource.
- [AppStoreVersion.Relationships](appstoreversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and Data Types

- [AppStoreVersionUpdateRequest](appstoreversionupdaterequest.md): The request body you use to update an App Store Version.
- [AgeRatingDeclaration](ageratingdeclaration.md): A set of content descriptors for your app that App Store Connect uses to assign an age rating.
- [AppStoreVersionResponse](appstoreversionresponse.md): The response body for endpoints that create, read, or modify an App Store version.
- [AppStoreVersionsResponse](appstoreversionsresponse.md): The response body for endpoints that list App Store versions for an app.
- [AppStoreVersionCreateRequest](appstoreversioncreaterequest.md): The request body you use to create an App Store Version.
- [AppStoreVersionBuildLinkageRequest](appstoreversionbuildlinkagerequest.md): The request body you use to attach a build to an App Store version.
- [AppStoreVersionBuildLinkageResponse](appstoreversionbuildlinkageresponse.md): A response body that contains the ID of a single related resource.
- [AppStoreVersionAppClipDefaultExperienceLinkageRequest](appstoreversionappclipdefaultexperiencelinkagerequest.md): The request body you use to attach a default App Clip experience to an App Store version.
- [AppStoreVersionAppClipDefaultExperienceLinkageResponse](appstoreversionappclipdefaultexperiencelinkageresponse.md): A response that contains the ID of a single related Default App Clip Experiences resource.
- [AppStoreVersionState](appstoreversionstate.md): Deprecated. String that represents the state of an app version in the App Store.
- [AppVersionState](appversionstate.md): String that represents the state of an app version.
- [AppStoreVersionAlternativeDistributionPackageLinkageResponse](appstoreversionalternativedistributionpackagelinkageresponse.md)
- [AppStoreVersionAppStoreReviewDetailLinkageResponse](appstoreversionappstorereviewdetaillinkageresponse.md)
- [AppStoreVersionAppStoreVersionExperimentsLinkagesResponse](appstoreversionappstoreversionexperimentslinkagesresponse.md): Deprecated.
- [AppStoreVersionAppStoreVersionExperimentsV2LinkagesResponse](appstoreversionappstoreversionexperimentsv2linkagesresponse.md)
