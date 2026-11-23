> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration

# CPMessageListItemLeadingConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A type that defines the content at the leading edge of a message list item’s row.

## Declaration

```swift
class CPMessageListItemLeadingConfiguration
```

<a id="overview"></a>

## Overview

A `CPMessageListItemLeadingConfiguration` object contains the content to display at the leading edge of the row for a [CPMessageListItem](cpmessagelistitem.md). Use this type to specify standard visual elements such as a symbol that indicates something is unread, or a star symbol for a favorite item. You can also specify a custom image to display before the rest of the message information. CarPlay places this content before the portion of the row that shows the conversation name, contact name, and other primary text.

Create an instance of this type and configure it with the information you want to display for the current message list item. Initialize your [CPMessageListItem](cpmessagelistitem.md) object with the instance you create. You can also change the leading information later by assigning a new instance of this class to the [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md) property of the item.

## Topics

### Creating a configuration

- [init(leadingItem:leadingImage:unread:)](cpmessagelistitemleadingconfiguration/init%28leadingitem_leadingimage_unread_%29.md): Creates the configuration object with the items to display at the leading edge of the row.

### Getting the leading item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The standard system symbol to display in the row’s leading region.
- [CPMessageLeadingItem](cpmessageleadingitem.md): Constants that indicate the type of symbol to display at the leading edge of a message list row.

### Getting the configuration’s state

- [leadingImage](cpmessagelistitemleadingconfiguration/leadingimage.md): The custom image to display in the row’s leading region.
- [isUnread](cpmessagelistitemleadingconfiguration/isunread.md): A Boolean value that indicates the unread status of the conversation.

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

### List items

- [CPMessageListItem](cpmessagelistitem.md): A list template row that manages a text message thread or contact.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): A type that defines the content at the trailing edge of a message list item’s row.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size for images in the leading and trailing regions of a message list item.
- [CPMaximumMessageItemLeadingDetailTextImageSize](cpmaximummessageitemleadingdetailtextimagesize.md): The maximum size for images in the detail text image of a message list item.

# CPMessageListItemLeadingConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A type that defines the content at the leading edge of a message list item’s row.

## Declaration

```objectivec
@interface CPMessageListItemLeadingConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A `CPMessageListItemLeadingConfiguration` object contains the content to display at the leading edge of the row for a [CPMessageListItem](cpmessagelistitem.md). Use this type to specify standard visual elements such as a symbol that indicates something is unread, or a star symbol for a favorite item. You can also specify a custom image to display before the rest of the message information. CarPlay places this content before the portion of the row that shows the conversation name, contact name, and other primary text.

Create an instance of this type and configure it with the information you want to display for the current message list item. Initialize your [CPMessageListItem](cpmessagelistitem.md) object with the instance you create. You can also change the leading information later by assigning a new instance of this class to the [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md) property of the item.

## Topics

### Creating a configuration

- [initWithLeadingItem:leadingImage:unread:](cpmessagelistitemleadingconfiguration/init%28leadingitem_leadingimage_unread_%29.md): Creates the configuration object with the items to display at the leading edge of the row.

### Getting the leading item

- [leadingItem](cpmessagelistitemleadingconfiguration/leadingitem.md): The standard system symbol to display in the row’s leading region.
- [CPMessageLeadingItem](cpmessageleadingitem.md): Constants that indicate the type of symbol to display at the leading edge of a message list row.

### Getting the configuration’s state

- [leadingImage](cpmessagelistitemleadingconfiguration/leadingimage.md): The custom image to display in the row’s leading region.
- [unread](cpmessagelistitemleadingconfiguration/isunread.md): A Boolean value that indicates the unread status of the conversation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### List items

- [CPMessageListItem](cpmessagelistitem.md): A list template row that manages a text message thread or contact.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): A type that defines the content at the trailing edge of a message list item’s row.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size for images in the leading and trailing regions of a message list item.
- [CPMaximumMessageItemLeadingDetailTextImageSize](cpmaximummessageitemleadingdetailtextimagesize.md): The maximum size for images in the detail text image of a message list item.
