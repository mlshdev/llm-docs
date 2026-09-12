> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutablecharacterset](https://developer.apple.com/documentation/corefoundation/cfmutablecharacterset)

# CFMutableCharacterSet (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableCharacterSet
```

<a id="Overview"></a>

## Overview

CFMutableCharacterSet manages dynamic character sets. The basic interface for managing character sets is provided by [CFCharacterSet](cfcharacterset.md). CFMutableCharacterSet adds functions to modify the contents of a character set.

You create a mutable character set object using either the [CFCharacterSetCreateMutable(\_:)](cfcharactersetcreatemutable%28__%29.md) or [CFCharacterSetCreateMutableCopy(\_:\_:)](cfcharactersetcreatemutablecopy%28____%29.md) function.

CFMutableCharacterSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableCharacterSet](../foundation/nsmutablecharacterset.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSMutableCharacterSet *` parameter, you can pass in a `CFMutableCharacterSetRef`, and in a function where you see a `CFMutableCharacterSetRef` parameter, you can pass in an NSMutableCharacterSet instance. This capability also applies to concrete subclasses of NSMutableCharacterSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Mutable Character Set

- [CFCharacterSetCreateMutable(\_:)](cfcharactersetcreatemutable%28__%29.md): Creates a new empty mutable character set.
- [CFCharacterSetCreateMutableCopy(\_:\_:)](cfcharactersetcreatemutablecopy%28____%29.md): Creates a new mutable character set with the values from another character set.

### Adding Characters

- [CFCharacterSetAddCharactersInRange(\_:\_:)](cfcharactersetaddcharactersinrange%28____%29.md): Adds a given range to a character set.
- [CFCharacterSetAddCharactersInString(\_:\_:)](cfcharactersetaddcharactersinstring%28____%29.md): Adds the characters in a given string to a character set.

### Removing Characters

- [CFCharacterSetRemoveCharactersInRange(\_:\_:)](cfcharactersetremovecharactersinrange%28____%29.md): Removes a given range of Unicode characters from a character set.
- [CFCharacterSetRemoveCharactersInString(\_:\_:)](cfcharactersetremovecharactersinstring%28____%29.md): Removes the characters in a given string from a character set.

### Logical Operations

- [CFCharacterSetIntersect(\_:\_:)](cfcharactersetintersect%28____%29.md): Forms an intersection of two character sets.
- [CFCharacterSetInvert(\_:)](cfcharactersetinvert%28__%29.md): Inverts the content of a given character set.
- [CFCharacterSetUnion(\_:\_:)](cfcharactersetunion%28____%29.md): Forms the union of two character sets.

## Relationships

### Inherits From

- [CFCharacterSet](cfcharacterset.md)

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
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFMutableCharacterSetRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFCharacterSet * CFMutableCharacterSetRef;
```

<a id="Overview"></a>

## Overview

CFMutableCharacterSet manages dynamic character sets. The basic interface for managing character sets is provided by [CFCharacterSetRef](cfcharacterset.md). CFMutableCharacterSet adds functions to modify the contents of a character set.

You create a mutable character set object using either the [CFCharacterSetCreateMutable](cfcharactersetcreatemutable%28__%29.md) or [CFCharacterSetCreateMutableCopy](cfcharactersetcreatemutablecopy%28____%29.md) function.

CFMutableCharacterSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableCharacterSet](../foundation/nsmutablecharacterset.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSMutableCharacterSet *` parameter, you can pass in a `CFMutableCharacterSetRef`, and in a function where you see a `CFMutableCharacterSetRef` parameter, you can pass in an NSMutableCharacterSet instance. This capability also applies to concrete subclasses of NSMutableCharacterSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Mutable Character Set

- [CFCharacterSetCreateMutable](cfcharactersetcreatemutable%28__%29.md): Creates a new empty mutable character set.
- [CFCharacterSetCreateMutableCopy](cfcharactersetcreatemutablecopy%28____%29.md): Creates a new mutable character set with the values from another character set.

### Adding Characters

- [CFCharacterSetAddCharactersInRange](cfcharactersetaddcharactersinrange%28____%29.md): Adds a given range to a character set.
- [CFCharacterSetAddCharactersInString](cfcharactersetaddcharactersinstring%28____%29.md): Adds the characters in a given string to a character set.

### Removing Characters

- [CFCharacterSetRemoveCharactersInRange](cfcharactersetremovecharactersinrange%28____%29.md): Removes a given range of Unicode characters from a character set.
- [CFCharacterSetRemoveCharactersInString](cfcharactersetremovecharactersinstring%28____%29.md): Removes the characters in a given string from a character set.

### Logical Operations

- [CFCharacterSetIntersect](cfcharactersetintersect%28____%29.md): Forms an intersection of two character sets.
- [CFCharacterSetInvert](cfcharactersetinvert%28__%29.md): Inverts the content of a given character set.
- [CFCharacterSetUnion](cfcharactersetunion%28____%29.md): Forms the union of two character sets.

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
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
