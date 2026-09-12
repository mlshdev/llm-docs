> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheap](https://developer.apple.com/documentation/corefoundation/cfbinaryheap)

# CFBinaryHeap (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFBinaryHeap
```

<a id="Overview"></a>

## Overview

`CFBinaryHeap` implements a container that stores values sorted using a binary search algorithm. All binary heaps are mutable; there is not a separate immutable variety. Binary heaps can be useful as priority queues.

## Topics

### CFBinaryHeap Miscellaneous Functions

- [CFBinaryHeapAddValue(\_:\_:)](cfbinaryheapaddvalue%28____%29.md): Adds a value to a binary heap.
- [CFBinaryHeapApplyFunction(\_:\_:\_:)](cfbinaryheapapplyfunction%28______%29.md): Iteratively applies a function to all the values in a binary heap.
- [CFBinaryHeapContainsValue(\_:\_:)](cfbinaryheapcontainsvalue%28____%29.md): Returns whether a given value is in a binary heap.
- [CFBinaryHeapCreate(\_:\_:\_:\_:)](cfbinaryheapcreate%28________%29.md): Creates a new mutable or fixed-mutable binary heap.
- [CFBinaryHeapCreateCopy(\_:\_:\_:)](cfbinaryheapcreatecopy%28______%29.md): Creates a new mutable or fixed-mutable binary heap with the values from a pre-existing binary heap.
- [CFBinaryHeapGetCount(\_:)](cfbinaryheapgetcount%28__%29.md): Returns the number of values currently in a binary heap.
- [CFBinaryHeapGetCountOfValue(\_:\_:)](cfbinaryheapgetcountofvalue%28____%29.md): Counts the number of times a given value occurs in a binary heap.
- [CFBinaryHeapGetMinimum(\_:)](cfbinaryheapgetminimum%28__%29.md): Returns the minimum value in a binary heap.
- [CFBinaryHeapGetMinimumIfPresent(\_:\_:)](cfbinaryheapgetminimumifpresent%28____%29.md): Returns the minimum value in a binary heap, if present.
- [CFBinaryHeapGetTypeID()](cfbinaryheapgettypeid%28%29.md): Returns the type identifier of the `CFBinaryHeap` opaque type.
- [CFBinaryHeapGetValues(\_:\_:)](cfbinaryheapgetvalues%28____%29.md): Copies all the values from a binary heap into a sorted C array.
- [CFBinaryHeapRemoveAllValues(\_:)](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.
- [CFBinaryHeapRemoveMinimumValue(\_:)](cfbinaryheapremoveminimumvalue%28__%29.md): Removes the minimum value from a binary heap.

### Callbacks

- [CFBinaryHeapApplierFunction](cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](cfbinaryheapcallbacks/compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](cfbinaryheapcallbacks/copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](cfbinaryheapcallbacks/release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](cfbinaryheapcallbacks/retain.md): Callback function used to retain a value being added to a binary heap.
- [version](cfbinaryheapcallbacks/version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

### Data Types

- [CFBinaryHeapCallBacks](cfbinaryheapcallbacks.md): Structure containing the callbacks for values for a `CFBinaryHeap` object.
- [CFBinaryHeapCompareContext](cfbinaryheapcomparecontext.md): Not used.

### Constants

- [Predefined Callback Structures](cfbinaryheap-predefined-callback-structures.md): `CFBinaryHeap` provides some predefined callbacks for your convenience.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
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

# CFBinaryHeapRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFBinaryHeap * CFBinaryHeapRef;
```

<a id="Overview"></a>

## Overview

`CFBinaryHeap` implements a container that stores values sorted using a binary search algorithm. All binary heaps are mutable; there is not a separate immutable variety. Binary heaps can be useful as priority queues.

## Topics

### CFBinaryHeap Miscellaneous Functions

- [CFBinaryHeapAddValue](cfbinaryheapaddvalue%28____%29.md): Adds a value to a binary heap.
- [CFBinaryHeapApplyFunction](cfbinaryheapapplyfunction%28______%29.md): Iteratively applies a function to all the values in a binary heap.
- [CFBinaryHeapContainsValue](cfbinaryheapcontainsvalue%28____%29.md): Returns whether a given value is in a binary heap.
- [CFBinaryHeapCreate](cfbinaryheapcreate%28________%29.md): Creates a new mutable or fixed-mutable binary heap.
- [CFBinaryHeapCreateCopy](cfbinaryheapcreatecopy%28______%29.md): Creates a new mutable or fixed-mutable binary heap with the values from a pre-existing binary heap.
- [CFBinaryHeapGetCount](cfbinaryheapgetcount%28__%29.md): Returns the number of values currently in a binary heap.
- [CFBinaryHeapGetCountOfValue](cfbinaryheapgetcountofvalue%28____%29.md): Counts the number of times a given value occurs in a binary heap.
- [CFBinaryHeapGetMinimum](cfbinaryheapgetminimum%28__%29.md): Returns the minimum value in a binary heap.
- [CFBinaryHeapGetMinimumIfPresent](cfbinaryheapgetminimumifpresent%28____%29.md): Returns the minimum value in a binary heap, if present.
- [CFBinaryHeapGetTypeID](cfbinaryheapgettypeid%28%29.md): Returns the type identifier of the `CFBinaryHeap` opaque type.
- [CFBinaryHeapGetValues](cfbinaryheapgetvalues%28____%29.md): Copies all the values from a binary heap into a sorted C array.
- [CFBinaryHeapRemoveAllValues](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.
- [CFBinaryHeapRemoveMinimumValue](cfbinaryheapremoveminimumvalue%28__%29.md): Removes the minimum value from a binary heap.

### Callbacks

- [CFBinaryHeapApplierFunction](cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](cfbinaryheapcallbacks/compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](cfbinaryheapcallbacks/copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](cfbinaryheapcallbacks/release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](cfbinaryheapcallbacks/retain.md): Callback function used to retain a value being added to a binary heap.
- [version](cfbinaryheapcallbacks/version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

### Data Types

- [CFBinaryHeapCallBacks](cfbinaryheapcallbacks.md): Structure containing the callbacks for values for a `CFBinaryHeap` object.
- [CFBinaryHeapCompareContext](cfbinaryheapcomparecontext.md): Not used.

### Constants

- [Predefined Callback Structures](cfbinaryheap-predefined-callback-structures.md): `CFBinaryHeap` provides some predefined callbacks for your convenience.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
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
