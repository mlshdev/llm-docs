> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring](https://developer.apple.com/documentation/foundation/nsmutablestring)

# NSMutableString (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic plain-text Unicode string object.

## Declaration

```swift
class NSMutableString
```

<a id="overview"></a>

## Overview

In Swift, you can use this type instead of a [String](https://developer.apple.com/documentation/swift/string) in cases that require reference semantics.

The `NSMutableString` class declares the programmatic interface to an object that manages a mutable string—that is, a string whose contents can be edited—that conceptually represents an array of Unicode characters. To construct and manage an immutable string—or a string that cannot be changed after it has been created—use an object of the [NSString](nsstring.md) class.

The `NSMutableString` class adds one primitive method—[replaceCharacters(in:with:)](nsmutablestring/replacecharacters%28in_with_%29.md)—to the basic string-handling behavior inherited from `NSString`. All other methods that modify a string work through this method. For example, [insert(\_:at:)](nsmutablestring/insert%28__at_%29.md) simply replaces the characters in a range of `0` length, while [deleteCharacters(in:)](nsmutablestring/deletecharacters%28in_%29.md) replaces the characters in a given range with no characters.

NSMutableString is “toll-free bridged” with its Core Foundation counterpart, [CFMutableString](../corefoundation/cfmutablestring.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

## Topics

### Creating and Initializing a Mutable String

- [init(capacity:)](nsmutablestring/init%28capacity_%29.md): Returns an `NSMutableString` object initialized with initial storage for a given number of characters,

### Modifying a String

- [append(\_:)](nsmutablestring/append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [applyTransform(\_:reverse:range:updatedRange:)](nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [deleteCharacters(in:)](nsmutablestring/deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insert(\_:at:)](nsmutablestring/insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharacters(in:with:)](nsmutablestring/replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrences(of:with:options:range:)](nsmutablestring/replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString(\_:)](nsmutablestring/setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.

### Constants

- [String Transformations](string-transformations.md): These constants specify transforms used by the [applyTransform(\_:reverse:range:updatedRange:)](nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md) method.

### Instance Methods

- [appendFormat(\_:\_:)](nsmutablestring/appendformat%28____%29.md)

## Relationships

### Inherits From

- [NSString](nsstring.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSItemProviderReading](nsitemproviderreading.md)
- [NSItemProviderWriting](nsitemproviderwriting.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSMutableString (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic plain-text Unicode string object.

## Declaration

```objectivec
@interface NSMutableString : NSString
```

<a id="overview"></a>

## Overview

In Swift, you can use this type instead of a [String](https://developer.apple.com/documentation/swift/string) in cases that require reference semantics.

The `NSMutableString` class declares the programmatic interface to an object that manages a mutable string—that is, a string whose contents can be edited—that conceptually represents an array of Unicode characters. To construct and manage an immutable string—or a string that cannot be changed after it has been created—use an object of the [NSString](nsstring.md) class.

The `NSMutableString` class adds one primitive method—[replaceCharactersInRange:withString:](nsmutablestring/replacecharacters%28in_with_%29.md)—to the basic string-handling behavior inherited from `NSString`. All other methods that modify a string work through this method. For example, [insertString:atIndex:](nsmutablestring/insert%28__at_%29.md) simply replaces the characters in a range of `0` length, while [deleteCharactersInRange:](nsmutablestring/deletecharacters%28in_%29.md) replaces the characters in a given range with no characters.

NSMutableString is “toll-free bridged” with its Core Foundation counterpart, [CFMutableStringRef](../corefoundation/cfmutablestring.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

## Topics

### Creating and Initializing a Mutable String

- [stringWithCapacity:](nsmutablestring/stringwithcapacity_.md): Returns an empty `NSMutableString` object with initial storage for a given number of characters.
- [initWithCapacity:](nsmutablestring/init%28capacity_%29.md): Returns an `NSMutableString` object initialized with initial storage for a given number of characters,

### Modifying a String

- [appendFormat:](nsmutablestring/appendformat_.md): Adds a constructed string to the receiver.
- [appendString:](nsmutablestring/append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [applyTransform:reverse:range:updatedRange:](nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md): Transliterates the receiver by applying a specified ICU string transform.
- [deleteCharactersInRange:](nsmutablestring/deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insertString:atIndex:](nsmutablestring/insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharactersInRange:withString:](nsmutablestring/replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrencesOfString:withString:options:range:](nsmutablestring/replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString:](nsmutablestring/setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.

### Constants

- [String Transformations](string-transformations.md): These constants specify transforms used by the [applyTransform:reverse:range:updatedRange:](nsmutablestring/applytransform%28__reverse_range_updatedrange_%29.md) method.

## Relationships

### Inherits From

- [NSString](nsstring.md)

## See Also

### Strings

- [NSString](nsstring.md): A static, plain-text Unicode string object.
