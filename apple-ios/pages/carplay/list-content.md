> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/list-content

# Supporting types for lists

**Interface languages:** Swift, Objective-C

**Framework:** CarPlay  
**Kind:** API Collection

Create sections, single-line items, multi-element rows, headers, and other content for your list.

<a id="overview"></a>

## Overview

A [CPListTemplate](cplisttemplate.md) displays one or more rows of content in a scrollable interface. Each row of the list is an item, which you implement using the [CPListItem](cplistitem.md), [CPListImageRowItem](cplistimagerowitem.md), or [CPMessageListItem](cpmessagelistitem.md) types. Organize groups of items into sections with a title, and add headers and specialized content to the list to display your app’s content.

Each[CPListImageRowItem](cplistimagerowitem.md) object in your list contains one or more *elements*, which manage the actual content for the row. Every element contains an image, and some elements display text and optional overlay content. A row item displays its elements side-by-side to make better use of the available space. A single row can also have multiple lines of elements when you have more content to display. Choose from one of several element types to give your content a unique appearance in your app’s interface.

## Topics

### Sections

- [CPListSection](cplistsection.md): A container that groups related items in a list interface.

### Rows

- [CPListItem](cplistitem.md): A selectable row in a list interface.
- [CPListImageRowItem](cplistimagerowitem.md): A row type that displays multiple sub-elements horizontally in a variety of styles.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that manages a text message thread or contact.

### Row elements

- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md): A row element that displays an image, title, and subtitle.
- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md): A row element that displays an image and text on a card-style background.
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.

### Message row configuration

- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): A type that defines the content at the leading edge of a message list item’s row.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): A type that defines the content at the trailing edge of a message list item’s row.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size for images in the leading and trailing regions of a message list item.
- [CPMaximumMessageItemLeadingDetailTextImageSize](cpmaximummessageitemleadingdetailtextimagesize.md): The maximum size for images in the detail text image of a message list item.

### Headers and special cells

- [CPAssistantCellConfiguration](cpassistantcellconfiguration.md): A type that configures a special row in for performing app-related actions using Siri.
- [CPListTemplateDetailsHeader](cplisttemplatedetailsheader.md): A header section that displays rich media content and action buttons above a list of items.

### Element overlays

- [CPImageOverlay](cpimageoverlay.md): A type that manages content you layer on top of a thumbnail image.
- [CPSportsOverlay](cpsportsoverlay.md): A type that displays sporting event details on top of a thumbnail image.

### Common types

- [CPThumbnailImage](cpthumbnailimage.md): An image that can display overlays and metadata on top of the image.
- [CPListImageRowItemElement](cplistimagerowitemelement.md): An abstract class for an element in a row of a list.
- [CPSelectableListItem](cpselectablelistitem.md): An interface for responding to selections in list items.
- [CPListTemplateItem](cplisttemplateitem.md): An interface that describes the common properties of all list item types.

## See Also

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListSection](cplistsection.md): A container that groups related items in a list interface.
- [CPListItem](cplistitem.md): A selectable row in a list interface.
- [CPListImageRowItem](cplistimagerowitem.md): A row type that displays multiple sub-elements horizontally in a variety of styles.
