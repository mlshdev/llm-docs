> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutableattributedstring](https://developer.apple.com/documentation/corefoundation/cfmutableattributedstring)

# CFMutableAttributedString (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableAttributedString
```

<a id="Overview"></a>

## Overview

Instances of CFMutableAttributedString manage mutable character strings and associated sets of attributes (for example, font and kerning information) that apply to individual characters or ranges of characters in the string. CFAttributedString as defined in CoreFoundation provides the basic container functionality, while higher levels provide definitions for standard attributes, their values, and additional behaviors involving these. CFMutableAttributedString represents a mutable string—use CFAttributedString to create and manage an attributed string that cannot be changed after it has been created.

CFMutableAttributedString is not a “subclass” of CFMutableString; that is, it does not respond to CFMutableString (or CFString) function calls. CFAttributedString conceptually contains a CFMutableString to which it applies attributes. This protects you from ambiguities caused by the semantic differences between simple and attributed string. Functions defined for CFAttributedString can be applied to a CFMutableAttributedString object.

Attributes are identified by key/value pairs stored in CFDictionary objects. Keys must be CFString objects, while the corresponding values are CFType objects of an appropriate type. See the attribute constants in NSAttributedString Application Kit Additions Reference for standard attribute names in macOS and NSAttributedString UIKit Additions Reference on iOS.

> **Important**

>  Attribute dictionaries set for an attributed string must always be created with kCFCopyStringDictionaryKeyCallbacks for their dictionary key callbacks and kCFTypeDictionaryValueCallBacks for their value callbacks; otherwise it’s an error.

When you modify the contents of a mutable attributed string, it may have to do a lot of work to ensure it is internally consistent, and to coalesce runs of identical attributes. You can call [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md) and [CFAttributedStringEndEditing(\_:)](cfattributedstringendediting%28__%29.md) around a set of related mutation calls that don’t require the string to be in consistent state in between, and thereby reduce the amount of work necessary. These calls can be nested.

CFMutableAttributedString is “toll-free bridged” with its Foundation counterpart, NSMutableAttributedString. This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSMutableAttributedString *` parameter, you can pass in an object of type `CFMutableAttributedStringRef`, and in a function where you see a `CFMutableAttributedStringRef` parameter, you can pass in an `NSMutableAttributedString` instance. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

There is not always a 1:1 mapping between `NSMutableAttributedString`‘s methods and CFMutableAttributedString’s functions. For example, to perform an operation equivalent to `NSMutableAttributedString`’s [append(\_:)](../foundation/nsmutableattributedstring/append%28__%29.md) method on a CFMutableAttributedString object, you can use [CFAttributedStringReplaceAttributedString(\_:\_:\_:)](cfattributedstringreplaceattributedstring%28______%29.md) and specify `CFRangeMake(CFAttributedStringGetLength(attrStr), 0)` as the range. Alternatively you can cast the CFMutableAttributedString object to an `NSMutableAttributedString` object and send the `appendAttributedString:` message.

## Topics

### Creating a CFMutableAttributedString

- [CFAttributedStringCreateMutable(\_:\_:)](cfattributedstringcreatemutable%28____%29.md): Creates a mutable attributed string.
- [CFAttributedStringCreateMutableCopy(\_:\_:\_:)](cfattributedstringcreatemutablecopy%28______%29.md): Creates a mutable copy of an attributed string.

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing(\_:)](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString(\_:)](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute(\_:\_:\_:)](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString(\_:\_:\_:)](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString(\_:\_:\_:)](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute(\_:\_:\_:\_:)](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes(\_:\_:\_:\_:)](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.

## Relationships

### Inherits From

- [CFAttributedString](cfattributedstring.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)
- [Data Formatting Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFMutableAttributedStringRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFAttributedString * CFMutableAttributedStringRef;
```

<a id="Overview"></a>

## Overview

Instances of CFMutableAttributedString manage mutable character strings and associated sets of attributes (for example, font and kerning information) that apply to individual characters or ranges of characters in the string. CFAttributedString as defined in CoreFoundation provides the basic container functionality, while higher levels provide definitions for standard attributes, their values, and additional behaviors involving these. CFMutableAttributedString represents a mutable string—use CFAttributedString to create and manage an attributed string that cannot be changed after it has been created.

CFMutableAttributedString is not a “subclass” of CFMutableString; that is, it does not respond to CFMutableString (or CFString) function calls. CFAttributedString conceptually contains a CFMutableString to which it applies attributes. This protects you from ambiguities caused by the semantic differences between simple and attributed string. Functions defined for CFAttributedString can be applied to a CFMutableAttributedString object.

Attributes are identified by key/value pairs stored in CFDictionary objects. Keys must be CFString objects, while the corresponding values are CFType objects of an appropriate type. See the attribute constants in NSAttributedString Application Kit Additions Reference for standard attribute names in macOS and NSAttributedString UIKit Additions Reference on iOS.

> **Important**

>  Attribute dictionaries set for an attributed string must always be created with kCFCopyStringDictionaryKeyCallbacks for their dictionary key callbacks and kCFTypeDictionaryValueCallBacks for their value callbacks; otherwise it’s an error.

When you modify the contents of a mutable attributed string, it may have to do a lot of work to ensure it is internally consistent, and to coalesce runs of identical attributes. You can call [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md) and [CFAttributedStringEndEditing](cfattributedstringendediting%28__%29.md) around a set of related mutation calls that don’t require the string to be in consistent state in between, and thereby reduce the amount of work necessary. These calls can be nested.

CFMutableAttributedString is “toll-free bridged” with its Foundation counterpart, NSMutableAttributedString. This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSMutableAttributedString *` parameter, you can pass in an object of type `CFMutableAttributedStringRef`, and in a function where you see a `CFMutableAttributedStringRef` parameter, you can pass in an `NSMutableAttributedString` instance. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

There is not always a 1:1 mapping between `NSMutableAttributedString`‘s methods and CFMutableAttributedString’s functions. For example, to perform an operation equivalent to `NSMutableAttributedString`’s [appendAttributedString:](../foundation/nsmutableattributedstring/append%28__%29.md) method on a CFMutableAttributedString object, you can use [CFAttributedStringReplaceAttributedString](cfattributedstringreplaceattributedstring%28______%29.md) and specify `CFRangeMake(CFAttributedStringGetLength(attrStr), 0)` as the range. Alternatively you can cast the CFMutableAttributedString object to an `NSMutableAttributedString` object and send the `appendAttributedString:` message.

## Topics

### Creating a CFMutableAttributedString

- [CFAttributedStringCreateMutable](cfattributedstringcreatemutable%28____%29.md): Creates a mutable attributed string.
- [CFAttributedStringCreateMutableCopy](cfattributedstringcreatemutablecopy%28______%29.md): Creates a mutable copy of an attributed string.

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)
- [Data Formatting Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
