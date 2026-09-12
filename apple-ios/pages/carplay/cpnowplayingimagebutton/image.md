> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingimagebutton/image](https://developer.apple.com/documentation/carplay/cpnowplayingimagebutton/image)

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The image that the button displays.

## Declaration

```swift
var image: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

The button displays images no larger than [CPNowPlayingButtonMaximumImageSize](../cpnowplayingbuttonmaximumimagesize.md). If you use an animated image, this property returns the first image in the animation sequence.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The image that the button displays.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

The button displays images no larger than [CPNowPlayingButtonMaximumImageSize](../cpnowplayingbuttonmaximumimagesize.md). If you use an animated image, this property returns the first image in the animation sequence.
