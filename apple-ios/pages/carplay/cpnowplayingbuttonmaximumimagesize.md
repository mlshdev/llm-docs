> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingbuttonmaximumimagesize

# CPNowPlayingButtonMaximumImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The dimensions for images in custom buttons.

## Declaration

```swift
let CPNowPlayingButtonMaximumImageSize: CGSize
```

<a id="discussion"></a>

## Discussion

This constant specifies the expected dimensions for images you use with a [CPNowPlayingImageButton](cpnowplayingimagebutton.md) object. The image dimensions are in points. To get the image dimensions in pixels, multiple the width and height values by the current display scale from the vehicle’s trait collection. You can get the current traits from the [carTraitCollection](cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Creating the button

- [init(image:handler:)](cpnowplayingimagebutton/init%28image_handler_%29.md): Creates a button with the specified image and handler.

# CPNowPlayingButtonMaximumImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The dimensions for images in custom buttons.

## Declaration

```objectivec
extern const CGSize CPNowPlayingButtonMaximumImageSize;
```

<a id="discussion"></a>

## Discussion

This constant specifies the expected dimensions for images you use with a [CPNowPlayingImageButton](cpnowplayingimagebutton.md) object. The image dimensions are in points. To get the image dimensions in pixels, multiple the width and height values by the current display scale from the vehicle’s trait collection. You can get the current traits from the [carTraitCollection](cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Creating the button

- [initWithImage:handler:](cpnowplayingimagebutton/init%28image_handler_%29.md): Creates a button with the specified image and handler.
