> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/init(image:showsimagefullheight:title:subtitle:tintcolor:)

# init(image:showsImageFullHeight:title:subtitle:tintColor:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a card row element with the specified image, text, and card background color.

## Declaration

```swift
init(image: UIImage, showsImageFullHeight: Bool, title: String?, subtitle: String?, tintColor: UIColor?)
```

## Parameters

- `image`: The image to display as the element’s primary content. If the image originates from an asset catalog, CarPlay manages the light and dark variants of your image and switches them when needed. Specify images at the expected maximum dimensions. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. If the image contains an animated sequence, CarPlay shows only the first image in the sequence. -showsImageFullHeight: When`true`, the element displays the image as the card background instead of the tint color. Specify `false` to display a background color with the image on top.
- `title`: The primary text to display beneath the image. CarPlay displays this string with a visually prominent style.
- `subtitle`: The secondary text to display beneath the title. CarPlay displays this string less prominently than the title.
- `tintColor`: The color to apply to the card’s background.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.

<a id="discussion"></a>

## Discussion

This method stores the provided image in the inherited [image](../cplistimagerowitemelement/image.md) property and doesn’t populate the [thumbnail](thumbnail.md) property. If `showsImageFullHeight` is true, the [maximumFullHeightImageSize](maximumfullheightimagesize.md) property species the expected dimensions of your image; otherwise, use the value in the [maximumImageSize](maximumimagesize.md) property.

## See Also

### Creating a card element

- [init(thumbnail:title:subtitle:tintColor:)](init%28thumbnail_title_subtitle_tintcolor_%29.md): Creates a card row element with a thumbnail image, text, and background color.
- [init(coder:)](init%28coder_%29.md)

# initWithImage:showsImageFullHeight:title:subtitle:tintColor: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a card row element with the specified image, text, and card background color.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image showsImageFullHeight:(BOOL) showsImageFullHeight title:(NSString *) title subtitle:(NSString *) subtitle tintColor:(UIColor *) tintColor;
```

## Parameters

- `image`: The image to display as the element’s primary content. If the image originates from an asset catalog, CarPlay manages the light and dark variants of your image and switches them when needed. Specify images at the expected maximum dimensions. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. If the image contains an animated sequence, CarPlay shows only the first image in the sequence. -showsImageFullHeight: When`true`, the element displays the image as the card background instead of the tint color. Specify `false` to display a background color with the image on top.
- `title`: The primary text to display beneath the image. CarPlay displays this string with a visually prominent style.
- `subtitle`: The secondary text to display beneath the title. CarPlay displays this string less prominently than the title.
- `tintColor`: The color to apply to the card’s background.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.

<a id="discussion"></a>

## Discussion

This method stores the provided image in the inherited [image](../cplistimagerowitemelement/image.md) property and doesn’t populate the [thumbnail](thumbnail.md) property. If `showsImageFullHeight` is true, the [maximumFullHeightImageSize](maximumfullheightimagesize.md) property species the expected dimensions of your image; otherwise, use the value in the [maximumImageSize](maximumimagesize.md) property.

## See Also

### Creating a card element

- [initWithThumbnail:title:subtitle:tintColor:](init%28thumbnail_title_subtitle_tintcolor_%29.md): Creates a card row element with a thumbnail image, text, and background color.
