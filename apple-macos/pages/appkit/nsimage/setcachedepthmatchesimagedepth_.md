> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/setcachedepthmatchesimagedepth:](https://developer.apple.com/documentation/appkit/nsimage/setcachedepthmatchesimagedepth:)

# setCacheDepthMatchesImageDepth:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Sets whether the image’s offscreen window caches use the same bit depth as the image data itself.

> `NSImage` no longer caches to windows. A cache is now generated appropriate for the destination where an image is drawn. There is no replacement method.

## Declaration

```objectivec
- (void) setCacheDepthMatchesImageDepth:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the offscreen caches use the same bit-depth associated with the image data; otherwise, [false](https://developer.apple.com/documentation/swift/false) to indicate they should use the default bit depth.

<a id="Discussion"></a>

## Discussion

This method does not cause the receiver to recache itself. The default depth limit is equal to the bit depth of the deepest screen on the system.

## See Also

### Related Documentation

- [recache](recache%28%29.md): Invalidates and frees offscreen caches of all image representations.
- [lockFocus](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [cacheDepthMatchesImageDepth](cachedepthmatchesimagedepth.md): Deprecated. Returns a Boolean value that indicates whether an image’s offscreen window caches use the same bit depth as the image data itself.

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
- [compositeToPoint:operation:fraction:](compositetopoint_operation_fraction_.md): Deprecated. Composites the entire image at the specified opacity in the current coordinate system.
- [dissolveToPoint:fraction:](dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.
- [dissolveToPoint:fromRect:fraction:](dissolvetopoint_fromrect_fraction_.md): Deprecated. Composites a portion of the image to the specified location using the source-over operator.
- [setScalesWhenResized:](setscaleswhenresized_.md): Deprecated. Sets whether to scale different-sized image representations to fit the image’s size.
- [scalesWhenResized](scaleswhenresized.md): Deprecated. Returns a Boolean value that indicates whether to scale image representations to fit the image’s size.
- [setDataRetained:](setdataretained_.md): Deprecated. Sets whether the image retains its source image data.
