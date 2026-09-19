> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager

# ATTrackingManager (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that requests tracking authorization and provides the current authorization status.

## Declaration

```swift
class ATTrackingManager
```

<a id="overview"></a>

## Overview

This class presents an authorization request UI that asks a person for permission to access app-related data that your app can use to track a person or device across apps and websites (see [requestTrackingAuthorization(completionHandler:)](attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md)). You can check the result of prior requests with the [trackingAuthorizationStatus](attrackingmanager/trackingauthorizationstatus.md) property.

> **Important**

> In the European Union, you can use [requestTrackingAuthorization(usingExpandedInterface:additionalInformationAction:completionHandler:)](attrackingmanager/requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md) to add an optional Additional Information button to the prompt, which provides more details to assist people in their decision-making. The authorization Ul is a full-page sheet that supports rich-text formatting.

## Topics

### Requesting authorization

- [requestTrackingAuthorization(completionHandler:)](attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md): Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [requestTrackingAuthorization(usingExpandedInterface:additionalInformationAction:completionHandler:)](attrackingmanager/requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md): Beta. Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.

### Determining tracking authorization status

- [trackingAuthorizationStatus](attrackingmanager/trackingauthorizationstatus.md): A value that indicates the status of the app’s tracking authorization.
- [ATTrackingManager.AuthorizationStatus](attrackingmanager/authorizationstatus.md): A type that represents the tracking-authorization status of an app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [NSUserTrackingUsageDescription](../bundleresources/information-property-list/nsusertrackingusagedescription.md): A message that explains the purpose for accessing data that an app can use to track a person or device.

# ATTrackingManager (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that requests tracking authorization and provides the current authorization status.

## Declaration

```objectivec
@interface ATTrackingManager : NSObject
```

<a id="overview"></a>

## Overview

This class presents an authorization request UI that asks a person for permission to access app-related data that your app can use to track a person or device across apps and websites (see [requestTrackingAuthorizationWithCompletionHandler:](attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md)). You can check the result of prior requests with the [trackingAuthorizationStatus](attrackingmanager/trackingauthorizationstatus.md) property.

> **Important**

> In the European Union, you can use [requestTrackingAuthorizationUsingExpandedInterface:additionalInformationAction:completionHandler:](attrackingmanager/requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md) to add an optional Additional Information button to the prompt, which provides more details to assist people in their decision-making. The authorization Ul is a full-page sheet that supports rich-text formatting.

## Topics

### Requesting authorization

- [requestTrackingAuthorizationWithCompletionHandler:](attrackingmanager/requesttrackingauthorization%28completionhandler_%29.md): Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.
- [requestTrackingAuthorizationUsingExpandedInterface:additionalInformationAction:completionHandler:](attrackingmanager/requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md): Beta. Presents a modal UI that asks someone for permission to access data that your app can use to track a person or device.

### Determining tracking authorization status

- [trackingAuthorizationStatus](attrackingmanager/trackingauthorizationstatus.md): A value that indicates the status of the app’s tracking authorization.
- [ATTrackingManagerAuthorizationStatus](attrackingmanager/authorizationstatus.md): A type that represents the tracking-authorization status of an app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [NSUserTrackingUsageDescription](../bundleresources/information-property-list/nsusertrackingusagedescription.md): A message that explains the purpose for accessing data that an app can use to track a person or device.
