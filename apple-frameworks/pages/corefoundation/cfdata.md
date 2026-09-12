> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdata](https://developer.apple.com/documentation/corefoundation/cfdata)

# CFData (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFData
```

<a id="Overview"></a>

## Overview

CFData and its derived mutable type, [CFMutableData](cfmutabledata.md), provide support for data objects, object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Core Foundation objects. CFData creates static data objects, and CFMutableData creates dynamic data objects. Data objects are typically used for raw data storage.

You use the [CFDataCreate(\_:\_:\_:)](cfdatacreate%28______%29.md) and [CFDataCreateCopy(\_:\_:)](cfdatacreatecopy%28____%29.md) functions to create static data objects. These functions make a new copy of the supplied data. To create a data object that uses the supplied buffer instead of making a separate copy, use the [CFDataCreateWithBytesNoCopy(\_:\_:\_:\_:)](cfdatacreatewithbytesnocopy%28________%29.md) function. You use the [CFDataGetBytes(\_:\_:\_:)](cfdatagetbytes%28______%29.md) function to retrieve the bytes and the [CFDataGetLength(\_:)](cfdatagetlength%28__%29.md) function to get the length of the bytes.

CFData is “toll-free bridged” with its Cocoa Foundation counterpart, [NSData](../foundation/nsdata.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. In other words, in a method where you see an `NSData *` parameter, you can pass in a `CFDataRef`, and in a function where you see a `CFDataRef` parameter, you can pass in an `NSData` instance. This also applies to concrete subclasses of `NSData`. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a CFData Object

- [CFDataCreate(\_:\_:\_:)](cfdatacreate%28______%29.md): Creates an immutable CFData object using data copied from a specified byte buffer.
- [CFDataCreateCopy(\_:\_:)](cfdatacreatecopy%28____%29.md): Creates an immutable copy of a CFData object.
- [CFDataCreateWithBytesNoCopy(\_:\_:\_:\_:)](cfdatacreatewithbytesnocopy%28________%29.md): Creates an immutable CFData object from an external (client-owned) byte buffer.

### Examining a CFData Object

- [CFDataGetBytePtr(\_:)](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetBytes(\_:\_:\_:)](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataGetLength(\_:)](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.
- [CFDataFind(\_:\_:\_:\_:)](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.

### Getting the CFData Type ID

- [CFDataGetTypeID()](cfdatagettypeid%28%29.md): Returns the type identifier for the CFData opaque type.

### Data Types

- [CFDataSearchFlags](cfdatasearchflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for searching.

## Relationships

### Inherited By

- [CFMutableData](cfmutabledata.md)

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
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFDataRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFData * CFDataRef;
```

<a id="Overview"></a>

## Overview

CFData and its derived mutable type, [CFMutableDataRef](cfmutabledata.md), provide support for data objects, object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Core Foundation objects. CFData creates static data objects, and CFMutableData creates dynamic data objects. Data objects are typically used for raw data storage.

You use the [CFDataCreate](cfdatacreate%28______%29.md) and [CFDataCreateCopy](cfdatacreatecopy%28____%29.md) functions to create static data objects. These functions make a new copy of the supplied data. To create a data object that uses the supplied buffer instead of making a separate copy, use the [CFDataCreateWithBytesNoCopy](cfdatacreatewithbytesnocopy%28________%29.md) function. You use the [CFDataGetBytes](cfdatagetbytes%28______%29.md) function to retrieve the bytes and the [CFDataGetLength](cfdatagetlength%28__%29.md) function to get the length of the bytes.

CFData is “toll-free bridged” with its Cocoa Foundation counterpart, [NSData](../foundation/nsdata.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. In other words, in a method where you see an `NSData *` parameter, you can pass in a `CFDataRef`, and in a function where you see a `CFDataRef` parameter, you can pass in an `NSData` instance. This also applies to concrete subclasses of `NSData`. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a CFData Object

- [CFDataCreate](cfdatacreate%28______%29.md): Creates an immutable CFData object using data copied from a specified byte buffer.
- [CFDataCreateCopy](cfdatacreatecopy%28____%29.md): Creates an immutable copy of a CFData object.
- [CFDataCreateWithBytesNoCopy](cfdatacreatewithbytesnocopy%28________%29.md): Creates an immutable CFData object from an external (client-owned) byte buffer.

### Examining a CFData Object

- [CFDataGetBytePtr](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetBytes](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataGetLength](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.
- [CFDataFind](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.

### Getting the CFData Type ID

- [CFDataGetTypeID](cfdatagettypeid%28%29.md): Returns the type identifier for the CFData opaque type.

### Data Types

- [CFDataSearchFlags](cfdatasearchflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for searching.

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
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
