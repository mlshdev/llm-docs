> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbutton/image](https://developer.apple.com/documentation/carplay/cpbutton/image)

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The button’s image.

## Declaration

```swift
@NSCopying var image: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the custom image you provide at initialization, or a system image when using a concrete subclass like [CPContactCallButton](../cpcontactcallbutton.md).

CarPlay doesn’t support animated images. If you provide an animated image, this property returns the first image in the animation sequence.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The button’s image.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

This property returns the custom image you provide at initialization, or a system image when using a concrete subclass like [CPContactCallButton](../cpcontactcallbutton.md).

CarPlay doesn’t support animated images. If you provide an animated image, this property returns the first image in the animation sequence.
