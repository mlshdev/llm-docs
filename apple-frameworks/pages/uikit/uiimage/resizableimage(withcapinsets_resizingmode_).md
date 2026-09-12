> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/resizableimage(withcapinsets:resizingmode:)](https://developer.apple.com/documentation/uikit/uiimage/resizableimage(withcapinsets:resizingmode:))

# resizableImage(withCapInsets:resizingMode:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the image with the specified cap insets and options.

## Declaration

```swift
func resizableImage(withCapInsets capInsets: UIEdgeInsets, resizingMode: UIImage.ResizingMode) -> UIImage
```

## Parameters

- `capInsets`: The values to use for the cap insets.
- `resizingMode`: The mode with which the interior of the image is resized.

<a id="return-value"></a>

## Return Value

A new image object with the specified cap insets and resizing mode.

<a id="Discussion"></a>

## Discussion

This method is exactly the same as its counterpart [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md) except that the resizing mode of the new image object can be explicitly declared. You should only call this method in place of its counterpart if you specifically want your image to be resized with the [UIImage.ResizingMode.stretch](resizingmode-swift.enum/stretch.md) resizing mode.

## See Also

### Changing the image attributes

- [withConfiguration(\_:)](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [applyingSymbolConfiguration(\_:)](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection()](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [withHorizontallyFlippedOrientation()](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [withRenderingMode(\_:)](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [withAlignmentRectInsets(\_:)](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [imageWithoutBaseline()](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [withBaselineOffset(fromBottom:)](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImage.Configuration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

# resizableImageWithCapInsets:resizingMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the image with the specified cap insets and options.

## Declaration

```objectivec
- (UIImage *) resizableImageWithCapInsets:(UIEdgeInsets) capInsets resizingMode:(UIImageResizingMode) resizingMode;
```

## Parameters

- `capInsets`: The values to use for the cap insets.
- `resizingMode`: The mode with which the interior of the image is resized.

<a id="return-value"></a>

## Return Value

A new image object with the specified cap insets and resizing mode.

<a id="Discussion"></a>

## Discussion

This method is exactly the same as its counterpart [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md) except that the resizing mode of the new image object can be explicitly declared. You should only call this method in place of its counterpart if you specifically want your image to be resized with the [UIImageResizingModeStretch](resizingmode-swift.enum/stretch.md) resizing mode.

## See Also

### Changing the image attributes

- [imageWithConfiguration:](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageByApplyingSymbolConfiguration:](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [imageWithHorizontallyFlippedOrientation](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [imageWithRenderingMode:](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [imageWithAlignmentRectInsets:](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [imageWithoutBaseline](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [imageWithBaselineOffsetFromBottom:](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImageConfiguration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
