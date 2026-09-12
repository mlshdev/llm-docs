> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemtrailingconfiguration/init(trailingitem:trailingimage:)](https://developer.apple.com/documentation/carplay/cpmessagelistitemtrailingconfiguration/init(trailingitem:trailingimage:))

# init(trailingItem:trailingImage:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a trailing configuration that contains an item and an image.

## Declaration

```swift
init(trailingItem: CPMessageTrailingItem, trailingImage: UIImage?)
```

## Parameters

- `trailingItem`: The item to show in the trailing region of the message list item. See [CPMessageTrailingItem](../cpmessagetrailingitem.md) for the available options.
- `trailingImage`: The image to show in the trailing region of the message list item.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. Make sure that the image isn’t larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Configuration

- [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.

# initWithTrailingItem:trailingImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a trailing configuration that contains an item and an image.

## Declaration

```objectivec
- (instancetype) initWithTrailingItem:(CPMessageTrailingItem) trailingItem trailingImage:(UIImage *) trailingImage;
```

## Parameters

- `trailingItem`: The item to show in the trailing region of the message list item. See [CPMessageTrailingItem](../cpmessagetrailingitem.md) for the available options.
- `trailingImage`: The image to show in the trailing region of the message list item.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. Make sure that the image isn’t larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Configuration

- [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.
