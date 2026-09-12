> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmsignificantevent](https://developer.apple.com/documentation/homekit/hmsignificantevent)

# HMSignificantEvent (Swift)

**Framework:** HomeKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An event that represents significant time-based events, including sunrise and sunset.

## Declaration

```swift
struct HMSignificantEvent
```

## Topics

### Significant event properties

- [sunrise](hmsignificantevent/sunrise.md): An event that fires at sunrise.
- [sunset](hmsignificantevent/sunset.md): An event that fires at sunset.

### Creating a significant event

- [init(\_:)](hmsignificantevent/init%28__%29.md)
- [init(rawValue:)](hmsignificantevent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Significant events

- [HMSignificantTimeEvent](hmsignificanttimeevent.md): An event that fires at a time offset from a significant time-based event.
- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md): A mutable event that fires at the specified temporal offset to a significant event.

# HMSignificantEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An event that represents significant time-based events, including sunrise and sunset.

## Declaration

```objectivec
typedef NSString * HMSignificantEvent;
```

## Topics

### Significant event properties

- [HMSignificantEventSunrise](hmsignificantevent/sunrise.md): An event that fires at sunrise.
- [HMSignificantEventSunset](hmsignificantevent/sunset.md): An event that fires at sunset.

## See Also

### Significant events

- [HMSignificantTimeEvent](hmsignificanttimeevent.md): An event that fires at a time offset from a significant time-based event.
- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md): A mutable event that fires at the specified temporal offset to a significant event.
