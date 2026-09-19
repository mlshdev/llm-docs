> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/gradientclipping/none

# BNNS.GradientClipping.none

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A constant that indicates that the operation doesn’t clip gradients.

## Declaration

```swift
case none
```

## See Also

### Gradient Clipping Functions

- [BNNS.GradientClipping.byValue(bounds:)](byvalue%28bounds_%29.md): A constant that indicates that the operation clips gradients to a specified range.
- [BNNS.GradientClipping.byNorm(threshold:)](bynorm%28threshold_%29.md): A constant that indicates that the operation clips gradients to a specified Euclidean norm.
- [BNNS.GradientClipping.byGlobalNorm(threshold:globalNorm:)](byglobalnorm%28threshold_globalnorm_%29.md): A constant that indicates that the operation clips gradients to a specified global Euclidean norm.
