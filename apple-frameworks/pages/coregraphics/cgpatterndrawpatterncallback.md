> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatterndrawpatterncallback](https://developer.apple.com/documentation/coregraphics/cgpatterndrawpatterncallback)

# CGPatternDrawPatternCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Draws a pattern cell.

## Declaration

```swift
typealias CGPatternDrawPatternCallback = (UnsafeMutableRawPointer?, CGContext) -> Void
```

## Parameters

- `info`: A generic pointer to private data associated with the pattern. This is the same pointer you supplied to [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md).
- `context`: The graphics context for drawing the pattern cell.

<a id="Discussion"></a>

## Discussion

When a pattern is used to stroke or fill a graphics path,Quartz calls your custom drawing function at the appropriatetime to draw the pattern cell. The cell should be drawn exactly thesame way each time the drawing function is called.

In a drawing function associated with an uncolored pattern,you should not attempt to set a stroke or fill color or color space—ifyou do so, the result is undefined.

To learn how to associate your drawing function with a Quartzpattern, see [init(info:bounds:matrix:xStep:yStep:tiling:isColored:callbacks:)](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md) and [CGPatternCallbacks](cgpatterncallbacks.md).

## See Also

### Callbacks

- [CGPatternCallbacks](cgpatterncallbacks.md): A structure that holds a version and two callback functions for drawing a custom pattern.
- [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md): Release private data or resources associated with the pattern.

# CGPatternDrawPatternCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Draws a pattern cell.

## Declaration

```objectivec
typedef void (*)(void *, struct CGContext *) CGPatternDrawPatternCallback;
```

## Parameters

- `info`: A generic pointer to private data associated with the pattern. This is the same pointer you supplied to [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md).
- `context`: The graphics context for drawing the pattern cell.

<a id="Discussion"></a>

## Discussion

When a pattern is used to stroke or fill a graphics path,Quartz calls your custom drawing function at the appropriatetime to draw the pattern cell. The cell should be drawn exactly thesame way each time the drawing function is called.

In a drawing function associated with an uncolored pattern,you should not attempt to set a stroke or fill color or color space—ifyou do so, the result is undefined.

To learn how to associate your drawing function with a Quartzpattern, see [CGPatternCreate](cgpattern/init%28info_bounds_matrix_xstep_ystep_tiling_iscolored_callbacks_%29.md) and [CGPatternCallbacks](cgpatterncallbacks.md).

## See Also

### Callbacks

- [CGPatternCallbacks](cgpatterncallbacks.md): A structure that holds a version and two callback functions for drawing a custom pattern.
- [CGPatternReleaseInfoCallback](cgpatternreleaseinfocallback.md): Release private data or resources associated with the pattern.
