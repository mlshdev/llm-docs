> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicthresholdrangeevent](https://developer.apple.com/documentation/homekit/hmcharacteristicthresholdrangeevent)

# HMCharacteristicThresholdRangeEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that triggers when the value of a characteristic is within a specified range.

## Declaration

```swift
class HMCharacteristicThresholdRangeEvent
```

## Topics

### Creating a characteristic threshold range event

- [init(characteristic:thresholdRange:)](hmcharacteristicthresholdrangeevent/init%28characteristic_thresholdrange_%29.md): Creates a characteristic threshold range event for the specified characteristic and number range.

### Inspecting a characteristic threshold event

- [characteristic](hmcharacteristicthresholdrangeevent/characteristic.md): The characteristic associated with the event.
- [thresholdRange](hmcharacteristicthresholdrangeevent/thresholdrange.md): The range of the characteristic value that triggers the event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutableCharacteristicThresholdRangeEvent](hmmutablecharacteristicthresholdrangeevent.md)

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

### Characteristic ranges

- [HMNumberRange](hmnumberrange.md): A set of numbers used to specify conditions for characteristic range threshold events.
- [HMMutableCharacteristicThresholdRangeEvent](hmmutablecharacteristicthresholdrangeevent.md): A mutable event that triggers when the value of a characteristic is within a specified range.

# HMCharacteristicThresholdRangeEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that triggers when the value of a characteristic is within a specified range.

## Declaration

```objectivec
@interface HMCharacteristicThresholdRangeEvent : HMEvent
```

## Topics

### Creating a characteristic threshold range event

- [initWithCharacteristic:thresholdRange:](hmcharacteristicthresholdrangeevent/init%28characteristic_thresholdrange_%29.md): Creates a characteristic threshold range event for the specified characteristic and number range.

### Inspecting a characteristic threshold event

- [characteristic](hmcharacteristicthresholdrangeevent/characteristic.md): The characteristic associated with the event.
- [thresholdRange](hmcharacteristicthresholdrangeevent/thresholdrange.md): The range of the characteristic value that triggers the event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutableCharacteristicThresholdRangeEvent](hmmutablecharacteristicthresholdrangeevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Characteristic ranges

- [HMNumberRange](hmnumberrange.md): A set of numbers used to specify conditions for characteristic range threshold events.
- [HMMutableCharacteristicThresholdRangeEvent](hmmutablecharacteristicthresholdrangeevent.md): A mutable event that triggers when the value of a characteristic is within a specified range.
