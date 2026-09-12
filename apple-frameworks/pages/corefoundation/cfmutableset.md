> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutableset](https://developer.apple.com/documentation/corefoundation/cfmutableset)

# CFMutableSet (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableSet
```

<a id="Overview"></a>

## Overview

CFMutableSet manages dynamic sets. The basic interface for managing sets is provided by [CFSet](cfset.md). CFMutableSet adds functions to modify the contents of a set.

You create a mutable set object using either the [CFSetCreateMutable(\_:\_:\_:)](cfsetcreatemutable%28______%29.md) or [CFSetCreateMutableCopy(\_:\_:\_:)](cfsetcreatemutablecopy%28______%29.md) function.

CFMutableSet provides several functions for adding and removing values from a set. The [CFSetAddValue(\_:\_:)](cfsetaddvalue%28____%29.md) function adds a value to a set and [CFSetRemoveValue(\_:\_:)](cfsetremovevalue%28____%29.md) removes a value from a set.

CFMutableSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableSet](../foundation/nsmutableset.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. This means that in a method where you see an `NSMutableSet *` parameter, you can pass in a `CFMutableSetRef`, and in a function where you see a `CFMutableSetRef` parameter, you can pass in an NSMutableSet instance. This also applies to concrete subclasses of NSMutableSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue(\_:\_:)](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable(\_:\_:\_:)](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy(\_:\_:\_:)](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues(\_:)](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue(\_:\_:)](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue(\_:\_:)](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue(\_:\_:)](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.

## Relationships

### Inherits From

- [CFSet](cfset.md)

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

# CFMutableSetRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFSet * CFMutableSetRef;
```

<a id="Overview"></a>

## Overview

CFMutableSet manages dynamic sets. The basic interface for managing sets is provided by [CFSetRef](cfset.md). CFMutableSet adds functions to modify the contents of a set.

You create a mutable set object using either the [CFSetCreateMutable](cfsetcreatemutable%28______%29.md) or [CFSetCreateMutableCopy](cfsetcreatemutablecopy%28______%29.md) function.

CFMutableSet provides several functions for adding and removing values from a set. The [CFSetAddValue](cfsetaddvalue%28____%29.md) function adds a value to a set and [CFSetRemoveValue](cfsetremovevalue%28____%29.md) removes a value from a set.

CFMutableSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableSet](../foundation/nsmutableset.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. This means that in a method where you see an `NSMutableSet *` parameter, you can pass in a `CFMutableSetRef`, and in a function where you see a `CFMutableSetRef` parameter, you can pass in an NSMutableSet instance. This also applies to concrete subclasses of NSMutableSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.

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
