> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saauthorizationstatus](https://developer.apple.com/documentation/safetykit/saauthorizationstatus)

# SAAuthorizationStatus (Swift)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An enumeration that represents the current Crash Detection event authorization state.

## Declaration

```swift
enum SAAuthorizationStatus
```

<a id="overview"></a>

## Overview

To verify that your app receives Crash Detection events, call [requestAuthorization(completionHandler:)](sacrashdetectionmanager/requestauthorization%28completionhandler_%29.md) and inspect the authorization state.

## Topics

### Obtaining status

- [SAAuthorizationStatus.authorized](saauthorizationstatus/authorized.md): This is the designated app for receiving Crash Detection events.
- [SAAuthorizationStatus.denied](saauthorizationstatus/denied.md): The system denies the app from receiving Crash Detection events because another app has authorization.
- [SAAuthorizationStatus.notDetermined](saauthorizationstatus/notdetermined.md): There isn’t a designated app for receiving Crash Detection events.

### Initializers

- [init(rawValue:)](saauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting a crash

- [SACrashDetectionManager](sacrashdetectionmanager.md): Provides registration and management of Crash Detection events.
- [SACrashDetectionEvent](sacrashdetectionevent.md): Describes the information about a vehicular crash.
- [SACrashDetectionDelegate](sacrashdetectiondelegate.md): The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.

# SAAuthorizationStatus (Objective-C)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · watchOS 10.1+

An enumeration that represents the current Crash Detection event authorization state.

## Declaration

```objectivec
enum SAAuthorizationStatus : NSInteger;
```

<a id="overview"></a>

## Overview

To verify that your app receives Crash Detection events, call [requestAuthorizationWithCompletionHandler:](sacrashdetectionmanager/requestauthorization%28completionhandler_%29.md) and inspect the authorization state.

## Topics

### Obtaining status

- [SAAuthorizationStatusAuthorized](saauthorizationstatus/authorized.md): This is the designated app for receiving Crash Detection events.
- [SAAuthorizationStatusDenied](saauthorizationstatus/denied.md): The system denies the app from receiving Crash Detection events because another app has authorization.
- [SAAuthorizationStatusNotDetermined](saauthorizationstatus/notdetermined.md): There isn’t a designated app for receiving Crash Detection events.

## See Also

### Detecting a crash

- [SACrashDetectionManager](sacrashdetectionmanager.md): Provides registration and management of Crash Detection events.
- [SACrashDetectionEvent](sacrashdetectionevent.md): Describes the information about a vehicular crash.
- [SACrashDetectionDelegate](sacrashdetectiondelegate.md): The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.
