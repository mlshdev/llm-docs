> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/threshold(_:to:with:result:)-45b58](https://developer.apple.com/documentation/accelerate/vdsp/threshold(_:to:with:result:)-45b58)

# threshold(\_:to:with:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the elements of the supplied double-precision vector after applying a specified thresholding rule.

## Declaration

```swift
static func threshold<U, V>(_ vector: U, to lowerBound: Double, with rule: vDSP.ThresholdRule<Double>, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## See Also

### Threshold Operations

- [threshold(\_:to:with:)](threshold%28__to_with_%29-77g7l.md): Returns the elements of the supplied double-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:)](threshold%28__to_with_%29-534ob.md): Returns the elements of the supplied single-precision vector after applying a specified thresholding rule.
- [threshold(\_:to:with:result:)](threshold%28__to_with_result_%29-8137c.md): Calculates the elements of the supplied single-precision vector after applying a specified thresholding rule.
- [vDSP.ThresholdRule](thresholdrule.md): Constants that specify vector threshold rules.
