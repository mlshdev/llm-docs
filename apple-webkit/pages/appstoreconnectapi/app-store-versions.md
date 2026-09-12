> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/app-store-versions](https://developer.apple.com/documentation/appstoreconnectapi/app-store-versions)

# App Store Versions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage versions of your app that are available in App Store.

<a id="overview"></a>

## Overview

The `appStoreVersions` resource represents the information related to an App Store version of your app. Using this resource, you can:

- Create, modify, or delete a version for your app.
- Read key details for your version, including its App Store state.
- Specify whether to release the version manually or automatically.
- Modify attributes such as your app’s copyright information.

For more information about versions, see [Create a new version](https://developer.apple.com/help/app-store-connect/update-your-app/create-a-new-version).

## Topics

### Getting App Store Versions

- [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md): Get a list of all App Store versions of an app across all platforms.
- [Read app store version information](get-v1-appstoreversions-_id_.md): Get information for a specific App Store version.

### Getting App Store Version Experiments

- [List all experiments for an app store version](get-v1-appstoreversions-_id_-appstoreversionexperimentsv2.md): Get a list of all experiments for an App Store version of an app across all platforms.
- [List all experiment ids for an app store version](get-v1-appstoreversions-_id_-relationships-appstoreversionexperimentsv2.md): Get a list of all experiments IDs for an App Store version across all platforms.
- [List all experiments for an app store version v1](get-v1-appstoreversions-_id_-appstoreversionexperiments.md): Deprecated. Get a list of all experiments for an App Store version of an app across all platforms.
- [List all experiments ids for an app store version v1](get-v1-appstoreversions-_id_-relationships-appstoreversionexperiments.md): Deprecated. Get a list of all experiments IDs for an App Store version of an app across all platforms.

### Creating and Modifying App Store Versions

- [Create an app store version](post-v1-appstoreversions.md): Add a new App Store version or platform to an app.
- [Modify an app store version](patch-v1-appstoreversions-_id_.md): Update the App Store version for a specific app.
- [Delete an app store version](delete-v1-appstoreversions-_id_.md): Delete an app store version that is associated with an app.

### Attaching a Build to a Version

- [Read the build information of an app store version](get-v1-appstoreversions-_id_-build.md): Get the build that is attached to a specific App Store version.
- [Get the build id for an app store version](get-v1-appstoreversions-_id_-relationships-build.md): Get the ID of the build that is attached to a specific App Store version.
- [Modify the build for an app store version](patch-v1-appstoreversions-_id_-relationships-build.md): Change the build that is attached to a specific App Store version.

### Attaching a Default App Clip Experience to a Version

- [Get the default app clip experience for an app store version](get-v1-appstoreversions-_id_-appclipdefaultexperience.md): Get the default App Clip experience for an App Store version of your app.
- [Get the default app clip experiences resource id for an app store version](get-v1-appstoreversions-_id_-relationships-appclipdefaultexperience.md): Get the ID of an app’s related default App Clip experience.
- [Modify the default app clip experience of an app store version](patch-v1-appstoreversions-_id_-relationships-appclipdefaultexperience.md): Update the relationship between an App Store version and a default App Clip experience.

### Reading Localization Information

- [List all app store version localizations for an app store version](get-v1-appstoreversions-_id_-appstoreversionlocalizations.md): Get a list of localized, version-level information about an app, for all locales.
- [List App Store version localization IDs for an App Store version](get-v1-appstoreversions-_id_-relationships-appstoreversionlocalizations.md)

### Reading Release and Review Information

- [Read the app store version submission information of an app store version](get-v1-appstoreversions-_id_-appstoreversionsubmission.md): Deprecated. Get the App Review submission for a specific App Store version.
- [Get the App Store version submission ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstoreversionsubmission.md): Deprecated.
- [Read the app store review details resource information of an app store version](get-v1-appstoreversions-_id_-appstorereviewdetail.md): Get the details you provide to App Review so they can test your app.
- [Get the App Store review detail ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstorereviewdetail.md)
- [Read the app store version phased release information of an app store version](get-v1-appstoreversions-_id_-appstoreversionphasedrelease.md): Read the phased release status and configuration for a version with phased release enabled.
- [Get the phased release ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstoreversionphasedrelease.md)

### Reading Declarations

- [Read the routing app coverage information of an app store version](get-v1-appstoreversions-_id_-routingappcoverage.md): Get the routing app coverage file that is associated with a specific App Store version
- [Get the routing app coverage ID for an App Store version](get-v1-appstoreversions-_id_-relationships-routingappcoverage.md)

### Getting Customer Reviews

- [List all customer reviews for an app store version](get-v1-appstoreversions-_id_-customerreviews.md): Get a list of customer reviews for a specific version of your app.
- [List customer review IDs for an App Store version](get-v1-appstoreversions-_id_-relationships-customerreviews.md)

### Getting Game Center app versions

- [Read game center app version information of an app store version](get-v1-appstoreversions-_id_-gamecenterappversion.md): Get the status of Game Center enablement for an App Store version.
- [Get the Game Center app version ID for an App Store version](get-v1-appstoreversions-_id_-relationships-gamecenterappversion.md)

### Reading Distribution Package Information

- [Read an app store version’s alternative distribution package](get-v1-appstoreversions-_id_-alternativedistributionpackage.md): Read the alternative distribution package for a specific App Store version.
- [Get the alternative distribution package ID for an App Store version](get-v1-appstoreversions-_id_-relationships-alternativedistributionpackage.md)

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
- [AppStoreVersionState](appstoreversionstate.md): Deprecated. String that represents the state of an app version in the App Store.
- [AppVersionState](appversionstate.md): String that represents the state of an app version.
- [AppStoreVersionAlternativeDistributionPackageLinkageResponse](appstoreversionalternativedistributionpackagelinkageresponse.md)
- [AppStoreVersionAppStoreReviewDetailLinkageResponse](appstoreversionappstorereviewdetaillinkageresponse.md)
- [AppStoreVersionAppStoreVersionExperimentsLinkagesResponse](appstoreversionappstoreversionexperimentslinkagesresponse.md): Deprecated.
- [AppStoreVersionAppStoreVersionExperimentsV2LinkagesResponse](appstoreversionappstoreversionexperimentsv2linkagesresponse.md)
- [AppStoreVersionAppStoreVersionLocalizationsLinkagesResponse](appstoreversionappstoreversionlocalizationslinkagesresponse.md)
- [AppStoreVersionAppStoreVersionPhasedReleaseLinkageResponse](appstoreversionappstoreversionphasedreleaselinkageresponse.md)
- [AppStoreVersionAppStoreVersionSubmissionLinkageResponse](appstoreversionappstoreversionsubmissionlinkageresponse.md): Deprecated.
- [AppStoreVersionCustomerReviewsLinkagesResponse](appstoreversioncustomerreviewslinkagesresponse.md)
- [AppStoreVersionGameCenterAppVersionLinkageResponse](appstoreversiongamecenterappversionlinkageresponse.md)
- [AppStoreVersionLocalizationAppPreviewSetsLinkagesResponse](appstoreversionlocalizationapppreviewsetslinkagesresponse.md)
- [AppStoreVersionLocalizationAppScreenshotSetsLinkagesResponse](appstoreversionlocalizationappscreenshotsetslinkagesresponse.md)
- [AppStoreVersionRoutingAppCoverageLinkageResponse](appstoreversionroutingappcoveragelinkageresponse.md)

## See Also

### Managing App Information and Versions

- [App Infos](app-infos.md): Manage or read the app metadata that applies across all versions of your app.
- [App Info Localizations](app-info-localizations.md): Manage the app metadata that is localized and appears on the App Store.
- [App Store Version Localizations](app-store-version-localizations.md): Create and maintain version-specific App Store metadata that’s localized.
- [App tags](app-tags.md): Read or modify Apple created app tags.
- [Routing App Coverages](routing-app-coverages.md): Manage geographic coverage files for apps that use location to provide routing information.
- [Accessibility declarations](accessibility-declarations.md): Manage accessibility metadata for your apps per device family.
