> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutablearray](https://developer.apple.com/documentation/corefoundation/cfmutablearray)

# CFMutableArray (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableArray
```

<a id="Overview"></a>

## Overview

CFMutableArray manages dynamic arrays. The basic interface for managing arrays is provided by [CFArray](cfarray.md). CFMutableArray adds functions to modify the contents of an array.

You create a mutable array object using either the [CFArrayCreateMutable(\_:\_:\_:)](cfarraycreatemutable%28______%29.md) or [CFArrayCreateMutableCopy(\_:\_:\_:)](cfarraycreatemutablecopy%28______%29.md) function.

CFMutableArray provides several functions for changing the contents of an array, for example the [CFArrayAppendValue(\_:\_:)](cfarrayappendvalue%28____%29.md) and [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md) functions add values to an array and [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md) removes values from an array. You can also reorder the contents of an array using [CFArrayExchangeValuesAtIndices(\_:\_:\_:)](cfarrayexchangevaluesatindices%28______%29.md) and [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md).

CFMutableArray is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableArray](../foundation/nsmutablearray.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSMutableArray *` parameter, you can pass in a `CFMutableArrayRef`, and in a function where you see a `CFMutableArrayRef` parameter, you can pass in an NSMutableArray instance. This fact also applies to concrete subclasses of NSMutableArray. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray(\_:\_:\_:)](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue(\_:\_:)](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable(\_:\_:\_:)](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy(\_:\_:\_:)](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices(\_:\_:\_:)](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues(\_:)](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues(\_:\_:\_:\_:)](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex(\_:\_:\_:)](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

## Relationships

### Inherits From

- [CFArray](cfarray.md)

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

# CFMutableArrayRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFArray * CFMutableArrayRef;
```

<a id="Overview"></a>

## Overview

CFMutableArray manages dynamic arrays. The basic interface for managing arrays is provided by [CFArrayRef](cfarray.md). CFMutableArray adds functions to modify the contents of an array.

You create a mutable array object using either the [CFArrayCreateMutable](cfarraycreatemutable%28______%29.md) or [CFArrayCreateMutableCopy](cfarraycreatemutablecopy%28______%29.md) function.

CFMutableArray provides several functions for changing the contents of an array, for example the [CFArrayAppendValue](cfarrayappendvalue%28____%29.md) and [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md) functions add values to an array and [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md) removes values from an array. You can also reorder the contents of an array using [CFArrayExchangeValuesAtIndices](cfarrayexchangevaluesatindices%28______%29.md) and [CFArraySortValues](cfarraysortvalues%28________%29.md).

CFMutableArray is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableArray](../foundation/nsmutablearray.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSMutableArray *` parameter, you can pass in a `CFMutableArrayRef`, and in a function where you see a `CFMutableArrayRef` parameter, you can pass in an NSMutableArray instance. This fact also applies to concrete subclasses of NSMutableArray. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

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
