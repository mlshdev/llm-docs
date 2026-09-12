> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/withhorizontallyflippedorientation()](https://developer.apple.com/documentation/uikit/uiimage/withhorizontallyflippedorientation())

# withHorizontallyFlippedOrientation() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a new version of the image that’s a mirror of the original image.

## Declaration

```swift
func withHorizontallyFlippedOrientation() -> UIImage
```

<a id="return-value"></a>

## Return Value

The new [UIImage](../uiimage.md) object.

<a id="Discussion"></a>

## Discussion

The returned image’s [imageOrientation](imageorientation.md) property contains the mirrored version of the original image’s orientation. For example, if the original orientation is [UIImage.Orientation.left](orientation/left.md), the new orientation is [UIImage.Orientation.leftMirrored](orientation/leftmirrored.md). This method does not affect the value of the [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md) property.

## See Also

### Changing the image attributes

- [withConfiguration(\_:)](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [applyingSymbolConfiguration(\_:)](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection()](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [withRenderingMode(\_:)](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [withAlignmentRectInsets(\_:)](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline()](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [withBaselineOffset(fromBottom:)](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImage.Configuration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

# imageWithHorizontallyFlippedOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a new version of the image that’s a mirror of the original image.

## Declaration

```objectivec
- (UIImage *) imageWithHorizontallyFlippedOrientation;
```

<a id="return-value"></a>

## Return Value

The new [UIImage](../uiimage.md) object.

<a id="Discussion"></a>

## Discussion

The returned image’s [imageOrientation](imageorientation.md) property contains the mirrored version of the original image’s orientation. For example, if the original orientation is [UIImageOrientationLeft](orientation/left.md), the new orientation is [UIImageOrientationLeftMirrored](orientation/leftmirrored.md). This method does not affect the value of the [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md) property.

## See Also

### Changing the image attributes

- [imageWithConfiguration:](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageByApplyingSymbolConfiguration:](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [imageWithRenderingMode:](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [imageWithAlignmentRectInsets:](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [imageWithBaselineOffsetFromBottom:](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImageConfiguration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
