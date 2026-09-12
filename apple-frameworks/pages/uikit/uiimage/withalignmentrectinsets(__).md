> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/withalignmentrectinsets(_:)](https://developer.apple.com/documentation/uikit/uiimage/withalignmentrectinsets(_:))

# withAlignmentRectInsets(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the image that uses the specified alignment insets.

## Declaration

```swift
func withAlignmentRectInsets(_ alignmentInsets: UIEdgeInsets) -> UIImage
```

## Parameters

- `alignmentInsets`: The alignment metadata to apply to the new image.

<a id="return-value"></a>

## Return Value

A new image object.

## See Also

### Related Documentation

- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.

### Changing the image attributes

- [withConfiguration(\_:)](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [applyingSymbolConfiguration(\_:)](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection()](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [withHorizontallyFlippedOrientation()](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [withRenderingMode(\_:)](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline()](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [withBaselineOffset(fromBottom:)](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImage.Configuration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

# imageWithAlignmentRectInsets: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new version of the image that uses the specified alignment insets.

## Declaration

```objectivec
- (UIImage *) imageWithAlignmentRectInsets:(UIEdgeInsets) alignmentInsets;
```

## Parameters

- `alignmentInsets`: The alignment metadata to apply to the new image.

<a id="return-value"></a>

## Return Value

A new image object.

## See Also

### Related Documentation

- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.

### Changing the image attributes

- [imageWithConfiguration:](withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageByApplyingSymbolConfiguration:](applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection](imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [imageWithHorizontallyFlippedOrientation](withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [imageWithRenderingMode:](withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline](imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [imageWithBaselineOffsetFromBottom:](withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImageConfiguration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
