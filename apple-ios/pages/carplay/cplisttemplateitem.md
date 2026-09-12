> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplateitem](https://developer.apple.com/documentation/carplay/cplisttemplateitem)

# CPListTemplateItem (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A description of the common properties of all list item types.

## Declaration

```swift
protocol CPListTemplateItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

>  You don’t create custom classes that conform to `CPListItemTemplate`. Instead, you use one of the prebuilt list item types that adopt this protocol, such as [CPMessageListItem](cpmessagelistitem.md).

## Topics

### Managing Content

- [text](cplisttemplateitem/text.md): The item’s primary text.
- [userInfo](cplisttemplateitem/userinfo.md): An opaque value for the list item.

### Enabling Items

- [isEnabled](cplisttemplateitem/isenabled.md): A Boolean value that indicates if the item is enabled.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [CPSelectableListItem](cpselectablelistitem.md)

### Conforming Types

- [CPListImageRowItem](cplistimagerowitem.md)
- [CPListItem](cplistitem.md)
- [CPMessageListItem](cpmessagelistitem.md)

## See Also

### Creating a Section

- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.

# CPListTemplateItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A description of the common properties of all list item types.

## Declaration

```objectivec
@protocol CPListTemplateItem <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

>  You don’t create custom classes that conform to `CPListItemTemplate`. Instead, you use one of the prebuilt list item types that adopt this protocol, such as [CPMessageListItem](cpmessagelistitem.md).

## Topics

### Managing Content

- [text](cplisttemplateitem/text.md): The item’s primary text.
- [userInfo](cplisttemplateitem/userinfo.md): An opaque value for the list item.

### Enabling Items

- [enabled](cplisttemplateitem/isenabled.md): A Boolean value that indicates if the item is enabled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [CPSelectableListItem](cpselectablelistitem.md)

### Conforming Types

- [CPMessageListItem](cpmessagelistitem.md)

## See Also

### Creating a Section

- [initWithItems:](cplistsection/initwithitems_.md): Creates a section with list items.
- [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md): Creates a section with list items, a header, and a section index title.
- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.
