> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlist](https://developer.apple.com/documentation/uikit/nstextlist)

# NSTextList (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

In addition, [NSAttributedString](../foundation/nsattributedstring.md) has convenience methods for lists, such as [range(of:at:)](../foundation/nsattributedstring/range%28of_at_%29-6um0x.md), which determines the range covered by a list, and [itemNumber(in:at:)](../foundation/nsattributedstring/itemnumber%28in_at_%29.md), which determines the ordinal position within a list of a particular item.

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

- [isOrdered](nstextlist/isordered.md): A Boolean value that indicates whether the list is ordered.
- [listOptions](nstextlist/listoptions.md): Returns the list options mask value of the receiver.
- [NSTextList.Options](nstextlist/options.md): Values that available options for text list items.

### Managing item numbering

- [startingItemNumber](nstextlist/startingitemnumber.md): Sets the starting item number for the text list.

### Constants

The following constant specifies an option mask used with [init(markerFormat:options:)](nstextlist/init%28markerformat_options_%29.md).

- [prependEnclosingMarker](nstextlist/options/prependenclosingmarker.md): Specifies that a nested list should include the marker for its enclosing superlist before its own marker.

### Type Properties

- [includesTextListMarkers](nstextlist/includestextlistmarkers.md): A Boolean value that indicates whether TextKit includes text list markers in the contents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formatting and attributes

- [NSParagraphStyle](nsparagraphstyle.md): The paragraph or ruler attributes for an attributed string.
- [NSMutableParagraphStyle](nsmutableparagraphstyle.md): An object for changing the values of the subattributes in a paragraph style attribute.
- [NSTextTab](nstexttab.md): A tab in a paragraph.
- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.

# NSTextList (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

In addition, [NSAttributedString](../foundation/nsattributedstring.md) has convenience methods for lists, such as [rangeOfTextList:atIndex:](../foundation/nsattributedstring/range%28of_at_%29-6um0x.md), which determines the range covered by a list, and [itemNumberInTextList:atIndex:](../foundation/nsattributedstring/itemnumber%28in_at_%29.md), which determines the ordinal position within a list of a particular item.

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

- [ordered](nstextlist/isordered.md): A Boolean value that indicates whether the list is ordered.
- [listOptions](nstextlist/listoptions.md): Returns the list options mask value of the receiver.
- [NSTextListOptions](nstextlist/options.md): Values that available options for text list items.

### Managing item numbering

- [startingItemNumber](nstextlist/startingitemnumber.md): Sets the starting item number for the text list.

### Constants

The following constant specifies an option mask used with [initWithMarkerFormat:options:](nstextlist/init%28markerformat_options_%29.md).

- [NSTextListPrependEnclosingMarker](nstextlist/options/prependenclosingmarker.md): Specifies that a nested list should include the marker for its enclosing superlist before its own marker.

### Type Properties

- [includesTextListMarkers](nstextlist/includestextlistmarkers.md): A Boolean value that indicates whether TextKit includes text list markers in the contents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formatting and attributes

- [NSParagraphStyle](nsparagraphstyle.md): The paragraph or ruler attributes for an attributed string.
- [NSMutableParagraphStyle](nsmutableparagraphstyle.md): An object for changing the values of the subattributes in a paragraph style attribute.
- [NSTextTab](nstexttab.md): A tab in a paragraph.
- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.
