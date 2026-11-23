> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/init(thumbnail:title:subtitle:tintcolor:)

# init(thumbnail:title:subtitle:tintColor:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a card row element with a thumbnail image, text, and background color.

## Declaration

```swift
init(thumbnail: CPThumbnailImage, title: String?, subtitle: String?, tintColor: UIColor?)
```

## Parameters

- `thumbnail`: The thumbnail to display as the element’s primary content. If the image you used to create the thumbnail originates from an asset catalog, CarPlay manages the light and dark variants of the image and switches them when needed. Specify images with the dimensions listed in the [maximumFullHeightImageSize](maximumfullheightimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image with an animated sequence.
- `title`: The primary text to display beneath the image. CarPlay displays this string with a visually prominent style.
- `subtitle`: The secondary text to display beneath the title. CarPlay displays this string less prominently than the title.
- `tintColor`: The color to apply to the card’s background. Specify `nil` to use the [secondarySystemBackground](https://developer.apple.com/documentation/uikit/uicolor/secondarysystembackground) color.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.

<a id="discussion"></a>

## Discussion

CarPlay stores the `thumbnail` image in the [thumbnail](thumbnail.md) property. This method also stores a version of the image in the inherited [image](../cplistimagerowitemelement/image.md) property.

When using this method to initialize the elements of a row, the aspect ratio of the first element you specify dictates the layout for the rest of the row. For example, if the first element contains a landscape image, the row lays out all other elements with the landscape aspect ratio.

## See Also

### Creating a card element

- [init(image:showsImageFullHeight:title:subtitle:tintColor:)](init%28image_showsimagefullheight_title_subtitle_tintcolor_%29.md): Creates a card row element with the specified image, text, and card background color.
- [init(coder:)](init%28coder_%29.md)

# initWithThumbnail:title:subtitle:tintColor: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a card row element with a thumbnail image, text, and background color.

## Declaration

```objectivec
- (instancetype) initWithThumbnail:(CPThumbnailImage *) thumbnail title:(NSString *) title subtitle:(NSString *) subtitle tintColor:(UIColor *) tintColor;
```

## Parameters

- `thumbnail`: The thumbnail to display as the element’s primary content. If the image you used to create the thumbnail originates from an asset catalog, CarPlay manages the light and dark variants of the image and switches them when needed. Specify images with the dimensions listed in the [maximumFullHeightImageSize](maximumfullheightimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image with an animated sequence.
- `title`: The primary text to display beneath the image. CarPlay displays this string with a visually prominent style.
- `subtitle`: The secondary text to display beneath the title. CarPlay displays this string less prominently than the title.
- `tintColor`: The color to apply to the card’s background. Specify `nil` to use the [secondarySystemBackgroundColor](https://developer.apple.com/documentation/uikit/uicolor/secondarysystembackground) color.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.

<a id="discussion"></a>

## Discussion

CarPlay stores the `thumbnail` image in the [thumbnail](thumbnail.md) property. This method also stores a version of the image in the inherited [image](../cplistimagerowitemelement/image.md) property.

When using this method to initialize the elements of a row, the aspect ratio of the first element you specify dictates the layout for the rest of the row. For example, if the first element contains a landscape image, the row lays out all other elements with the landscape aspect ratio.

## See Also

### Creating a card element

- [initWithImage:showsImageFullHeight:title:subtitle:tintColor:](init%28image_showsimagefullheight_title_subtitle_tintcolor_%29.md): Creates a card row element with the specified image, text, and card background color.
