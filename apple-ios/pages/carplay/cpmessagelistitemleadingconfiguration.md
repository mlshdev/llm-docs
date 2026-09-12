> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemleadingconfiguration](https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration)

# CPMessageListItemLeadingConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the appearance of a message list item’s leading region.

## Declaration

```swift
class CPMessageListItemLeadingConfiguration
```

<a id="overview"></a>

## Overview

Use a leading configuration to describe the visual elements that a message list item’s leading region contains. The region can show a [CPMessageLeadingItem](cpmessageleadingitem.md), an image, and an unread indicator.

Configurations are immutable. To modify the list item’s leading configuration, update its [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md) property with a new configuration. CarPlay detects the change and redraws the message list item.

## Topics

### Creating a Configuration

- [init(leadingItem:leadingImage:unread:)](cpmessagelistitemleadingconfiguration/init%28leadingitem_leadingimage_unread_%29.md): Creates a leading configuration that contains an item and an image.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.

### Getting the Leading Item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The configuration’s item.
- [CPMessageLeadingItem](cpmessageleadingitem.md): The accessories that a message list item can display in its leading region.

### Getting the Configuration’s State

- [leadingImage](cpmessagelistitemleadingconfiguration/leadingimage.md): The configuration’s image.
- [isUnread](cpmessagelistitemleadingconfiguration/isunread.md): A Boolean value that determines whether the message list item displays an unread indicator.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing Leading and Trailing Configurations

- [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md): The configuration of the list item’s leading region.
- [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md): The configuration of the list item’s trailing region.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): An object that describes the appearance of a message list item’s trailing region.

# CPMessageListItemLeadingConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the appearance of a message list item’s leading region.

## Declaration

```objectivec
@interface CPMessageListItemLeadingConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use a leading configuration to describe the visual elements that a message list item’s leading region contains. The region can show a [CPMessageLeadingItem](cpmessageleadingitem.md), an image, and an unread indicator.

Configurations are immutable. To modify the list item’s leading configuration, update its [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md) property with a new configuration. CarPlay detects the change and redraws the message list item.

## Topics

### Creating a Configuration

- [initWithLeadingItem:leadingImage:unread:](cpmessagelistitemleadingconfiguration/init%28leadingitem_leadingimage_unread_%29.md): Creates a leading configuration that contains an item and an image.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.

### Getting the Leading Item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The configuration’s item.
- [CPMessageLeadingItem](cpmessageleadingitem.md): The accessories that a message list item can display in its leading region.

### Getting the Configuration’s State

- [leadingImage](cpmessagelistitemleadingconfiguration/leadingimage.md): The configuration’s image.
- [unread](cpmessagelistitemleadingconfiguration/isunread.md): A Boolean value that determines whether the message list item displays an unread indicator.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Managing Leading and Trailing Configurations

- [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md): The configuration of the list item’s leading region.
- [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md): The configuration of the list item’s trailing region.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): An object that describes the appearance of a message list item’s trailing region.
