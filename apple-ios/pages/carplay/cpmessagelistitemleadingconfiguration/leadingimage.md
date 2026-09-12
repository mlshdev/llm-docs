> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemleadingconfiguration/leadingimage](https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration/leadingimage)

# leadingImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s image.

## Declaration

```swift
var leadingImage: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the image that the message list item’s leading region shows, create a new configuration and update the list item’s [leadingConfiguration](../cpmessagelistitem/leadingconfiguration.md) property.

A configuration’s image can’t be larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md). If you use an animated image, this property returns the first image in the animation sequence.

## See Also

### Getting the Configuration’s State

- [isUnread](isunread.md): A Boolean value that determines whether the message list item displays an unread indicator.

# leadingImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The configuration’s image.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIImage * leadingImage;
```

<a id="Discussion"></a>

## Discussion

Configurations are immutable. To change or remove the image that the message list item’s leading region shows, create a new configuration and update the list item’s [leadingConfiguration](../cpmessagelistitem/leadingconfiguration.md) property.

A configuration’s image can’t be larger than [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md). If you use an animated image, this property returns the first image in the animation sequence.

## See Also

### Getting the Configuration’s State

- [unread](isunread.md): A Boolean value that determines whether the message list item displays an unread indicator.
