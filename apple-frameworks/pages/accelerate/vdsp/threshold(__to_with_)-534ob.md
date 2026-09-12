> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/threshold(_:to:with:)-534ob](https://developer.apple.com/documentation/accelerate/vdsp/threshold(_:to:with:)-534ob)

# threshold(\_:to:with:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the elements of the supplied single-precision vector after applying a specified thresholding rule.

## Declaration

```swift
static func threshold<U>(_ vector: U, to lowerBound: Float, with rule: vDSP.ThresholdRule<Float>) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Threshold Operations

- [threshold(\_:to:with:)](threshold%28__to_with_%29-77g7l.md): Returns the elements of the supplied double-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:result:)](threshold%28__to_with_result_%29-45b58.md): Calculates the elements of the supplied double-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:result:)](threshold%28__to_with_result_%29-8137c.md): Calculates the elements of the supplied single-precision vector after applying a specified thresholding rule.
- [vDSP.ThresholdRule](thresholdrule.md): Constants that specify vector threshold rules.
