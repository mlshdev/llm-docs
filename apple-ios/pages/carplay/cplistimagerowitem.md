> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem

# CPListImageRowItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A row type that displays multiple sub-elements horizontally in a variety of styles.

## Declaration

```swift
@MainActor class CPListImageRowItem
```

<a id="overview"></a>

## Overview

Create a `CPListImageRowItem` to display image-based content in the rows of your list interface. Each `CPListImageRowItem` represents a single row of content and displays one or more images side-by-side, giving the row a more grid-like appearance. You specify the images in each row using row elements, which are subclasses of `CPListImageRowItemElement`. Each row element subclass defines a unique visual style to apply to the image. You use elements to represent part of your app’s content. For example, a music app might display a row for each playlist and fill the row with elements that represent albums in the playlist.

Create one or more `CPListImageRowItem` types when building the content for your list interface, configure it with elements, and add them to a [CPListSection](cplistsection.md) object. For each element in the row, specify the image to display and any other relevant content. Use the same type for all elements in a single row. Configure the new row with optional closures if you want to respond when someone interacts with the row or one of its elements. Associate any app-specific data with the row using the [userInfo](cplistitem/userinfo.md) property.

Use one of the following types to specify the elements of a row:

- **[CPListImageRowItemRowElement](cplistimagerowitemrowelement.md)**: The type displays an image with some descriptive text.
- **[CPListImageRowItemCardElement](cplistimagerowitemcardelement.md)**: The type displays an image and text inside a card-like shape.
- **[CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md)**: The type displays an image and text in a vertically condensed shape.
- **[CPListImageRowItemGridElement](cplistimagerowitemgridelement.md)**: The type displays an image with a border shape.
- **[CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md)**: The type displays text and an image with a border shape.

Rows support a variable number of items, either on a single line or spread across multiple lines. The [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md) constant defines the maximum number of items you can include in a single row. If the row supports multiple lines, CarPlay adds extra lines as needed until it displays the items you provided. If the row supports only a single line, CarPlay displays as many elements as it can fit into one line and ignores the rest. Configure a single- or multi-line layout when initializing the row.

To create a simpler layout with only one item per row, use the [CPListItem](cplistitem.md) type instead.

## Topics

### Creating a list image row item

