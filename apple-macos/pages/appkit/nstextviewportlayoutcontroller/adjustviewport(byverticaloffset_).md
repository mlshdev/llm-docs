> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontroller/adjustviewport(byverticaloffset:)](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontroller/adjustviewport(byverticaloffset:))

# adjustViewport(byVerticalOffset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Adjusts the viewport rect by the specified offset if needed.

## Declaration

```swift
func adjustViewport(byVerticalOffset verticalOffset: CGFloat)
```

## Parameters

- `verticalOffset`: A `CGFloat` that represents the offset amount to apply to the viewport.

## See Also

### Accessing the viewport characteristics

- [viewportBounds](viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [viewportRange](viewportrange.md): Returns the text range of the current viewport layout.
- [layoutViewport()](layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewport(to:)](relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.

# adjustViewportByVerticalOffset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Adjusts the viewport rect by the specified offset if needed.

## Declaration

```objectivec
- (void) adjustViewportByVerticalOffset:(CGFloat) verticalOffset;
```

## Parameters

- `verticalOffset`: A `CGFloat` that represents the offset amount to apply to the viewport.

## See Also

### Accessing the viewport characteristics

- [viewportBounds](viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [viewportRange](viewportrange.md): Returns the text range of the current viewport layout.
- [layoutViewport](layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewportToTextLocation:](relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.
