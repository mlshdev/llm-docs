> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontroller/relocateviewport(to:)](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontroller/relocateviewport(to:))

# relocateViewport(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Relocates the viewport to the location you specify.

## Declaration

```swift
func relocateViewport(to textLocation: any NSTextLocation) -> CGFloat
```

## Parameters

- `textLocation`: An `NSTextLocation`.

## See Also

### Accessing the viewport characteristics

- [viewportBounds](viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [viewportRange](viewportrange.md): Returns the text range of the current viewport layout.
- [adjustViewport(byVerticalOffset:)](adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport()](layoutviewport%28%29.md): Performs layout in the viewport.

# relocateViewportToTextLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Relocates the viewport to the location you specify.

## Declaration

```objectivec
- (CGFloat) relocateViewportToTextLocation:(id<NSTextLocation>) textLocation;
```

## Parameters

- `textLocation`: An `NSTextLocation`.

## See Also

### Accessing the viewport characteristics

- [viewportBounds](viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [viewportRange](viewportrange.md): Returns the text range of the current viewport layout.
- [adjustViewportByVerticalOffset:](adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport](layoutviewport%28%29.md): Performs layout in the viewport.
