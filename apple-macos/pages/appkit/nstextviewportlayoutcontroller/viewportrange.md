> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontroller/viewportrange](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontroller/viewportrange)

# viewportRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

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
