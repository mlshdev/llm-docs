> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemleadingconfiguration/init(leadingitem:leadingimage:unread:)](https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration/init(leadingitem:leadingimage:unread:))

# init(leadingItem:leadingImage:unread:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a leading configuration that contains an item and an image.

## Declaration

```swift
init(leadingItem: CPMessageLeadingItem, leadingImage: UIImage?, unread: Bool)
```

## Parameters

- `leadingItem`: The item to show in the leading region of the message list item. See [CPMessageLeadingItem](../cpmessageleadingitem.md) for the available options.
- `leadingImage`: The image to show in the leading region of the message list item.
- `unread`: If [true](https://developer.apple.com/documentation/swift/true), the message list item displays an indicator that shows the message is in an unread state.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. Make sure that the image isn’t larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Configuration

- [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.

# initWithLeadingItem:leadingImage:unread: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a leading configuration that contains an item and an image.

## Declaration

```objectivec
- (instancetype) initWithLeadingItem:(CPMessageLeadingItem) leadingItem leadingImage:(UIImage *) leadingImage unread:(BOOL) unread;
```

## Parameters

- `leadingItem`: The item to show in the leading region of the message list item. See [CPMessageLeadingItem](../cpmessageleadingitem.md) for the available options.
- `leadingImage`: The image to show in the leading region of the message list item.
- `unread`: If [true](https://developer.apple.com/documentation/swift/true), the message list item displays an indicator that shows the message is in an unread state.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property. Make sure that the image isn’t larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Configuration

- [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.
