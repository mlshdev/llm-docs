> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem

# CPListItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A selectable row in a list interface.

## Declaration

```swift
@MainActor class CPListItem
```

<a id="overview"></a>

## Overview

A `CPListItem` object manages the content for a single row in a list interface. The row contains primary and secondary text elements and an image to describe one piece of your app’s content. For example, a row of this type might describe a single song, album, or playlist. CarPlay handles the presentation of the data you provide, adjusting the row’s layout automatically to accommodate additional elements such as an accessory or Now Playing indicator.

Create one or more `CPListItem` objects when building the content for your list interface, and add them to a [CPListSection](cplistsection.md) object. Specify the text and optional image and accessory information for your row initially, and add an optional [handler](cplistitem/handler.md) to respond when someone selects the row. If your row represents media content, you can also configure any playback-related information using the properties of this type. If you want to associate app-specific data with the row, put that content into the provided [userInfo](cplistitem/userinfo.md) property.

Use this type for simple lists in which each row corresponds to a single data item or selectable choice in your app. To build a more information-dense interface, create rows using the [CPListImageRowItem](cplistimagerowitem.md) type instead.

## Topics

### Creating a list item

- [init(text:detailText:)](cplistitem/init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [init(text:detailText:image:)](cplistitem/init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
- [init(text:detailText:image:accessoryImage:accessoryType:)](cplistitem/init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.

### Managing the row’s content

- [text](cplistitem/text.md): The primary text for the list item.
- [detailText](cplistitem/detailtext.md): The secondary text for the list item.
- [image](cplistitem/image.md): The image to display on the leading edge of the cell.
- [setText(\_:)](cplistitem/settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText(\_:)](cplistitem/setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage(\_:)](cplistitem/setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](cplistitem/userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](cplistitem/maximumimagesize.md): The maximum dimensions for the list item images.

### Responding to interactions

- [handler](cplistitem/handler.md): The closure to run when someone interacts with any part of the list item.
- [isEnabled](cplistitem/isenabled.md): A Boolean value that indicates whether the item is enabled.

### Managing accessories

- [accessoryType](cplistitem/accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [accessoryImage](cplistitem/accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [setAccessoryImage(\_:)](cplistitem/setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.

### Managing playback information

- [isPlaying](cplistitem/isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [isExplicitContent](cplistitem/isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.

### Deprecated

- [init(text:detailText:image:showsDisclosureIndicator:)](cplistitem/init%28text_detailtext_image_showsdisclosureindicator_%29.md): Deprecated. Initialize a list item with text, detailtext, an image, and a disclosure indicator.
- [showsDisclosureIndicator](cplistitem/showsdisclosureindicator.md): Deprecated. If YES, a cell displaying this list item will render with a disclosure indicator in the trailing side of the cell.
- [showsExplicitLabel](cplistitem/showsexplicitlabel.md): Deprecated. If YES, a cell displaying this list item will render with an explicit label to the trailing edge of the text

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

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListSection](cplistsection.md): A container that groups related items in a list interface.
- [CPListImageRowItem](cplistimagerowitem.md): A row type that displays multiple sub-elements horizontally in a variety of styles.
- [Supporting types for lists](list-content.md): Create sections, single-line items, multi-element rows, headers, and other content for your list.

# CPListItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A selectable row in a list interface.

## Declaration

```objectivec
@interface CPListItem : NSObject
```

<a id="overview"></a>

## Overview

A `CPListItem` object manages the content for a single row in a list interface. The row contains primary and secondary text elements and an image to describe one piece of your app’s content. For example, a row of this type might describe a single song, album, or playlist. CarPlay handles the presentation of the data you provide, adjusting the row’s layout automatically to accommodate additional elements such as an accessory or Now Playing indicator.

Create one or more `CPListItem` objects when building the content for your list interface, and add them to a [CPListSection](cplistsection.md) object. Specify the text and optional image and accessory information for your row initially, and add an optional [handler](cplistitem/handler.md) to respond when someone selects the row. If your row represents media content, you can also configure any playback-related information using the properties of this type. If you want to associate app-specific data with the row, put that content into the provided [userInfo](cplistitem/userinfo.md) property.

Use this type for simple lists in which each row corresponds to a single data item or selectable choice in your app. To build a more information-dense interface, create rows using the [CPListImageRowItem](cplistimagerowitem.md) type instead.

## Topics

### Creating a list item

- [initWithText:detailText:](cplistitem/init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [initWithText:detailText:image:](cplistitem/init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
- [initWithText:detailText:image:accessoryImage:accessoryType:](cplistitem/init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.

### Managing the row’s content

- [text](cplistitem/text.md): The primary text for the list item.
- [detailText](cplistitem/detailtext.md): The secondary text for the list item.
- [image](cplistitem/image.md): The image to display on the leading edge of the cell.
- [setText:](cplistitem/settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText:](cplistitem/setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage:](cplistitem/setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](cplistitem/userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](cplistitem/maximumimagesize.md): The maximum dimensions for the list item images.

### Responding to interactions

- [handler](cplistitem/handler.md): The closure to run when someone interacts with any part of the list item.
- [enabled](cplistitem/isenabled.md): A Boolean value that indicates whether the item is enabled.

### Managing accessories

- [accessoryType](cplistitem/accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [accessoryImage](cplistitem/accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [setAccessoryImage:](cplistitem/setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.

### Managing playback information

- [playing](cplistitem/isplaying.md): A Boolean value that indicates whether the list item displays the Now Playing indicator.
- [playbackProgress](cplistitem/playbackprogress.md): The current playback progress for a media item.
- [playingIndicatorLocation](cplistitem/playingindicatorlocation.md): The placement of the Now Playing indicator in the list item’s row.
- [CPListItemPlayingIndicatorLocation](cplistitemplayingindicatorlocation.md): The locations where a list item can display the Now Playing indicator.
- [explicitContent](cplistitem/isexplicitcontent.md): A Boolean value that indicates whether the list item displays an explicit content indicator.

### Deprecated

- [initWithText:detailText:image:showsDisclosureIndicator:](cplistitem/init%28text_detailtext_image_showsdisclosureindicator_%29.md): Deprecated. Initialize a list item with text, detailtext, an image, and a disclosure indicator.
- [showsDisclosureIndicator](cplistitem/showsdisclosureindicator.md): Deprecated. If YES, a cell displaying this list item will render with a disclosure indicator in the trailing side of the cell.
- [showsExplicitLabel](cplistitem/showsexplicitlabel.md): Deprecated. If YES, a cell displaying this list item will render with an explicit label to the trailing edge of the text

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [CPSelectableListItem](cpselectablelistitem.md)

## See Also

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListSection](cplistsection.md): A container that groups related items in a list interface.
- [CPListImageRowItem](cplistimagerowitem.md): A row type that displays multiple sub-elements horizontally in a variety of styles.
- [Supporting types for lists](list-content.md): Create sections, single-line items, multi-element rows, headers, and other content for your list.
