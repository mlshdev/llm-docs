> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitem/init(text:images:)](https://developer.apple.com/documentation/carplay/cplistimagerowitem/init(text:images:))

# init(text:images:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Creates a list item that displays a row of images.

> Use initWithText:elements:allowsMultipleLines:

## Declaration

```swift
init(text: String, images: [UIImage])
```

## Parameters

- `text`: The list item’s primary text.
- `images`: An array of images to display in the list item’s image row.

<a id="Discussion"></a>

## Discussion

Provide images that are display-ready. If necessary, provide light and dark variants of each image using an asset catalog, or use instances of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style.

To properly size your images, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size that CarPlay allows for an image, and [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md) to establish the total number of images that an image row can display. The list item may display fewer images, depending on the width of the vehicle’s primary screen.

CarPlay doesn’t support animated images. If you provide animated images, CarPlay uses only the first image in each animation sequence.

## See Also

### Creating a List Image Row Item

- [init(text:images:imageTitles:)](init%28text_images_imagetitles_%29.md): Deprecated. Creates a list item that displays a row of images with a title below each image.

# initWithText:images: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Creates a list item that displays a row of images.

> Use initWithText:elements:allowsMultipleLines:

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text images:(NSArray<UIImage *> *) images;
```

## Parameters

- `text`: The list item’s primary text.
- `images`: An array of images to display in the list item’s image row.

<a id="Discussion"></a>

## Discussion

Provide images that are display-ready. If necessary, provide light and dark variants of each image using an asset catalog, or use instances of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style.

To properly size your images, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size that CarPlay allows for an image, and [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md) to establish the total number of images that an image row can display. The list item may display fewer images, depending on the width of the vehicle’s primary screen.

CarPlay doesn’t support animated images. If you provide animated images, CarPlay uses only the first image in each animation sequence.

## See Also

### Creating a List Image Row Item

- [initWithText:images:imageTitles:](init%28text_images_imagetitles_%29.md): Deprecated. Creates a list item that displays a row of images with a title below each image.
