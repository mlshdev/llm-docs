> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmsignificanttimeevent](https://developer.apple.com/documentation/homekit/hmsignificanttimeevent)

# HMSignificantTimeEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that fires at a time offset from a significant time-based event.

## Declaration

```swift
class HMSignificantTimeEvent
```

<a id="overview"></a>

## Overview

Use this class to represent an event that fires at a time relative to a significant event, for example “30 minutes before sunset”.

## Topics

### Creating a significant time event

- [init(significantEvent:offset:)](hmsignificanttimeevent/init%28significantevent_offset_%29.md): Creates a new significant time event with the specified significant event and offset.

### Inspecting a significant time event

- [significantEvent](hmsignificanttimeevent/significantevent.md): The significant time-based event that is used to calculate when the event fires.
- [offset](hmsignificanttimeevent/offset.md): The offset from the significant event that the event fires at.

## Relationships

### Inherits From

- [HMTimeEvent](hmtimeevent.md)

### Inherited By

- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md)

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

### Significant events

- [HMSignificantEvent](hmsignificantevent.md): An event that represents significant time-based events, including sunrise and sunset.
- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md): A mutable event that fires at the specified temporal offset to a significant event.

# HMSignificantTimeEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that fires at a time offset from a significant time-based event.

## Declaration

```objectivec
@interface HMSignificantTimeEvent : HMTimeEvent
```

<a id="overview"></a>

## Overview

Use this class to represent an event that fires at a time relative to a significant event, for example “30 minutes before sunset”.

## Topics

### Creating a significant time event

- [initWithSignificantEvent:offset:](hmsignificanttimeevent/init%28significantevent_offset_%29.md): Creates a new significant time event with the specified significant event and offset.

### Inspecting a significant time event

- [significantEvent](hmsignificanttimeevent/significantevent.md): The significant time-based event that is used to calculate when the event fires.
- [offset](hmsignificanttimeevent/offset.md): The offset from the significant event that the event fires at.

## Relationships

### Inherits From

- [HMTimeEvent](hmtimeevent.md)

### Inherited By

- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Significant events

- [HMSignificantEvent](hmsignificantevent.md): An event that represents significant time-based events, including sunrise and sunset.
- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md): A mutable event that fires at the specified temporal offset to a significant event.
