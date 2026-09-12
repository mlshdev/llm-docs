> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager](https://developer.apple.com/documentation/exposurenotification/enmanager)

# ENManager (Swift)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A class that manages exposure notifications.

> No longer supported.

## Declaration

```swift
class ENManager
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, and in iOS 13.5 and later.

Before using an instance of this class, call [activate(completionHandler:)](enmanager/activate%28completionhandler_%29.md). If the completion handler completes successfully, you can work with the remaining properties and methods on the class. Activating this object doesn’t enable exposure notification; it only allows this object to be used. Once activated, exposure notification can be enabled with [setExposureNotificationEnabled(\_:completionHandler:)](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md), if needed.

If the app no longer needs an instance of this class, you must call [invalidate()](enmanager/invalidate%28%29.md), which stops any outstanding operations and invokes the invalidation handler.

> **Note**

>  Invalidation is asynchronous so it’s possible for handlers to be invoked after calling [invalidate()](enmanager/invalidate%28%29.md).

The framework invokes the invalidation handler once invalidation finishes, and performs the invocation exactly once, even if [invalidate()](enmanager/invalidate%28%29.md) is called multiple times. It does not call any additional handlers.

After calling [invalidate()](enmanager/invalidate%28%29.md), your app can’t reuse the object. A new object must be created for subsequent use. The framework clears strong references once invalidation completes to break potential retain cycles. You don’t need to use weak references within your handlers to avoid retain cycles when using this class.

## Topics

### Activating the Manager

- [activate(completionHandler:)](enmanager/activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](enmanager/activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled(\_:completionHandler:)](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.

### Obtaining Exposure Information

- [detectExposures(configuration:diagnosisKeyURLs:completionHandler:)](enmanager/detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposures(configuration:completionHandler:)](enmanager/detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindows(summary:completionHandler:)](enmanager/getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveled(completionHandler:)](enmanager/getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfo(summary:userExplanation:completionHandler:)](enmanager/getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.

### Obtaining Exposure Keys

- [getDiagnosisKeys(completionHandler:)](enmanager/getdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys from the user’s device to share with a server.
- [getTestDiagnosisKeys(completionHandler:)](enmanager/gettestdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys, including the current key, used by this device for testing.
- [ENTemporaryExposureKey](entemporaryexposurekey.md): Deprecated. The key used to generate rolling proximity identifiers.

### Configuring the Manager

- [exposureNotificationStatus](enmanager/exposurenotificationstatus.md): Deprecated. A property that indicates the status of exposure notifications.
- [exposureNotificationEnabled](enmanager/exposurenotificationenabled.md): Deprecated. A property that indicates that a user enabled exposure notification.
- [authorizationStatus](enmanager/authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.
- [dispatchQueue](enmanager/dispatchqueue.md): Deprecated. The dispatch queue on which to invoke handlers.

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeys(completionHandler:)](enmanager/requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [preAuthorizeDiagnosisKeys(completionHandler:)](enmanager/preauthorizediagnosiskeys%28completionhandler_%29.md): Deprecated. Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.
- [ENDiagnosisKeysAvailableHandler](endiagnosiskeysavailablehandler.md): Deprecated. The handler the system invokes after requesting diagnosis keys.
- [diagnosisKeysAvailableHandler](enmanager/diagnosiskeysavailablehandler.md): Deprecated. The handler that receives available diagnosis keys after a successful preauthorization.

### Invalidating the Manager

- [invalidate()](enmanager/invalidate%28%29.md): Deprecated. Stops any outstanding operations and invalidates the manager.

### Instance Properties

- [invalidationHandler](enmanager/invalidationhandler.md): Deprecated. The handler that the framework invokes when invalidation completes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Essentials

- [Supporting Exposure Notifications Express](supporting-exposure-notifications-express.md): Configure servers to notify users of potential exposures to COVID-19 without an app.
- [Building an App to Notify Users of COVID-19 Exposure](building-an-app-to-notify-users-of-covid-19-exposure.md): Inform people when they may have been exposed to COVID-19.
- [Setting Up a Key Server](setting-up-a-key-server.md): Ensure that your server meets the requirements for supporting Exposure Notifications.
- [ENDeveloperRegion](https://developer.apple.com/documentation/bundleresources/information-property-list/endeveloperregion): A string that specifies the region that the app supports.
- [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion): A number that specifies the version of the API to use.
- [Changing Configuration Values Using the Server‑to‑Server API](changing-configuration-values-using-the-server-to-server-api.md): Update Exposure Notifications configuration values from a Public Health Authority’s server.
- [Testing Exposure Notifications Apps in iOS 13.7 and Later](testing-exposure-notifications-apps-in-ios-13-7-and-later.md): Perform end-to-end validation of Exposure Notifications apps on a device by manually loading configuration files.
- [Supporting Exposure Notifications in iOS 12.5](supporting-exposure-notifications-in-ios-12-5.md): Prepare your Exposure Notifications app to run on a previous version of iOS.

# ENManager (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A class that manages exposure notifications.

> No longer supported.

## Declaration

```objectivec
@interface ENManager : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, and in iOS 13.5 and later.

Before using an instance of this class, call [activateWithCompletionHandler:](enmanager/activate%28completionhandler_%29.md). If the completion handler completes successfully, you can work with the remaining properties and methods on the class. Activating this object doesn’t enable exposure notification; it only allows this object to be used. Once activated, exposure notification can be enabled with [setExposureNotificationEnabled:completionHandler:](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md), if needed.

If the app no longer needs an instance of this class, you must call [invalidate](enmanager/invalidate%28%29.md), which stops any outstanding operations and invokes the invalidation handler.

> **Note**

>  Invalidation is asynchronous so it’s possible for handlers to be invoked after calling [invalidate](enmanager/invalidate%28%29.md).

The framework invokes the invalidation handler once invalidation finishes, and performs the invocation exactly once, even if [invalidate](enmanager/invalidate%28%29.md) is called multiple times. It does not call any additional handlers.

After calling [invalidate](enmanager/invalidate%28%29.md), your app can’t reuse the object. A new object must be created for subsequent use. The framework clears strong references once invalidation completes to break potential retain cycles. You don’t need to use weak references within your handlers to avoid retain cycles when using this class.

## Topics

### Activating the Manager

- [activateWithCompletionHandler:](enmanager/activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](enmanager/activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled:completionHandler:](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.

### Obtaining Exposure Information

- [detectExposuresWithConfiguration:diagnosisKeyURLs:completionHandler:](enmanager/detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposuresWithConfiguration:completionHandler:](enmanager/detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindowsFromSummary:completionHandler:](enmanager/getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveledWithCompletionHandler:](enmanager/getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfoFromSummary:userExplanation:completionHandler:](enmanager/getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.

### Obtaining Exposure Keys

- [getDiagnosisKeysWithCompletionHandler:](enmanager/getdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys from the user’s device to share with a server.
- [getTestDiagnosisKeysWithCompletionHandler:](enmanager/gettestdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys, including the current key, used by this device for testing.
- [ENTemporaryExposureKey](entemporaryexposurekey.md): Deprecated. The key used to generate rolling proximity identifiers.

### Configuring the Manager

- [exposureNotificationStatus](enmanager/exposurenotificationstatus.md): Deprecated. A property that indicates the status of exposure notifications.
- [exposureNotificationEnabled](enmanager/exposurenotificationenabled.md): Deprecated. A property that indicates that a user enabled exposure notification.
- [authorizationStatus](enmanager/authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.
- [dispatchQueue](enmanager/dispatchqueue.md): Deprecated. The dispatch queue on which to invoke handlers.

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeysWithCompletionHandler:](enmanager/requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [preAuthorizeDiagnosisKeysWithCompletionHandler:](enmanager/preauthorizediagnosiskeys%28completionhandler_%29.md): Deprecated. Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.
- [ENDiagnosisKeysAvailableHandler](endiagnosiskeysavailablehandler.md): Deprecated. The handler the system invokes after requesting diagnosis keys.
- [diagnosisKeysAvailableHandler](enmanager/diagnosiskeysavailablehandler.md): Deprecated. The handler that receives available diagnosis keys after a successful preauthorization.

### Invalidating the Manager

- [invalidate](enmanager/invalidate%28%29.md): Deprecated. Stops any outstanding operations and invalidates the manager.

### Instance Properties

- [invalidationHandler](enmanager/invalidationhandler.md): Deprecated. The handler that the framework invokes when invalidation completes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Essentials

- [Supporting Exposure Notifications Express](supporting-exposure-notifications-express.md): Configure servers to notify users of potential exposures to COVID-19 without an app.
- [Setting Up a Key Server](setting-up-a-key-server.md): Ensure that your server meets the requirements for supporting Exposure Notifications.
- [ENDeveloperRegion](https://developer.apple.com/documentation/bundleresources/information-property-list/endeveloperregion): A string that specifies the region that the app supports.
- [ENAPIVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/enapiversion): A number that specifies the version of the API to use.
- [Changing Configuration Values Using the Server‑to‑Server API](changing-configuration-values-using-the-server-to-server-api.md): Update Exposure Notifications configuration values from a Public Health Authority’s server.
- [Testing Exposure Notifications Apps in iOS 13.7 and Later](testing-exposure-notifications-apps-in-ios-13-7-and-later.md): Perform end-to-end validation of Exposure Notifications apps on a device by manually loading configuration files.
- [Supporting Exposure Notifications in iOS 12.5](supporting-exposure-notifications-in-ios-12-5.md): Prepare your Exposure Notifications app to run on a previous version of iOS.
