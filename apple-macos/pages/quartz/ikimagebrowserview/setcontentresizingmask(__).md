> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setcontentresizingmask(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setcontentresizingmask(_:))

# setContentResizingMask(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Determines how the receiver resizes its content when zooming.

## Declaration

```swift
func setContentResizingMask(_ mask: Int)
```

## Parameters

- `mask`: A resizing mask. You specify a mask by combining any of the following options using the C bitwise `OR` operator: [width](../../appkit/nsview/autoresizingmask-swift.struct/width.md), [height](../../appkit/nsview/autoresizingmask-swift.struct/height.md). Other values are ignored.

## See Also

### Zooming and Resizing

- [setZoomValue(\_:)](setzoomvalue%28__%29.md): Sets the zoom value.
- [zoomValue()](zoomvalue%28%29.md): Returns the current zoom value.
- [contentResizingMask()](contentresizingmask%28%29.md): Returns the receiver’s content resizing mask, which determines how its content is resized while zooming.

# setContentResizingMask: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Determines how the receiver resizes its content when zooming.

## Declaration

```objectivec
- (void) setContentResizingMask:(NSUInteger) mask;
```

## Parameters

- `mask`: A resizing mask. You specify a mask by combining any of the following options using the C bitwise `OR` operator: [NSViewWidthSizable](../../appkit/nsview/autoresizingmask-swift.struct/width.md), [NSViewHeightSizable](../../appkit/nsview/autoresizingmask-swift.struct/height.md). Other values are ignored.

## See Also

### Zooming and Resizing

- [setZoomValue:](setzoomvalue%28__%29.md): Sets the zoom value.
- [zoomValue](zoomvalue%28%29.md): Returns the current zoom value.
- [contentResizingMask](contentresizingmask%28%29.md): Returns the receiver’s content resizing mask, which determines how its content is resized while zooming.
