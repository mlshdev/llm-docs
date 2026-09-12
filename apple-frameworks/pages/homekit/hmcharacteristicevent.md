> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicevent](https://developer.apple.com/documentation/homekit/hmcharacteristicevent)

# HMCharacteristicEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An event that is evaluated based on the value of a characteristic.

## Declaration

```swift
class HMCharacteristicEvent<TriggerValueType> where TriggerValueType : NSCopying
```

## Topics

### Creating a characteristic event

- [init(characteristic:triggerValue:)](hmcharacteristicevent/init%28characteristic_triggervalue_%29.md): Creates a new characteristic event which triggers when the specified characteristic reaches the specified value.

### Inspecting the event

- [characteristic](hmcharacteristicevent/characteristic.md): The characteristic associated with the event.
- [triggerValue](hmcharacteristicevent/triggervalue.md): The value of the characteristic that triggers the event.

### Configuring the event

- [updateTriggerValue(\_:completionHandler:)](hmcharacteristicevent/updatetriggervalue%28__completionhandler_%29.md): Deprecated. Changes the trigger value associated with this event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutableCharacteristicEvent](hmmutablecharacteristicevent.md)

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

- [HMMutableCharacteristicEvent](hmmutablecharacteristicevent.md): A mutable event that is evaluated based on the value of a characteristic.

# HMCharacteristicEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An event that is evaluated based on the value of a characteristic.

## Declaration

```objectivec
@interface HMCharacteristicEvent : HMEvent
```

## Topics

### Creating a characteristic event

- [initWithCharacteristic:triggerValue:](hmcharacteristicevent/init%28characteristic_triggervalue_%29.md): Creates a new characteristic event which triggers when the specified characteristic reaches the specified value.

### Inspecting the event

- [characteristic](hmcharacteristicevent/characteristic.md): The characteristic associated with the event.
- [triggerValue](hmcharacteristicevent/triggervalue.md): The value of the characteristic that triggers the event.

### Configuring the event

- [updateTriggerValue:completionHandler:](hmcharacteristicevent/updatetriggervalue%28__completionhandler_%29.md): Deprecated. Changes the trigger value associated with this event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutableCharacteristicEvent](hmmutablecharacteristicevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Characteristics

- [HMMutableCharacteristicEvent](hmmutablecharacteristicevent.md): A mutable event that is evaluated based on the value of a characteristic.
