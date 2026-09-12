> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitem](https://developer.apple.com/documentation/carplay/cpmessagelistitem)

# CPMessageListItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A list template row that represents a conversation or contact.

## Declaration

```swift
class CPMessageListItem
```

<a id="overview"></a>

## Overview

Use `CPMessageListItem` to display information about a conversation or a contact in a list template. Unlike [CPListItem](cplistitem.md), you don’t provide a selection handler. Instead, when the user selects the row, CarPlay invokes Siri using the parameters you provide and begins a message compose, read, or reply flow.

The behavior of the list item when the user selects it depends on how you initialize or configure it. If the item has a phone number or email address, Siri launches the message compose flow. If the list item has an unread indicator, Siri launches the message read flow. Otherwise, Siri launches the message reply flow.

`CPMessageListItem` can display various auxiliary items in its leading and trailing regions. You describe these using a configuration object for each region. See [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md) and [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md) for more information.

CarPlay doesn’t support custom list item types. Instead, use the [userInfo](cpmessagelistitem/userinfo.md) property to attach a value to the list item that provides additional context, such as specifying  a model object that corresponds to the item.

> **Note**

>  `CPMessageListItem` is available only in apps that have the communication entitlement.

## Topics

### Creating a Message List Item

- [init(conversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText:)](cpmessagelistitem/init%28conversationidentifier_text_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents an existing conversation.
- [init(fullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText:)](cpmessagelistitem/init%28fullname_phoneoremailaddress_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents a contact.

### Managing the Message Context

- [conversationIdentifier](cpmessagelistitem/conversationidentifier.md): The conversation’s unique identifier.
- [phoneOrEmailAddress](cpmessagelistitem/phoneoremailaddress.md): The contact’s phone number or email address.

### Managing Content

- [text](cpmessagelistitem/text.md): The list item’s primary text.
- [detailText](cpmessagelistitem/detailtext.md): The list item’s secondary text.
- [trailingText](cpmessagelistitem/trailingtext.md): The list item’s supplementary text.

### Managing Leading and Trailing Configurations

- [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md): The configuration of the list item’s leading region.
- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): An object that describes the appearance of a message list item’s leading region.
- [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md): The configuration of the list item’s trailing region.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): An object that describes the appearance of a message list item’s trailing region.

### Managing Supplementary Information

- [userInfo](cpmessagelistitem/userinfo.md): An opaque value for the list item.

### Enabling Items

- [isEnabled](cpmessagelistitem/isenabled.md): A Boolean value that indicates if the item is enabled.

### Instance Properties

- [leadingDetailTextImage](cpmessagelistitem/leadingdetailtextimage.md): Image shown on the leading edge of the detail text.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPListTemplateItem](cplisttemplateitem.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a Section

- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.

# CPMessageListItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A list template row that represents a conversation or contact.

## Declaration

```objectivec
@interface CPMessageListItem : NSObject
```

<a id="overview"></a>

## Overview

Use `CPMessageListItem` to display information about a conversation or a contact in a list template. Unlike [CPListItem](cplistitem.md), you don’t provide a selection handler. Instead, when the user selects the row, CarPlay invokes Siri using the parameters you provide and begins a message compose, read, or reply flow.

The behavior of the list item when the user selects it depends on how you initialize or configure it. If the item has a phone number or email address, Siri launches the message compose flow. If the list item has an unread indicator, Siri launches the message read flow. Otherwise, Siri launches the message reply flow.

`CPMessageListItem` can display various auxiliary items in its leading and trailing regions. You describe these using a configuration object for each region. See [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md) and [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md) for more information.

CarPlay doesn’t support custom list item types. Instead, use the [userInfo](cpmessagelistitem/userinfo.md) property to attach a value to the list item that provides additional context, such as specifying  a model object that corresponds to the item.

> **Note**

>  `CPMessageListItem` is available only in apps that have the communication entitlement.

## Topics

### Creating a Message List Item

- [initWithConversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText:](cpmessagelistitem/init%28conversationidentifier_text_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents an existing conversation.
- [initWithFullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText:](cpmessagelistitem/init%28fullname_phoneoremailaddress_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents a contact.

### Managing the Message Context

- [conversationIdentifier](cpmessagelistitem/conversationidentifier.md): The conversation’s unique identifier.
- [phoneOrEmailAddress](cpmessagelistitem/phoneoremailaddress.md): The contact’s phone number or email address.

### Managing Content

- [text](cpmessagelistitem/text.md): The list item’s primary text.
- [detailText](cpmessagelistitem/detailtext.md): The list item’s secondary text.
- [trailingText](cpmessagelistitem/trailingtext.md): The list item’s supplementary text.

### Managing Leading and Trailing Configurations

- [leadingConfiguration](cpmessagelistitem/leadingconfiguration.md): The configuration of the list item’s leading region.
- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): An object that describes the appearance of a message list item’s leading region.
- [trailingConfiguration](cpmessagelistitem/trailingconfiguration.md): The configuration of the list item’s trailing region.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): An object that describes the appearance of a message list item’s trailing region.

### Managing Supplementary Information

- [userInfo](cpmessagelistitem/userinfo.md): An opaque value for the list item.

### Enabling Items

- [enabled](cpmessagelistitem/isenabled.md): A Boolean value that indicates if the item is enabled.

### Instance Properties

- [leadingDetailTextImage](cpmessagelistitem/leadingdetailtextimage.md): Image shown on the leading edge of the detail text.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPListTemplateItem](cplisttemplateitem.md)

## See Also

### Creating a Section

- [initWithItems:](cplistsection/initwithitems_.md): Creates a section with list items.
- [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md): Creates a section with list items, a header, and a section index title.
- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
