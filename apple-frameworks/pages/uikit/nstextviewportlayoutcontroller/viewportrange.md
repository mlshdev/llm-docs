> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontroller/viewportrange](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontroller/viewportrange)

# viewportRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text range of the current viewport layout.

## Declaration

```swift
var viewportRange: NSTextRange? { get }
```

## See Also

### Accessing the viewport characteristics

- [viewportBounds](viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [adjustViewport(byVerticalOffset:)](adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport()](layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewport(to:)](relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.

# viewportRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text range of the current viewport layout.

## Declaration

```objectivec
@property (readonly, nullable) NSTextRange * viewportRange;
```

## See Also

### Accessing the viewport characteristics

- [viewportBounds](viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [adjustViewportByVerticalOffset:](adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport](layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewportToTextLocation:](relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.
