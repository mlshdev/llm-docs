> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatternreleaseinfocallback](https://developer.apple.com/documentation/coregraphics/cgpatternreleaseinfocallback)

# CGPatternReleaseInfoCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Release private data or resources associated with the pattern.

## Declaration

```swift
typealias CGPatternReleaseInfoCallback = (UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md).

<a id="Discussion"></a>

## Discussion

Quartz calls your release function when it frees your pattern object.

To learn how to associate your release function with a Quartz pattern, see [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md) and [CGPatternCallbacks](cgpatterncallbacks.md).

## See Also

### Callbacks

- [CGPatternCallbacks](cgpatterncallbacks.md): A structure that holds a version and two callback functions for drawing a custom pattern.
- [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md): Draws a pattern cell.

# CGPatternReleaseInfoCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Release private data or resources associated with the pattern.

## Declaration

```objectivec
typedef void (*)(void *) CGPatternReleaseInfoCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md).

<a id="Discussion"></a>

## Discussion

Quartz calls your release function when it frees your pattern object.

To learn how to associate your release function with a Quartz pattern, see [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md) and [CGPatternCallbacks](cgpatterncallbacks.md).

## See Also

### Callbacks

- [CGPatternCallbacks](cgpatterncallbacks.md): A structure that holds a version and two callback functions for drawing a custom pattern.
- [CGPatternDrawPatternCallback](cgpatterndrawpatterncallback.md): Draws a pattern cell.
