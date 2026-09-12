> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/libraryitem](https://developer.apple.com/documentation/developertoolssupport/libraryitem)

# LibraryItem

**Framework:** DeveloperToolsSupport  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A single item to add to the Xcode library.

## Declaration

```swift
struct LibraryItem
```

<a id="overview"></a>

## Overview

Declare a library item to describe an entry in the Xcode library. Xcode discovers and validates library items that you place in the context of a [LibraryContentProvider](librarycontentprovider.md) instance.

At a minimum, you provide an expression that Xcode uses when the user chooses the library item. You can provide any expression that compiles in the context of the library item instantiation. However, Xcode only honors items that adhere to certain restrictions, as described in [views](librarycontentprovider/views.md) and [modifiers(base:)](librarycontentprovider/modifiers%28base_%29.md).

You can also provide additional characteristics, like a title and a category, to help you find the item when searching the library.

## Topics

### Creating a Library Item

- [init(\_:visible:title:category:matchingSignature:)](libraryitem/init%28__visible_title_category_matchingsignature_%29.md): Creates a new library item.
- [LibraryItem.Category](libraryitem/category.md): The kinds of library items that you can create.

## See Also

### Library customization

- [LibraryContentProvider](librarycontentprovider.md): A source of Xcode library and code completion content.
