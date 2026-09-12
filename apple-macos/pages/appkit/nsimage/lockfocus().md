> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/lockfocus()](https://developer.apple.com/documentation/appkit/nsimage/lockfocus())

# lockFocus() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Prepares the image to receive drawing commands.

> Use [init(size:flipped:drawingHandler:)](init%28size_flipped_drawinghandler_%29.md) instead.

## Declaration

```swift
func lockFocus()
```

<a id="Discussion"></a>

## Discussion

This method sets the current drawing context to the area of the offscreen window used to cache the receiver’s contents. Subsequent drawing commands are composited to this offscreen window. If the offscreen drawing area already has some content, any new drawing commands are composited with that content. This method does not modify the original image data directly.

When locking focus, this method chooses the best image representation object available and locks focus on that object. If the receiver has no image representations, this method creates one with the default depth and locks focus on it.

A successful [lockFocus()](lockfocus%28%29.md) message must be balanced with a matching [unlockFocus()](unlockfocus%28%29.md) message to the same `NSImage` object. These messages bracket the code that draws the image.

If [lockFocus()](lockfocus%28%29.md) is unable to focus on the image, it raises an `NSImageCacheException`.

## See Also

### Related Documentation

- [isValid](isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [prefersColorMatch](preferscolormatch.md): A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.

### Instance Methods

- [lockFocusFlipped(\_:)](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [init(iconRef:)](init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.

# lockFocus (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Prepares the image to receive drawing commands.

> Use [imageWithSize:flipped:drawingHandler:](init%28size_flipped_drawinghandler_%29.md) instead.

## Declaration

```objectivec
- (void) lockFocus;
```

<a id="Discussion"></a>

## Discussion

This method sets the current drawing context to the area of the offscreen window used to cache the receiver’s contents. Subsequent drawing commands are composited to this offscreen window. If the offscreen drawing area already has some content, any new drawing commands are composited with that content. This method does not modify the original image data directly.

When locking focus, this method chooses the best image representation object available and locks focus on that object. If the receiver has no image representations, this method creates one with the default depth and locks focus on it.

A successful [lockFocus](lockfocus%28%29.md) message must be balanced with a matching [unlockFocus](unlockfocus%28%29.md) message to the same `NSImage` object. These messages bracket the code that draws the image.

If [lockFocus](lockfocus%28%29.md) is unable to focus on the image, it raises an `NSImageCacheException`.

## See Also

### Related Documentation

- [valid](isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [prefersColorMatch](preferscolormatch.md): A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.
- [bestRepresentationForDevice:](bestrepresentationfordevice_.md): Deprecated. Returns the best representation for the device with the specified characteristics.

### Instance Methods

- [lockFocusFlipped:](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
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
