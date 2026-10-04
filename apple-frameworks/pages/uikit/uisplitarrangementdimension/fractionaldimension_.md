> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisplitarrangementdimension/fractionaldimension:

# fractionalDimension:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

A fractional dimension for a split arrangement.

## Declaration

```objectivec
+ (instancetype) fractionalDimension:(CGFloat) fraction;
```

## Parameters

- `fraction`: The fraction of the container to use.

## See Also

### Getting a dimension

- [automaticDimension](automaticdimension.md): The automatic dimension for a split arrangement.
- [intrinsicDimension](intrinsicdimension.md): The intrinsic dimension for a split arrangement based on intrinsic content size.
- [absoluteDimension:](absolutedimension_.md): An absolute dimension for a split arrangement.
