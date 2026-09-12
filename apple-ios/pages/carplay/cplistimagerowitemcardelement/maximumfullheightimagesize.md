> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemcardelement/maximumfullheightimagesize](https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/maximumfullheightimagesize)

# maximumFullHeightImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is  true. Images provided will be resized to this size.

## Declaration

```swift
class var maximumFullHeightImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

# maximumFullHeightImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is  true. Images provided will be resized to this size.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumFullHeightImageSize;
```

<a id="discussion"></a>

## Discussion

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].
