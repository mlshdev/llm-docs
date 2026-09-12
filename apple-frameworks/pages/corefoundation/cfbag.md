> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbag](https://developer.apple.com/documentation/corefoundation/cfbag)

# CFBag (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFBag
```

<a id="Overview"></a>

## Overview

CFBag and its derived mutable type, [CFMutableBag](cfmutablebag.md), manage non-sequential collections of values called bags in which there can be duplicate values. CFBag creates static bags and CFMutableBag creates dynamic bags.

Use bags or sets as an alternative to arrays when the order of elements isn’t important and performance in testing whether a value is contained in the collection is a consideration—while arrays are ordered, testing for membership is slower than with bags or sets. Use bags over sets if you want to allow duplicate values in your collections.

You create a static bag object using either the [CFBagCreate(\_:\_:\_:\_:)](cfbagcreate%28________%29.md) or [CFBagCreateCopy(\_:\_:)](cfbagcreatecopy%28____%29.md) function. These functions return a bag containing the values you pass in as arguments. (Note that bags can’t contain `NULL` pointers; in most cases, though, you can use the kCFNull constant instead.) Values are not copied but retained using the retain callback provided when the bag was created. Similarly, when a value is removed from a bag, it is released using the release callback.

CFBag provides functions for querying the values of a bag. The [CFBagGetCount(\_:)](cfbaggetcount%28__%29.md) returns the number of values in a bag, the [CFBagContainsValue(\_:\_:)](cfbagcontainsvalue%28____%29.md) function checks if a value is in a bag, and [CFBagGetValues(\_:\_:)](cfbaggetvalues%28____%29.md) returns a C array containing all the values in a bag.

The [CFBagApplyFunction(\_:\_:\_:)](cfbagapplyfunction%28______%29.md) function lets you apply a function to all values in a bag.

## Topics

### Creating a Bag

- [CFBagCreate(\_:\_:\_:\_:)](cfbagcreate%28________%29.md): Creates an immutable bag containing specified values.
- [CFBagCreateCopy(\_:\_:)](cfbagcreatecopy%28____%29.md): Creates an immutable bag with the values of another bag.

### Examining a Bag

- [CFBagContainsValue(\_:\_:)](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount(\_:)](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue(\_:\_:)](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue(\_:\_:)](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent(\_:\_:\_:)](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues(\_:\_:)](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.

### Applying a Function to the Contents of a Bag

- [CFBagApplyFunction(\_:\_:\_:)](cfbagapplyfunction%28______%29.md): Calls a function once for each value in a bag.

### Getting the CFBag Type ID

- [CFBagGetTypeID()](cfbaggettypeid%28%29.md): Returns the type identifier for the CFBag opaque type.

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.

### Data Types

- [CFBagCallBacks](cfbagcallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the values of a CFBag object.

### Constants

- [Predefined Callback Structures](cfbag-predefined-callback-structures.md): CFBag provides some predefined callbacks for your convenience.

## Relationships

### Inherited By

- [CFMutableBag](cfmutablebag.md)

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
- [CFFileDescriptor](cffiledescriptor.md)

# CFBagRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFBag * CFBagRef;
```

<a id="Overview"></a>

## Overview

CFBag and its derived mutable type, [CFMutableBagRef](cfmutablebag.md), manage non-sequential collections of values called bags in which there can be duplicate values. CFBag creates static bags and CFMutableBag creates dynamic bags.

Use bags or sets as an alternative to arrays when the order of elements isn’t important and performance in testing whether a value is contained in the collection is a consideration—while arrays are ordered, testing for membership is slower than with bags or sets. Use bags over sets if you want to allow duplicate values in your collections.

You create a static bag object using either the [CFBagCreate](cfbagcreate%28________%29.md) or [CFBagCreateCopy](cfbagcreatecopy%28____%29.md) function. These functions return a bag containing the values you pass in as arguments. (Note that bags can’t contain `NULL` pointers; in most cases, though, you can use the kCFNull constant instead.) Values are not copied but retained using the retain callback provided when the bag was created. Similarly, when a value is removed from a bag, it is released using the release callback.

CFBag provides functions for querying the values of a bag. The [CFBagGetCount](cfbaggetcount%28__%29.md) returns the number of values in a bag, the [CFBagContainsValue](cfbagcontainsvalue%28____%29.md) function checks if a value is in a bag, and [CFBagGetValues](cfbaggetvalues%28____%29.md) returns a C array containing all the values in a bag.

The [CFBagApplyFunction](cfbagapplyfunction%28______%29.md) function lets you apply a function to all values in a bag.

## Topics

### Creating a Bag

- [CFBagCreate](cfbagcreate%28________%29.md): Creates an immutable bag containing specified values.
- [CFBagCreateCopy](cfbagcreatecopy%28____%29.md): Creates an immutable bag with the values of another bag.

### Examining a Bag

- [CFBagContainsValue](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.

### Applying a Function to the Contents of a Bag

- [CFBagApplyFunction](cfbagapplyfunction%28______%29.md): Calls a function once for each value in a bag.

### Getting the CFBag Type ID

- [CFBagGetTypeID](cfbaggettypeid%28%29.md): Returns the type identifier for the CFBag opaque type.

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.

### Data Types

- [CFBagCallBacks](cfbagcallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the values of a CFBag object.

### Constants

- [Predefined Callback Structures](cfbag-predefined-callback-structures.md): CFBag provides some predefined callbacks for your convenience.

## See Also

### Related Documentation

- [Collections Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFCollections/CFCollections.html#//apple_ref/doc/uid/10000124i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
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
- [CFFileDescriptorRef](cffiledescriptor.md)
