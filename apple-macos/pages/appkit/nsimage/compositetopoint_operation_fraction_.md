> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/compositetopoint:operation:fraction:](https://developer.apple.com/documentation/appkit/nsimage/compositetopoint:operation:fraction:)

# compositeToPoint:operation:fraction:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Composites the entire image at the specified opacity in the current coordinate system.

> Use [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md) instead.

## Declaration

```objectivec
- (void) compositeToPoint:(NSPoint) point operation:(NSCompositingOperation) operation fraction:(CGFloat) fraction;
```

## Parameters

- `point`: The point at which to draw the image, specified in the current coordinate system.
- `operation`: The compositing operation to use when drawing the image to the screen. The supported compositing operations are described in `Constants`.
- `fraction`: The desired opacity of the image, specified as a value between 0.0 and 1.0, with 1.0 representing total opacity. Values larger than 1.0 are interpreted as 1.0. This method always expects to render something, so for values that are equal to or less than 0, this method renders at full opacity.

<a id="Discussion"></a>

## Discussion

Behaves the same as [compositeToPoint:operation:](compositetopoint_operation_.md) except that you can specify the amount of opacity to use when drawing the image.

## See Also

### Related Documentation

- [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [dissolveToPoint:fraction:](dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.

### Instance Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped:](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [initWithIconRef:](init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.
- [lockFocusOnRepresentation:](lockfocusonrepresentation_.md): Deprecated. Prepares the specified image representation to receive drawing commands.
- [bestRepresentationForDevice:](bestrepresentationfordevice_.md): Deprecated. Returns the best representation for the device with the specified characteristics.
- [compositeToPoint:operation:](compositetopoint_operation_.md): Deprecated. Composites the entire image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:](compositetopoint_fromrect_operation_.md): Deprecated. Composites a portion of the image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:fraction:](compositetopoint_fromrect_operation_fraction_.md): Deprecated. Composites a portion of the image at the specified opacity to the current coordinate system.
- [dissolveToPoint:fraction:](dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.
- [dissolveToPoint:fromRect:fraction:](dissolvetopoint_fromrect_fraction_.md): Deprecated. Composites a portion of the image to the specified location using the source-over operator.
- [setScalesWhenResized:](setscaleswhenresized_.md): Deprecated. Sets whether to scale different-sized image representations to fit the image’s size.
- [scalesWhenResized](scaleswhenresized.md): Deprecated. Returns a Boolean value that indicates whether to scale image representations to fit the image’s size.
- [setDataRetained:](setdataretained_.md): Deprecated. Sets whether the image retains its source image data.
- [isDataRetained](isdataretained.md): Deprecated. Returns a Boolean value that incidates whether the image retains its source image data.
