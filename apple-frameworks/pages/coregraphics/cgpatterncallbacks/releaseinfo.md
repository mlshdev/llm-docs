> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatterncallbacks/releaseinfo](https://developer.apple.com/documentation/coregraphics/cgpatterncallbacks/releaseinfo)

# releaseInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](../cgpatternreleaseinfocallback.md).

## Declaration

```swift
var releaseInfo: CGPatternReleaseInfoCallback?
```

## See Also

### Instance Properties

- [drawPattern](drawpattern.md): A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](../cgpatterndrawpatterncallback.md).
- [version](version.md): The version of the structure passed in as a parameterto the [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](../cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.

# releaseInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](../cgpatternreleaseinfocallback.md).

## Declaration

```objectivec
CGPatternReleaseInfoCallback releaseInfo;
```

## See Also

### Instance Properties

- [drawPattern](drawpattern.md): A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](../cgpatterndrawpatterncallback.md).
- [version](version.md): The version of the structure passed in as a parameterto the [CGPatternCreate](../cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.
