> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset](https://developer.apple.com/documentation/foundation/nscharacterset)

# NSCharacterSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a fixed set of Unicode character values for use in search operations.

## Declaration

```swift
class NSCharacterSet
```

<a id="overview"></a>

## Overview

In Swift, this bridges to a [CharacterSet](characterset.md); use [NSCharacterSet](nscharacterset.md) when you need reference semantics or other Foundation-specific behavior.

An `NSCharacterSet` object represents a set of Unicode-compliant characters. `NSString` and `NSScanner` objects use `NSCharacterSet` objects to group characters together for searching operations, so that they can find any of a particular set of characters during a search. The cluster’s two public classes, `NSCharacterSet` and [NSMutableCharacterSet](nsmutablecharacterset.md), declare the programmatic interface for static and dynamic character sets, respectively.

The objects you create using these classes are referred to as character set objects (and when no confusion will result, merely as character sets). Because of the nature of class clusters, character set objects aren’t actual instances of the `NSCharacterSet` or `NSMutableCharacterSet` classes but of one of their private subclasses. Although a character set object’s class is private, its interface is public, as declared by these abstract superclasses, `NSCharacterSet` and `NSMutableCharacterSet`. The character set classes adopt the `NSCopying` and `NSMutableCopying` protocols, making it convenient to convert a character set of one type to the other.

The `NSCharacterSet` class declares the programmatic interface for an object that manages a set of Unicode characters (see the [NSString](nsstring.md) class cluster specification for information on Unicode). `NSCharacterSet`’s principal primitive method, [characterIsMember(\_:)](nscharacterset/characterismember%28__%29.md), provides the basis for all other instance methods in its interface. A subclass of `NSCharacterSet` needs only to implement this method, plus [mutableCopy(with:)](nsmutablecopying/mutablecopy%28with_%29.md), for proper behavior. For optimal performance, a subclass should also override [bitmapRepresentation](nscharacterset/bitmaprepresentation.md), which otherwise works by invoking [characterIsMember(\_:)](nscharacterset/characterismember%28__%29.md) for every possible Unicode value.

`NSCharacterSet` is “toll-free bridged” with its Core Foundation counterpart, [CFCharacterSet](../corefoundation/cfcharacterset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [CharacterSet](characterset.md) structure, which bridges to the [NSCharacterSet](nscharacterset.md) class and its mutable subclass, [NSMutableCharacterSet](nsmutablecharacterset.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Getting Standard Character Sets

- [alphanumerics](nscharacterset/alphanumerics.md): A character set containing the characters in Unicode General Categories L\*, M\*, and N\*.
- [capitalizedLetters](nscharacterset/capitalizedletters.md): A character set containing the characters in Unicode General Category Lt.
- [controlCharacters](nscharacterset/controlcharacters.md): A character set containing the characters in Unicode General Category Cc and Cf.
- [decimalDigits](nscharacterset/decimaldigits.md): A character set containing the characters in the category of Decimal Numbers.
- [decomposables](nscharacterset/decomposables.md): A character set containing individual Unicode characters that can also be represented as composed character sequences (such as for letters with accents), by the definition of “standard decomposition” in version 3.2 of the Unicode character encoding standard.
- [illegalCharacters](nscharacterset/illegalcharacters.md): A character set containing values in the category of Non-Characters or that have not yet been defined in version 3.2 of the Unicode standard.
- [letters](nscharacterset/letters.md): A character set containing the characters in Unicode General Category L\* & M\*.
- [lowercaseLetters](nscharacterset/lowercaseletters.md): A character set containing the characters in Unicode General Category Ll.
- [newlines](nscharacterset/newlines.md): A character set containing the newline characters (`U+000A` ~ `U+000D`, `U+0085`, `U+2028`, and `U+2029`).
- [nonBaseCharacters](nscharacterset/nonbasecharacters.md): A character set containing the characters in Unicode General Category M\*.
- [punctuationCharacters](nscharacterset/punctuationcharacters.md): A character set containing the characters in Unicode General Category P\*.
- [symbols](nscharacterset/symbols.md): A character set containing the characters in Unicode General Category S\*.
- [uppercaseLetters](nscharacterset/uppercaseletters.md): A character set containing the characters in Unicode General Category Lu and Lt.
- [whitespacesAndNewlines](nscharacterset/whitespacesandnewlines.md): A character set containing characters in Unicode General Category Z\*, `U+000A` ~ `U+000D`, and `U+0085`.
- [whitespaces](nscharacterset/whitespaces.md): A character set containing the characters in Unicode General Category Zs and `CHARACTER TABULATION` (`U+0009`).

### Getting Character Sets for URL Encoding

- [urlFragmentAllowed](nscharacterset/urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [urlHostAllowed](nscharacterset/urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [urlPasswordAllowed](nscharacterset/urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [urlPathAllowed](nscharacterset/urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [urlQueryAllowed](nscharacterset/urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [urlUserAllowed](nscharacterset/urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.

### Creating a Custom Character Set

- [init(coder:)](nscharacterset/init%28coder_%29.md)
- [init(charactersIn:)](nscharacterset/init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [init(range:)](nscharacterset/init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [NSOpenStepUnicodeReservedBase](1560803-nsopenstepunicodereservedbase.md): Specifies lower bound for a Unicode character range reserved for Apple’s corporate use.

### Creating and Managing Character Sets as Bitmap Representations

- [init(bitmapRepresentation:)](nscharacterset/init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [init(contentsOfFile:)](nscharacterset/init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.
- [bitmapRepresentation](nscharacterset/bitmaprepresentation.md): An `NSData` object encoding the receiver in binary format.

### Inverting a Character Set

- [inverted](nscharacterset/inverted.md): A character set containing only characters that don’t exist in the receiver.

### Testing Set Membership

- [characterIsMember(\_:)](nscharacterset/characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [hasMemberInPlane(\_:)](nscharacterset/hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [isSuperset(of:)](nscharacterset/issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.
- [longCharacterIsMember(\_:)](nscharacterset/longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.

### Initializers

- [init(charactersInString:)](nscharacterset/init%28charactersinstring_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableCharacterSet](nsmutablecharacterset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

# NSCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a fixed set of Unicode character values for use in search operations.

## Declaration

```objectivec
@interface NSCharacterSet : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this bridges to a [CharacterSet](characterset.md); use [NSCharacterSet](nscharacterset.md) when you need reference semantics or other Foundation-specific behavior.

An `NSCharacterSet` object represents a set of Unicode-compliant characters. `NSString` and `NSScanner` objects use `NSCharacterSet` objects to group characters together for searching operations, so that they can find any of a particular set of characters during a search. The cluster’s two public classes, `NSCharacterSet` and [NSMutableCharacterSet](nsmutablecharacterset.md), declare the programmatic interface for static and dynamic character sets, respectively.

The objects you create using these classes are referred to as character set objects (and when no confusion will result, merely as character sets). Because of the nature of class clusters, character set objects aren’t actual instances of the `NSCharacterSet` or `NSMutableCharacterSet` classes but of one of their private subclasses. Although a character set object’s class is private, its interface is public, as declared by these abstract superclasses, `NSCharacterSet` and `NSMutableCharacterSet`. The character set classes adopt the `NSCopying` and `NSMutableCopying` protocols, making it convenient to convert a character set of one type to the other.

The `NSCharacterSet` class declares the programmatic interface for an object that manages a set of Unicode characters (see the [NSString](nsstring.md) class cluster specification for information on Unicode). `NSCharacterSet`’s principal primitive method, [characterIsMember:](nscharacterset/characterismember%28__%29.md), provides the basis for all other instance methods in its interface. A subclass of `NSCharacterSet` needs only to implement this method, plus [mutableCopyWithZone:](nsmutablecopying/mutablecopy%28with_%29.md), for proper behavior. For optimal performance, a subclass should also override [bitmapRepresentation](nscharacterset/bitmaprepresentation.md), which otherwise works by invoking [characterIsMember:](nscharacterset/characterismember%28__%29.md) for every possible Unicode value.

`NSCharacterSet` is “toll-free bridged” with its Core Foundation counterpart, [CFCharacterSetRef](../corefoundation/cfcharacterset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [CharacterSet](characterset.md) structure, which bridges to the [NSCharacterSet](nscharacterset.md) class and its mutable subclass, [NSMutableCharacterSet](nsmutablecharacterset.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Getting Standard Character Sets

- [alphanumericCharacterSet](nscharacterset/alphanumerics.md): A character set containing the characters in Unicode General Categories L\*, M\*, and N\*.
- [capitalizedLetterCharacterSet](nscharacterset/capitalizedletters.md): A character set containing the characters in Unicode General Category Lt.
- [controlCharacterSet](nscharacterset/controlcharacters.md): A character set containing the characters in Unicode General Category Cc and Cf.
- [decimalDigitCharacterSet](nscharacterset/decimaldigits.md): A character set containing the characters in the category of Decimal Numbers.
- [decomposableCharacterSet](nscharacterset/decomposables.md): A character set containing individual Unicode characters that can also be represented as composed character sequences (such as for letters with accents), by the definition of “standard decomposition” in version 3.2 of the Unicode character encoding standard.
- [illegalCharacterSet](nscharacterset/illegalcharacters.md): A character set containing values in the category of Non-Characters or that have not yet been defined in version 3.2 of the Unicode standard.
- [letterCharacterSet](nscharacterset/letters.md): A character set containing the characters in Unicode General Category L\* & M\*.
- [lowercaseLetterCharacterSet](nscharacterset/lowercaseletters.md): A character set containing the characters in Unicode General Category Ll.
- [newlineCharacterSet](nscharacterset/newlines.md): A character set containing the newline characters (`U+000A` ~ `U+000D`, `U+0085`, `U+2028`, and `U+2029`).
- [nonBaseCharacterSet](nscharacterset/nonbasecharacters.md): A character set containing the characters in Unicode General Category M\*.
- [punctuationCharacterSet](nscharacterset/punctuationcharacters.md): A character set containing the characters in Unicode General Category P\*.
- [symbolCharacterSet](nscharacterset/symbols.md): A character set containing the characters in Unicode General Category S\*.
- [uppercaseLetterCharacterSet](nscharacterset/uppercaseletters.md): A character set containing the characters in Unicode General Category Lu and Lt.
- [whitespaceAndNewlineCharacterSet](nscharacterset/whitespacesandnewlines.md): A character set containing characters in Unicode General Category Z\*, `U+000A` ~ `U+000D`, and `U+0085`.
- [whitespaceCharacterSet](nscharacterset/whitespaces.md): A character set containing the characters in Unicode General Category Zs and `CHARACTER TABULATION` (`U+0009`).

### Getting Character Sets for URL Encoding

- [URLFragmentAllowedCharacterSet](nscharacterset/urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [URLHostAllowedCharacterSet](nscharacterset/urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [URLPasswordAllowedCharacterSet](nscharacterset/urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [URLPathAllowedCharacterSet](nscharacterset/urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [URLQueryAllowedCharacterSet](nscharacterset/urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [URLUserAllowedCharacterSet](nscharacterset/urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.

### Creating a Custom Character Set

- [initWithCoder:](nscharacterset/init%28coder_%29.md)
- [characterSetWithCharactersInString:](nscharacterset/init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [characterSetWithRange:](nscharacterset/init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [NSOpenStepUnicodeReservedBase](1560803-nsopenstepunicodereservedbase.md): Specifies lower bound for a Unicode character range reserved for Apple’s corporate use.

### Creating and Managing Character Sets as Bitmap Representations

- [characterSetWithBitmapRepresentation:](nscharacterset/init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [characterSetWithContentsOfFile:](nscharacterset/init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.
- [bitmapRepresentation](nscharacterset/bitmaprepresentation.md): An `NSData` object encoding the receiver in binary format.

### Inverting a Character Set

- [invertedSet](nscharacterset/inverted.md): A character set containing only characters that don’t exist in the receiver.

### Testing Set Membership

- [characterIsMember:](nscharacterset/characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [hasMemberInPlane:](nscharacterset/hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [isSupersetOfSet:](nscharacterset/issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.
- [longCharacterIsMember:](nscharacterset/longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableCharacterSet](nsmutablecharacterset.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Characters

- [NSMutableCharacterSet](nsmutablecharacterset.md): An object representing a mutable set of Unicode character values for use in search operations.
- [unichar](unichar.md): Type for UTF-16 code units.
