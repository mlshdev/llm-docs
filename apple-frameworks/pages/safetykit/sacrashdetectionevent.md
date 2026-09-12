> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionevent](https://developer.apple.com/documentation/safetykit/sacrashdetectionevent)

# SACrashDetectionEvent (Swift)

**Framework:** SafetyKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Describes the information about a vehicular crash.

## Declaration

```swift
class SACrashDetectionEvent
```

<a id="overview"></a>

## Overview

When a vehicular crash occurs, SafetyKit calls your delegate’s [crashDetectionManager(\_:didDetect:)](sacrashdetectiondelegate/crashdetectionmanager%28__diddetect_%29.md) method with an [SACrashDetectionEvent](sacrashdetectionevent.md) object. Inspect this object to determine information about the crash, including the date and time, location, and if the system attempted to contact emergency services.

## Topics

### Determining the event type

- [SACrashDetectionEvent.Response](sacrashdetectionevent/response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
- [date](sacrashdetectionevent/date.md): The date and time the crash occurred.
- [location](sacrashdetectionevent/location.md): The longitude and latitude where the crash detection occurred.
- [response](sacrashdetectionevent/response-swift.property.md): An indication of whether the system attempted to call an Emergency SOS provider.

### Initializers

- [init(coder:)](sacrashdetectionevent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Detecting a crash

- [SACrashDetectionManager](sacrashdetectionmanager.md): Provides registration and management of Crash Detection events.
- [SAAuthorizationStatus](saauthorizationstatus.md): An enumeration that represents the current Crash Detection event authorization state.
- [SACrashDetectionDelegate](sacrashdetectiondelegate.md): The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.

# SACrashDetectionEvent (Objective-C)

**Framework:** SafetyKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Describes the information about a vehicular crash.

## Declaration

```objectivec
@interface SACrashDetectionEvent : NSObject
```

<a id="overview"></a>

## Overview

When a vehicular crash occurs, SafetyKit calls your delegate’s [crashDetectionManager:didDetectEvent:](sacrashdetectiondelegate/crashdetectionmanager%28__diddetect_%29.md) method with an [SACrashDetectionEvent](sacrashdetectionevent.md) object. Inspect this object to determine information about the crash, including the date and time, location, and if the system attempted to contact emergency services.

## Topics

### Determining the event type

- [SACrashDetectionEventResponse](sacrashdetectionevent/response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
- [date](sacrashdetectionevent/date.md): The date and time the crash occurred.
- [location](sacrashdetectionevent/location.md): The longitude and latitude where the crash detection occurred.
- [response](sacrashdetectionevent/response-swift.property.md): An indication of whether the system attempted to call an Emergency SOS provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Detecting a crash

- [SACrashDetectionManager](sacrashdetectionmanager.md): Provides registration and management of Crash Detection events.
- [SAAuthorizationStatus](saauthorizationstatus.md): An enumeration that represents the current Crash Detection event authorization state.
- [SACrashDetectionDelegate](sacrashdetectiondelegate.md): The protocol that an object adopts to receive Crash Detection events and changes to the authorization status.
