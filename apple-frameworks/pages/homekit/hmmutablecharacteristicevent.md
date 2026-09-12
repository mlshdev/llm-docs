> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmutablecharacteristicevent](https://developer.apple.com/documentation/homekit/hmmutablecharacteristicevent)

# HMMutableCharacteristicEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A mutable event that is evaluated based on the value of a characteristic.

## Declaration

```swift
class HMMutableCharacteristicEvent<TriggerValueType> where TriggerValueType : NSCopying
```

## Topics

### Configuring the event

- [characteristic](hmmutablecharacteristicevent/characteristic.md): The characteristic associated with the event.
- [triggerValue](hmmutablecharacteristicevent/triggervalue.md): The value of the characteristic that triggers the event.

## Relationships

### Inherits From

- [HMCharacteristicEvent](hmcharacteristicevent.md)

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

### Characteristics

- [HMCharacteristicEvent](hmcharacteristicevent.md): An event that is evaluated based on the value of a characteristic.

# HMMutableCharacteristicEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A mutable event that is evaluated based on the value of a characteristic.

## Declaration

```objectivec
@interface HMMutableCharacteristicEvent : HMCharacteristicEvent
```

## Topics

### Configuring the event

- [characteristic](hmmutablecharacteristicevent/characteristic.md): The characteristic associated with the event.
- [triggerValue](hmmutablecharacteristicevent/triggervalue.md): The value of the characteristic that triggers the event.

## Relationships

### Inherits From

- [HMCharacteristicEvent](hmcharacteristicevent.md)

## See Also

### Characteristics

- [HMCharacteristicEvent](hmcharacteristicevent.md): An event that is evaluated based on the value of a characteristic.
