> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemtrailingconfiguration/trailingimage](https://developer.apple.com/documentation/carplay/cpmessagelistitemtrailingconfiguration/trailingimage)

# trailingImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s image.

## Declaration

```swift
var trailingImage: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the image that the message list item’s trailing region shows, create a new configuration and update the list item’s [trailingConfiguration](../cpmessagelistitem/trailingconfiguration.md) property.

A configuration’s image can’t be larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md). If you use an animated image, this property returns the first image in the animation sequence.

# trailingImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s image.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIImage * trailingImage;
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the image that the message list item’s trailing region shows, create a new configuration and update the list item’s [trailingConfiguration](../cpmessagelistitem/trailingconfiguration.md) property.

A configuration’s image can’t be larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md). If you use an animated image, this property returns the first image in the animation sequence.
