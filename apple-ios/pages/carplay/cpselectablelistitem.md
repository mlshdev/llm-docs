> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpselectablelistitem](https://developer.apple.com/documentation/carplay/cpselectablelistitem)

# CPSelectableListItem (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A description of a selectable list item.

## Declaration

```swift
protocol CPSelectableListItem : CPListTemplateItem
```

<a id="overview"></a>

## Overview

> **Important**

>  You don’t create custom classes that conform to `CPSelectableListItem`. Instead, you use one of the prebuilt list item types that adopt this protocol, such as [CPListItem](cplistitem.md) or [CPListImageRowItem](cplistimagerowitem.md).

## Topics

### Managing Selection

- [handler](cpselectablelistitem/handler.md): An optional closure that CarPlay invokes when the user selects the list item.

## Relationships

### Inherits From

- [CPListTemplateItem](cplisttemplateitem.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [CPListImageRowItem](cplistimagerowitem.md)
- [CPListItem](cplistitem.md)

## See Also

### Creating a Section

- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.

# CPSelectableListItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A description of a selectable list item.

## Declaration

```objectivec
@protocol CPSelectableListItem <CPListTemplateItem>
```

<a id="overview"></a>

## Overview

> **Important**

>  You don’t create custom classes that conform to `CPSelectableListItem`. Instead, you use one of the prebuilt list item types that adopt this protocol, such as [CPListItem](cplistitem.md) or [CPListImageRowItem](cplistimagerowitem.md).

## Topics

### Managing Selection

- [handler](cpselectablelistitem/handler.md): An optional closure that CarPlay invokes when the user selects the list item.

## Relationships

### Inherits From

- [CPListTemplateItem](cplisttemplateitem.md)

### Conforming Types

- [CPListImageRowItem](cplistimagerowitem.md)
- [CPListItem](cplistitem.md)

## See Also

### Creating a Section

- [initWithItems:](cplistsection/initwithitems_.md): Creates a section with list items.
- [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md): Creates a section with list items, a header, and a section index title.
- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.
