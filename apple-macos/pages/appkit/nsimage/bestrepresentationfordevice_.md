> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/bestrepresentationfordevice:](https://developer.apple.com/documentation/appkit/nsimage/bestrepresentationfordevice:)

# bestRepresentationForDevice:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the best representation for the device with the specified characteristics.

> Use [bestRepresentationForRect:context:hints:](bestrepresentation%28for_context_hints_%29.md) instead.

## Declaration

```objectivec
- (NSImageRep *) bestRepresentationForDevice:(NSDictionary *) deviceDescription;
```

## Parameters

- `deviceDescription`: A dictionary of attributes for the specified device, or `nil` to specify the current device. For a list of dictionary keys and values appropriate to display and print devices, see the constants in [NSScreen](../nsscreen.md).

<a id="return-value"></a>

## Return Value

The image representation that most closely matches the specified criteria.

<a id="Discussion"></a>

## Discussion

If `deviceDescription` is `nil`, this method uses the attributes of the device on which the content is to be drawn.

## See Also

### Related Documentation

- [valid](isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [matchesOnMultipleResolution](matchesonmultipleresolution.md): A Boolean value that indicates whether image representations whose resolution is an integral multiple of the device resolution are a match.
- [prefersColorMatch](preferscolormatch.md): A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.

### Instance Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped:](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [initWithIconRef:](init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.
- [lockFocusOnRepresentation:](lockfocusonrepresentation_.md): Deprecated. Prepares the specified image representation to receive drawing commands.
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
