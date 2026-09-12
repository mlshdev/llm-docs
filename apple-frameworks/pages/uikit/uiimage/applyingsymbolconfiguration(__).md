> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/applyingsymbolconfiguration(_:)](https://developer.apple.com/documentation/uikit/uiimage/applyingsymbolconfiguration(_:))

# applyingSymbolConfiguration(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.

## Declaration

```swift
func applyingSymbolConfiguration(_ configuration: UIImage.SymbolConfiguration) -> UIImage?
```

## Parameters

- `configuration`: The configuration attributes to apply on top of the existing attributes. Values in this object take precedence over the image’s current configuration values.

<a id="return-value"></a>

## Return Value

A new version of the image object that contains the merged configuration details.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="Discussion"></a>

## Discussion

This method creates a new image object, merging the traits of `configuration` with the new image’s traits. During the merge, this method gives precedence to explicitly set values in the `configuration` parameter. This method then replaces the current image-related attributes with the attributes in `configuration`. If an attribute in `configuration` contains an unspecified value, this method leaves the current image’s setting intact.

## See Also

### Changing the image attributes

- [withConfiguration(\_:)](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageFlippedForRightToLeftLayoutDirection()](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [withHorizontallyFlippedOrientation()](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [withRenderingMode(\_:)](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [withAlignmentRectInsets(\_:)](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline()](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [withBaselineOffset(fromBottom:)](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImage.Configuration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

# imageByApplyingSymbolConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.

## Declaration

```objectivec
- (UIImage *) imageByApplyingSymbolConfiguration:(UIImageSymbolConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration attributes to apply on top of the existing attributes. Values in this object take precedence over the image’s current configuration values.

<a id="return-value"></a>

## Return Value

A new version of the image object that contains the merged configuration details.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="Discussion"></a>

## Discussion

This method creates a new image object, merging the traits of `configuration` with the new image’s traits. During the merge, this method gives precedence to explicitly set values in the `configuration` parameter. This method then replaces the current image-related attributes with the attributes in `configuration`. If an attribute in `configuration` contains an unspecified value, this method leaves the current image’s setting intact.

## See Also

### Changing the image attributes

- [imageWithConfiguration:](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageFlippedForRightToLeftLayoutDirection](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [imageWithHorizontallyFlippedOrientation](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [imageWithRenderingMode:](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [imageWithAlignmentRectInsets:](withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [imageWithBaselineOffsetFromBottom:](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImageConfiguration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
