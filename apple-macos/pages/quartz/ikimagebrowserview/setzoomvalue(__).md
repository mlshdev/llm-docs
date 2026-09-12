> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setzoomvalue(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setzoomvalue(_:))

# setZoomValue(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the zoom value.

## Declaration

```swift
func setZoomValue(_ aValue: Float)
```

## Parameters

- `aValue`: The zoom value. This value should be greater or equal to zero and less or equal than one. A zoom value of zero corresponds to the minimum size (40x40 pixels). A zoom value of one means images fits the browser bounds. Other values are interpolated.

<a id="Discussion"></a>

## Discussion

You must use `setZoomValue` or [setCellSize(\_:)](setcellsize%28__%29.md), but not both. Setting the zoom value changes the cell size, and vice versa.

## See Also

### Related Documentation

- [setCellSize(\_:)](setcellsize%28__%29.md): Sets the cell size.

### Zooming and Resizing

- [zoomValue()](zoomvalue%28%29.md): Returns the current zoom value.
- [setContentResizingMask(\_:)](setcontentresizingmask%28__%29.md): Determines how the receiver resizes its content when zooming.
- [contentResizingMask()](contentresizingmask%28%29.md): Returns the receiver’s content resizing mask, which determines how its content is resized while zooming.

# setZoomValue: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the zoom value.

## Declaration

```objectivec
- (void) setZoomValue:(float) aValue;
```

## Parameters

- `aValue`: The zoom value. This value should be greater or equal to zero and less or equal than one. A zoom value of zero corresponds to the minimum size (40x40 pixels). A zoom value of one means images fits the browser bounds. Other values are interpolated.

<a id="Discussion"></a>

## Discussion

You must use `setZoomValue` or [setCellSize:](setcellsize%28__%29.md), but not both. Setting the zoom value changes the cell size, and vice versa.

## See Also

### Related Documentation

- [setCellSize:](setcellsize%28__%29.md): Sets the cell size.

### Zooming and Resizing

- [zoomValue](zoomvalue%28%29.md): Returns the current zoom value.
- [setContentResizingMask:](setcontentresizingmask%28__%29.md): Determines how the receiver resizes its content when zooming.
- [contentResizingMask](contentresizingmask%28%29.md): Returns the receiver’s content resizing mask, which determines how its content is resized while zooming.
