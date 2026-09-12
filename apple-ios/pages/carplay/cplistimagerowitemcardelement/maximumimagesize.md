> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemcardelement/maximumimagesize](https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement/maximumimagesize)

# maximumImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is false. Images provided will be resized to this size.

## Declaration

```swift
class var maximumImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

# maximumImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is false. Images provided will be resized to this size.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumImageSize;
```

<a id="discussion"></a>

## Discussion

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].
