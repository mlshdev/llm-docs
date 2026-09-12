> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontroller/adjustviewport(byverticaloffset:)](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontroller/adjustviewport(byverticaloffset:))

# adjustViewport(byVerticalOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
