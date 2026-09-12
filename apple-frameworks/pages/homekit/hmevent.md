> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmevent](https://developer.apple.com/documentation/homekit/hmevent)

# HMEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The abstract base class for a HomeKit event.

## Declaration

```swift
class HMEvent
```

## Topics

### Getting information about the event

- [uniqueIdentifier](hmevent/uniqueidentifier.md): A unique identifier for the event.
- [isSupported(for:)](hmevent/issupported%28for_%29.md): A Boolean value indicating whether the event can be added to an event trigger on the specified home.

### Initializers

- [init()](hmevent/init%28%29.md): Deprecated.

### Type Methods

- [new()](hmevent/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMCharacteristicEvent](hmcharacteristicevent.md)
- [HMCharacteristicThresholdRangeEvent](hmcharacteristicthresholdrangeevent.md)
- [HMLocationEvent](hmlocationevent.md)
- [HMPresenceEvent](hmpresenceevent.md)
- [HMTimeEvent](hmtimeevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting trigger events

- [events](hmeventtrigger/events.md): The events that activate the trigger.
- [updateEvents(\_:completionHandler:)](hmeventtrigger/updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](location-events.md): Events that represent the user’s movement among regions.
- [Time events](time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](presence-events.md): Events based on the user’s presence in a home.

# HMEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The abstract base class for a HomeKit event.

## Declaration

```objectivec
@interface HMEvent : NSObject
```

## Topics

### Getting information about the event

- [uniqueIdentifier](hmevent/uniqueidentifier.md): A unique identifier for the event.
- [isSupportedForHome:](hmevent/issupported%28for_%29.md): A Boolean value indicating whether the event can be added to an event trigger on the specified home.

### Initializers

- [init](hmevent/init%28%29.md): Deprecated.

### Type Methods

- [new](hmevent/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMCharacteristicEvent](hmcharacteristicevent.md)
- [HMCharacteristicThresholdRangeEvent](hmcharacteristicthresholdrangeevent.md)
- [HMLocationEvent](hmlocationevent.md)
- [HMPresenceEvent](hmpresenceevent.md)
- [HMTimeEvent](hmtimeevent.md)

## See Also

### Setting trigger events

- [events](hmeventtrigger/events.md): The events that activate the trigger.
- [updateEvents:completionHandler:](hmeventtrigger/updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](location-events.md): Events that represent the user’s movement among regions.
- [Time events](time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](presence-events.md): Events based on the user’s presence in a home.
