> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/roundingmode-swift.enum](https://developer.apple.com/documentation/foundation/numberformatter/roundingmode-swift.enum)

# NumberFormatter.RoundingMode (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](roundingmode-swift.property.md) property.

## Declaration

```swift
enum RoundingMode
```

## Topics

### Constants

- [NumberFormatter.RoundingMode.ceiling](roundingmode-swift.enum/ceiling.md): Round towards positive infinity.
- [NumberFormatter.RoundingMode.floor](roundingmode-swift.enum/floor.md): Round towards negative infinity.
- [NumberFormatter.RoundingMode.down](roundingmode-swift.enum/down.md): Round towards zero.
- [NumberFormatter.RoundingMode.up](roundingmode-swift.enum/up.md): Round away from zero.
- [NumberFormatter.RoundingMode.halfEven](roundingmode-swift.enum/halfeven.md): Round towards the nearest integer, or towards an even number if equidistant.
- [NumberFormatter.RoundingMode.halfDown](roundingmode-swift.enum/halfdown.md): Round towards the nearest integer, or towards zero if equidistant.
- [NumberFormatter.RoundingMode.halfUp](roundingmode-swift.enum/halfup.md): Round towards the nearest integer, or away from zero if equidistant.

### Initializers

- [init(rawValue:)](roundingmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NumberFormatter.Style](style.md): The predefined number format styles used by the [numberStyle](numberstyle.md) property.
- [NumberFormatter.Behavior](behavior.md): These constants specify the behavior of a number formatter. These constants are returned by the [defaultFormatterBehavior()](defaultformatterbehavior%28%29.md) class method and the [formatterBehavior](formatterbehavior.md) property.
- [NumberFormatter.PadPosition](padposition.md): These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](paddingposition.md) property.

# NSNumberFormatterRoundingMode (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](roundingmode-swift.property.md) property.

## Declaration

```objectivec
enum NSNumberFormatterRoundingMode : NSUInteger;
```

## Topics

### Constants

- [NSNumberFormatterRoundCeiling](roundingmode-swift.enum/ceiling.md): Round towards positive infinity.
- [NSNumberFormatterRoundFloor](roundingmode-swift.enum/floor.md): Round towards negative infinity.
- [NSNumberFormatterRoundDown](roundingmode-swift.enum/down.md): Round towards zero.
- [NSNumberFormatterRoundUp](roundingmode-swift.enum/up.md): Round away from zero.
- [NSNumberFormatterRoundHalfEven](roundingmode-swift.enum/halfeven.md): Round towards the nearest integer, or towards an even number if equidistant.
- [NSNumberFormatterRoundHalfDown](roundingmode-swift.enum/halfdown.md): Round towards the nearest integer, or towards zero if equidistant.
- [NSNumberFormatterRoundHalfUp](roundingmode-swift.enum/halfup.md): Round towards the nearest integer, or away from zero if equidistant.

## See Also

### Constants

- [NSNumberFormatterStyle](style.md): The predefined number format styles used by the [numberStyle](numberstyle.md) property.
- [NSNumberFormatterBehavior](behavior.md): These constants specify the behavior of a number formatter. These constants are returned by the [defaultFormatterBehavior](defaultformatterbehavior%28%29.md) class method and the [formatterBehavior](formatterbehavior.md) property.
- [NSNumberFormatterPadPosition](padposition.md): These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](paddingposition.md) property.
