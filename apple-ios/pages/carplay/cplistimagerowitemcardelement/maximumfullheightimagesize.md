> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/maximumfullheightimagesize

# maximumFullHeightImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum dimensions for full-height images.

## Declaration

```swift
class var maximumFullHeightImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

When the [showsImageFullHeight](showsimagefullheight.md) property is `true`, this property defines the maximum size for images. When creating images, adjust the size of your image to match the maximum value.

To determine the maximum pixel dimensions for images, multiply the value in this property by the current scale factor for your CarPlay interface. Get the interface scale factor from the traits in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Getting the expected image dimensions

- [maximumImageSize](maximumimagesize.md): The maximum dimensions for normal-height images.

# maximumFullHeightImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum dimensions for full-height images.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumFullHeightImageSize;
```

<a id="discussion"></a>

## Discussion

When the [showsImageFullHeight](showsimagefullheight.md) property is `true`, this property defines the maximum size for images. When creating images, adjust the size of your image to match the maximum value.

To determine the maximum pixel dimensions for images, multiply the value in this property by the current scale factor for your CarPlay interface. Get the interface scale factor from the traits in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Getting the expected image dimensions

- [maximumImageSize](maximumimagesize.md): The maximum dimensions for normal-height images.
