> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatterncallbacks](https://developer.apple.com/documentation/coregraphics/cgpatterncallbacks)

# CGPatternCallbacks (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that holds a version and two callback functions for drawing a custom pattern.

## Declaration

```swift
struct CGPatternCallbacks
```

<a id="overview"></a>

## Overview

You supply a [CGPatternCallbacks](cgpatterncallbacks.md) structure to the function [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md) to create a data provider for direct access. The functions specified by the [CGPatternCallbacks](cgpatterncallbacks.md) structure are responsible for drawing the pattern and for handling the pattern’s memory management.

## Topics

### Initializers

- [init()](cgpatterncallbacks/init%28%29.md)
- [init(version:drawPattern:releaseInfo:)](cgpatterncallbacks/init%28version_drawpattern_releaseinfo_%29.md)

### Instance Properties

- [drawPattern](cgpatterncallbacks/drawpattern.md): A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md).
- [releaseInfo](cgpatterncallbacks/releaseinfo.md): An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md).
- [version](cgpatterncallbacks/version.md): The version of the structure passed in as a parameterto the [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Callbacks

- [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md): Draws a pattern cell.
- [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md): Release private data or resources associated with the pattern.

# CGPatternCallbacks (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that holds a version and two callback functions for drawing a custom pattern.

## Declaration

```objectivec
struct CGPatternCallbacks;
```

<a id="overview"></a>

## Overview

You supply a [CGPatternCallbacks](cgpatterncallbacks.md) structure to the function [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md) to create a data provider for direct access. The functions specified by the [CGPatternCallbacks](cgpatterncallbacks.md) structure are responsible for drawing the pattern and for handling the pattern’s memory management.

## Topics

### Instance Properties

- [drawPattern](cgpatterncallbacks/drawpattern.md): A pointer to a custom function that draws thepattern. For information about this callback function, see [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md).
- [releaseInfo](cgpatterncallbacks/releaseinfo.md): An optional pointer to a custom function that’sinvoked when the pattern is released. [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md).
- [version](cgpatterncallbacks/version.md): The version of the structure passed in as a parameterto the [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md). Forthis version of the structure, you should set this value to zero.

## See Also

### Callbacks

- [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md): Draws a pattern cell.
- [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md): Release private data or resources associated with the pattern.
