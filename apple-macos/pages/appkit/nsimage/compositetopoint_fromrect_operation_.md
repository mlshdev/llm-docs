> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/compositetopoint:fromrect:operation:](https://developer.apple.com/documentation/appkit/nsimage/compositetopoint:fromrect:operation:)

# compositeToPoint:fromRect:operation:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Composites a portion of the image to the specified point in the current coordinate system.

> Use [drawInRect:fromRect:operation:fraction:](draw%28in_from_operation_fraction_%29.md) instead.

## Declaration

```objectivec
- (void) compositeToPoint:(NSPoint) point fromRect:(NSRect) rect operation:(NSCompositingOperation) operation;
```

## Parameters

- `point`: The point at which to draw the image, specified in the current coordinate system.
- `rect`: The portion of the image you want to draw, specified in the image’s coordinate system.
- `operation`: The compositing operation to use when drawing the image to the screen. The supported compositing operations are described in `Constants`.

<a id="Discussion"></a>

## Discussion

This method draws the specified portion of the image without checking the bounds rectangle you pass into the `srcRect` parameter. If you specify a source rectangle that strays outside of the image’s bounds rectangle, it is conceivable that you could composite parts of the offscreen cache window that do not belong to the receiver’s image. You can avoid this problem using the [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md) method, which checks the source rectangle before drawing.

During drawing, the image is composited from its offscreen window cache. Because the offscreen cache is not created until the image representation is first used, this method may need to render the image before compositing. Bitmap representations in particular are not cached until they are explicitly rendered. You can use the [lockFocus](lockfocus%28%29.md) and [unlockFocus](unlockfocus%28%29.md) methods to force the cached version to be created.

Compositing part of an image is as efficient as compositing the whole image, but printing just part of an image is not. When printing, it’s necessary to draw the whole image and rely on a clipping path to be sure that only the desired portion appears.

During printing, this method ignores the `op` parameter. Even though this parameter is ignored, this method attempts to render the image as close as possible to its appearance when the compositing operation is used on the screen. In either case, the best image representation is chosen for the printing context.

## See Also

### Related Documentation

- [dissolveToPoint:fromRect:fraction:](dissolvetopoint_fromrect_fraction_.md): Deprecated. Composites a portion of the image to the specified location using the source-over operator.
- [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.

### Instance Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped:](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [initWithIconRef:](init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.
- [lockFocusOnRepresentation:](lockfocusonrepresentation_.md): Deprecated. Prepares the specified image representation to receive drawing commands.
- [bestRepresentationForDevice:](bestrepresentationfordevice_.md): Deprecated. Returns the best representation for the device with the specified characteristics.
- [compositeToPoint:operation:](compositetopoint_operation_.md): Deprecated. Composites the entire image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:fraction:](compositetopoint_fromrect_operation_fraction_.md): Deprecated. Composites a portion of the image at the specified opacity to the current coordinate system.
- [compositeToPoint:operation:fraction:](compositetopoint_operation_fraction_.md): Deprecated. Composites the entire image at the specified opacity in the current coordinate system.
- [dissolveToPoint:fraction:](dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.
- [dissolveToPoint:fromRect:fraction:](dissolvetopoint_fromrect_fraction_.md): Deprecated. Composites a portion of the image to the specified location using the source-over operator.
- [setScalesWhenResized:](setscaleswhenresized_.md): Deprecated. Sets whether to scale different-sized image representations to fit the image’s size.
- [scalesWhenResized](scaleswhenresized.md): Deprecated. Returns a Boolean value that indicates whether to scale image representations to fit the image’s size.
- [setDataRetained:](setdataretained_.md): Deprecated. Sets whether the image retains its source image data.
- [isDataRetained](isdataretained.md): Deprecated. Returns a Boolean value that incidates whether the image retains its source image data.
