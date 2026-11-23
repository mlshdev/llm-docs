> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistsection

# CPListSection (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A container that groups related items in a list interface.

## Declaration

```swift
class CPListSection
```

<a id="overview"></a>

## Overview

A `CPListSection` object contains one or more rows of a list interface and optional header information. In a list with a large number of rows, sections organize your content into logical groups so people can navigate it more easily. For example, an alphabetical list of songs might have sections for each letter of the alphabet. The section presents the rows in the order you specify and precedes them with any header information you provide.

Create a `CPSection` item and fill it with the items you want to display. A single section can mix and match different item types; for example, you can include [CPListItem](cplistitem.md) and [CPListImageRowItem](cplistimagerowitem.md) objects in the same section. If you want to display a header for the section, provide that information at creation time along with the items. To display the sections in a list, initialize your [CPListTemplate](cplisttemplate.md) with the sections or call its [updateSections(\_:)](cplisttemplate/updatesections%28__%29.md) method.

> **Note**

> The list interface displays a section only if it contains one or more items. Lists don’t display sections with zero items.

Vehicles can impose restrictions on the number of sections and items in a single list. Get the maximum number of supported sections from the [maximumSectionCount](cplisttemplate/maximumsectioncount.md) property of [CPListTemplate](cplisttemplate.md). Similarly, get the maximum number of items from the [maximumItemCount](cplisttemplate/maximumitemcount.md) property.

## Topics

### Creating a section

- [init(items:)](cplistsection/init%28items_%29-6ksy3.md)
- [init(items:header:sectionIndexTitle:)](cplistsection/init%28items_header_sectionindextitle_%29-6xewg.md)
- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [init(items:)](cplistsection/init%28items_%29-32d0q.md)
- [init(items:header:sectionIndexTitle:)](cplistsection/init%28items_header_sectionindextitle_%29-743we.md)
- [init(coder:)](cplistsection/init%28coder_%29.md)
- [CPMaximumListSectionImageSize](cpmaximumlistsectionimagesize.md): The maximum size of images you include in section headers.

### Getting the section’s header content

- [header](cplistsection/header.md): The main text to display in the header area of the section.
- [headerSubtitle](cplistsection/headersubtitle.md): The secondary text to display in the header area of the section.
- [headerButton](cplistsection/headerbutton.md): The button to display in the header area of the section.
- [headerImage](cplistsection/headerimage.md): The image to display in the header area of the section.

### Locating items in the section

- [items](cplistsection/items.md): The items in the section.
- [index(of:)](cplistsection/index%28of_%29.md): Returns the zero-based index of an item in the section.
- [item(at:)](cplistsection/item%28at_%29.md): Returns the item at the specified index in the section.

### Getting the index string

- [sectionIndexTitle](cplistsection/sectionindextitle.md): The string that identifies the current session in an index.

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

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListItem](cplistitem.md): A selectable row in a list interface.
- [CPListImageRowItem](cplistimagerowitem.md): A row type that displays multiple sub-elements horizontally in a variety of styles.
- [Supporting types for lists](list-content.md): Create sections, single-line items, multi-element rows, headers, and other content for your list.

# CPListSection (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A container that groups related items in a list interface.

## Declaration

```objectivec
@interface CPListSection : NSObject
```

<a id="overview"></a>

## Overview

A `CPListSection` object contains one or more rows of a list interface and optional header information. In a list with a large number of rows, sections organize your content into logical groups so people can navigate it more easily. For example, an alphabetical list of songs might have sections for each letter of the alphabet. The section presents the rows in the order you specify and precedes them with any header information you provide.

Create a `CPSection` item and fill it with the items you want to display. A single section can mix and match different item types; for example, you can include [CPListItem](cplistitem.md) and [CPListImageRowItem](cplistimagerowitem.md) objects in the same section. If you want to display a header for the section, provide that information at creation time along with the items. To display the sections in a list, initialize your [CPListTemplate](cplisttemplate.md) with the sections or call its [updateSections:](cplisttemplate/updatesections%28__%29.md) method.

> **Note**

> The list interface displays a section only if it contains one or more items. Lists don’t display sections with zero items.

Vehicles can impose restrictions on the number of sections and items in a single list. Get the maximum number of supported sections from the [maximumSectionCount](cplisttemplate/maximumsectioncount.md) property of [CPListTemplate](cplisttemplate.md). Similarly, get the maximum number of items from the [maximumItemCount](cplisttemplate/maximumitemcount.md) property.

## Topics

### Creating a section

- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [CPMaximumListSectionImageSize](cpmaximumlistsectionimagesize.md): The maximum size of images you include in section headers.

### Getting the section’s header content

- [header](cplistsection/header.md): The main text to display in the header area of the section.
- [headerSubtitle](cplistsection/headersubtitle.md): The secondary text to display in the header area of the section.
- [headerButton](cplistsection/headerbutton.md): The button to display in the header area of the section.
- [headerImage](cplistsection/headerimage.md): The image to display in the header area of the section.

### Locating items in the section

- [items](cplistsection/items.md): The items in the section.
- [indexOfItem:](cplistsection/index%28of_%29.md): Returns the zero-based index of an item in the section.
- [itemAtIndex:](cplistsection/item%28at_%29.md): Returns the item at the specified index in the section.

### Getting the index string

- [sectionIndexTitle](cplistsection/sectionindextitle.md): The string that identifies the current session in an index.

### Instance Methods

- [initWithItems:](cplistsection/initwithitems_.md): Creates a section with the provided items.
- [initWithItems:header:sectionIndexTitle:](cplistsection/initwithitems_header_sectionindextitle_.md): Creates a section with the provided items and header information.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListItem](cplistitem.md): A selectable row in a list interface.
- [CPListImageRowItem](cplistimagerowitem.md): A row type that displays multiple sub-elements horizontally in a variety of styles.
- [Supporting types for lists](list-content.md): Create sections, single-line items, multi-element rows, headers, and other content for your list.
