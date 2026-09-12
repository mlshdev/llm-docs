> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification](https://developer.apple.com/documentation/exposurenotification)

# Exposure Notification (Swift)

**Framework:** Exposure Notification  
**Kind:** Framework  
**Availability:** iOS 13.5+ · iPadOS 13.5+ · Mac Catalyst 13.5+

Implement a COVID-19 exposure notification system that protects user privacy.

## Mentioned In

- [Setting Up a Key Server](exposurenotification/setting-up-a-key-server.md)

<a id="overview"></a>

## Overview

Use the Exposure Notification framework to inform people of potential exposure to COVID-19, the disease caused by the SARS-CoV-2 virus. You can build a notification system that employs random, rotating keys and identifiers to convey positive diagnoses in addition to data such as associated symptoms, proximity, and duration.

<a id="Establish-User-Roles"></a>

### Establish User Roles

The ExposureNotification framework defines two user roles:

- **Affected user**: When a user has a confirmed or probable diagnosis of COVID-19 (as defined by the Health Authority), the framework identifies them as *affected* and shares their diagnosis keys to alert other users to potential exposure.
- **Potentially exposed user**: To assign a user the *potentially exposed* role, use the framework to determine whether a set of temporary exposure keys indicate proximity to an affected user. If so, the app can retrieve additional information such as date and duration from the framework.

> **Important**

>  Before you can develop an app that uses ExposureNotification, you need the [com.apple.developer.exposure-notification](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.exposure-notification) entitlement. For more information on this entitlement, see [Exposure Notification APIs Addendum](https://developer.apple.com/contact/request/download/Exposure_Notification_Addendum.pdf). To get permission to use this entitlement, see [Exposure Notification Entitlement Request](https://developer.apple.com/contact/request/exposure-notification-entitlement).

<a id="Identify-Your-Apps-Region"></a>

### Identify Your App’s Region

All EN apps must specify the region for which they work by adding a key called [ENDeveloperRegion](https://developer.apple.com/documentation/bundleresources/information-property-list/endeveloperregion) to the app’s `Info.plist` file. The value for `ENDeveloperRegion` is set to a string that represents the app’s region. This value can be an ISO 3166-1 country code (for example, “CA” for Canada), or the ISO 3166-1/3166-2 country code plus subdivision code (“US-CA” for California).

Explicitly set the associated domain link to your region code. Avoid using wildcards because they can impact system operations. See [Associated Domains Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.associated-domains) for more information.

<a id="Specify-Exposure-Notification-API-Version"></a>

### Specify Exposure Notification API Version

iOS 13.7 introduces a new method of calculating the user’s Exposure Risk Value, described in [ENExposureConfiguration](exposurenotification/enexposureconfiguration.md). Apps can implement this new method, or continue to use the calculation method introduced in earlier versions of iOS. To choose your app’s approach, add an entry to your app’s `Info.plist` file with a key of [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion). To use the new approach, specify a value of `2`. To use the original approach, specify a value of `1`.

<a id="Support-Exposure-Notification-Express"></a>

### Support Exposure Notification Express

Starting with iOS 13.7, Health Authorities can inform users of potential exposure to COVID-19 without a dedicated Exposure Notification app. This feature is called Exposure Notification Express and must be enabled by a Health Authority. For more information, see [Supporting Exposure Notifications Express](exposurenotification/supporting-exposure-notifications-express.md).

## Topics

### Essentials

- [Supporting Exposure Notifications Express](exposurenotification/supporting-exposure-notifications-express.md): Configure servers to notify users of potential exposures to COVID-19 without an app.
- [Building an App to Notify Users of COVID-19 Exposure](exposurenotification/building-an-app-to-notify-users-of-covid-19-exposure.md): Inform people when they may have been exposed to COVID-19.
- [Setting Up a Key Server](exposurenotification/setting-up-a-key-server.md): Ensure that your server meets the requirements for supporting Exposure Notifications.
- [ENManager](exposurenotification/enmanager.md): Deprecated. A class that manages exposure notifications.
- [ENDeveloperRegion](https://developer.apple.com/documentation/bundleresources/information-property-list/endeveloperregion): A string that specifies the region that the app supports.
- [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion): A number that specifies the version of the API to use.
- [Changing Configuration Values Using the Server‑to‑Server API](exposurenotification/changing-configuration-values-using-the-server-to-server-api.md): Update Exposure Notifications configuration values from a Public Health Authority’s server.
- [Testing Exposure Notifications Apps in iOS 13.7 and Later](exposurenotification/testing-exposure-notifications-apps-in-ios-13-7-and-later.md): Perform end-to-end validation of Exposure Notifications apps on a device by manually loading configuration files.
- [Supporting Exposure Notifications in iOS 12.5](exposurenotification/supporting-exposure-notifications-in-ios-12-5.md): Prepare your Exposure Notifications app to run on a previous version of iOS.

### Exposures

- [Configuring Exposure Notifications](exposurenotification/configuring-exposure-notifications.md): Define how Exposure Notifications work for a region by assigning server-based key-value pairs.
- [ENExposureConfiguration](exposurenotification/enexposureconfiguration.md): Deprecated. The object that contains parameters for configuring exposure notification risk scoring behavior.
- [ENExposureWindow](exposurenotification/enexposurewindow.md): Deprecated. A set of scan events from observed beacons within a time span.
- [ENScanInstance](exposurenotification/enscaninstance.md): Deprecated. The aggregation of attenuations of beacons received during a scan.
- [Exposure Parameter Limits](exposurenotification/exposure-parameter-limits.md): The limits for the parameters you use in exposure risk calculations.

### Summaries

- [ENExposureDetectionSummary](exposurenotification/enexposuredetectionsummary.md): Deprecated. A summary of exposures.
- [ENExposureDaySummary](exposurenotification/enexposuredaysummary.md): Deprecated. The summary of exposure information for a single day.
- [ENExposureSummaryItem](exposurenotification/enexposuresummaryitem.md): Deprecated. The summary of exposures for a specific time period or report type.

### Status

- [ENAuthorizationStatus](exposurenotification/enauthorizationstatus.md): Deprecated. A set of cases that indicates the authorization status for the app.
- [ENStatus](exposurenotification/enstatus.md): Deprecated. A set of cases that represents the overall status of exposure notification on the system.

### Errors

- [ENError](exposurenotification/enerror.md): Deprecated. Errors that the exposure notification framework issues.
- [ENError.Code](exposurenotification/enerror/code.md): Deprecated. Error codes that the exposure notification framework issues.
- [ENErrorDomain](exposurenotification/enerrordomain.md): Deprecated. The domain for an error.
- [ENErrorHandler](exposurenotification/enerrorhandler.md): Deprecated. The handler for error conditions.

### Variables

- [ENRiskWeightDefaultV2](exposurenotification/enriskweightdefaultv2.md): Deprecated. This weight is not used.
- [ENRiskWeightMaxV2](exposurenotification/enriskweightmaxv2.md): Deprecated. This weight is not used.
- [EN_FEATURE_GENERAL](exposurenotification/en_feature_general.md)

### Type Aliases

- [ENDetectExposuresHandler](exposurenotification/endetectexposureshandler.md): Deprecated. The definition of a handler that returns exposure summaries.
- [ENErrorOutType](exposurenotification/enerrorouttype.md): Deprecated. Type for returning NSError’s from functions. Avoids long and repetitious method signatures.
- [ENGetDiagnosisKeysHandler](exposurenotification/engetdiagnosiskeyshandler.md): Deprecated. The definition of a handler that returns diagnosis keys.
- [ENGetExposureInfoHandler](exposurenotification/engetexposureinfohandler.md): Deprecated. The definition of a handler that receives exposure info.

# Exposure Notification (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Framework  
**Availability:** iOS 13.5+ · iPadOS 13.5+ · Mac Catalyst 13.5+

Implement a COVID-19 exposure notification system that protects user privacy.

## Mentioned In

- [Setting Up a Key Server](exposurenotification/setting-up-a-key-server.md)

<a id="overview"></a>

## Overview

Use the Exposure Notification framework to inform people of potential exposure to COVID-19, the disease caused by the SARS-CoV-2 virus. You can build a notification system that employs random, rotating keys and identifiers to convey positive diagnoses in addition to data such as associated symptoms, proximity, and duration.

<a id="Establish-User-Roles"></a>

### Establish User Roles

The ExposureNotification framework defines two user roles:

- **Affected user**: When a user has a confirmed or probable diagnosis of COVID-19 (as defined by the Health Authority), the framework identifies them as *affected* and shares their diagnosis keys to alert other users to potential exposure.
- **Potentially exposed user**: To assign a user the *potentially exposed* role, use the framework to determine whether a set of temporary exposure keys indicate proximity to an affected user. If so, the app can retrieve additional information such as date and duration from the framework.

> **Important**

>  Before you can develop an app that uses ExposureNotification, you need the [com.apple.developer.exposure-notification](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.exposure-notification) entitlement. For more information on this entitlement, see [Exposure Notification APIs Addendum](https://developer.apple.com/contact/request/download/Exposure_Notification_Addendum.pdf). To get permission to use this entitlement, see [Exposure Notification Entitlement Request](https://developer.apple.com/contact/request/exposure-notification-entitlement).

<a id="Identify-Your-Apps-Region"></a>

### Identify Your App’s Region

All EN apps must specify the region for which they work by adding a key called [ENDeveloperRegion](https://developer.apple.com/documentation/bundleresources/information-property-list/endeveloperregion) to the app’s `Info.plist` file. The value for `ENDeveloperRegion` is set to a string that represents the app’s region. This value can be an ISO 3166-1 country code (for example, “CA” for Canada), or the ISO 3166-1/3166-2 country code plus subdivision code (“US-CA” for California).

Explicitly set the associated domain link to your region code. Avoid using wildcards because they can impact system operations. See [Associated Domains Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.associated-domains) for more information.

<a id="Specify-Exposure-Notification-API-Version"></a>

### Specify Exposure Notification API Version

iOS 13.7 introduces a new method of calculating the user’s Exposure Risk Value, described in [ENExposureConfiguration](exposurenotification/enexposureconfiguration.md). Apps can implement this new method, or continue to use the calculation method introduced in earlier versions of iOS. To choose your app’s approach, add an entry to your app’s `Info.plist` file with a key of [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion). To use the new approach, specify a value of `2`. To use the original approach, specify a value of `1`.

<a id="Support-Exposure-Notification-Express"></a>

### Support Exposure Notification Express

Starting with iOS 13.7, Health Authorities can inform users of potential exposure to COVID-19 without a dedicated Exposure Notification app. This feature is called Exposure Notification Express and must be enabled by a Health Authority. For more information, see [Supporting Exposure Notifications Express](exposurenotification/supporting-exposure-notifications-express.md).

## Topics

### Essentials

- [Supporting Exposure Notifications Express](exposurenotification/supporting-exposure-notifications-express.md): Configure servers to notify users of potential exposures to COVID-19 without an app.
- [Setting Up a Key Server](exposurenotification/setting-up-a-key-server.md): Ensure that your server meets the requirements for supporting Exposure Notifications.
- [ENManager](exposurenotification/enmanager.md): Deprecated. A class that manages exposure notifications.
- [ENDeveloperRegion](https://developer.apple.com/documentation/bundleresources/information-property-list/endeveloperregion): A string that specifies the region that the app supports.
- [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion): A number that specifies the version of the API to use.
- [Changing Configuration Values Using the Server‑to‑Server API](exposurenotification/changing-configuration-values-using-the-server-to-server-api.md): Update Exposure Notifications configuration values from a Public Health Authority’s server.
- [Testing Exposure Notifications Apps in iOS 13.7 and Later](exposurenotification/testing-exposure-notifications-apps-in-ios-13-7-and-later.md): Perform end-to-end validation of Exposure Notifications apps on a device by manually loading configuration files.
- [Supporting Exposure Notifications in iOS 12.5](exposurenotification/supporting-exposure-notifications-in-ios-12-5.md): Prepare your Exposure Notifications app to run on a previous version of iOS.

### Exposures

- [Configuring Exposure Notifications](exposurenotification/configuring-exposure-notifications.md): Define how Exposure Notifications work for a region by assigning server-based key-value pairs.
- [ENExposureConfiguration](exposurenotification/enexposureconfiguration.md): Deprecated. The object that contains parameters for configuring exposure notification risk scoring behavior.
- [ENExposureWindow](exposurenotification/enexposurewindow.md): Deprecated. A set of scan events from observed beacons within a time span.
- [ENScanInstance](exposurenotification/enscaninstance.md): Deprecated. The aggregation of attenuations of beacons received during a scan.
- [Exposure Parameter Limits](exposurenotification/exposure-parameter-limits.md): The limits for the parameters you use in exposure risk calculations.

### Summaries

- [ENExposureDetectionSummary](exposurenotification/enexposuredetectionsummary.md): Deprecated. A summary of exposures.
- [ENExposureDaySummary](exposurenotification/enexposuredaysummary.md): Deprecated. The summary of exposure information for a single day.
- [ENExposureSummaryItem](exposurenotification/enexposuresummaryitem.md): Deprecated. The summary of exposures for a specific time period or report type.

### Status

- [ENAuthorizationStatus](exposurenotification/enauthorizationstatus.md): Deprecated. A set of cases that indicates the authorization status for the app.
- [ENStatus](exposurenotification/enstatus.md): Deprecated. A set of cases that represents the overall status of exposure notification on the system.

### Errors

- [ENErrorCode](exposurenotification/enerror/code.md): Deprecated. Error codes that the exposure notification framework issues.
- [ENErrorDomain](exposurenotification/enerrordomain.md): Deprecated. The domain for an error.
- [ENErrorHandler](exposurenotification/enerrorhandler.md): Deprecated. The handler for error conditions.

### Macros

- [ENStringify](exposurenotification/enstringify.md)
- [ENStringifyExpansion](exposurenotification/enstringifyexpansion.md)
- [EN_API_AVAILABLE](exposurenotification/en_api_available.md)
- [EN_API_AVAILABLE_EXPORT](exposurenotification/en_api_available_export.md)
- [EN_API_AVAILABLE_EXPORT_V2](exposurenotification/en_api_available_export_v2.md)
- [EN_API_AVAILABLE_V2](exposurenotification/en_api_available_v2.md)
- [EN_API_AVAILABLE_V3](exposurenotification/en_api_available_v3.md)
- [EN_API_AVAILABLE_V5](exposurenotification/en_api_available_v5.md)
- [EN_FEATURE_GENERAL](exposurenotification/en_feature_general.md)

### Enumeration Cases

- [ENRiskWeightDefaultV2](exposurenotification/enriskweightdefaultv2.md): Deprecated. This weight is not used.
- [ENRiskWeightMaxV2](exposurenotification/enriskweightmaxv2.md): Deprecated. This weight is not used.

### Type Aliases

- [ENDetectExposuresHandler](exposurenotification/endetectexposureshandler.md): Deprecated. The definition of a handler that returns exposure summaries.
- [ENErrorOutType](exposurenotification/enerrorouttype.md): Deprecated. Type for returning NSError’s from functions. Avoids long and repetitious method signatures.
- [ENGetDiagnosisKeysHandler](exposurenotification/engetdiagnosiskeyshandler.md): Deprecated. The definition of a handler that returns diagnosis keys.
- [ENGetExposureInfoHandler](exposurenotification/engetexposureinfohandler.md): Deprecated. The definition of a handler that receives exposure info.
