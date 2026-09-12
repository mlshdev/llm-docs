> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontroller/viewportbounds](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontroller/viewportbounds)

# viewportBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the visible bounds of the view, plus the overdraw area.

## Declaration

```swift
var viewportBounds: CGRect { get }
```

## See Also

### Accessing the viewport characteristics

- [viewportRange](viewportrange.md): Returns the text range of the current viewport layout.
- [adjustViewport(byVerticalOffset:)](adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport()](layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewport(to:)](relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.

# viewportBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the visible bounds of the view, plus the overdraw area.

## Declaration

```objectivec
@property (readonly) CGRect viewportBounds;
```

## See Also

### Accessing the viewport characteristics

- [viewportRange](viewportrange.md): Returns the text range of the current viewport layout.
- [adjustViewportByVerticalOffset:](adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport](layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewportToTextLocation:](relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.
