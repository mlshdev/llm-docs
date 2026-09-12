> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/zeroformattingbehavior-swift.struct](https://developer.apple.com/documentation/foundation/datecomponentsformatter/zeroformattingbehavior-swift.struct)

# DateComponentsFormatter.ZeroFormattingBehavior (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Formatting constants for when values contain zeroes.

## Declaration

```swift
struct ZeroFormattingBehavior
```

## Topics

### Constants

- [default](zeroformattingbehavior-swift.struct/default.md): The default formatting behavior. When using positional units, this behavior drops leading zeroes but pads middle and trailing values with zeros as needed. For example, with hours, minutes, and seconds displayed, the value for one hour and 10 seconds is “1:00:10”. For all other unit styles, this behavior drops all units whose values are 0. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour and 10 seconds is displayed as “1h 10s”.
- [dropLeading](zeroformattingbehavior-swift.struct/dropleading.md): The drop leading zeroes formatting behavior. Units whose values are 0 are dropped starting at the beginning of the sequence. Units continue to be dropped until a non-zero value is encountered. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of ten minutes is displayed as “10m 0s”.
- [dropMiddle](zeroformattingbehavior-swift.struct/dropmiddle.md): The drop middle zero units behavior. Units whose values are 0 are dropped from anywhere in the middle of a sequence. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour, zero minutes, and five seconds is displayed as “0d 1h 5s”.
- [dropTrailing](zeroformattingbehavior-swift.struct/droptrailing.md): The drop trailing zero units behavior. Units whose value is 0 are dropped starting at the end of the sequence. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour is displayed as “0d 1h”.
- [dropAll](zeroformattingbehavior-swift.struct/dropall.md): The drop all zero units behavior. This behavior drops all units whose values are 0. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour is displayed as “1h”.
- [pad](zeroformattingbehavior-swift.struct/pad.md): The add padding zeroes behavior. This behavior pads values with zeroes as appropriate. For example, consider the value of one hour formatted using the positional and abbreviated unit styles. When days, hours, minutes, and seconds are allowed, the value is displayed as “0d 1:00:00” using the positional style, and as “0d 1h 0m 0s” using the abbreviated style.

### Initializers

- [init(rawValue:)](zeroformattingbehavior-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [DateComponentsFormatter.UnitsStyle](unitsstyle-swift.enum.md): Constants for specifying how to represent quantities of time.

# NSDateComponentsFormatterZeroFormattingBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Formatting constants for when values contain zeroes.

## Declaration

```objectivec
enum NSDateComponentsFormatterZeroFormattingBehavior : NSUInteger;
```

## Topics

### Constants

- [NSDateComponentsFormatterZeroFormattingBehaviorDefault](zeroformattingbehavior-swift.struct/default.md): The default formatting behavior. When using positional units, this behavior drops leading zeroes but pads middle and trailing values with zeros as needed. For example, with hours, minutes, and seconds displayed, the value for one hour and 10 seconds is “1:00:10”. For all other unit styles, this behavior drops all units whose values are 0. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour and 10 seconds is displayed as “1h 10s”.
- [NSDateComponentsFormatterZeroFormattingBehaviorDropLeading](zeroformattingbehavior-swift.struct/dropleading.md): The drop leading zeroes formatting behavior. Units whose values are 0 are dropped starting at the beginning of the sequence. Units continue to be dropped until a non-zero value is encountered. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of ten minutes is displayed as “10m 0s”.
- [NSDateComponentsFormatterZeroFormattingBehaviorDropMiddle](zeroformattingbehavior-swift.struct/dropmiddle.md): The drop middle zero units behavior. Units whose values are 0 are dropped from anywhere in the middle of a sequence. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour, zero minutes, and five seconds is displayed as “0d 1h 5s”.
- [NSDateComponentsFormatterZeroFormattingBehaviorDropTrailing](zeroformattingbehavior-swift.struct/droptrailing.md): The drop trailing zero units behavior. Units whose value is 0 are dropped starting at the end of the sequence. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour is displayed as “0d 1h”.
- [NSDateComponentsFormatterZeroFormattingBehaviorDropAll](zeroformattingbehavior-swift.struct/dropall.md): The drop all zero units behavior. This behavior drops all units whose values are 0. For example, when days, hours, minutes, and seconds are allowed, the abbreviated version of one hour is displayed as “1h”.
- [NSDateComponentsFormatterZeroFormattingBehaviorPad](zeroformattingbehavior-swift.struct/pad.md): The add padding zeroes behavior. This behavior pads values with zeroes as appropriate. For example, consider the value of one hour formatted using the positional and abbreviated unit styles. When days, hours, minutes, and seconds are allowed, the value is displayed as “0d 1:00:00” using the positional style, and as “0d 1h 0m 0s” using the abbreviated style.
- [NSDateComponentsFormatterZeroFormattingBehaviorNone](../nsdatecomponentsformatterzeroformattingbehavior/nsdatecomponentsformatterzeroformattingbehaviornone.md): No formatting behavior. This behavior prevents the dropping of zero values or adding of zeroes for padding. For example, with hours, minutes, and seconds displayed, the abbreviated value for one hour and 10 seconds is “1h 0m 10s”.

## See Also

### Constants

- [NSDateComponentsFormatterUnitsStyle](unitsstyle-swift.enum.md): Constants for specifying how to represent quantities of time.
