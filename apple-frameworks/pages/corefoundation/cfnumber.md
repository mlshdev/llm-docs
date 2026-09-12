> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumber](https://developer.apple.com/documentation/corefoundation/cfnumber)

# CFNumber (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFNumber
```

<a id="Overview"></a>

## Overview

CFNumber encapsulates C scalar (numeric) types. It provides functions for setting and accessing the value as any basic C type. It also provides a compare function to determine the ordering of two CFNumber objects. CFNumber objects are used to wrap numerical values for use in Core Foundation property lists and collections.

CFNumber objects are not intended as a replacement for C scalar values and should not be used in APIs or implementations where scalar values are more appropriate and efficient.

> **Note**

>  In order to improve performance, some commonly-used numbers (such as `0` and `1`) are uniqued. You should not expect that allocating multiple CFNumber instances will necessarily result in distinct objects.

CFNumber is “toll-free bridged” with its Cocoa Foundation counterpart, [NSNumber](../foundation/nsnumber.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSNumber *` parameter, you can pass in a `CFNumberRef`, and in a function where you see a `CFNumberRef` parameter, you can pass in an NSNumber instance. This fact also applies to concrete subclasses of NSNumber. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Number

- [CFNumberCreate(\_:\_:\_:)](cfnumbercreate%28______%29.md): Creates a CFNumber object using a specified value.

### Getting Information About Numbers

- [CFNumberGetByteSize(\_:)](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetType(\_:)](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberGetValue(\_:\_:\_:)](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.
- [CFNumberIsFloatType(\_:)](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.

### Comparing Numbers

- [CFNumberCompare(\_:\_:\_:)](cfnumbercompare%28______%29.md): Compares two CFNumber objects and returns a comparison result.

### Getting the CFNumber Type ID

- [CFNumberGetTypeID()](cfnumbergettypeid%28%29.md): Returns the type identifier for the CFNumber opaque type.

### Constants

- [CFNumberType](cfnumbertype.md): Flags used by CFNumber to indicate the data type of a value.
- [Predefined Values](predefined-values.md): CFNumber provides some predefined number values.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)

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

# CFNumberRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFNumber * CFNumberRef;
```

<a id="Overview"></a>

## Overview

CFNumber encapsulates C scalar (numeric) types. It provides functions for setting and accessing the value as any basic C type. It also provides a compare function to determine the ordering of two CFNumber objects. CFNumber objects are used to wrap numerical values for use in Core Foundation property lists and collections.

CFNumber objects are not intended as a replacement for C scalar values and should not be used in APIs or implementations where scalar values are more appropriate and efficient.

> **Note**

>  In order to improve performance, some commonly-used numbers (such as `0` and `1`) are uniqued. You should not expect that allocating multiple CFNumber instances will necessarily result in distinct objects.

CFNumber is “toll-free bridged” with its Cocoa Foundation counterpart, [NSNumber](../foundation/nsnumber.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSNumber *` parameter, you can pass in a `CFNumberRef`, and in a function where you see a `CFNumberRef` parameter, you can pass in an NSNumber instance. This fact also applies to concrete subclasses of NSNumber. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Number

- [CFNumberCreate](cfnumbercreate%28______%29.md): Creates a CFNumber object using a specified value.

### Getting Information About Numbers

- [CFNumberGetByteSize](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetType](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberGetValue](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.
- [CFNumberIsFloatType](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.

### Comparing Numbers

- [CFNumberCompare](cfnumbercompare%28______%29.md): Compares two CFNumber objects and returns a comparison result.

### Getting the CFNumber Type ID

- [CFNumberGetTypeID](cfnumbergettypeid%28%29.md): Returns the type identifier for the CFNumber opaque type.

### Constants

- [CFNumberType](cfnumbertype.md): Flags used by CFNumber to indicate the data type of a value.
- [Predefined Values](predefined-values.md): CFNumber provides some predefined number values.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)

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
