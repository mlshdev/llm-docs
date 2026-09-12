> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlist/markerformat-swift.struct](https://developer.apple.com/documentation/appkit/nstextlist/markerformat-swift.struct)

# NSTextList.MarkerFormat (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.0+

Constants that describe marker symbols you can apply to list elements in text lists.

## Declaration

```swift
struct MarkerFormat
```

<a id="overview"></a>

## Overview

Select a marker symbol to apply to your list elements in your text list, then set it in [markerFormat](markerformat-swift.property.md). Or, specify a marker symbol when you create a text list with [init(markerFormat:options:)](init%28markerformat_options_%29.md) or [init(markerFormat:options:startingItemNumber:)](init%28markerformat_options_startingitemnumber_%29.md).

## Topics

### Selecting a marker format

- [box](markerformat-swift.struct/box.md): The value that represents a square-shaped marker that you can apply to a text list item.
- [check](markerformat-swift.struct/check.md): The value that represents a checkmark-shaped marker that you can apply to a text list item.
- [circle](markerformat-swift.struct/circle.md): The value that represents a circle-shaped marker that you can apply to a text list item.
- [decimal](markerformat-swift.struct/decimal.md): The value that represents a decimal annotation marker that you can apply to a text list item.
- [diamond](markerformat-swift.struct/diamond.md): The value that represents a diamond-shaped marker that you can apply to a text list item.
- [disc](markerformat-swift.struct/disc.md): The value that represents a disc-shaped marker that you can apply to a text list item.
- [hyphen](markerformat-swift.struct/hyphen.md): The value that represents a hyphen-shaped marker that you can apply to a text list item.
- [lowercaseAlpha](markerformat-swift.struct/lowercasealpha.md): The value that represents a lowercase localized alphabetical marker you that can apply to a text list item.
- [lowercaseHexadecimal](markerformat-swift.struct/lowercasehexadecimal.md): The value that represents a lowercase hexadecimal (base 16) numerical marker that you can apply to a text list item.
- [lowercaseLatin](markerformat-swift.struct/lowercaselatin.md): The value that represents a lowercase Latin alphabetical marker that you can apply to a text list item.
- [lowercaseRoman](markerformat-swift.struct/lowercaseroman.md): The value that represents a lowercase Roman numeral marker that you can apply to a text list item.
- [octal](markerformat-swift.struct/octal.md): The value that represents an octal (base 8) numerical marker that you can apply to a text list item.
- [square](markerformat-swift.struct/square.md): The value that represents a square-shaped marker that you can apply to a text list item.
- [uppercaseAlpha](markerformat-swift.struct/uppercasealpha.md): The value that represents an uppercase localized alphabetical marker that you can apply to a text list item.
- [uppercaseHexadecimal](markerformat-swift.struct/uppercasehexadecimal.md): The value that represents an uppercase hexadecimal (base 16) numerical marker that you can apply to a text list item.
- [uppercaseLatin](markerformat-swift.struct/uppercaselatin.md): The value that represents an uppercase Latin alphabetical marker that you can apply to a text list item.
- [uppercaseRoman](markerformat-swift.struct/uppercaseroman.md): The value that represents an uppercase Roman numeral marker that you can apply to a text list item.

### Initializing a marker format

- [init(\_:)](markerformat-swift.struct/init%28__%29.md): Creates a new marker that you can apply to an item in a text list with the raw value you provide.
- [init(rawValue:)](markerformat-swift.struct/init%28rawvalue_%29.md): Creates a new marker that you can apply to an item in a text list using the string you provide.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [marker(forItemNumber:)](marker%28foritemnumber_%29.md): Returns the computed value for a specific ordinal position in the list.

# NSTextListMarkerFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Constants that describe marker symbols you can apply to list elements in text lists.

## Declaration

```objectivec
typedef NSString * NSTextListMarkerFormat;
```

<a id="overview"></a>

## Overview

Select a marker symbol to apply to your list elements in your text list, then set it in [markerFormat](markerformat-swift.property.md). Or, specify a marker symbol when you create a text list with [initWithMarkerFormat:options:](init%28markerformat_options_%29.md) or [initWithMarkerFormat:options:startingItemNumber:](init%28markerformat_options_startingitemnumber_%29.md).

## Topics

### Selecting a marker format

- [NSTextListMarkerBox](markerformat-swift.struct/box.md): The value that represents a square-shaped marker that you can apply to a text list item.
- [NSTextListMarkerCheck](markerformat-swift.struct/check.md): The value that represents a checkmark-shaped marker that you can apply to a text list item.
- [NSTextListMarkerCircle](markerformat-swift.struct/circle.md): The value that represents a circle-shaped marker that you can apply to a text list item.
- [NSTextListMarkerDecimal](markerformat-swift.struct/decimal.md): The value that represents a decimal annotation marker that you can apply to a text list item.
- [NSTextListMarkerDiamond](markerformat-swift.struct/diamond.md): The value that represents a diamond-shaped marker that you can apply to a text list item.
- [NSTextListMarkerDisc](markerformat-swift.struct/disc.md): The value that represents a disc-shaped marker that you can apply to a text list item.
- [NSTextListMarkerHyphen](markerformat-swift.struct/hyphen.md): The value that represents a hyphen-shaped marker that you can apply to a text list item.
- [NSTextListMarkerLowercaseAlpha](markerformat-swift.struct/lowercasealpha.md): The value that represents a lowercase localized alphabetical marker you that can apply to a text list item.
- [NSTextListMarkerLowercaseHexadecimal](markerformat-swift.struct/lowercasehexadecimal.md): The value that represents a lowercase hexadecimal (base 16) numerical marker that you can apply to a text list item.
- [NSTextListMarkerLowercaseLatin](markerformat-swift.struct/lowercaselatin.md): The value that represents a lowercase Latin alphabetical marker that you can apply to a text list item.
- [NSTextListMarkerLowercaseRoman](markerformat-swift.struct/lowercaseroman.md): The value that represents a lowercase Roman numeral marker that you can apply to a text list item.
- [NSTextListMarkerOctal](markerformat-swift.struct/octal.md): The value that represents an octal (base 8) numerical marker that you can apply to a text list item.
- [NSTextListMarkerSquare](markerformat-swift.struct/square.md): The value that represents a square-shaped marker that you can apply to a text list item.
- [NSTextListMarkerUppercaseAlpha](markerformat-swift.struct/uppercasealpha.md): The value that represents an uppercase localized alphabetical marker that you can apply to a text list item.
- [NSTextListMarkerUppercaseHexadecimal](markerformat-swift.struct/uppercasehexadecimal.md): The value that represents an uppercase hexadecimal (base 16) numerical marker that you can apply to a text list item.
- [NSTextListMarkerUppercaseLatin](markerformat-swift.struct/uppercaselatin.md): The value that represents an uppercase Latin alphabetical marker that you can apply to a text list item.
- [NSTextListMarkerUppercaseRoman](markerformat-swift.struct/uppercaseroman.md): The value that represents an uppercase Roman numeral marker that you can apply to a text list item.

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [markerForItemNumber:](marker%28foritemnumber_%29.md): Returns the computed value for a specific ordinal position in the list.
