> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectiondelegate](https://developer.apple.com/documentation/safetykit/sacrashdetectiondelegate)

# SACrashDetectionDelegate (Swift)

**Framework:** SafetyKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.

## Declaration

```swift
protocol SACrashDetectionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Upon app launch, immediately set the delegate so it receives Crash Detection events. If the app isn’t running, the system launches it in the background and then sends the event.

## Topics

### Obtaining a Crash Detection event

- [crashDetectionManager(\_:didDetect:)](sacrashdetectiondelegate/crashdetectionmanager%28__diddetect_%29.md): Receive and process a Crash Detection event.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Detecting a crash

- [SACrashDetectionManager](sacrashdetectionmanager.md): Provides registration and management of Crash Detection events.
- [SAAuthorizationStatus](saauthorizationstatus.md): An enumeration that represents the current Crash Detection event authorization state.
- [SACrashDetectionEvent](sacrashdetectionevent.md): Describes the information about a vehicular crash.

# SACrashDetectionDelegate (Objective-C)

**Framework:** SafetyKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.

## Declaration

```objectivec
@protocol SACrashDetectionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Upon app launch, immediately set the delegate so it receives Crash Detection events. If the app isn’t running, the system launches it in the background and then sends the event.

## Topics

### Obtaining a Crash Detection event

- [crashDetectionManager:didDetectEvent:](sacrashdetectiondelegate/crashdetectionmanager%28__diddetect_%29.md): Receive and process a Crash Detection event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Detecting a crash

- [SACrashDetectionManager](sacrashdetectionmanager.md): Provides registration and management of Crash Detection events.
- [SAAuthorizationStatus](saauthorizationstatus.md): An enumeration that represents the current Crash Detection event authorization state.
- [SACrashDetectionEvent](sacrashdetectionevent.md): Describes the information about a vehicular crash.
