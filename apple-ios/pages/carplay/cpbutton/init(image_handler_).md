> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbutton/init(image:handler:)](https://developer.apple.com/documentation/carplay/cpbutton/init(image:handler:))

# init(image:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button that displays an image and invokes a handler when the user taps it.

## Declaration

```swift
init(image: UIImage, handler: ((CPButton) -> Void)? = nil)
```

## Parameters

- `image`: The image that the button displays.
- `handler`: The closure that the button invokes when the user taps it.

<a id="return-value"></a>

## Return Value

A new button that displays an image and invokes its handler when the user taps it.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property, and ensure it is no larger than [CPButtonMaximumImageSize](../cpbuttonmaximumimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Button

- [CPButtonMaximumImageSize](../cpbuttonmaximumimagesize.md): The maximum size of a button’s image that CarPlay supports.

# initWithImage:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button that displays an image and invokes a handler when the user taps it.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image handler:(void (^)(CPButton *button)) handler;
```

## Parameters

- `image`: The image that the button displays.
- `handler`: The closure that the button invokes when the user taps it.

<a id="return-value"></a>

## Return Value

A new button that displays an image and invokes its handler when the user taps it.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property, and ensure it is no larger than [CPButtonMaximumImageSize](../cpbuttonmaximumimagesize.md).

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

## See Also

### Creating a Button

- [CPButtonMaximumImageSize](../cpbuttonmaximumimagesize.md): The maximum size of a button’s image that CarPlay supports.
