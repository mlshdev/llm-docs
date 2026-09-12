> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/resizableimage(withcapinsets:)](https://developer.apple.com/documentation/uikit/uiimage/resizableimage(withcapinsets:))

# resizableImage(withCapInsets:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the image with the specified cap insets.

## Declaration

```swift
func resizableImage(withCapInsets capInsets: UIEdgeInsets) -> UIImage
```

## Parameters

- `capInsets`: The values to use for the cap insets.

<a id="return-value"></a>

## Return Value

A new image object with the specified cap insets.

<a id="Discussion"></a>

## Discussion

You use this method to add cap insets to an image or to change the existing cap insets of an image. In both cases, you get back a new image and the original image remains untouched. For example, you can use this method to create a background image for a button with borders and corners: when the button is resized, the corners of the image remain unchanged, but the borders and center of the image expand to cover the new size.

iOS uses different rendering techniques, with different performance characteristics, depending on the size of each resizable area in the image:

- If resizable areas have a width or height of 1 pixel—that is, a horizontally resizable area is 1 pixel wide, a vertically resizable area is 1 pixel tall, or the center region of the image is 1 x 1 pixel—iOS draws the image by stretching the 1-pixel region. This mode provides the fastest performance (for nonzero cap insets).
- If resizable areas have a width or height greater than 1 pixel, iOS draws the image by tiling the region. This mode provides reduced performance, but can be useful for images with textured (rather than solid-color) content in their resizable areas.
- If the entire image is resizable—that is, the `capInsets` parameter is [zero](../uiedgeinsets/zero.md)—and its size is greater than 1 x 1 pixel, iOS draws the image by tiling the entire image. This mode is faster than the tiling mode for nonzero cap insets.

To instead directly control the resizing mode, use the [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md) method.

## See Also

### Changing the image attributes

- [withConfiguration(\_:)](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [applyingSymbolConfiguration(\_:)](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection()](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [withHorizontallyFlippedOrientation()](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [withRenderingMode(\_:)](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [withAlignmentRectInsets(\_:)](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline()](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [withBaselineOffset(fromBottom:)](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImage.Configuration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

# resizableImageWithCapInsets: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the image with the specified cap insets.

## Declaration

```objectivec
- (UIImage *) resizableImageWithCapInsets:(UIEdgeInsets) capInsets;
```

## Parameters

- `capInsets`: The values to use for the cap insets.

<a id="return-value"></a>

## Return Value

A new image object with the specified cap insets.

<a id="Discussion"></a>

## Discussion

You use this method to add cap insets to an image or to change the existing cap insets of an image. In both cases, you get back a new image and the original image remains untouched. For example, you can use this method to create a background image for a button with borders and corners: when the button is resized, the corners of the image remain unchanged, but the borders and center of the image expand to cover the new size.

iOS uses different rendering techniques, with different performance characteristics, depending on the size of each resizable area in the image:

- If resizable areas have a width or height of 1 pixel—that is, a horizontally resizable area is 1 pixel wide, a vertically resizable area is 1 pixel tall, or the center region of the image is 1 x 1 pixel—iOS draws the image by stretching the 1-pixel region. This mode provides the fastest performance (for nonzero cap insets).
- If resizable areas have a width or height greater than 1 pixel, iOS draws the image by tiling the region. This mode provides reduced performance, but can be useful for images with textured (rather than solid-color) content in their resizable areas.
- If the entire image is resizable—that is, the `capInsets` parameter is [UIEdgeInsetsZero](../uiedgeinsets/zero.md)—and its size is greater than 1 x 1 pixel, iOS draws the image by tiling the entire image. This mode is faster than the tiling mode for nonzero cap insets.

To instead directly control the resizing mode, use the [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md) method.

## See Also

### Changing the image attributes

- [imageWithConfiguration:](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageByApplyingSymbolConfiguration:](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [imageWithHorizontallyFlippedOrientation](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [imageWithRenderingMode:](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [imageWithAlignmentRectInsets:](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [imageWithBaselineOffsetFromBottom:](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImageConfiguration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
