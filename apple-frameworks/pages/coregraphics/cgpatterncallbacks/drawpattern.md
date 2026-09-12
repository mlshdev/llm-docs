> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatterncallbacks/drawpattern](https://developer.apple.com/documentation/coregraphics/cgpatterncallbacks/drawpattern)

# drawPattern (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](../cgpatterndrawpatterncallback.md).

## Declaration

```swift
var drawPattern: CGPatternDrawPatternCallback?
```

## See Also

### Instance Properties

- [releaseInfo](releaseinfo.md): An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](../cgpatternreleaseinfocallback.md).
- [version](version.md): The version of the structure passed in as a parameterto the [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](../cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.

# drawPattern (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](../cgpatterndrawpatterncallback.md).

## Declaration

```objectivec
CGPatternDrawPatternCallback drawPattern;
```

## See Also

### Instance Properties

- [releaseInfo](releaseinfo.md): An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](../cgpatternreleaseinfocallback.md).
- [version](version.md): The version of the structure passed in as a parameterto the [CGPatternCreate](../cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.
