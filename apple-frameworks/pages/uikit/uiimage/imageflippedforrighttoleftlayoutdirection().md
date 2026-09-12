> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/imageflippedforrighttoleftlayoutdirection()](https://developer.apple.com/documentation/uikit/uiimage/imageflippedforrighttoleftlayoutdirection())

# imageFlippedForRightToLeftLayoutDirection() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.

## Declaration

```swift
func imageFlippedForRightToLeftLayoutDirection() -> UIImage
```

<a id="return-value"></a>

## Return Value

The current image, prepared to flip horizontally if it’s in a right-to-left layout.

<a id="Discussion"></a>

## Discussion

Use this method to specify an image that should flip in a right-to-left layout. Note that most images do not need to flip in a right-to-left layout.

This method returns the current [UIImage](../uiimage.md) object with the [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md) property set to [true](https://developer.apple.com/documentation/swift/true); it does *not* return a flipped image. When the returned image is displayed in a [UIImageView](../uiimageview.md) object in a right-to-left layout direction (whether the layout direction is set by the system language, or because the image view’s [semanticContentAttribute](../uiview/semanticcontentattribute.md) property is set to [UISemanticContentAttribute.forceRightToLeft](../uisemanticcontentattribute/forcerighttoleft.md)), the image appears flipped. When the returned image is displayed in a left-to-right context, it appears unflipped.

## See Also

### Changing the image attributes

- [withConfiguration(\_:)](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [applyingSymbolConfiguration(\_:)](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [withHorizontallyFlippedOrientation()](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [withRenderingMode(\_:)](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [withAlignmentRectInsets(\_:)](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline()](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [withBaselineOffset(fromBottom:)](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImage.Configuration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

# imageFlippedForRightToLeftLayoutDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.

## Declaration

```objectivec
- (UIImage *) imageFlippedForRightToLeftLayoutDirection;
```

<a id="return-value"></a>

## Return Value

The current image, prepared to flip horizontally if it’s in a right-to-left layout.

<a id="Discussion"></a>

## Discussion

Use this method to specify an image that should flip in a right-to-left layout. Note that most images do not need to flip in a right-to-left layout.

This method returns the current [UIImage](../uiimage.md) object with the [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md) property set to [true](https://developer.apple.com/documentation/swift/true); it does *not* return a flipped image. When the returned image is displayed in a [UIImageView](../uiimageview.md) object in a right-to-left layout direction (whether the layout direction is set by the system language, or because the image view’s [semanticContentAttribute](../uiview/semanticcontentattribute.md) property is set to [UISemanticContentAttributeForceRightToLeft](../uisemanticcontentattribute/forcerighttoleft.md)), the image appears flipped. When the returned image is displayed in a left-to-right context, it appears unflipped.

## See Also

### Changing the image attributes

- [imageWithConfiguration:](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageByApplyingSymbolConfiguration:](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageWithHorizontallyFlippedOrientation](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [imageWithRenderingMode:](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [imageWithAlignmentRectInsets:](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [imageWithBaselineOffsetFromBottom:](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImageConfiguration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
