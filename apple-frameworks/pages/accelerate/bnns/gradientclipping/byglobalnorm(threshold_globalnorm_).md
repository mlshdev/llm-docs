> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/gradientclipping/byglobalnorm(threshold:globalnorm:)](https://developer.apple.com/documentation/accelerate/bnns/gradientclipping/byglobalnorm(threshold:globalnorm:))

# BNNS.GradientClipping.byGlobalNorm(threshold:globalNorm:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A constant that indicates that the operation clips gradients to a specified global Euclidean norm.

## Declaration

```swift
case byGlobalNorm(threshold: Float, globalNorm: Float = 0)
```

## Parameters

- `threshold`: The maximum Euclidean norm.
- `globalNorm`: An optional value for a known global Euclidean norm. Set to `0` to specify that the function computes the norm.

## See Also

### Gradient Clipping Functions

- [BNNS.GradientClipping.none](none.md): A constant that indicates that the operation doesn’t clip gradients.
- [BNNS.GradientClipping.byValue(bounds:)](byvalue%28bounds_%29.md): A constant that indicates that the operation clips gradients to a specified range.
- [BNNS.GradientClipping.byNorm(threshold:)](bynorm%28threshold_%29.md): A constant that indicates that the operation clips gradients to a specified Euclidean norm.
