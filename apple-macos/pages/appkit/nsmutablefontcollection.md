> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection](https://developer.apple.com/documentation/appkit/nsmutablefontcollection)

# NSMutableFontCollection (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A mutable collection of font descriptors taken together as a single object.

## Declaration

```swift
class NSMutableFontCollection
```

<a id="overview"></a>

## Overview

You can use this class to modify the search queries for the font descriptors used by the parent [NSFontCollection](nsfontcollection.md) class.

## Topics

### Creating a Font Collection

- [init(descriptors:)](nsmutablefontcollection/init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [init(locale:)](nsmutablefontcollection/init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [init(name:)](nsmutablefontcollection/init%28name_%29.md): Creates a mutable named font collection object.
- [init(name:visibility:)](nsmutablefontcollection/init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](nsmutablefontcollection/withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.

### Getting the Font Descriptors

- [queryDescriptors](nsmutablefontcollection/querydescriptors.md): The font descriptors to include in query results.
- [addQuery(for:)](nsmutablefontcollection/addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [removeQuery(for:)](nsmutablefontcollection/removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.
- [exclusionDescriptors](nsmutablefontcollection/exclusiondescriptors.md): The font descriptors to exclude from query results.

## Relationships

### Inherits From

- [NSFontCollection](nsfontcollection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.

# NSMutableFontCollection (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A mutable collection of font descriptors taken together as a single object.

## Declaration

```objectivec
@interface NSMutableFontCollection : NSFontCollection
```

<a id="overview"></a>

## Overview

You can use this class to modify the search queries for the font descriptors used by the parent [NSFontCollection](nsfontcollection.md) class.

## Topics

### Creating a Font Collection

- [fontCollectionWithDescriptors:](nsmutablefontcollection/init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [fontCollectionWithLocale:](nsmutablefontcollection/init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [fontCollectionWithName:](nsmutablefontcollection/init%28name_%29.md): Creates a mutable named font collection object.
- [fontCollectionWithName:visibility:](nsmutablefontcollection/init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](nsmutablefontcollection/withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.

### Getting the Font Descriptors

- [queryDescriptors](nsmutablefontcollection/querydescriptors.md): The font descriptors to include in query results.
- [addQueryForDescriptors:](nsmutablefontcollection/addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [removeQueryForDescriptors:](nsmutablefontcollection/removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.
- [exclusionDescriptors](nsmutablefontcollection/exclusiondescriptors.md): The font descriptors to exclude from query results.

## Relationships

### Inherits From

- [NSFontCollection](nsfontcollection.md)

## See Also

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.
