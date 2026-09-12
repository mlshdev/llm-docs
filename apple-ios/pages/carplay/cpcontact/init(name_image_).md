> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontact/init(name:image:)](https://developer.apple.com/documentation/carplay/cpcontact/init(name:image:))

# init(name:image:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a contact with a name and an image.

## Declaration

```swift
init(name: String, image: UIImage)
```

## Parameters

- `name`: The name that the template displays.
- `image`: The image that the template displays beside the contact’s name.

<a id="return-value"></a>

## Return Value

A new contact with the provided name and image.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

# initWithName:image: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a contact with a name and an image.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name image:(UIImage *) image;
```

## Parameters

- `name`: The name that the template displays.
- `image`: The image that the template displays beside the contact’s name.

<a id="return-value"></a>

## Return Value

A new contact with the provided name and image.

<a id="Discussion"></a>

## Discussion

Provide an image that is display-ready. If necessary, provide light and dark variants using an asset catalog, or use an instance of [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) and register an image for each interface style. To properly size your image, use the display scale of the vehicle’s primary screen, which you access from your interface controller’s [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.
