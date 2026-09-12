> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/libraryitem/category](https://developer.apple.com/documentation/developertoolssupport/libraryitem/category)

# LibraryItem.Category

**Framework:** DeveloperToolsSupport  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The kinds of library items that you can create.

## Declaration

```swift
struct Category
```

<a id="overview"></a>

## Overview

When you specify a category for a library item, Xcode can group it with similar items in the library, making it easier for you to find. Categories provide visual treatment in the Xcode Library, but the treatment for each category depends on where the asset resides within the library.

## Topics

### Specifying a Category

- [control](category/control.md): A category for controls, like buttons and context menus.
- [effect](category/effect.md): A category for effects, like opacity and saturation modifiers.
- [layout](category/layout.md): A category for items that manage layout, like stack views and frame modifiers.
- [other](category/other.md): A general category.

## See Also

### Creating a Library Item

- [init(\_:visible:title:category:matchingSignature:)](init%28__visible_title_category_matchingsignature_%29.md): Creates a new library item.
