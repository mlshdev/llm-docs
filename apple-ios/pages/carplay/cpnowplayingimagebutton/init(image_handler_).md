> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingimagebutton/init(image:handler:)](https://developer.apple.com/documentation/carplay/cpnowplayingimagebutton/init(image:handler:))

# init(image:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Now Playing button that displays a custom image and invokes a handler.

## Declaration

```swift
init(image: UIImage, handler: ((CPNowPlayingButton) -> Void)? = nil)
```

## Parameters

- `image`: An image to display on the button.
- `handler`: A closure that the button invokes when the user taps it.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen—see your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property—and make sure it is no larger than [CPNowPlayingButtonMaximumImageSize](../cpnowplayingbuttonmaximumimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Button

- [CPNowPlayingButtonMaximumImageSize](../cpnowplayingbuttonmaximumimagesize.md): The maximum size CarPlay supports for a button’s image.

# initWithImage:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Now Playing button that displays a custom image and invokes a handler.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image handler:(void (^)(CPNowPlayingButton *)) handler;
```

## Parameters

- `image`: An image to display on the button.
- `handler`: A closure that the button invokes when the user taps it.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen—see your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property—and make sure it is no larger than [CPNowPlayingButtonMaximumImageSize](../cpnowplayingbuttonmaximumimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Button

- [CPNowPlayingButtonMaximumImageSize](../cpnowplayingbuttonmaximumimagesize.md): The maximum size CarPlay supports for a button’s image.
