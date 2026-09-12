> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/setimage(_:)](https://developer.apple.com/documentation/carplay/cplistitem/setimage(_:))

# setImage(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the list item’s image.

## Declaration

```swift
func setImage(_ image: UIImage?)
```

## Parameters

- `image`: The image to display in the item’s leading region.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size for a list item’s image.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Managing Content

- [text](text.md): The list item’s primary text.
- [setText(\_:)](settext%28__%29.md): Updates the list item’s primary text.
- [detailText](detailtext.md): The list item’s secondary text.
- [setDetailText(\_:)](setdetailtext%28__%29.md): Updates the list item’s secondary text.
- [image](image.md): The image that the list item displays in its leading region.
- [maximumImageSize](maximumimagesize.md): The maximum size of a list item’s image and accessory image.

# setImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the list item’s image.

## Declaration

```objectivec
- (void) setImage:(UIImage *) image;
```

## Parameters

- `image`: The image to display in the item’s leading region.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size for a list item’s image.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Managing Content

- [text](text.md): The list item’s primary text.
- [setText:](settext%28__%29.md): Updates the list item’s primary text.
- [detailText](detailtext.md): The list item’s secondary text.
- [setDetailText:](setdetailtext%28__%29.md): Updates the list item’s secondary text.
- [image](image.md): The image that the list item displays in its leading region.
- [maximumImageSize](maximumimagesize.md): The maximum size of a list item’s image and accessory image.
