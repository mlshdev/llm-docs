> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutablebag](https://developer.apple.com/documentation/corefoundation/cfmutablebag)

# CFMutableBag (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableBag
```

<a id="Overview"></a>

## Overview

CFMutableBag manages dynamic bags. The basic interface for managing bags is provided by [CFBag](cfbag.md). CFMutableBag adds functions to modify the contents of a bag.

You create a mutable bag object using either the [CFBagCreateMutable(\_:\_:\_:)](cfbagcreatemutable%28______%29.md) or [CFBagCreateMutableCopy(\_:\_:\_:)](cfbagcreatemutablecopy%28______%29.md) function.

CFMutableBag provides several functions for adding and removing values from a bag. The [CFBagAddValue(\_:\_:)](cfbagaddvalue%28____%29.md) function adds a value to a bag and [CFBagRemoveValue(\_:\_:)](cfbagremovevalue%28____%29.md) removes values from a bag.

## Topics

### Creating a Mutable Bag

- [CFBagCreateMutable(\_:\_:\_:)](cfbagcreatemutable%28______%29.md): Creates a new empty mutable bag.
- [CFBagCreateMutableCopy(\_:\_:\_:)](cfbagcreatemutablecopy%28______%29.md): Creates a new mutable bag with the values from another bag.

### Modifying a Mutable Bag

- [CFBagAddValue(\_:\_:)](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues(\_:)](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue(\_:\_:)](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagReplaceValue(\_:\_:)](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.
- [CFBagSetValue(\_:\_:)](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.

## Relationships

### Inherits From

- [CFBag](cfbag.md)

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

# CFMutableBagRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFBag * CFMutableBagRef;
```

<a id="Overview"></a>

## Overview

CFMutableBag manages dynamic bags. The basic interface for managing bags is provided by [CFBagRef](cfbag.md). CFMutableBag adds functions to modify the contents of a bag.

You create a mutable bag object using either the [CFBagCreateMutable](cfbagcreatemutable%28______%29.md) or [CFBagCreateMutableCopy](cfbagcreatemutablecopy%28______%29.md) function.

CFMutableBag provides several functions for adding and removing values from a bag. The [CFBagAddValue](cfbagaddvalue%28____%29.md) function adds a value to a bag and [CFBagRemoveValue](cfbagremovevalue%28____%29.md) removes values from a bag.

## Topics

### Creating a Mutable Bag

- [CFBagCreateMutable](cfbagcreatemutable%28______%29.md): Creates a new empty mutable bag.
- [CFBagCreateMutableCopy](cfbagcreatemutablecopy%28______%29.md): Creates a new mutable bag with the values from another bag.

### Modifying a Mutable Bag

- [CFBagAddValue](cfbagaddvalue%28____%29.md): Adds a value to a mutable bag.
- [CFBagRemoveAllValues](cfbagremoveallvalues%28__%29.md): Removes all values from a mutable bag.
- [CFBagRemoveValue](cfbagremovevalue%28____%29.md): Removes a value from a mutable bag.
- [CFBagReplaceValue](cfbagreplacevalue%28____%29.md): Replaces a value in a mutable bag.
- [CFBagSetValue](cfbagsetvalue%28____%29.md): Sets a value in a mutable bag.

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
