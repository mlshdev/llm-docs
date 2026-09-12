> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharacterset](https://developer.apple.com/documentation/corefoundation/cfcharacterset)

# CFCharacterSet (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFCharacterSet
```

<a id="Overview"></a>

## Overview

A CFCharacterSet object represents a set of Unicode compliant characters. CFString uses CFCharacterSet objects to group characters together for searching operations, so that they can find any of a particular set of characters during a search. The two opaque types, CFCharacterSet and [CFMutableCharacterSet](cfmutablecharacterset.md), define the interface for static and dynamic character sets, respectively. The objects you create using these opaque types are referred to as character set objects (and when no confusion will result, merely as character sets).

CFCharacterSet’s principal function, [CFCharacterSetIsCharacterMember(\_:\_:)](cfcharactersetischaractermember%28____%29.md), provides the basis for all other functions in its interface. You create a character set using one of the `CFCharacterSetCreate...` functions. You may also use any one of the predefined character sets using the [CFCharacterSetGetPredefined(\_:)](cfcharactersetgetpredefined%28__%29.md) function.

CFCharacterSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSCharacterSet](../foundation/nscharacterset.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSCharacterSet *` parameter, you can pass in a `CFCharacterSetRef`, and in a function where you see a `CFCharacterSetRef` parameter, you can pass in an NSCharacterSet instance. This capability also applies to concrete subclasses of NSCharacterSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating Character Sets

- [CFCharacterSetCreateCopy(\_:\_:)](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateInvertedSet(\_:\_:)](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInRange(\_:\_:)](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithCharactersInString(\_:\_:)](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation(\_:\_:)](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.

### Getting Predefined Character Sets

- [CFCharacterSetGetPredefined(\_:)](cfcharactersetgetpredefined%28__%29.md): Returns a predefined character set.

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation(\_:\_:)](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetHasMemberInPlane(\_:\_:)](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember(\_:\_:)](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember(\_:\_:)](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.
- [CFCharacterSetIsSupersetOfSet(\_:\_:)](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.

### Getting the Character Set Type Identifier

- [CFCharacterSetGetTypeID()](cfcharactersetgettypeid%28%29.md): Returns the type identifier of the CFCharacterSet opaque type.

### Data Types

- [CFCharacterSetPredefinedSet](cfcharactersetpredefinedset.md): Defines a predefined character set.

### Constants

- [Predefined CFCharacterSet Selector Values](predefined_cfcharacterset_selector_values.md): Identifiers for the available predefined CFCharacterSet objects.

## Relationships

### Inherited By

- [CFMutableCharacterSet](cfmutablecharacterset.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)

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
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFCharacterSetRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFCharacterSet * CFCharacterSetRef;
```

<a id="Overview"></a>

## Overview

A CFCharacterSet object represents a set of Unicode compliant characters. CFString uses CFCharacterSet objects to group characters together for searching operations, so that they can find any of a particular set of characters during a search. The two opaque types, CFCharacterSet and [CFMutableCharacterSetRef](cfmutablecharacterset.md), define the interface for static and dynamic character sets, respectively. The objects you create using these opaque types are referred to as character set objects (and when no confusion will result, merely as character sets).

CFCharacterSet’s principal function, [CFCharacterSetIsCharacterMember](cfcharactersetischaractermember%28____%29.md), provides the basis for all other functions in its interface. You create a character set using one of the `CFCharacterSetCreate...` functions. You may also use any one of the predefined character sets using the [CFCharacterSetGetPredefined](cfcharactersetgetpredefined%28__%29.md) function.

CFCharacterSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSCharacterSet](../foundation/nscharacterset.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSCharacterSet *` parameter, you can pass in a `CFCharacterSetRef`, and in a function where you see a `CFCharacterSetRef` parameter, you can pass in an NSCharacterSet instance. This capability also applies to concrete subclasses of NSCharacterSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating Character Sets

- [CFCharacterSetCreateCopy](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateInvertedSet](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInRange](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithCharactersInString](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.

### Getting Predefined Character Sets

- [CFCharacterSetGetPredefined](cfcharactersetgetpredefined%28__%29.md): Returns a predefined character set.

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetHasMemberInPlane](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.
- [CFCharacterSetIsSupersetOfSet](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.

### Getting the Character Set Type Identifier

- [CFCharacterSetGetTypeID](cfcharactersetgettypeid%28%29.md): Returns the type identifier of the CFCharacterSet opaque type.

### Data Types

- [CFCharacterSetPredefinedSet](cfcharactersetpredefinedset.md): Defines a predefined character set.

### Constants

- [Predefined CFCharacterSet Selector Values](predefined_cfcharacterset_selector_values.md): Identifiers for the available predefined CFCharacterSet objects.

## See Also

### Related Documentation

- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)

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
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
