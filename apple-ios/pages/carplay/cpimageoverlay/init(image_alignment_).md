> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay/init(image:alignment:)

# init(image:alignment:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates an overlay that displays an image.

## Declaration

```swift
init(image: UIImage, alignment: CPImageOverlay.Alignment)
```

## Parameters

- `image`: The image to display on top of the thumbnail image.
- `alignment`: The placement of the image on the thumbnail. Overlays appear inside the top edge of the thumbnail image and with the placement you specify in this parameter.

<a id="return-value"></a>

## Return Value

An overlay object with the image.

<a id="discussion"></a>

## Discussion

After creating the overlay object, initialize a [CPThumbnailImage](../cpthumbnailimage.md) object with it or assign it to the thumbnail image’s [imageOverlay](../cpthumbnailimage/imageoverlay.md) property.

## See Also

### Creating an image overlay

- [init(text:textColor:backgroundColor:alignment:)](init%28text_textcolor_backgroundcolor_alignment_%29.md): Creates an overlay that displays text in a colored badge.
- [init(coder:)](init%28coder_%29.md)

# initWithImage:alignment: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates an overlay that displays an image.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image alignment:(CPImageOverlayAlignment) alignment;
```

## Parameters

- `image`: The image to display on top of the thumbnail image.
- `alignment`: The placement of the image on the thumbnail. Overlays appear inside the top edge of the thumbnail image and with the placement you specify in this parameter.

<a id="return-value"></a>

## Return Value

An overlay object with the image.

<a id="discussion"></a>

## Discussion

After creating the overlay object, initialize a [CPThumbnailImage](../cpthumbnailimage.md) object with it or assign it to the thumbnail image’s [imageOverlay](../cpthumbnailimage/imageoverlay.md) property.

## See Also

### Creating an image overlay

- [initWithText:textColor:backgroundColor:alignment:](init%28text_textcolor_backgroundcolor_alignment_%29.md): Creates an overlay that displays text in a colored badge.
