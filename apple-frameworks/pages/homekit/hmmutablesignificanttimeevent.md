> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmutablesignificanttimeevent](https://developer.apple.com/documentation/homekit/hmmutablesignificanttimeevent)

# HMMutableSignificantTimeEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A mutable event that fires at the specified temporal offset to a significant event.

## Declaration

```swift
class HMMutableSignificantTimeEvent
```

## Topics

### Configuring a significant time event

- [significantEvent](hmmutablesignificanttimeevent/significantevent.md): The significant time-based event that is used to calculate when the event fires.
- [offset](hmmutablesignificanttimeevent/offset.md): The offset from the significant event that this event fires at.

## Relationships

### Inherits From

- [HMSignificantTimeEvent](hmsignificanttimeevent.md)

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
- [HMSignificantTimeEvent](hmsignificanttimeevent.md): An event that fires at a time offset from a significant time-based event.

# HMMutableSignificantTimeEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A mutable event that fires at the specified temporal offset to a significant event.

## Declaration

```objectivec
@interface HMMutableSignificantTimeEvent : HMSignificantTimeEvent
```

## Topics

### Configuring a significant time event

- [significantEvent](hmmutablesignificanttimeevent/significantevent.md): The significant time-based event that is used to calculate when the event fires.
- [offset](hmmutablesignificanttimeevent/offset.md): The offset from the significant event that this event fires at.

## Relationships

### Inherits From

- [HMSignificantTimeEvent](hmsignificanttimeevent.md)

## See Also

### Significant events

- [HMSignificantEvent](hmsignificantevent.md): An event that represents significant time-based events, including sunrise and sunset.
- [HMSignificantTimeEvent](hmsignificanttimeevent.md): An event that fires at a time offset from a significant time-based event.
