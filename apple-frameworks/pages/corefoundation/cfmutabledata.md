> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutabledata](https://developer.apple.com/documentation/corefoundation/cfmutabledata)

# CFMutableData (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableData
```

<a id="Overview"></a>

## Overview

CFMutableData manages dynamic binary data. The basic interface for managing binary data is provided by [CFData](cfdata.md). CFMutableData adds functions to modify the contents of a binary data object.

You create a mutable data object using either the [CFDataCreateMutable(\_:\_:)](cfdatacreatemutable%28____%29.md) or [CFDataCreateMutableCopy(\_:\_:\_:)](cfdatacreatemutablecopy%28______%29.md) function.

Bytes are added to a data object with the [CFDataAppendBytes(\_:\_:\_:)](cfdataappendbytes%28______%29.md) function. Bytes are removed from a data object with the [CFDataDeleteBytes(\_:\_:)](cfdatadeletebytes%28____%29.md) function.

> **Important**

>  Many of the CFMutableData functions take a [CFIndex](cfindex.md) `length` or `capacity` argument. You must not pass a negative number for such values—this may introduce a security risk.

CFMutableData is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableData](../foundation/nsmutabledata.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. In other words, in a method where you see an `NSMutableData *` parameter, you can pass in a `CFMutableDataRef`, and in a function where you see a `CFMutableDataRef` parameter, you can pass in an `NSMutableData` instance. This also applies to concrete subclasses of `NSMutableData`. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Mutable Data Object

- [CFDataCreateMutable(\_:\_:)](cfdatacreatemutable%28____%29.md): Creates an empty CFMutableData object.
- [CFDataCreateMutableCopy(\_:\_:\_:)](cfdatacreatemutablecopy%28______%29.md): Creates a CFMutableData object by copying another CFData object.

### Accessing Data

- [CFDataGetMutableBytePtr(\_:)](cfdatagetmutablebyteptr%28__%29.md): Returns a pointer to a mutable byte buffer of a CFMutableData object.

### Modifying a Mutable Data Object

- [CFDataAppendBytes(\_:\_:\_:)](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes(\_:\_:)](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes(\_:\_:\_:\_:)](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength(\_:\_:)](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength(\_:\_:)](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.

## Relationships

### Inherits From

- [CFData](cfdata.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [Binary Data Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBinaryData/CFBinaryData.html#//apple_ref/doc/uid/10000144i)

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

# CFMutableDataRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFData * CFMutableDataRef;
```

<a id="Overview"></a>

## Overview

CFMutableData manages dynamic binary data. The basic interface for managing binary data is provided by [CFDataRef](cfdata.md). CFMutableData adds functions to modify the contents of a binary data object.

You create a mutable data object using either the [CFDataCreateMutable](cfdatacreatemutable%28____%29.md) or [CFDataCreateMutableCopy](cfdatacreatemutablecopy%28______%29.md) function.

Bytes are added to a data object with the [CFDataAppendBytes](cfdataappendbytes%28______%29.md) function. Bytes are removed from a data object with the [CFDataDeleteBytes](cfdatadeletebytes%28____%29.md) function.

> **Important**

>  Many of the CFMutableData functions take a [CFIndex](cfindex.md) `length` or `capacity` argument. You must not pass a negative number for such values—this may introduce a security risk.

CFMutableData is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableData](../foundation/nsmutabledata.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. In other words, in a method where you see an `NSMutableData *` parameter, you can pass in a `CFMutableDataRef`, and in a function where you see a `CFMutableDataRef` parameter, you can pass in an `NSMutableData` instance. This also applies to concrete subclasses of `NSMutableData`. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Mutable Data Object

- [CFDataCreateMutable](cfdatacreatemutable%28____%29.md): Creates an empty CFMutableData object.
- [CFDataCreateMutableCopy](cfdatacreatemutablecopy%28______%29.md): Creates a CFMutableData object by copying another CFData object.

### Accessing Data

- [CFDataGetMutableBytePtr](cfdatagetmutablebyteptr%28__%29.md): Returns a pointer to a mutable byte buffer of a CFMutableData object.

### Modifying a Mutable Data Object

- [CFDataAppendBytes](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [Binary Data Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBinaryData/CFBinaryData.html#//apple_ref/doc/uid/10000144i)

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
