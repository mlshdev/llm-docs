> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay/init(text:textcolor:backgroundcolor:alignment:)

# init(text:textColor:backgroundColor:alignment:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates an overlay that displays text in a colored badge.

## Declaration

```swift
init(text: String, textColor: UIColor, backgroundColor: UIColor, alignment: CPImageOverlay.Alignment)
```

## Parameters

- `text`: The text to display in the badge. Restrict the amount of text you provide to only a few characters. If the amount of text is too large to fit in the boundaries of the thumbnail image, CarPlay truncates the text to make it fit.
- `textColor`: The color to apply to the text. Choose a color that contrasts with `backgroundColor`.
- `backgroundColor`: The color to apply to the badge platter. Choose a color that contrasts with `textColor`.
- `alignment`: The placement of the badge on the thumbnail. Overlays appear inside the top edge of the thumbnail image and with the placement you specify in this parameter.

<a id="return-value"></a>

## Return Value

An overlay object with the specified text information.

<a id="discussion"></a>

## Discussion

After creating the overlay object, initialize a [CPThumbnailImage](../cpthumbnailimage.md) object with it or assign it to the thumbnail image’s [imageOverlay](../cpthumbnailimage/imageoverlay.md) property.

## See Also

### Creating an image overlay

- [init(image:alignment:)](init%28image_alignment_%29.md): Creates an overlay that displays an image.
- [init(coder:)](init%28coder_%29.md)

# initWithText:textColor:backgroundColor:alignment: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates an overlay that displays text in a colored badge.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text textColor:(UIColor *) textColor backgroundColor:(UIColor *) backgroundColor alignment:(CPImageOverlayAlignment) alignment;
```

## Parameters

- `text`: The text to display in the badge. Restrict the amount of text you provide to only a few characters. If the amount of text is too large to fit in the boundaries of the thumbnail image, CarPlay truncates the text to make it fit.
- `textColor`: The color to apply to the text. Choose a color that contrasts with `backgroundColor`.
- `backgroundColor`: The color to apply to the badge platter. Choose a color that contrasts with `textColor`.
- `alignment`: The placement of the badge on the thumbnail. Overlays appear inside the top edge of the thumbnail image and with the placement you specify in this parameter.

<a id="return-value"></a>

## Return Value

An overlay object with the specified text information.

<a id="discussion"></a>

## Discussion

After creating the overlay object, initialize a [CPThumbnailImage](../cpthumbnailimage.md) object with it or assign it to the thumbnail image’s [imageOverlay](../cpthumbnailimage/imageoverlay.md) property.

## See Also

### Creating an image overlay

- [initWithImage:alignment:](init%28image_alignment_%29.md): Creates an overlay that displays an image.
