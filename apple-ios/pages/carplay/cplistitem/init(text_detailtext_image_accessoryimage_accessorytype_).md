> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/init(text:detailtext:image:accessoryimage:accessorytype:)](https://developer.apple.com/documentation/carplay/cplistitem/init(text:detailtext:image:accessoryimage:accessorytype:))

# init(text:detailText:image:accessoryImage:accessoryType:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that displays an accessory beside its content.

## Declaration

```swift
init(text: String?, detailText: String?, image: UIImage?, accessoryImage: UIImage?, accessoryType: CPListItemAccessoryType)
```

## Parameters

- `text`: The list item’s primary text.
- `detailText`: The list item’s secondary text.
- `image`: The image that the list item displays in its leading region.
- `accessoryImage`: The image that the list item displays in its trailing region.
- `accessoryType`: The accessory that the list item displays in its trailing region.

<a id="Discussion"></a>

## Discussion

If you specify an image, CarPlay sets `accessoryType` to [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md).

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size for a list item’s image and accessory image.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a List Item

- [init(text:detailText:)](init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [init(text:detailText:image:)](init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.

# initWithText:detailText:image:accessoryImage:accessoryType: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that displays an accessory beside its content.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text detailText:(NSString *) detailText image:(UIImage *) image accessoryImage:(UIImage *) accessoryImage accessoryType:(CPListItemAccessoryType) accessoryType;
```

## Parameters

- `text`: The list item’s primary text.
- `detailText`: The list item’s secondary text.
- `image`: The image that the list item displays in its leading region.
- `accessoryImage`: The image that the list item displays in its trailing region.
- `accessoryType`: The accessory that the list item displays in its trailing region.

<a id="Discussion"></a>

## Discussion

If you specify an image, CarPlay sets `accessoryType` to [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md).

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. At runtime, use [maximumImageSize](maximumimagesize.md) to determine the maximum size for a list item’s image and accessory image.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a List Item

- [initWithText:detailText:](init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [initWithText:detailText:image:](init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
