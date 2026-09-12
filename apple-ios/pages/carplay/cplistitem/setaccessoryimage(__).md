> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/setaccessoryimage(_:)](https://developer.apple.com/documentation/carplay/cplistitem/setaccessoryimage(_:))

# setAccessoryImage(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the list item’s accessory image.

## Declaration

```swift
func setAccessoryImage(_ accessoryImage: UIImage?)
```

## Parameters

- `accessoryImage`: The image to display in the item’s trailing region.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size for a list item’s accessory image.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

CarPlay sets the `accessoryType` property’s value to [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md) when you call this method.

## See Also

### Managing Accessories

- [accessoryType](accessorytype.md): The accessory that the list item displays in its trailing region.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The accessory types that a list item can display.
- [accessoryImage](accessoryimage.md): The image that the list item displays in its trailing region.

# setAccessoryImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the list item’s accessory image.

## Declaration

```objectivec
- (void) setAccessoryImage:(UIImage *) accessoryImage;
```

## Parameters

- `accessoryImage`: The image to display in the item’s trailing region.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size for a list item’s accessory image.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

CarPlay sets the `accessoryType` property’s value to [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md) when you call this method.

## See Also

### Managing Accessories

- [accessoryType](accessorytype.md): The accessory that the list item displays in its trailing region.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The accessory types that a list item can display.
- [accessoryImage](accessoryimage.md): The image that the list item displays in its trailing region.
