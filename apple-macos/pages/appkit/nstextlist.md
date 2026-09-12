> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlist](https://developer.apple.com/documentation/appkit/nstextlist)

# NSTextList (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A section of text that forms a single list.

## Declaration

```swift
class NSTextList
```

<a id="overview"></a>

## Overview

The visible elements of the list, including list markers, appear in the text as they do for lists created by hand. The list object, however, allows the list to be recognized as such by the text system. This enables automatic creation of markers and spacing. Text lists are used in HTML import and export.

Text lists appear as attributes on paragraphs, as part of the paragraph style. An [NSParagraphStyle](nsparagraphstyle.md) may have an array of text lists, representing the nested lists containing the paragraph, in order from outermost to innermost. For example, if list1 contains four paragraphs, the middle two of which are also in the inner list2, then the text lists array for the first and fourth paragraphs is (list1), while the text lists array for the second and third paragraphs is (list1, list2).

The methods implementing this are [textLists](nsparagraphstyle/textlists.md) on [NSParagraphStyle](nsparagraphstyle.md), and [textLists](nsmutableparagraphstyle/textlists.md) on [NSMutableParagraphStyle](nsmutableparagraphstyle.md).

In addition, [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) has convenience methods for lists, such as [range(of:at:)](https://developer.apple.com/documentation/foundation/nsattributedstring/range%28of:at:%29-6um0x), which determines the range covered by a list, and [itemNumber(in:at:)](https://developer.apple.com/documentation/foundation/nsattributedstring/itemnumber%28in:at:%29), which determines the ordinal position within a list of a particular item.

## Topics

### Creating a text list

- [init(coder:)](nstextlist/init%28coder_%29.md): Initializes and returns a newly allocated text list item.
- [init(markerFormat:options:)](nstextlist/init%28markerformat_options_%29.md): Returns an initialized text list.
- [init(markerFormat:options:startingItemNumber:)](nstextlist/init%28markerformat_options_startingitemnumber_%29.md): Returns a new text list with the format, options, and starting item number you provide.

### Working with markers

- [markerFormat](nstextlist/markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextList.MarkerFormat](nstextlist/markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.
- [marker(forItemNumber:)](nstextlist/marker%28foritemnumber_%29.md): Returns the computed value for a specific ordinal position in the list.

### Getting list options

- [isOrdered](nstextlist/isordered.md)
- [listOptions](nstextlist/listoptions.md): Returns the list options mask value of the receiver.
- [NSTextList.Options](nstextlist/options.md): Values that available options for text list items.
- [includesTextListMarkers](nstextlist/includestextlistmarkers.md): A Boolean value that indicates whether TextKit includes text list markers in the contents.

### Managing item numbering

- [startingItemNumber](nstextlist/startingitemnumber.md): Sets the starting item number for the text list.

### Constants

The following constant specifies an option mask used with [init(markerFormat:options:)](nstextlist/init%28markerformat_options_%29.md).

- [prependEnclosingMarker](nstextlist/options/prependenclosingmarker.md): Specifies that a nested list should include the marker for its enclosing superlist before its own marker.

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
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Formatting and attributes

- [NSParagraphStyle](nsparagraphstyle.md): The paragraph or ruler attributes for an attributed string.
- [NSMutableParagraphStyle](nsmutableparagraphstyle.md): An object for changing the values of the subattributes in a paragraph style attribute.
- [NSTextTab](nstexttab.md): A tab in a paragraph.

# NSTextList (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A section of text that forms a single list.

## Declaration

```objectivec
@interface NSTextList : NSObject
```

<a id="overview"></a>

## Overview

The visible elements of the list, including list markers, appear in the text as they do for lists created by hand. The list object, however, allows the list to be recognized as such by the text system. This enables automatic creation of markers and spacing. Text lists are used in HTML import and export.

Text lists appear as attributes on paragraphs, as part of the paragraph style. An [NSParagraphStyle](nsparagraphstyle.md) may have an array of text lists, representing the nested lists containing the paragraph, in order from outermost to innermost. For example, if list1 contains four paragraphs, the middle two of which are also in the inner list2, then the text lists array for the first and fourth paragraphs is (list1), while the text lists array for the second and third paragraphs is (list1, list2).

The methods implementing this are [textLists](nsparagraphstyle/textlists.md) on [NSParagraphStyle](nsparagraphstyle.md), and [textLists](nsmutableparagraphstyle/textlists.md) on [NSMutableParagraphStyle](nsmutableparagraphstyle.md).

In addition, [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) has convenience methods for lists, such as [rangeOfTextList:atIndex:](https://developer.apple.com/documentation/foundation/nsattributedstring/range%28of:at:%29-6um0x), which determines the range covered by a list, and [itemNumberInTextList:atIndex:](https://developer.apple.com/documentation/foundation/nsattributedstring/itemnumber%28in:at:%29), which determines the ordinal position within a list of a particular item.

## Topics

### Creating a text list

- [initWithCoder:](nstextlist/init%28coder_%29.md): Initializes and returns a newly allocated text list item.
- [initWithMarkerFormat:options:](nstextlist/init%28markerformat_options_%29.md): Returns an initialized text list.
- [initWithMarkerFormat:options:startingItemNumber:](nstextlist/init%28markerformat_options_startingitemnumber_%29.md): Returns a new text list with the format, options, and starting item number you provide.

### Working with markers

- [markerFormat](nstextlist/markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextListMarkerFormat](nstextlist/markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.
- [markerForItemNumber:](nstextlist/marker%28foritemnumber_%29.md): Returns the computed value for a specific ordinal position in the list.

### Getting list options

- [ordered](nstextlist/isordered.md)
- [listOptions](nstextlist/listoptions.md): Returns the list options mask value of the receiver.
- [NSTextListOptions](nstextlist/options.md): Values that available options for text list items.
- [includesTextListMarkers](nstextlist/includestextlistmarkers.md): A Boolean value that indicates whether TextKit includes text list markers in the contents.

### Managing item numbering

- [startingItemNumber](nstextlist/startingitemnumber.md): Sets the starting item number for the text list.

### Constants

The following constant specifies an option mask used with [initWithMarkerFormat:options:](nstextlist/init%28markerformat_options_%29.md).

- [NSTextListPrependEnclosingMarker](nstextlist/options/prependenclosingmarker.md): Specifies that a nested list should include the marker for its enclosing superlist before its own marker.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Formatting and attributes

- [NSParagraphStyle](nsparagraphstyle.md): The paragraph or ruler attributes for an attributed string.
- [NSMutableParagraphStyle](nsmutableparagraphstyle.md): An object for changing the values of the subattributes in a paragraph style attribute.
- [NSTextTab](nstexttab.md): A tab in a paragraph.
