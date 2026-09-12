> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmlocationevent](https://developer.apple.com/documentation/homekit/hmlocationevent)

# HMLocationEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · watchOS 2.0+

An event that is evaluated based on entry to or exit from a region.

## Declaration

```swift
class HMLocationEvent
```

## Topics

### Creating a Location Event

- [init(region:)](hmlocationevent/init%28region_%29.md): Creates a new location event with the specified region.

### Inspecting the Region

- [region](hmlocationevent/region.md): The region on which events are triggered.

### Configuring the Region

- [updateRegion(\_:completionHandler:)](hmlocationevent/updateregion%28__completionhandler_%29.md): Deprecated. Changes the region associated with this event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutableLocationEvent](hmmutablelocationevent.md)

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

### Locations

- [HMMutableLocationEvent](hmmutablelocationevent.md): A mutable event that is evaluated based on entry to or exit from a region.

# HMLocationEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · watchOS 2.0+

An event that is evaluated based on entry to or exit from a region.

## Declaration

```objectivec
@interface HMLocationEvent : HMEvent
```

## Topics

### Creating a Location Event

- [initWithRegion:](hmlocationevent/init%28region_%29.md): Creates a new location event with the specified region.

### Inspecting the Region

- [region](hmlocationevent/region.md): The region on which events are triggered.

### Configuring the Region

- [updateRegion:completionHandler:](hmlocationevent/updateregion%28__completionhandler_%29.md): Deprecated. Changes the region associated with this event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutableLocationEvent](hmmutablelocationevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Locations

- [HMMutableLocationEvent](hmmutablelocationevent.md): A mutable event that is evaluated based on entry to or exit from a region.
