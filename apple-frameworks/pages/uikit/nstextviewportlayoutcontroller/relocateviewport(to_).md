> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontroller/relocateviewport(to:)](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontroller/relocateviewport(to:))

# relocateViewport(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
