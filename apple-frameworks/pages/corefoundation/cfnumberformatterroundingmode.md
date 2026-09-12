> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformatterroundingmode](https://developer.apple.com/documentation/corefoundation/cfnumberformatterroundingmode)

# CFNumberFormatterRoundingMode (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants are used to specify how numbers should be rounded.

## Declaration

```swift
enum CFNumberFormatterRoundingMode
```

## Topics

### Constants

- [CFNumberFormatterRoundingMode.roundCeiling](cfnumberformatterroundingmode/roundceiling.md): Round towards positive infinity.
- [CFNumberFormatterRoundingMode.roundFloor](cfnumberformatterroundingmode/roundfloor.md): Round towards negative infinity.
- [CFNumberFormatterRoundingMode.roundDown](cfnumberformatterroundingmode/rounddown.md): Round towards zero.
- [CFNumberFormatterRoundingMode.roundUp](cfnumberformatterroundingmode/roundup.md): Round away from zero.
- [CFNumberFormatterRoundingMode.roundHalfEven](cfnumberformatterroundingmode/roundhalfeven.md): Round towards the nearest integer, or towards an even number if equidistant.
- [CFNumberFormatterRoundingMode.roundHalfDown](cfnumberformatterroundingmode/roundhalfdown.md): Round towards the nearest integer, or towards zero if equidistant.
- [CFNumberFormatterRoundingMode.roundHalfUp](cfnumberformatterroundingmode/roundhalfup.md): Round towards the nearest integer, or away from zero if equidistant.

### Initializers

- [init(rawValue:)](cfnumberformatterroundingmode/init%28rawvalue_%29.md)

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

- [Number Formatter Styles](number-formatter-styles.md): Predefined number format styles.
- [Number Formatter Property Keys](number-formatter-property-keys.md): The keys used in key-value pairs to specify the value of number formatter properties.
- [Number Format Options](number_format_options.md): These constants are used to specify how numbers should be parsed.
- [Padding Positions](padding-positions.md): These constants are used to specify how numbers should be padded.

# CFNumberFormatterRoundingMode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants are used to specify how numbers should be rounded.

## Declaration

```objectivec
enum CFNumberFormatterRoundingMode : CFIndex;
```

## Topics

### Constants

- [kCFNumberFormatterRoundCeiling](cfnumberformatterroundingmode/roundceiling.md): Round towards positive infinity.
- [kCFNumberFormatterRoundFloor](cfnumberformatterroundingmode/roundfloor.md): Round towards negative infinity.
- [kCFNumberFormatterRoundDown](cfnumberformatterroundingmode/rounddown.md): Round towards zero.
- [kCFNumberFormatterRoundUp](cfnumberformatterroundingmode/roundup.md): Round away from zero.
- [kCFNumberFormatterRoundHalfEven](cfnumberformatterroundingmode/roundhalfeven.md): Round towards the nearest integer, or towards an even number if equidistant.
- [kCFNumberFormatterRoundHalfDown](cfnumberformatterroundingmode/roundhalfdown.md): Round towards the nearest integer, or towards zero if equidistant.
- [kCFNumberFormatterRoundHalfUp](cfnumberformatterroundingmode/roundhalfup.md): Round towards the nearest integer, or away from zero if equidistant.

## See Also

### Constants

- [Number Formatter Styles](number-formatter-styles.md): Predefined number format styles.
- [Number Formatter Property Keys](number-formatter-property-keys.md): The keys used in key-value pairs to specify the value of number formatter properties.
- [Number Format Options](number_format_options.md): These constants are used to specify how numbers should be parsed.
- [Padding Positions](padding-positions.md): These constants are used to specify how numbers should be padded.
