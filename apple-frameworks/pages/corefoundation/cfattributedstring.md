> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstring](https://developer.apple.com/documentation/corefoundation/cfattributedstring)

# CFAttributedString (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFAttributedString
```

<a id="Overview"></a>

## Overview

Instances of CFAttributedString manage character strings and associated sets of attributes (for example, font and kerning information) that apply to individual characters or ranges of characters in the string. CFAttributedString as defined in Core Foundation provides the basic container functionality, while higher levels provide definitions for standard attributes, their values, and additional behaviors involving these. CFAttributedString represents an immutable string—use [CFMutableAttributedString](cfmutableattributedstring.md) to create and manage an attributed string that can be changed after it has been created.

CFAttributedString is not a “subclass” of CFString; that is, it does not respond to CFString function calls. CFAttributedString conceptually contains a CFString to which it applies attributes. This protects you from ambiguities caused by the semantic differences between simple and attributed string.

Attributes are identified by key/value pairs stored in CFDictionary objects. Keys must be CFString objects, while the corresponding values are CFType objects of an appropriate type. See the attribute constants in NSAttributedString Application Kit Additions Reference or NSAttributedString UIKit Additions Reference for standard attribute names.

> **Important**

>  Attribute dictionaries set for an attributed string must always be created with [kCFCopyStringDictionaryKeyCallBacks](kcfcopystringdictionarykeycallbacks.md) for their dictionary key callbacks and [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md) for their value callbacks; otherwise it’s an error.

CFAttributedString is “toll-free bridged” with its Foundation counterpart, [NSAttributedString](../foundation/nsattributedstring.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSAttributedString *` parameter, you can pass in a `CFAttributedStringRef`, and in a function where you see a `CFAttributedStringRef` parameter, you can pass in an [NSAttributedString](../foundation/nsattributedstring.md) instance. This also applies to concrete subclasses of [NSAttributedString](../foundation/nsattributedstring.md). See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a CFAttributedString

- [CFAttributedStringCreate(\_:\_:\_:)](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy(\_:\_:)](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring(\_:\_:\_:)](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength(\_:)](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString(\_:)](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.

### Accessing Attributes

- [CFAttributedStringGetAttribute(\_:\_:\_:\_:)](cfattributedstringgetattribute%28________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributes(\_:\_:\_:)](cfattributedstringgetattributes%28______%29.md): Returns the attributes of an attributed string at a specified location.
- [CFAttributedStringGetAttributeAndLongestEffectiveRange(\_:\_:\_:\_:\_:)](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange(\_:\_:\_:\_:)](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.

### Getting Attributed String Properties

- [CFAttributedStringGetTypeID()](cfattributedstringgettypeid%28%29.md): Returns the type identifier for the CFAttributedString opaque type.

## Relationships

### Inherited By

- [CFMutableAttributedString](cfmutableattributedstring.md)

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
- [CFFileDescriptor](cffiledescriptor.md)

# CFAttributedStringRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFAttributedString * CFAttributedStringRef;
```

<a id="Overview"></a>

## Overview

Instances of CFAttributedString manage character strings and associated sets of attributes (for example, font and kerning information) that apply to individual characters or ranges of characters in the string. CFAttributedString as defined in Core Foundation provides the basic container functionality, while higher levels provide definitions for standard attributes, their values, and additional behaviors involving these. CFAttributedString represents an immutable string—use [CFMutableAttributedStringRef](cfmutableattributedstring.md) to create and manage an attributed string that can be changed after it has been created.

CFAttributedString is not a “subclass” of CFString; that is, it does not respond to CFString function calls. CFAttributedString conceptually contains a CFString to which it applies attributes. This protects you from ambiguities caused by the semantic differences between simple and attributed string.

Attributes are identified by key/value pairs stored in CFDictionary objects. Keys must be CFString objects, while the corresponding values are CFType objects of an appropriate type. See the attribute constants in NSAttributedString Application Kit Additions Reference or NSAttributedString UIKit Additions Reference for standard attribute names.

> **Important**

>  Attribute dictionaries set for an attributed string must always be created with [kCFCopyStringDictionaryKeyCallBacks](kcfcopystringdictionarykeycallbacks.md) for their dictionary key callbacks and [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md) for their value callbacks; otherwise it’s an error.

CFAttributedString is “toll-free bridged” with its Foundation counterpart, [NSAttributedString](../foundation/nsattributedstring.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSAttributedString *` parameter, you can pass in a `CFAttributedStringRef`, and in a function where you see a `CFAttributedStringRef` parameter, you can pass in an [NSAttributedString](../foundation/nsattributedstring.md) instance. This also applies to concrete subclasses of [NSAttributedString](../foundation/nsattributedstring.md). See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a CFAttributedString

- [CFAttributedStringCreate](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.

### Accessing Attributes

- [CFAttributedStringGetAttribute](cfattributedstringgetattribute%28________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributes](cfattributedstringgetattributes%28______%29.md): Returns the attributes of an attributed string at a specified location.
- [CFAttributedStringGetAttributeAndLongestEffectiveRange](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.

### Getting Attributed String Properties

- [CFAttributedStringGetTypeID](cfattributedstringgettypeid%28%29.md): Returns the type identifier for the CFAttributedString opaque type.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)
- [Data Formatting Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
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
- [CFFileDescriptorRef](cffiledescriptor.md)
