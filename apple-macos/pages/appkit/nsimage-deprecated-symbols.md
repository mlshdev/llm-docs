> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage-deprecated-symbols](https://developer.apple.com/documentation/appkit/nsimage-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Review symbols that are no longer supported, and find the replacements to use instead.

## Topics

### Class Methods

- [imageFileTypes()](nsimage/imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imageUnfilteredFileTypes()](nsimage/imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imagePasteboardTypes()](nsimage/imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes()](nsimage/imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

### Instance Methods

- [lockFocus()](nsimage/lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped(\_:)](nsimage/lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus()](nsimage/unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [init(iconRef:)](nsimage/init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.

# Deprecated Symbols (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Review symbols that are no longer supported, and find the replacements to use instead.

## Topics

### Class Methods

- [imageFileTypes](nsimage/imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imageUnfilteredFileTypes](nsimage/imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imagePasteboardTypes](nsimage/imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes](nsimage/imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

### Instance Methods

- [lockFocus](nsimage/lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped:](nsimage/lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus](nsimage/unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [initWithIconRef:](nsimage/init%28iconref_%29.md): Deprecated. Initializes the image object with a Carbon-style icon resource.
- [lockFocusOnRepresentation:](nsimage/lockfocusonrepresentation_.md): Deprecated. Prepares the specified image representation to receive drawing commands.
- [bestRepresentationForDevice:](nsimage/bestrepresentationfordevice_.md): Deprecated. Returns the best representation for the device with the specified characteristics.
- [compositeToPoint:operation:](nsimage/compositetopoint_operation_.md): Deprecated. Composites the entire image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:](nsimage/compositetopoint_fromrect_operation_.md): Deprecated. Composites a portion of the image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:fraction:](nsimage/compositetopoint_fromrect_operation_fraction_.md): Deprecated. Composites a portion of the image at the specified opacity to the current coordinate system.
- [compositeToPoint:operation:fraction:](nsimage/compositetopoint_operation_fraction_.md): Deprecated. Composites the entire image at the specified opacity in the current coordinate system.
- [dissolveToPoint:fraction:](nsimage/dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.
- [dissolveToPoint:fromRect:fraction:](nsimage/dissolvetopoint_fromrect_fraction_.md): Deprecated. Composites a portion of the image to the specified location using the source-over operator.
- [setScalesWhenResized:](nsimage/setscaleswhenresized_.md): Deprecated. Sets whether to scale different-sized image representations to fit the image’s size.
- [scalesWhenResized](nsimage/scaleswhenresized.md): Deprecated. Returns a Boolean value that indicates whether to scale image representations to fit the image’s size.
- [setDataRetained:](nsimage/setdataretained_.md): Deprecated. Sets whether the image retains its source image data.
- [isDataRetained](nsimage/isdataretained.md): Deprecated. Returns a Boolean value that incidates whether the image retains its source image data.
- [setCachedSeparately:](nsimage/setcachedseparately_.md): Deprecated. Sets whether each image representation uses a separate offscreen window to cache its contents.
- [isCachedSeparately](nsimage/iscachedseparately.md): Deprecated. Returns a Boolean value that indicates whether each image representation caches its contents in a separate offscreen window.
- [setCacheDepthMatchesImageDepth:](nsimage/setcachedepthmatchesimagedepth_.md): Deprecated. Sets whether the image’s offscreen window caches use the same bit depth as the image data itself.
- [cacheDepthMatchesImageDepth](nsimage/cachedepthmatchesimagedepth.md): Deprecated. Returns a Boolean value that indicates whether an image’s offscreen window caches use the same bit depth as the image data itself.
- [setFlipped:](nsimage/setflipped_.md): Deprecated. Sets whether the polarity of the y axis is inverted when drawing an image.
- [isFlipped](nsimage/isflipped.md): Deprecated. Returns a Boolean value that indicates whether the image uses a flipped coordinate system.
