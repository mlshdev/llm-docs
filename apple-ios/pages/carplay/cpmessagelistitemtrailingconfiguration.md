> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitemtrailingconfiguration](https://developer.apple.com/documentation/carplay/cpmessagelistitemtrailingconfiguration)

# CPMessageListItemTrailingConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the appearance of a message list item’s trailing region.

## Declaration

```swift
class CPMessageListItemTrailingConfiguration
```

<a id="overview"></a>

## Overview

Use a trailing configuration to describe the visual elements that a message list item’s trailing region contains. The region can show a [CPMessageTrailingItem](cpmessagetrailingitem.md) and an image.

Configurations are immutable. To modify the list item’s trailing configuration, update its [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md) property with a new configuration. CarPlay detects the change and redraws the message list item.

## Topics

### Creating a Configuration

- [init(trailingItem:trailingImage:)](cpmessagelistitemtrailingconfiguration/init%28trailingitem_trailingimage_%29.md): Creates a trailing configuration that contains an item and an image.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.

### Getting the Trailing Item

- [trailingItem](cpmessagelistitemtrailingconfiguration/trailingitem.md): The configuration’s item.
- [CPMessageTrailingItem](cpmessagetrailingitem.md): The accessories that a message list item can display in its trailing region.

### Getting the Trailing Image

- [trailingImage](cpmessagelistitemtrailingconfiguration/trailingimage.md): The configuration’s image.

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
- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): An object that describes the appearance of a message list item’s leading region.
- [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md): The configuration of the list item’s trailing region.

# CPMessageListItemTrailingConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the appearance of a message list item’s trailing region.

## Declaration

```objectivec
@interface CPMessageListItemTrailingConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use a trailing configuration to describe the visual elements that a message list item’s trailing region contains. The region can show a [CPMessageTrailingItem](cpmessagetrailingitem.md) and an image.

Configurations are immutable. To modify the list item’s trailing configuration, update its [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md) property with a new configuration. CarPlay detects the change and redraws the message list item.

## Topics

### Creating a Configuration

- [initWithTrailingItem:trailingImage:](cpmessagelistitemtrailingconfiguration/init%28trailingitem_trailingimage_%29.md): Creates a trailing configuration that contains an item and an image.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size of a message list item’s image.

### Getting the Trailing Item

- [trailingItem](cpmessagelistitemtrailingconfiguration/trailingitem.md): The configuration’s item.
- [CPMessageTrailingItem](cpmessagetrailingitem.md): The accessories that a message list item can display in its trailing region.

### Getting the Trailing Image

- [trailingImage](cpmessagelistitemtrailingconfiguration/trailingimage.md): The configuration’s image.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Managing Leading and Trailing Configurations

- [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md): The configuration of the list item’s leading region.
- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): An object that describes the appearance of a message list item’s leading region.
- [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md): The configuration of the list item’s trailing region.
