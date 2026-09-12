> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitem/update(_:)](https://developer.apple.com/documentation/carplay/cplistimagerowitem/update(_:))

# update(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Adds, removes, reorders, or updates the images in the list item’s image row.

> No longer supported

## Declaration

```swift
func update(_ gridImages: [UIImage])
```

## Parameters

- `gridImages`: An array of images to display in the list item’s image row.

<a id="Discussion"></a>

## Discussion

This method is multipurpose. Use it to add new images to the image row, and to remove or reorder existing images.

Provide images that are display-ready. If necessary, provide light and dark variants of each image using an asset catalog, or use instances of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style.

To properly size your images, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size that CarPlay allows for an image, and [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md) to establish the total number of images that an image row can display. The list item may display fewer images, depending on the width of the vehicle’s primary screen.

CarPlay doesn’t support animated images. If you provide animated images, CarPlay uses only the first image in each animation sequence.

## See Also

### Managing Content

- [text](text.md): The list item’s primary text.
- [gridImages](gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [maximumImageSize](maximumimagesize.md): Deprecated. The maximum size of an image that an image row can display.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

# updateImages: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Adds, removes, reorders, or updates the images in the list item’s image row.

> No longer supported

## Declaration

```objectivec
- (void) updateImages:(NSArray<UIImage *> *) gridImages;
```

## Parameters

- `gridImages`: An array of images to display in the list item’s image row.

<a id="Discussion"></a>

## Discussion

This method is multipurpose. Use it to add new images to the image row, and to remove or reorder existing images.

Provide images that are display-ready. If necessary, provide light and dark variants of each image using an asset catalog, or use instances of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style.

To properly size your images, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size that CarPlay allows for an image, and [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md) to establish the total number of images that an image row can display. The list item may display fewer images, depending on the width of the vehicle’s primary screen.

CarPlay doesn’t support animated images. If you provide animated images, CarPlay uses only the first image in each animation sequence.

## See Also

### Managing Content

- [text](text.md): The list item’s primary text.
- [gridImages](gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [maximumImageSize](maximumimagesize.md): Deprecated. The maximum size of an image that an image row can display.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.
