> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/lockfocusonrepresentation:](https://developer.apple.com/documentation/appkit/nsimage/lockfocusonrepresentation:)

# lockFocusOnRepresentation:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Prepares the specified image representation to receive drawing commands.

> Use the code fragment shown in the special considerations below.

## Declaration

```objectivec
- (void) lockFocusOnRepresentation:(NSImageRep *) imageRepresentation;
```

## Parameters

- `imageRepresentation`: An image representation belonging to the receiver, or `nil` if you want the receiver to choose which image representation to use.

<a id="Discussion"></a>

## Discussion

This method sets the current drawing context to the area of the offscreen window used to cache the specified image representation’s contents. Subsequent drawing commands are composited to this offscreen window. If the offscreen drawing area already has some content, any new drawing commands are composited with that content. This method does not modify the original image data directly.

If `imageRepresentation` is `nil`, this method acts like the [lockFocus](lockfocus%28%29.md) method, setting the focus to the best representation for the `NSImage` object.

A successful [lockFocusOnRepresentation:](lockfocusonrepresentation_.md) message must be balanced with a matching [unlockFocus](unlockfocus%28%29.md) message to the same `NSImage` object. These messages bracket the code that draws the image.

If [lockFocusOnRepresentation:](lockfocusonrepresentation_.md) is unable to focus on the specified image representation, it raises an `NSImageCacheException`.

<a id="Special-Considerations"></a>

### Special Considerations

This method is deprecated as it did not set up `imageRepresentation` as a drawing destination, it set the image up as a drawing destination, then drew `imageRepresentation` into it. You can replace this functionality with the following code fragment:

```objc
[image lockFocus];
[imageRepresentation drawInRect:NSMakeRect(0,0,[image size].width, [image size].height)];
 
[image unlockFocus];
```

## See Also

### Related Documentation

- [valid](isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.

### Instance Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped:](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [initWithIconRef:](init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.
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
