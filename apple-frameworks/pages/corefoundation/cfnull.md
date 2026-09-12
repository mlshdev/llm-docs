> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnull](https://developer.apple.com/documentation/corefoundation/cfnull)

# CFNull (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFNull
```

<a id="Overview"></a>

## Overview

The CFNull opaque type defines a unique object used to represent null values in collection objects (which don’t allow `NULL` values). CFNull objects are neither created nor destroyed. Instead, a single CFNull constant object—[kCFNull](kcfnull.md)—is defined and is used wherever a null value is needed.

The CFNull opaque type is available in macOS 10.2 and later.

## Topics

### CFNull Miscellaneous Functions

- [CFNullGetTypeID()](cfnullgettypeid%28%29.md): Returns the type identifier for the CFNull opaque type.

### Constants

- [Predefined Value](predefined-value.md): Predefined CFNull object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Collections Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFCollections/CFCollections.html#//apple_ref/doc/uid/10000124i)

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

# CFNullRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFNull * CFNullRef;
```

<a id="Overview"></a>

## Overview

The CFNull opaque type defines a unique object used to represent null values in collection objects (which don’t allow `NULL` values). CFNull objects are neither created nor destroyed. Instead, a single CFNull constant object—[kCFNull](kcfnull.md)—is defined and is used wherever a null value is needed.

The CFNull opaque type is available in macOS 10.2 and later.

## Topics

### CFNull Miscellaneous Functions

- [CFNullGetTypeID](cfnullgettypeid%28%29.md): Returns the type identifier for the CFNull opaque type.

### Constants

- [Predefined Value](predefined-value.md): Predefined CFNull object.

## See Also

### Related Documentation

- [Collections Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFCollections/CFCollections.html#//apple_ref/doc/uid/10000124i)

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
