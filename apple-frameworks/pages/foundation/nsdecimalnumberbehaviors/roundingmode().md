> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumberbehaviors/roundingmode()](https://developer.apple.com/documentation/foundation/nsdecimalnumberbehaviors/roundingmode())

# roundingMode() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the way that `NSDecimalNumber`’s `decimalNumberBy...` methods round their return values.

## Declaration

```swift
func roundingMode() -> NSDecimalNumber.RoundingMode
```

<a id="return-value"></a>

## Return Value

Returns the current rounding mode. See [NSDecimalNumber.RoundingMode](../nsdecimalnumber/roundingmode.md) for possible values.

## See Also

### Related Documentation

- [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i)

### Rounding

- [scale()](scale%28%29.md): Returns the number of digits allowed after the decimal separator.

# roundingMode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the way that `NSDecimalNumber`’s `decimalNumberBy...` methods round their return values.

## Declaration

```objectivec
- (NSRoundingMode) roundingMode;
```

<a id="return-value"></a>

## Return Value

Returns the current rounding mode. See [NSRoundingMode](../nsdecimalnumber/roundingmode.md) for possible values.

## See Also

### Related Documentation

- [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i)

### Rounding

- [scale](scale%28%29.md): Returns the number of digits allowed after the decimal separator.
