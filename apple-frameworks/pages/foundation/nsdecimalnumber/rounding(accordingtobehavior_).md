> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsdecimalnumber/rounding(accordingtobehavior:)

# rounding(accordingToBehavior:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a rounded version of the decimal number using the specified rounding behavior.

## Declaration

```swift
func rounding(accordingToBehavior behavior: (any NSDecimalNumberBehaviors)?) -> NSDecimalNumber
```

<a id="Discussion"></a>

## Discussion

For a description of the different ways of rounding, see the [roundingMode](../numberformatter/roundingmode-swift.property.md) method in the [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md) protocol specification.

# decimalNumberByRoundingAccordingToBehavior: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a rounded version of the decimal number using the specified rounding behavior.

## Declaration

```objectivec
- (NSDecimalNumber *) decimalNumberByRoundingAccordingToBehavior:(id<NSDecimalNumberBehaviors>) behavior;
```

<a id="Discussion"></a>

## Discussion

For a description of the different ways of rounding, see the [roundingMode](../numberformatter/roundingmode-swift.property.md) method in the [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md) protocol specification.
