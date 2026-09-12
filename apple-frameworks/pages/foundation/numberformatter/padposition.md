> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/padposition](https://developer.apple.com/documentation/foundation/numberformatter/padposition)

# NumberFormatter.PadPosition (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](paddingposition.md) property.

## Declaration

```swift
enum PadPosition
```

## Topics

### Constants

- [NumberFormatter.PadPosition.beforePrefix](padposition/beforeprefix.md): Specifies that the padding should occur before the prefix.
- [NumberFormatter.PadPosition.afterPrefix](padposition/afterprefix.md): Specifies that the padding should occur after the prefix.
- [NumberFormatter.PadPosition.beforeSuffix](padposition/beforesuffix.md): Specifies that the padding should occur before the suffix.
- [NumberFormatter.PadPosition.afterSuffix](padposition/aftersuffix.md): Specifies that the padding should occur after the suffix.

### Initializers

- [init(rawValue:)](padposition/init%28rawvalue_%29.md)

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
- [NumberFormatter.RoundingMode](roundingmode-swift.enum.md): These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](roundingmode-swift.property.md) property.

# NSNumberFormatterPadPosition (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](paddingposition.md) property.

## Declaration

```objectivec
enum NSNumberFormatterPadPosition : NSUInteger;
```

## Topics

### Constants

- [NSNumberFormatterPadBeforePrefix](padposition/beforeprefix.md): Specifies that the padding should occur before the prefix.
- [NSNumberFormatterPadAfterPrefix](padposition/afterprefix.md): Specifies that the padding should occur after the prefix.
- [NSNumberFormatterPadBeforeSuffix](padposition/beforesuffix.md): Specifies that the padding should occur before the suffix.
- [NSNumberFormatterPadAfterSuffix](padposition/aftersuffix.md): Specifies that the padding should occur after the suffix.

## See Also

### Constants

- [NSNumberFormatterStyle](style.md): The predefined number format styles used by the [numberStyle](numberstyle.md) property.
- [NSNumberFormatterBehavior](behavior.md): These constants specify the behavior of a number formatter. These constants are returned by the [defaultFormatterBehavior](defaultformatterbehavior%28%29.md) class method and the [formatterBehavior](formatterbehavior.md) property.
- [NSNumberFormatterRoundingMode](roundingmode-swift.enum.md): These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](roundingmode-swift.property.md) property.
