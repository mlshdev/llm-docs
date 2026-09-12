> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitem](https://developer.apple.com/documentation/carplay/cplistimagerowitem)

# CPListImageRowItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A list template row that displays a series of images.

## Declaration

```swift
@MainActor class CPListImageRowItem
```

<a id="overview"></a>

## Overview

Use `CPListImageRowItem` to display a series of images as a row in a list template. At runtime, use [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md) to determine the maximum number of images that the row displays. CarPlay may display fewer images, depending on the width of the vehicle’s primary screen. Provide images that are display-ready, and include light and dark variants of each. See [init(text:images:)](cplistimagerowitem/init%28text_images_%29.md) for more information.

You assign a [handler](cplistimagerowitem/handler.md) to the list item that CarPlay executes when the user selects the item. You can assign a second handler, [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md), which CarPlay calls when the user selects an individual image.

CarPlay doesn’t support custom list item types. Instead, use the `userInfo` property to attach a value to the list item that provides additional context, such as specifying  a model object that corresponds to the item.

## Topics

### Creating a List Image Row Item

- [init(text:images:)](cplistimagerowitem/init%28text_images_%29.md): Deprecated. Creates a list item that displays a row of images.
- [init(text:images:imageTitles:)](cplistimagerowitem/init%28text_images_imagetitles_%29.md): Deprecated. Creates a list item that displays a row of images with a title below each image.

### Managing Content

- [text](cplistimagerowitem/text.md): The list item’s primary text.
- [gridImages](cplistimagerowitem/gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [update(\_:)](cplistimagerowitem/update%28__%29.md): Deprecated. Adds, removes, reorders, or updates the images in the list item’s image row.
- [maximumImageSize](cplistimagerowitem/maximumimagesize.md): Deprecated. The maximum size of an image that an image row can display.
- [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

### Managing Selection

- [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md): An optional closure that CarPlay invokes when the user selects an image.
- [handler](cplistimagerowitem/handler.md): An optional closure that CarPlay invokes when the user selects the list item.

### Managing Supplementary Information

- [userInfo](cplistimagerowitem/userinfo.md): An opaque value for the list item.

### Enabling Items

- [isEnabled](cplistimagerowitem/isenabled.md): A Boolean value that indicates if the item is enabled.

### Initializers

- [init(text:cardElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_cardelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemCardElement and a boolean to allow multiple lines in this row.
- [init(text:condensedElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_condensedelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemCondensedElement and a boolean to allow multiple lines in this row.
- [init(text:elements:allowsMultipleLines:)](cplistimagerowitem/init%28text_elements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemRowElement and a boolean to allow multiple lines in this row.
- [init(text:gridElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_gridelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemGridElement and a boolean to allow multiple lines in this row.
- [init(text:imageGridElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_imagegridelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemImageGridElement and a boolean to allow multiple lines in this row.

### Instance Properties

- [allowsMultipleLines](cplistimagerowitem/allowsmultiplelines.md): A Boolean value indicating whether the elements should be visible in more than a single line.
- [elements](cplistimagerowitem/elements.md): The array of elements used to draw visible elements.
- [imageTitles](cplistimagerowitem/imagetitles.md): Deprecated. The titles displayed for each image in this image row item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPListTemplateItem](cplisttemplateitem.md)
- [CPSelectableListItem](cpselectablelistitem.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating a Section

- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.

# CPListImageRowItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A list template row that displays a series of images.

## Declaration

```objectivec
@interface CPListImageRowItem : NSObject
```

<a id="overview"></a>

## Overview

Use `CPListImageRowItem` to display a series of images as a row in a list template. At runtime, use [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md) to determine the maximum number of images that the row displays. CarPlay may display fewer images, depending on the width of the vehicle’s primary screen. Provide images that are display-ready, and include light and dark variants of each. See [initWithText:images:](cplistimagerowitem/init%28text_images_%29.md) for more information.

You assign a [handler](cplistimagerowitem/handler.md) to the list item that CarPlay executes when the user selects the item. You can assign a second handler, [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md), which CarPlay calls when the user selects an individual image.

CarPlay doesn’t support custom list item types. Instead, use the `userInfo` property to attach a value to the list item that provides additional context, such as specifying  a model object that corresponds to the item.

## Topics

### Creating a List Image Row Item

- [initWithText:images:](cplistimagerowitem/init%28text_images_%29.md): Deprecated. Creates a list item that displays a row of images.
- [initWithText:images:imageTitles:](cplistimagerowitem/init%28text_images_imagetitles_%29.md): Deprecated. Creates a list item that displays a row of images with a title below each image.

### Managing Content

- [text](cplistimagerowitem/text.md): The list item’s primary text.
- [gridImages](cplistimagerowitem/gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [updateImages:](cplistimagerowitem/update%28__%29.md): Deprecated. Adds, removes, reorders, or updates the images in the list item’s image row.
- [maximumImageSize](cplistimagerowitem/maximumimagesize.md): Deprecated. The maximum size of an image that an image row can display.
- [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

### Managing Selection

- [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md): An optional closure that CarPlay invokes when the user selects an image.
- [handler](cplistimagerowitem/handler.md): An optional closure that CarPlay invokes when the user selects the list item.

### Managing Supplementary Information

- [userInfo](cplistimagerowitem/userinfo.md): An opaque value for the list item.

### Enabling Items

- [enabled](cplistimagerowitem/isenabled.md): A Boolean value that indicates if the item is enabled.

### Instance Properties

- [allowsMultipleLines](cplistimagerowitem/allowsmultiplelines.md): A Boolean value indicating whether the elements should be visible in more than a single line.
- [elements](cplistimagerowitem/elements.md): The array of elements used to draw visible elements.
- [imageTitles](cplistimagerowitem/imagetitles.md): Deprecated. The titles displayed for each image in this image row item.

### Instance Methods

- [initWithText:cardElements:allowsMultipleLines:](cplistimagerowitem/init%28text_cardelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemCardElement and a boolean to allow multiple lines in this row.
- [initWithText:condensedElements:allowsMultipleLines:](cplistimagerowitem/init%28text_condensedelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemCondensedElement and a boolean to allow multiple lines in this row.
- [initWithText:elements:allowsMultipleLines:](cplistimagerowitem/init%28text_elements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemRowElement and a boolean to allow multiple lines in this row.
- [initWithText:gridElements:allowsMultipleLines:](cplistimagerowitem/init%28text_gridelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemGridElement and a boolean to allow multiple lines in this row.
- [initWithText:imageGridElements:allowsMultipleLines:](cplistimagerowitem/init%28text_imagegridelements_allowsmultiplelines_%29.md): Initialize a list image row item with a text string, an array of @c CPListImageRowItemImageGridElement and a boolean to allow multiple lines in this row.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPSelectableListItem](cpselectablelistitem.md)

## See Also

### Creating a Section

- [initWithItems:](cplistsection/initwithitems_.md): Creates a section with list items.
- [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md): Creates a section with list items, a header, and a section index title.
- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.
