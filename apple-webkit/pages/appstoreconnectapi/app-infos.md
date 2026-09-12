> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/app-infos](https://developer.apple.com/documentation/appstoreconnectapi/app-infos)

# App Infos

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage or read the app metadata that applies across all versions of your app.

<a id="overview"></a>

## Overview

`appInfos` represents your app’s metadata that applies across all versions of your app. You can update your app’s App Store category, subcategory, and secondary category through the `appInfos` resource. You can also find your app’s status, which tells you if the app metadata is editable. For more information, see [App and submission statuses](https://developer.apple.com/help/app-store-connect/reference/app-and-submission-statuses).

Other attributes in `appInfos` are read-only. Their values are derived from other resources. For example, your app’s `appStoreAgeRating` value results from the answers you provide to the questions in `ageRatingDeclarations`.

For more information about the metadata in the `appInfos` resource, see [App and submission statuses](https://developer.apple.com/help/app-store-connect/reference/app-and-submission-statuses).

## Topics

### Reading App Information

- [Read app info information](get-v1-appinfos-_id_.md): Read App Store information including your App Store state, age ratings, Brazil age rating, and kids’ age band.
- [List all app infos for an app](get-v1-apps-_id_-appinfos.md): Get information about an app that is currently live on App Store, or that goes live with the next version.
- [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md): Get a list of localized, app-level information for an app.

### Modifying App Information

- [Modify an app info](patch-v1-appinfos-_id_.md): Update the App Store categories and sub-categories for your app.

### Reading Category Information

- [App Categories and Subcategories](app-categories-and-subcategories.md): Read the category and subcategory information of an App Info.

### Reading Localization Information

- [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md): Get a list of localized, app-level information for an app.
- [List app info localization IDs for an app info](get-v1-appinfos-_id_-relationships-appinfolocalizations.md)

### Reading Age Rating Information

- [Read the age-rating declaration](get-v1-appinfos-_id_-ageratingdeclaration.md): Get the age-rating declaration for an app info.
- [Get the age rating declaration ID for an app info](get-v1-appinfos-_id_-relationships-ageratingdeclaration.md)

### Objects

- [AppInfo](appinfo.md): The data structure that represent an App Infos resource.
- [AppInfoResponse](appinforesponse.md): The response body for endpoints that read or modify an app’s App Store information.
- [AppInfosResponse](appinfosresponse.md): The response body for endpoints that list an app’s App Store information entries.
- [AppInfoUpdateRequest](appinfoupdaterequest.md): The request body you use to update an App Info.
- [AppInfoAppInfoLocalizationsLinkagesResponse](appinfoappinfolocalizationslinkagesresponse.md)
- [AppInfoPrimaryCategoryLinkageResponse](appinfoprimarycategorylinkageresponse.md)
- [AppInfoPrimarySubcategoryOneLinkageResponse](appinfoprimarysubcategoryonelinkageresponse.md)
- [AppInfoPrimarySubcategoryTwoLinkageResponse](appinfoprimarysubcategorytwolinkageresponse.md)
- [AppInfoSecondaryCategoryLinkageResponse](appinfosecondarycategorylinkageresponse.md)
- [AppInfoSecondarySubcategoryOneLinkageResponse](appinfosecondarysubcategoryonelinkageresponse.md)
- [AppInfoSecondarySubcategoryTwoLinkageResponse](appinfosecondarysubcategorytwolinkageresponse.md)

## See Also

### Managing App Information and Versions

- [App Info Localizations](app-info-localizations.md): Manage the app metadata that is localized and appears on the App Store.
- [App Store Versions](app-store-versions.md): Manage versions of your app that are available in App Store.
- [App Store Version Localizations](app-store-version-localizations.md): Create and maintain version-specific App Store metadata that’s localized.
- [App tags](app-tags.md): Read or modify Apple created app tags.
- [Routing App Coverages](routing-app-coverages.md): Manage geographic coverage files for apps that use location to provide routing information.
- [Accessibility declarations](accessibility-declarations.md): Manage accessibility metadata for your apps per device family.
