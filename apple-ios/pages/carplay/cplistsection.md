> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistsection](https://developer.apple.com/documentation/carplay/cplistsection)

# CPListSection (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A container that groups your list items into sections.

## Declaration

```swift
class CPListSection
```

<a id="overview"></a>

## Overview

A section contains zero or more list items. You can configure a section to display a header and a section index title, which CarPlay displays on the trailing edge of the screen. The section header and the section index title are optional.

To create a section, call the [initWithItems:](cplistsection/initwithitems_.md) method and provide an array of list items. Alternatively, use [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md) if you want to display a header and a section index title. CarPlay doesn’t support custom list items, so you must use one of the types that the framework provides, such as [CPListItem](cplistitem.md) or [CPListImageRowItem](cplistimagerowitem.md).

At runtime, use [maximumSectionCount](cplisttemplate/maximumsectioncount.md) to determine the maximum number of sections that your list can display. When creating items for your sections, use [maximumItemCount](cplisttemplate/maximumitemcount.md) to establish the maximum number of items across all sections that can appear in your list.

## Topics

### Creating a Section

- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.

### Getting Supplementary Information

- [header](cplistsection/header.md): The section’s header text.
- [sectionIndexTitle](cplistsection/sectionindextitle.md): The section’s index title.

### Getting Items

- [items](cplistsection/items.md): The list of items for the section.
- [index(of:)](cplistsection/index%28of_%29.md): Returns the index of the specified item.
- [item(at:)](cplistsection/item%28at_%29.md): Returns the item at the specified index.

### Configuring Section Headers

- [headerButton](cplistsection/headerbutton.md): A button that the section header displays.
- [headerImage](cplistsection/headerimage.md): An image that the section header displays.
- [headerSubtitle](cplistsection/headersubtitle.md): A string that the header displays as a subtitle.

### Initializers

- [init(items:)](cplistsection/init%28items_%29-32d0q.md)
- [init(items:header:sectionIndexTitle:)](cplistsection/init%28items_header_sectionindextitle_%29-743we.md)
- [init(coder:)](cplistsection/init%28coder_%29.md)
- [init(items:)](cplistsection/init%28items_%29-6ksy3.md)
- [init(items:header:sectionIndexTitle:)](cplistsection/init%28items_header_sectionindextitle_%29-6xewg.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing Sections

- [maximumSectionCount](cplisttemplate/maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](cplisttemplate/sectioncount.md): The number of sections in the list.
- [sections](cplisttemplate/sections.md): The sections that the list displays.
- [updateSections(\_:)](cplisttemplate/updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.

# CPListSection (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A container that groups your list items into sections.

## Declaration

```objectivec
@interface CPListSection : NSObject
```

<a id="overview"></a>

## Overview

A section contains zero or more list items. You can configure a section to display a header and a section index title, which CarPlay displays on the trailing edge of the screen. The section header and the section index title are optional.

To create a section, call the [initWithItems:](cplistsection/initwithitems_.md) method and provide an array of list items. Alternatively, use [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md) if you want to display a header and a section index title. CarPlay doesn’t support custom list items, so you must use one of the types that the framework provides, such as [CPListItem](cplistitem.md) or [CPListImageRowItem](cplistimagerowitem.md).

At runtime, use [maximumSectionCount](cplisttemplate/maximumsectioncount.md) to determine the maximum number of sections that your list can display. When creating items for your sections, use [maximumItemCount](cplisttemplate/maximumitemcount.md) to establish the maximum number of items across all sections that can appear in your list.

## Topics

### Creating a Section

- [initWithItems:](cplistsection/initwithitems_.md): Creates a section with list items.
- [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md): Creates a section with list items, a header, and a section index title.
- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPListTemplateItem](cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](cpmessagelistitem.md): A list template row that represents a conversation or contact.

### Getting Supplementary Information

- [header](cplistsection/header.md): The section’s header text.
- [sectionIndexTitle](cplistsection/sectionindextitle.md): The section’s index title.

### Getting Items

- [items](cplistsection/items.md): The list of items for the section.
- [indexOfItem:](cplistsection/index%28of_%29.md): Returns the index of the specified item.
- [itemAtIndex:](cplistsection/item%28at_%29.md): Returns the item at the specified index.

### Configuring Section Headers

- [headerButton](cplistsection/headerbutton.md): A button that the section header displays.
- [headerImage](cplistsection/headerimage.md): An image that the section header displays.
- [headerSubtitle](cplistsection/headersubtitle.md): A string that the header displays as a subtitle.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing Sections

- [maximumSectionCount](cplisttemplate/maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](cplisttemplate/sectioncount.md): The number of sections in the list.
- [sections](cplisttemplate/sections.md): The sections that the list displays.
- [updateSections:](cplisttemplate/updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
