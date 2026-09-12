> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/lockfocusflipped(_:)](https://developer.apple.com/documentation/appkit/nsimage/lockfocusflipped(_:))

# lockFocusFlipped(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 27.0)

Prepares the image to receive drawing commands using the specified flipped state.

> Use [init(size:flipped:drawingHandler:)](init%28size_flipped_drawinghandler_%29.md) instead.

## Declaration

```swift
func lockFocusFlipped(_ flipped: Bool)
```

## Parameters

- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the drawing context should be flipped, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Instance Methods

- [lockFocus()](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [init(iconRef:)](init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.

# lockFocusFlipped: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 27.0)

Prepares the image to receive drawing commands using the specified flipped state.

> Use [imageWithSize:flipped:drawingHandler:](init%28size_flipped_drawinghandler_%29.md) instead.

## Declaration

```objectivec
- (void) lockFocusFlipped:(BOOL) flipped;
```

## Parameters

- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the drawing context should be flipped, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Instance Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [initWithIconRef:](init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.
- [lockFocusOnRepresentation:](lockfocusonrepresentation_.md): Deprecated. Prepares the specified image representation to receive drawing commands.
- [bestRepresentationForDevice:](bestrepresentationfordevice_.md): Deprecated. Returns the best representation for the device with the specified characteristics.
- [compositeToPoint:operation:](compositetopoint_operation_.md): Deprecated. Composites the entire image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:](compositetopoint_fromrect_operation_.md): Deprecated. Composites a portion of the image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:fraction:](compositetopoint_fromrect_operation_fraction_.md): Deprecated. Composites a portion of the image at the specified opacity to the current coordinate system.
- [compositeToPoint:operation:fraction:](compositetopoint_operation_fraction_.md): Deprecated. Composites the entire image at the specified opacity in the current coordinate system.
- [dissolveToPoint:fraction:](dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.
- [dissolveToPoint:fromRect:fraction:](dissolvetopoint_fromrect_fraction_.md): Deprecated. Composites a portion of the image to the specified location using the source-over operator.
- [setScalesWhenResized:](setscaleswhenresized_.md): Deprecated. Sets whether to scale different-sized image representations to fit the image’s size.
- [scalesWhenResized](scaleswhenresized.md): Deprecated. Returns a Boolean value that indicates whether to scale image representations to fit the image’s size.
- [setDataRetained:](setdataretained_.md): Deprecated. Sets whether the image retains its source image data.
- [isDataRetained](isdataretained.md): Deprecated. Returns a Boolean value that incidates whether the image retains its source image data.