- [init(text:elements:allowsMultipleLines:)](cplistimagerowitem/init%28text_elements_allowsmultiplelines_%29.md): Initializes the row with the specified text and row elements.
- [init(text:cardElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_cardelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and card-style elements.
- [init(text:condensedElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_condensedelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and condensed-height elements.
- [init(text:gridElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_gridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and grid elements.
- [init(text:imageGridElements:allowsMultipleLines:)](cplistimagerowitem/init%28text_imagegridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and image grid elements.

### Managing the row’s content

- [text](cplistimagerowitem/text.md): The row’s primary text.
- [elements](cplistimagerowitem/elements.md): The elements to display in the row.
- [allowsMultipleLines](cplistimagerowitem/allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [userInfo](cplistimagerowitem/userinfo.md): App-specific data you associate with the item.
- [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

### Responding to interactions

- [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md): The closure to run when someone interacts with one of the elements in the row.
- [handler](cplistimagerowitem/handler.md): The closure to run when someone interacts with any part of the row.

### Enabling and disabling the row

- [isEnabled](cplistimagerowitem/isenabled.md): A Boolean value that indicates whether the item is enabled.

### Deprecated

- [init(text:images:)](cplistimagerowitem/init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [init(text:images:imageTitles:)](cplistimagerowitem/init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](cplistimagerowitem/gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](cplistimagerowitem/imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](cplistimagerowitem/maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [update(\_:)](cplistimagerowitem/update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

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

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListSection](cplistsection.md): A container that groups related items in a list interface.
- [CPListItem](cplistitem.md): A selectable row in a list interface.
- [Supporting types for lists](list-content.md): Create sections, single-line items, multi-element rows, headers, and other content for your list.

# CPListImageRowItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A row type that displays multiple sub-elements horizontally in a variety of styles.

## Declaration

```objectivec
@interface CPListImageRowItem : NSObject
```

<a id="overview"></a>

## Overview

Create a `CPListImageRowItem` to display image-based content in the rows of your list interface. Each `CPListImageRowItem` represents a single row of content and displays one or more images side-by-side, giving the row a more grid-like appearance. You specify the images in each row using row elements, which are subclasses of `CPListImageRowItemElement`. Each row element subclass defines a unique visual style to apply to the image. You use elements to represent part of your app’s content. For example, a music app might display a row for each playlist and fill the row with elements that represent albums in the playlist.

Create one or more `CPListImageRowItem` types when building the content for your list interface, configure it with elements, and add them to a [CPListSection](cplistsection.md) object. For each element in the row, specify the image to display and any other relevant content. Use the same type for all elements in a single row. Configure the new row with optional closures if you want to respond when someone interacts with the row or one of its elements. Associate any app-specific data with the row using the [userInfo](cplistitem/userinfo.md) property.

Use one of the following types to specify the elements of a row:

- **[CPListImageRowItemRowElement](cplistimagerowitemrowelement.md)**: The type displays an image with some descriptive text.
- **[CPListImageRowItemCardElement](cplistimagerowitemcardelement.md)**: The type displays an image and text inside a card-like shape.
- **[CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md)**: The type displays an image and text in a vertically condensed shape.
- **[CPListImageRowItemGridElement](cplistimagerowitemgridelement.md)**: The type displays an image with a border shape.
- **[CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md)**: The type displays text and an image with a border shape.

Rows support a variable number of items, either on a single line or spread across multiple lines. The [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md) constant defines the maximum number of items you can include in a single row. If the row supports multiple lines, CarPlay adds extra lines as needed until it displays the items you provided. If the row supports only a single line, CarPlay displays as many elements as it can fit into one line and ignores the rest. Configure a single- or multi-line layout when initializing the row.

To create a simpler layout with only one item per row, use the [CPListItem](cplistitem.md) type instead.

## Topics

### Creating a list image row item

- [initWithText:elements:allowsMultipleLines:](cplistimagerowitem/init%28text_elements_allowsmultiplelines_%29.md): Initializes the row with the specified text and row elements.
- [initWithText:cardElements:allowsMultipleLines:](cplistimagerowitem/init%28text_cardelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and card-style elements.
- [initWithText:condensedElements:allowsMultipleLines:](cplistimagerowitem/init%28text_condensedelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and condensed-height elements.
- [initWithText:gridElements:allowsMultipleLines:](cplistimagerowitem/init%28text_gridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and grid elements.
- [initWithText:imageGridElements:allowsMultipleLines:](cplistimagerowitem/init%28text_imagegridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and image grid elements.

### Managing the row’s content

- [text](cplistimagerowitem/text.md): The row’s primary text.
- [elements](cplistimagerowitem/elements.md): The elements to display in the row.
- [allowsMultipleLines](cplistimagerowitem/allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [userInfo](cplistimagerowitem/userinfo.md): App-specific data you associate with the item.
- [CPMaximumNumberOfGridImages](cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

### Responding to interactions

- [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md): The closure to run when someone interacts with one of the elements in the row.
- [handler](cplistimagerowitem/handler.md): The closure to run when someone interacts with any part of the row.

### Enabling and disabling the row

- [enabled](cplistimagerowitem/isenabled.md): A Boolean value that indicates whether the item is enabled.

### Deprecated

- [initWithText:images:](cplistimagerowitem/init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [initWithText:images:imageTitles:](cplistimagerowitem/init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](cplistimagerowitem/gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](cplistimagerowitem/imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](cplistimagerowitem/maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [updateImages:](cplistimagerowitem/update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPSelectableListItem](cpselectablelistitem.md)

## See Also

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListSection](cplistsection.md): A container that groups related items in a list interface.
- [CPListItem](cplistitem.md): A selectable row in a list interface.
- [Supporting types for lists](list-content.md): Create sections, single-line items, multi-element rows, headers, and other content for your list.
