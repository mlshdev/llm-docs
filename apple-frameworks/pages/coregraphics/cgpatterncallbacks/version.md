> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatterncallbacks/version](https://developer.apple.com/documentation/coregraphics/cgpatterncallbacks/version)

# version (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version of the structure passed in as a parameterto the [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](../cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.

## Declaration

```swift
var version: UInt32
```

## See Also

### Instance Properties

- [drawPattern](drawpattern.md): A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](../cgpatterndrawpatterncallback.md).
- [releaseInfo](releaseinfo.md): An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](../cgpatternreleaseinfocallback.md).

# version (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version of the structure passed in as a parameterto the [CGPatternCreate](../cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.

## Declaration

```objectivec
unsigned int version;
```

## See Also

### Instance Properties

- [drawPattern](drawpattern.md): A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](../cgpatterndrawpatterncallback.md).
- [releaseInfo](releaseinfo.md): An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](../cgpatternreleaseinfocallback.md).
