> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnumberrange](https://developer.apple.com/documentation/homekit/hmnumberrange)

# HMNumberRange (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A set of numbers used to specify conditions for characteristic range threshold events.

## Declaration

```swift
class HMNumberRange
```

## Topics

### Creating a number range

- [init(minValue:maxValue:)](hmnumberrange/init%28minvalue_maxvalue_%29.md): Creates a new number range.
- [init(minValue:)](hmnumberrange/init%28minvalue_%29.md): Creates an one-sided number range with a minimum value.
- [init(maxValue:)](hmnumberrange/init%28maxvalue_%29.md): Creates a one-sided number range with a maximum value.

### Inspecting a number range

- [minValue](hmnumberrange/minvalue.md): The minimum value of the range.
- [maxValue](hmnumberrange/maxvalue.md): The maximum value of the range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Characteristic ranges

- [HMCharacteristicThresholdRangeEvent](hmcharacteristicthresholdrangeevent.md): An event that triggers when the value of a characteristic is within a specified range.
- [HMMutableCharacteristicThresholdRangeEvent](hmmutablecharacteristicthresholdrangeevent.md): A mutable event that triggers when the value of a characteristic is within a specified range.

# HMNumberRange (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A set of numbers used to specify conditions for characteristic range threshold events.

## Declaration

```objectivec
@interface HMNumberRange : NSObject
```

## Topics

### Creating a number range

- [numberRangeWithMinValue:maxValue:](hmnumberrange/init%28minvalue_maxvalue_%29.md): Creates a new number range.
- [numberRangeWithMinValue:](hmnumberrange/init%28minvalue_%29.md): Creates an one-sided number range with a minimum value.
- [numberRangeWithMaxValue:](hmnumberrange/init%28maxvalue_%29.md): Creates a one-sided number range with a maximum value.

### Inspecting a number range

- [minValue](hmnumberrange/minvalue.md): The minimum value of the range.
- [maxValue](hmnumberrange/maxvalue.md): The maximum value of the range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Characteristic ranges

- [HMCharacteristicThresholdRangeEvent](hmcharacteristicthresholdrangeevent.md): An event that triggers when the value of a characteristic is within a specified range.
- [HMMutableCharacteristicThresholdRangeEvent](hmmutablecharacteristicthresholdrangeevent.md): A mutable event that triggers when the value of a characteristic is within a specified range.
