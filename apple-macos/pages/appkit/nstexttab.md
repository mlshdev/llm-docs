> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttab](https://developer.apple.com/documentation/appkit/nstexttab)

# NSTextTab (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A tab in a paragraph.

## Declaration

```swift
class NSTextTab
```

<a id="overview"></a>

## Overview

A text tab represents a tab in an [NSParagraphStyle](nsparagraphstyle.md) object, storing an alignment type and location. [NSTextTab](nstexttab.md) objects are most frequently used with the TextKit system and with [NSRulerView](nsrulerview.md) and [NSRulerMarker](nsrulermarker.md) objects.

The text system supports four alignment types: left, center, right, and decimal (based on the decimal separator character of the locale in effect). These alignment types are absolute, not based on the line sweep direction of text. For example, tabbed text is always positioned to the left of a right-aligned tab, whether the line sweep direction is left to right or right to left. A tab’s location, on the other hand, is relative to the back margin. A tab set at 1.5”, for example, is at 1.5” from the right in right to left text.

## Topics

### Creating a text tab

- [init(textAlignment:location:options:)](nstexttab/init%28textalignment_location_options_%29.md): Initializes a text tab with the specified text alignment, location, and options.

### Getting tab stop information

- [location](nstexttab/location.md): The text tab’s ruler location relative to the back margin.

### Getting text tab information

- [alignment](nstexttab/alignment.md): The text alignment of the text tab.
- [options](nstexttab/options.md): The dictionary of attributes for the text tab.
- [columnTerminators(for:)](nstexttab/columnterminators%28for_%29.md): Returns the column terminators for the specified locale.

### Constants

- [NSParagraphStyle.TextTabType](nsparagraphstyle/texttabtype.md): Deprecated. Constants that specify the type of tab stop.
- [NSTextTab.OptionKey](nstexttab/optionkey.md): The terminating character for a tab column.

### Deprecated

- [init(type:location:)](nstexttab/init%28type_location_%29.md): Deprecated. Initializes a newly allocated text tab with the specified alignment and location.
- [tabStopType](nstexttab/tabstoptype.md): Deprecated. The text tab’s type of tab stop.

### Initializers

- [init(coder:)](nstexttab/init%28coder_%29.md)

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
- [NSTextList](nstextlist.md): A section of text that forms a single list.

# NSTextTab (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A tab in a paragraph.

## Declaration

```objectivec
@interface NSTextTab : NSObject
```

<a id="overview"></a>

## Overview

A text tab represents a tab in an [NSParagraphStyle](nsparagraphstyle.md) object, storing an alignment type and location. [NSTextTab](nstexttab.md) objects are most frequently used with the TextKit system and with [NSRulerView](nsrulerview.md) and [NSRulerMarker](nsrulermarker.md) objects.

The text system supports four alignment types: left, center, right, and decimal (based on the decimal separator character of the locale in effect). These alignment types are absolute, not based on the line sweep direction of text. For example, tabbed text is always positioned to the left of a right-aligned tab, whether the line sweep direction is left to right or right to left. A tab’s location, on the other hand, is relative to the back margin. A tab set at 1.5”, for example, is at 1.5” from the right in right to left text.

## Topics

### Creating a text tab

- [initWithTextAlignment:location:options:](nstexttab/init%28textalignment_location_options_%29.md): Initializes a text tab with the specified text alignment, location, and options.

### Getting tab stop information

- [location](nstexttab/location.md): The text tab’s ruler location relative to the back margin.

### Getting text tab information

- [alignment](nstexttab/alignment.md): The text alignment of the text tab.
- [options](nstexttab/options.md): The dictionary of attributes for the text tab.
- [columnTerminatorsForLocale:](nstexttab/columnterminators%28for_%29.md): Returns the column terminators for the specified locale.

### Constants

- [NSTextTabType](nsparagraphstyle/texttabtype.md): Deprecated. Constants that specify the type of tab stop.
- [NSTextTabOptionKey](nstexttab/optionkey.md): The terminating character for a tab column.

### Deprecated

- [initWithType:location:](nstexttab/init%28type_location_%29.md): Deprecated. Initializes a newly allocated text tab with the specified alignment and location.
- [tabStopType](nstexttab/tabstoptype.md): Deprecated. The text tab’s type of tab stop.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Formatting and attributes

- [NSParagraphStyle](nsparagraphstyle.md): The paragraph or ruler attributes for an attributed string.
- [NSMutableParagraphStyle](nsmutableparagraphstyle.md): An object for changing the values of the subattributes in a paragraph style attribute.
- [NSTextList](nstextlist.md): A section of text that forms a single list.
