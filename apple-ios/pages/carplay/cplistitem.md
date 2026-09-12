> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem](https://developer.apple.com/documentation/carplay/cplistitem)

# CPListItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A selectable row in a list template.

## Declaration

```swift
@MainActor class CPListItem
```

<a id="overview"></a>

## Overview

A list item manages the content of a single row in a list template. CarPlay manages the layout of a list item and may adjust its layout to allow for the display of auxiliary content, such as an accessory or a Now Playing indicator. A list item can display primary and secondary text and an image. It can also show an accessory or custom accessory image, and one of several indicators that the system provides.

You assign a [handler](cplistitem/handler.md) to a list item that CarPlay executes when the user selects the item. The handler receives the item and a closure that you must call after you finish processing the selection.

CarPlay doesn’t support custom list item types. Instead, use the [userInfo](cplistitem/userinfo.md) property to attach a value to the list item that provides additional context, such as specifying  a model object that corresponds to the item.

## Topics

### Creating a List Item

- [init(text:detailText:)](cplistitem/init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [init(text:detailText:image:)](cplistitem/init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
- [init(text:detailText:image:accessoryImage:accessoryType:)](cplistitem/init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.

### Managing Configuration

- [isEnabled](cplistitem/isenabled.md): A Boolean value that indicates if the item is enabled.
- [handler](cplistitem/handler.md): An optional closure that CarPlay invokes when the user selects the list item.
- [userInfo](cplistitem/userinfo.md): An opaque value for the list item.

### Managing Accessories

- [accessoryType](cplistitem/accessorytype.md): The accessory that the list item displays in its trailing region.
- [CPListItemAccessoryType](cplistitemaccessorytype.md): The accessory types that a list item can display.
- [accessoryImage](cplistitem/accessoryimage.md): The image that the list item displays in its trailing region.
- [setAccessoryImage(\_:)](cplistitem/setaccessoryimage%28__%29.md): Updates the list item’s accessory image.

### Managing Content

- [text](cplistitem/text.md): The list item’s primary text.
- [setText(\_:)](cplistitem/settext%28__%29.md): Updates the list item’s primary text.
- [detailText](cplistitem/detailtext.md): The list item’s secondary text.
- [setDetailText(\_:)](cplistitem/setdetailtext%28__%29.md): Updates the list item’s secondary text.
- [image](cplistitem/image.md): The image that the list item displays in its leading region.
- [setImage(\_:)](cplistitem/setimage%28__%29.md): Updates the list item’s image.
- [maximumImageSize](cplistitem/maximumimagesize.md): The maximum size of a list item’s image and accessory image.

### Managing Playback Information

- [isExplicitContent](cplistitem/isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [isPlaying](cplistitem/isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The playback progress status for the content that the list item represents.

### Managing the Assistant Cell

- [CPListItem.AssistantCellPosition](cplistitem/assistantcellposition.md): Constants to specify the position of the assistant cell.
- [CPListItem.AssistantCellVisibility](cplistitem/assistantcellvisibility.md): Constants to specify the visibility of the assistant cell.

### Deprecated

- [Deprecated Symbols](cplistitem-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPListTemplateItem](cplisttemplateitem.md)
- [CPPlayableItem](cpplayableitem.md)
- [CPSelectableListItem](cpselectablelistitem.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating a Section

- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.

# CPListItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A selectable row in a list template.

## Declaration

```objectivec
@interface CPListItem : NSObject
```

<a id="overview"></a>

## Overview

A list item manages the content of a single row in a list template. CarPlay manages the layout of a list item and may adjust its layout to allow for the display of auxiliary content, such as an accessory or a Now Playing indicator. A list item can display primary and secondary text and an image. It can also show an accessory or custom accessory image, and one of several indicators that the system provides.

You assign a [handler](cplistitem/handler.md) to a list item that CarPlay executes when the user selects the item. The handler receives the item and a closure that you must call after you finish processing the selection.

CarPlay doesn’t support custom list item types. Instead, use the [userInfo](cplistitem/userinfo.md) property to attach a value to the list item that provides additional context, such as specifying  a model object that corresponds to the item.

## Topics

### Creating a List Item

- [initWithText:detailText:](cplistitem/init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [initWithText:detailText:image:](cplistitem/init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
- [initWithText:detailText:image:accessoryImage:accessoryType:](cplistitem/init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.

### Managing Configuration

- [enabled](cplistitem/isenabled.md): A Boolean value that indicates if the item is enabled.
- [handler](cplistitem/handler.md): An optional closure that CarPlay invokes when the user selects the list item.
- [userInfo](cplistitem/userinfo.md): An opaque value for the list item.

### Managing Accessories

- [accessoryType](cplistitem/accessorytype.md): The accessory that the list item displays in its trailing region.
- [CPListItemAccessoryType](cplistitemaccessorytype.md): The accessory types that a list item can display.
- [accessoryImage](cplistitem/accessoryimage.md): The image that the list item displays in its trailing region.
- [setAccessoryImage:](cplistitem/setaccessoryimage%28__%29.md): Updates the list item’s accessory image.

### Managing Content

- [text](cplistitem/text.md): The list item’s primary text.
- [setText:](cplistitem/settext%28__%29.md): Updates the list item’s primary text.
- [detailText](cplistitem/detailtext.md): The list item’s secondary text.
- [setDetailText:](cplistitem/setdetailtext%28__%29.md): Updates the list item’s secondary text.
- [image](cplistitem/image.md): The image that the list item displays in its leading region.
- [setImage:](cplistitem/setimage%28__%29.md): Updates the list item’s image.
- [maximumImageSize](cplistitem/maximumimagesize.md): The maximum size of a list item’s image and accessory image.

### Managing Playback Information

- [explicitContent](cplistitem/isexplicitcontent.md): A Boolean value that determines whether the list item displays its explicit content indicator.
- [playing](cplistitem/isplaying.md): A Boolean value that determines whether the list item displays its Now Playing indicator.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The location where the list item displays its Now Playing indicator.
- [CPListItemPlayingIndicatorLocation](cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The playback progress status for the content that the list item represents.

### Managing the Assistant Cell

- [CPAssistantCellPosition](cplistitem/assistantcellposition.md): Constants to specify the position of the assistant cell.
- [CPAssistantCellVisibility](cplistitem/assistantcellvisibility.md): Constants to specify the visibility of the assistant cell.

### Deprecated

- [Deprecated Symbols](cplistitem-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [CPSelectableListItem](cpselectablelistitem.md)

## See Also

### Creating a Section

- [initWithItems:](cplistsection/initwithitems_.md): Creates a section with list items.
- [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md): Creates a section with list items, a header, and a section index title.
- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.
