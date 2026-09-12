> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset](https://developer.apple.com/documentation/foundation/nsmutablecharacterset)

# NSMutableCharacterSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a mutable set of Unicode character values for use in search operations.

## Declaration

```swift
class NSMutableCharacterSet
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [CharacterSet](characterset.md); use [NSMutableCharacterSet](nsmutablecharacterset.md) when you need reference semantics or other Foundation-specific behavior.

The `NSMutableCharacterSet` class declares the programmatic interface to objects that manage a modifiable set of Unicode characters. You can add or remove characters from a mutable character set as numeric values in `NSRange` structures or as character values in strings, combine character sets by union or intersection, and invert a character set.

Mutable character sets are less efficient to use than immutable character sets. If you don’t need to change a character set after creating it, create an immutable copy with `copy` and use that.

`NSMutableCharacterSet` defines no primitive methods. Subclasses must implement all methods declared by this class in addition to the primitives of [NSCharacterSet](nscharacterset.md). They must also implement [mutableCopy(with:)](nsmutablecopying/mutablecopy%28with_%29.md).

`NSMutableCharacterSet` is “toll-free bridged” with its Core Foundation counterpart, [CFMutableCharacterSet](../corefoundation/cfmutablecharacterset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

> **Important**

>  The Swift overlay to the Foundation framework provides the [CharacterSet](characterset.md) structure, which bridges to the [NSMutableCharacterSet](nsmutablecharacterset.md) class and its immutable superclass, [NSCharacterSet](nscharacterset.md).  For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Getting Standard Character Sets

- [alphanumeric()](nsmutablecharacterset/alphanumeric%28%29.md): Returns a character set containing the characters in Unicode General Categories L\*, M\*, and N\*.
- [capitalizedLetter()](nsmutablecharacterset/capitalizedletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lt.
- [control()](nsmutablecharacterset/control%28%29.md): Returns a character set containing the characters in Unicode General Category Cc and Cf.
- [decimalDigit()](nsmutablecharacterset/decimaldigit%28%29.md): Returns a character set containing the characters in the category of decimal numbers.
- [decomposable()](nsmutablecharacterset/decomposable%28%29.md): Returns a character set containing individual Unicode characters that can also be represented as composed character sequences (such as for letters with accents), by the definition of “standard decomposition” in version 3.2 of the Unicode character encoding standard.
- [illegal()](nsmutablecharacterset/illegal%28%29.md): Returns a character set containing values in the category of Non-Characters or that have not yet been defined in version 3.2 of the Unicode standard.
- [letter()](nsmutablecharacterset/letter%28%29.md): Returns a character set containing the characters in Unicode General Category L\* & M\*.
- [lowercaseLetter()](nsmutablecharacterset/lowercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Ll.
- [newline()](nsmutablecharacterset/newline%28%29.md): Returns a character set containing the newline characters (`U+000A` ~ `U+000D`, `U+0085`, `U+2028`, and `U+2029`).
- [nonBase()](nsmutablecharacterset/nonbase%28%29.md): Returns a character set containing the characters in Unicode General Category M\*.
- [punctuation()](nsmutablecharacterset/punctuation%28%29.md): Returns a character set containing the characters in Unicode General Category P\*.
- [symbol()](nsmutablecharacterset/symbol%28%29.md): Returns a character set containing the characters in Unicode General Category S\*.
- [uppercaseLetter()](nsmutablecharacterset/uppercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lu and Lt.
- [whitespaceAndNewline()](nsmutablecharacterset/whitespaceandnewline%28%29.md): Returns a character set containing characters in Unicode General Category Z\*, `U+000A` ~ `U+000D`, and `U+0085`.
- [whitespace()](nsmutablecharacterset/whitespace%28%29.md): Returns a character set containing the characters in Unicode General Category Zs and `CHARACTER TABULATION` (`U+0009`).

### Creating Custom Character Sets

- [init(charactersIn:)](nsmutablecharacterset/init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [init(range:)](nsmutablecharacterset/init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [init(bitmapRepresentation:)](nsmutablecharacterset/init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [init(contentsOfFile:)](nsmutablecharacterset/init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.

### Adding and Removing Characters

- [addCharacters(in:)](nsmutablecharacterset/addcharacters%28in_%29-4ppyw.md): Adds to the receiver the characters whose Unicode values are in a given range.
- [removeCharacters(in:)](nsmutablecharacterset/removecharacters%28in_%29-70nqp.md): Removes from the receiver the characters whose Unicode values are in a given range.
- [addCharacters(in:)](nsmutablecharacterset/addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.
- [removeCharacters(in:)](nsmutablecharacterset/removecharacters%28in_%29-762gt.md): Removes from the receiver the characters in a given string.

### Combining Character Sets

- [formIntersection(with:)](nsmutablecharacterset/formintersection%28with_%29.md): Modifies the receiver so it contains only characters that exist in both the receiver and another set.
- [formUnion(with:)](nsmutablecharacterset/formunion%28with_%29.md): Modifies the receiver so it contains all characters that exist in either the receiver or another set.

### Inverting a Character Set

- [invert()](nsmutablecharacterset/invert%28%29.md): Replaces all the characters in the receiver with all the characters it didn’t previously contain.

## Relationships

### Inherits From

- [NSCharacterSet](nscharacterset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSMutableCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a mutable set of Unicode character values for use in search operations.

## Declaration

```objectivec
@interface NSMutableCharacterSet : NSCharacterSet
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [CharacterSet](characterset.md); use [NSMutableCharacterSet](nsmutablecharacterset.md) when you need reference semantics or other Foundation-specific behavior.

The `NSMutableCharacterSet` class declares the programmatic interface to objects that manage a modifiable set of Unicode characters. You can add or remove characters from a mutable character set as numeric values in `NSRange` structures or as character values in strings, combine character sets by union or intersection, and invert a character set.

Mutable character sets are less efficient to use than immutable character sets. If you don’t need to change a character set after creating it, create an immutable copy with `copy` and use that.

`NSMutableCharacterSet` defines no primitive methods. Subclasses must implement all methods declared by this class in addition to the primitives of [NSCharacterSet](nscharacterset.md). They must also implement [mutableCopyWithZone:](nsmutablecopying/mutablecopy%28with_%29.md).

`NSMutableCharacterSet` is “toll-free bridged” with its Core Foundation counterpart, [CFMutableCharacterSetRef](../corefoundation/cfmutablecharacterset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

> **Important**

>  The Swift overlay to the Foundation framework provides the [CharacterSet](characterset.md) structure, which bridges to the [NSMutableCharacterSet](nsmutablecharacterset.md) class and its immutable superclass, [NSCharacterSet](nscharacterset.md).  For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Getting Standard Character Sets

- [alphanumericCharacterSet](nsmutablecharacterset/alphanumeric%28%29.md): Returns a character set containing the characters in Unicode General Categories L\*, M\*, and N\*.
- [capitalizedLetterCharacterSet](nsmutablecharacterset/capitalizedletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lt.
- [controlCharacterSet](nsmutablecharacterset/control%28%29.md): Returns a character set containing the characters in Unicode General Category Cc and Cf.
- [decimalDigitCharacterSet](nsmutablecharacterset/decimaldigit%28%29.md): Returns a character set containing the characters in the category of decimal numbers.
- [decomposableCharacterSet](nsmutablecharacterset/decomposable%28%29.md): Returns a character set containing individual Unicode characters that can also be represented as composed character sequences (such as for letters with accents), by the definition of “standard decomposition” in version 3.2 of the Unicode character encoding standard.
- [illegalCharacterSet](nsmutablecharacterset/illegal%28%29.md): Returns a character set containing values in the category of Non-Characters or that have not yet been defined in version 3.2 of the Unicode standard.
- [letterCharacterSet](nsmutablecharacterset/letter%28%29.md): Returns a character set containing the characters in Unicode General Category L\* & M\*.
- [lowercaseLetterCharacterSet](nsmutablecharacterset/lowercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Ll.
- [newlineCharacterSet](nsmutablecharacterset/newline%28%29.md): Returns a character set containing the newline characters (`U+000A` ~ `U+000D`, `U+0085`, `U+2028`, and `U+2029`).
- [nonBaseCharacterSet](nsmutablecharacterset/nonbase%28%29.md): Returns a character set containing the characters in Unicode General Category M\*.
- [punctuationCharacterSet](nsmutablecharacterset/punctuation%28%29.md): Returns a character set containing the characters in Unicode General Category P\*.
- [symbolCharacterSet](nsmutablecharacterset/symbol%28%29.md): Returns a character set containing the characters in Unicode General Category S\*.
- [uppercaseLetterCharacterSet](nsmutablecharacterset/uppercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lu and Lt.
- [whitespaceAndNewlineCharacterSet](nsmutablecharacterset/whitespaceandnewline%28%29.md): Returns a character set containing characters in Unicode General Category Z\*, `U+000A` ~ `U+000D`, and `U+0085`.
- [whitespaceCharacterSet](nsmutablecharacterset/whitespace%28%29.md): Returns a character set containing the characters in Unicode General Category Zs and `CHARACTER TABULATION` (`U+0009`).

### Creating Custom Character Sets

- [characterSetWithCharactersInString:](nsmutablecharacterset/init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [characterSetWithRange:](nsmutablecharacterset/init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [characterSetWithBitmapRepresentation:](nsmutablecharacterset/init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [characterSetWithContentsOfFile:](nsmutablecharacterset/init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.

### Adding and Removing Characters

- [addCharactersInRange:](nsmutablecharacterset/addcharacters%28in_%29-4ppyw.md): Adds to the receiver the characters whose Unicode values are in a given range.
- [removeCharactersInRange:](nsmutablecharacterset/removecharacters%28in_%29-70nqp.md): Removes from the receiver the characters whose Unicode values are in a given range.
- [addCharactersInString:](nsmutablecharacterset/addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.
- [removeCharactersInString:](nsmutablecharacterset/removecharacters%28in_%29-762gt.md): Removes from the receiver the characters in a given string.

### Combining Character Sets

- [formIntersectionWithCharacterSet:](nsmutablecharacterset/formintersection%28with_%29.md): Modifies the receiver so it contains only characters that exist in both the receiver and another set.
- [formUnionWithCharacterSet:](nsmutablecharacterset/formunion%28with_%29.md): Modifies the receiver so it contains all characters that exist in either the receiver or another set.

### Inverting a Character Set

- [invert](nsmutablecharacterset/invert%28%29.md): Replaces all the characters in the receiver with all the characters it didn’t previously contain.

## Relationships

### Inherits From

- [NSCharacterSet](nscharacterset.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Characters

- [NSCharacterSet](nscharacterset.md): An object representing a fixed set of Unicode character values for use in search operations.
- [unichar](unichar.md): Type for UTF-16 code units.
