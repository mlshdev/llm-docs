> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apptrackingtransparency

# App Tracking Transparency (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Request authorization to access app-related data that your app can use to track the person or the device.

<a id="Overview"></a>

## Overview

Your app needs to use the App Tracking Transparency framework if it collects data about people and shares it with other companies to track them across apps and websites. The framework presents a tracking-authorization UI and reports the current authorization status.

<a id="Request-authorization-to-access-app-related-data"></a>

## Request authorization to access app-related data

To use the App Tracking Transparency framework:

1. Add the [NSUserTrackingUsageDescription](bundleresources/information-property-list/nsusertrackingusagedescription.md) key to your app’s target properties in Xcode.
2. Call [requestTrackingAuthorization(completionHandler:)](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md) to present the tracking-authorization request.
3. Check [trackingAuthorizationStatus](apptrackingtransparency/attrackingmanager/trackingauthorizationstatus.md) to determine the current authorization status; see [ATTrackingManager.AuthorizationStatus](apptrackingtransparency/attrackingmanager/authorizationstatus.md) for the possible values.

For more information about app tracking and privacy, see [User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/) and [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/).

## Topics

### Essentials

- [ATTrackingManager](apptrackingtransparency/attrackingmanager.md): A class that requests tracking authorization and provides the current authorization status.
- [NSUserTrackingUsageDescription](bundleresources/information-property-list/nsusertrackingusagedescription.md): A message that explains the purpose for accessing data that an app can use to track a person or device.

### Authorization requests

- [requestTrackingAuthorization(completionHandler:)](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md): Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [requestTrackingAuthorization(usingExpandedInterface:additionalInformationAction:completionHandler:)](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md): Beta. Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [NSUserTrackingMarkdownUsageDescription](bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md): Beta. A message that explains the purpose for accessing data that an application can use to track a person or device.

### Authorization status and results

- [trackingAuthorizationStatus](apptrackingtransparency/attrackingmanager/trackingauthorizationstatus.md): A value that indicates the status of the app’s tracking authorization.
- [ATTrackingManager.AuthorizationStatus](apptrackingtransparency/attrackingmanager/authorizationstatus.md): A type that represents the tracking-authorization status of an app.

# App Tracking Transparency (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Request authorization to access app-related data that your app can use to track the person or the device.

<a id="Overview"></a>

## Overview

Your app needs to use the App Tracking Transparency framework if it collects data about people and shares it with other companies to track them across apps and websites. The framework presents a tracking-authorization UI and reports the current authorization status.

<a id="Request-authorization-to-access-app-related-data"></a>

## Request authorization to access app-related data

To use the App Tracking Transparency framework:

1. Add the [NSUserTrackingUsageDescription](bundleresources/information-property-list/nsusertrackingusagedescription.md) key to your app’s target properties in Xcode.
2. Call [requestTrackingAuthorizationWithCompletionHandler:](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md) to present the tracking-authorization request.
3. Check [trackingAuthorizationStatus](apptrackingtransparency/attrackingmanager/trackingauthorizationstatus.md) to determine the current authorization status; see [ATTrackingManagerAuthorizationStatus](apptrackingtransparency/attrackingmanager/authorizationstatus.md) for the possible values.

For more information about app tracking and privacy, see [User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/) and [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/).

## Topics

### Essentials

- [ATTrackingManager](apptrackingtransparency/attrackingmanager.md): A class that requests tracking authorization and provides the current authorization status.
- [NSUserTrackingUsageDescription](bundleresources/information-property-list/nsusertrackingusagedescription.md): A message that explains the purpose for accessing data that an app can use to track a person or device.

### Authorization requests

- [requestTrackingAuthorizationWithCompletionHandler:](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md): Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [requestTrackingAuthorizationUsingExpandedInterface:additionalInformationAction:completionHandler:](apptrackingtransparency/attrackingmanager/requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md): Beta. Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [NSUserTrackingMarkdownUsageDescription](bundleresources/information-property-list/nsusertrackingmarkdownusagedescription.md): Beta. A message that explains the purpose for accessing data that an application can use to track a person or device.

### Authorization status and results

- [trackingAuthorizationStatus](apptrackingtransparency/attrackingmanager/trackingauthorizationstatus.md): A value that indicates the status of the app’s tracking authorization.
- [ATTrackingManagerAuthorizationStatus](apptrackingtransparency/attrackingmanager/authorizationstatus.md): A type that represents the tracking-authorization status of an app.

### Version information

- [AppTrackingTransparencyVersionNumber](apptrackingtransparency/apptrackingtransparencyversionnumber.md)
- [AppTrackingTransparencyVersionString](apptrackingtransparency/apptrackingtransparencyversionstring.md)
