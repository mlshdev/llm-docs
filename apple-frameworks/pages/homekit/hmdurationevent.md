> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmdurationevent](https://developer.apple.com/documentation/homekit/hmdurationevent)

# HMDurationEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that ends after the specified time duration.

## Declaration

```swift
class HMDurationEvent
```

<a id="overview"></a>

## Overview

Use a duration event to specify that a different event should end after a period of time.

## Topics

### Creating a duration event

- [init(duration:)](hmdurationevent/init%28duration_%29.md): Creates a duration event with the specified time duration.

### Inspecting a duration event

- [duration](hmdurationevent/duration.md): The event’s duration, in seconds.

## Relationships

### Inherits From

- [HMTimeEvent](hmtimeevent.md)

### Inherited By

- [HMMutableDurationEvent](hmmutabledurationevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Durations

- [HMMutableDurationEvent](hmmutabledurationevent.md): A mutable event that fires after the specified time duration.

# HMDurationEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that ends after the specified time duration.

## Declaration

```objectivec
@interface HMDurationEvent : HMTimeEvent
```

<a id="overview"></a>

## Overview

Use a duration event to specify that a different event should end after a period of time.

## Topics

### Creating a duration event

- [initWithDuration:](hmdurationevent/init%28duration_%29.md): Creates a duration event with the specified time duration.

### Inspecting a duration event

- [duration](hmdurationevent/duration.md): The event’s duration, in seconds.

## Relationships

### Inherits From

- [HMTimeEvent](hmtimeevent.md)

### Inherited By

- [HMMutableDurationEvent](hmmutabledurationevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Durations

- [HMMutableDurationEvent](hmmutabledurationevent.md): A mutable event that fires after the specified time duration.
