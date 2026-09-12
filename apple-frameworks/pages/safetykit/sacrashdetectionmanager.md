> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionmanager](https://developer.apple.com/documentation/safetykit/sacrashdetectionmanager)

# SACrashDetectionManager (Swift)

**Framework:** SafetyKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Provides registration and management of Crash Detection events.

## Declaration

```swift
class SACrashDetectionManager
```

<a id="overview"></a>

## Overview

Use this class to determine Crash Detection availabilty on iPhone, detect authorization status, and register for Crash Detection events. Not all iPhones support Crash Detection, so verify that [isAvailable](sacrashdetectionmanager/isavailable.md) returns [true](https://developer.apple.com/documentation/swift/true).

Check the value of [authorizationStatus](sacrashdetectionmanager/authorizationstatus.md) to determine if the person designates this app on their iPhone to receive Crash Detection events. If the value is not [SAAuthorizationStatus.authorized](saauthorizationstatus/authorized.md), set [delegate](sacrashdetectionmanager/delegate.md) and call [requestAuthorization(completionHandler:)](sacrashdetectionmanager/requestauthorization%28completionhandler_%29.md) to request authorization.

After your app has authorization to receive Crash Detection events, adopt [SACrashDetectionDelegate](sacrashdetectiondelegate.md) and implement [crashDetectionManager(\_:didDetect:)](sacrashdetectiondelegate/crashdetectionmanager%28__diddetect_%29.md). If a vehicular crash occurs, the system calls the method with the Crash Detection event.

## Topics

### Determining availability

- [isAvailable](sacrashdetectionmanager/isavailable.md): A Boolean value that indicates if Crash Detection is available.
- [authorizationStatus](sacrashdetectionmanager/authorizationstatus.md): A value that indicates if the person authorized the app to receive Crash Detection events.

### Requesting authorization

- [delegate](sacrashdetectionmanager/delegate.md): The object that receives Crash Detection events.
- [requestAuthorization(completionHandler:)](sacrashdetectionmanager/requestauthorization%28completionhandler_%29.md): Requests permission to access Crash Detection information.

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

### Detecting a crash

- [SAAuthorizationStatus](saauthorizationstatus.md): An enumeration that represents the current Crash Detection event authorization state.
- [SACrashDetectionEvent](sacrashdetectionevent.md): Describes the information about a vehicular crash.
- [SACrashDetectionDelegate](sacrashdetectiondelegate.md): The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.

# SACrashDetectionManager (Objective-C)

**Framework:** SafetyKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Provides registration and management of Crash Detection events.

## Declaration

```objectivec
@interface SACrashDetectionManager : NSObject
```

<a id="overview"></a>

## Overview

Use this class to determine Crash Detection availabilty on iPhone, detect authorization status, and register for Crash Detection events. Not all iPhones support Crash Detection, so verify that [available](sacrashdetectionmanager/isavailable.md) returns [true](https://developer.apple.com/documentation/swift/true).

Check the value of [authorizationStatus](sacrashdetectionmanager/authorizationstatus.md) to determine if the person designates this app on their iPhone to receive Crash Detection events. If the value is not [SAAuthorizationStatusAuthorized](saauthorizationstatus/authorized.md), set [delegate](sacrashdetectionmanager/delegate.md) and call [requestAuthorizationWithCompletionHandler:](sacrashdetectionmanager/requestauthorization%28completionhandler_%29.md) to request authorization.

After your app has authorization to receive Crash Detection events, adopt [SACrashDetectionDelegate](sacrashdetectiondelegate.md) and implement [crashDetectionManager:didDetectEvent:](sacrashdetectiondelegate/crashdetectionmanager%28__diddetect_%29.md). If a vehicular crash occurs, the system calls the method with the Crash Detection event.

## Topics

### Determining availability

- [available](sacrashdetectionmanager/isavailable.md): A Boolean value that indicates if Crash Detection is available.
- [authorizationStatus](sacrashdetectionmanager/authorizationstatus.md): A value that indicates if the person authorized the app to receive Crash Detection events.

### Requesting authorization

- [delegate](sacrashdetectionmanager/delegate.md): The object that receives Crash Detection events.
- [requestAuthorizationWithCompletionHandler:](sacrashdetectionmanager/requestauthorization%28completionhandler_%29.md): Requests permission to access Crash Detection information.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Detecting a crash

- [SAAuthorizationStatus](saauthorizationstatus.md): An enumeration that represents the current Crash Detection event authorization state.
- [SACrashDetectionEvent](sacrashdetectionevent.md): Describes the information about a vehicular crash.
- [SACrashDetectionDelegate](sacrashdetectiondelegate.md): The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.
