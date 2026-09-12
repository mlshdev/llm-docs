> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumberbehaviors/scale()](https://developer.apple.com/documentation/foundation/nsdecimalnumberbehaviors/scale())

# scale() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of digits allowed after the decimal separator.

## Declaration

```swift
func scale() -> Int16
```

<a id="return-value"></a>

## Return Value

The number of digits allowed after the decimal separator.

<a id="Discussion"></a>

## Discussion

This method limits the precision of the values returned by `NSDecimalNumber`’s `decimalNumberBy...` methods. If [scale()](scale%28%29.md) returns a negative value, it affects the digits before the decimal separator as well. If [scale()](scale%28%29.md) returns `NSDecimalNoScale`, the number of digits is unlimited.

Assuming that [roundingMode()](roundingmode%28%29.md) returns `NSRoundPlain`, different values of [scale()](scale%28%29.md) have the following effects on the number 123.456:

| Scale | Return Value |
| --- | --- |
| `NSDecimalNoScale` | 123.456 |
| 2 | 123.45 |
| 0 | 123 |
| –2 | 100 |

## See Also

### Rounding

- [roundingMode()](roundingmode%28%29.md): Returns the way that `NSDecimalNumber`’s `decimalNumberBy...` methods round their return values.

# scale (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of digits allowed after the decimal separator.

## Declaration

```objectivec
- (short) scale;
```

<a id="return-value"></a>

## Return Value

The number of digits allowed after the decimal separator.

<a id="Discussion"></a>

## Discussion

This method limits the precision of the values returned by `NSDecimalNumber`’s `decimalNumberBy...` methods. If [scale](scale%28%29.md) returns a negative value, it affects the digits before the decimal separator as well. If [scale](scale%28%29.md) returns `NSDecimalNoScale`, the number of digits is unlimited.

Assuming that [roundingMode](roundingmode%28%29.md) returns `NSRoundPlain`, different values of [scale](scale%28%29.md) have the following effects on the number 123.456:

| Scale | Return Value |
| --- | --- |
| `NSDecimalNoScale` | 123.456 |
| 2 | 123.45 |
| 0 | 123 |
| –2 | 100 |

## See Also

### Rounding

- [roundingMode](roundingmode%28%29.md): Returns the way that `NSDecimalNumber`’s `decimalNumberBy...` methods round their return values.
