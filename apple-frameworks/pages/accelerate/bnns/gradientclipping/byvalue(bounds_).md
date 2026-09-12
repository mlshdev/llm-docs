> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/gradientclipping/byvalue(bounds:)](https://developer.apple.com/documentation/accelerate/bnns/gradientclipping/byvalue(bounds:))

# BNNS.GradientClipping.byValue(bounds:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A constant that indicates that the operation clips gradients to a specified range.

## Declaration

```swift
case byValue(bounds: ClosedRange<Float>)
```

## Parameters

- `bounds`: The minimum and maximum clipping values.

## See Also

### Gradient Clipping Functions

- [BNNS.GradientClipping.none](none.md): A constant that indicates that the operation doesn’t clip gradients.
- [BNNS.GradientClipping.byNorm(threshold:)](bynorm%28threshold_%29.md): A constant that indicates that the operation clips gradients to a specified Euclidean norm.
- [BNNS.GradientClipping.byGlobalNorm(threshold:globalNorm:)](byglobalnorm%28threshold_globalnorm_%29.md): A constant that indicates that the operation clips gradients to a specified global Euclidean norm.
