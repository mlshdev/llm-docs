> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/thresholdrule](https://developer.apple.com/documentation/accelerate/vdsp/thresholdrule)

# vDSP.ThresholdRule

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Constants that specify vector threshold rules.

## Declaration

```swift
enum ThresholdRule<T> where T : BinaryFloatingPoint
```

## Topics

### Threshold rules

- [vDSP.ThresholdRule.clampToThreshold](thresholdrule/clamptothreshold.md): Returns the threshold if the input value is less than threshold; otherwise returns the input value.
- [vDSP.ThresholdRule.signedConstant(\_:)](thresholdrule/signedconstant%28__%29.md): Returns the negated constant if the input value is less than the threshold; otherwise returns the constant.
- [vDSP.ThresholdRule.zeroFill](thresholdrule/zerofill.md): Returns `0` if the input value is less than the threshold; otherwise returns the input value.

## See Also

### Threshold Operations

- [threshold(\_:to:with:)](threshold%28__to_with_%29-77g7l.md): Returns the elements of the supplied double-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:)](threshold%28__to_with_%29-534ob.md): Returns the elements of the supplied single-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:result:)](threshold%28__to_with_result_%29-45b58.md): Calculates the elements of the supplied double-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:result:)](threshold%28__to_with_result_%29-8137c.md): Calculates the elements of the supplied single-precision vector after applying a specified thresholding rule.
