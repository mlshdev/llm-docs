> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfset](https://developer.apple.com/documentation/corefoundation/cfset)

# CFSet (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFSet
```

<a id="Overview"></a>

## Overview

CFSet and its derived mutable type, [CFMutableSet](cfmutableset.md), provide support for the mathematical concept of a set. A set, both in its mathematical sense and in the implementation of CFSet, is an unordered collection of distinct elements. CFSet creates static sets and CFMutableSet creates dynamic sets.

Use bags or sets as an alternative to arrays when the order of elements isn’t important and performance in testing whether a value is contained in the collection is a consideration—while arrays are ordered, testing for membership is slower than with bags or sets. Use bags over sets if you want to allow duplicate values in your collections.

You create a static set object using either the [CFSetCreate(\_:\_:\_:\_:)](cfsetcreate%28________%29.md) or [CFSetCreateCopy(\_:\_:)](cfsetcreatecopy%28____%29.md) function. These functions return a set containing the values you pass in as arguments. (Note that sets can’t contain `NULL` pointers; in most cases, though, you can use the [kCFNull](kcfnull.md) constant instead.) Values are not copied but retained using the retain callback provided when the set was created. Similarly, when a value is removed from a set, it is released using the release callback.

CFSet provides functions for querying the values of a set. The [CFSetGetCount(\_:)](cfsetgetcount%28__%29.md) returns the number of values in a set, the [CFSetContainsValue(\_:\_:)](cfsetcontainsvalue%28____%29.md) function checks if a value is in a set, and [CFSetGetValues(\_:\_:)](cfsetgetvalues%28____%29.md) returns a C array containing all the values in a set.

CFSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSSet](../foundation/nsset.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSSet *` parameter, you can pass in a `CFSetRef`, and in a function where you see a `CFSetRef` parameter, you can pass in an NSSet instance. This also applies to concrete subclasses of NSSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating Sets

- [CFSetCreate(\_:\_:\_:\_:)](cfsetcreate%28________%29.md): Creates an immutable CFSet object containing supplied values.
- [CFSetCreateCopy(\_:\_:)](cfsetcreatecopy%28____%29.md): Creates an immutable set containing the values of an existing set.

### Examining a Set

- [CFSetContainsValue(\_:\_:)](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount(\_:)](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue(\_:\_:)](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue(\_:\_:)](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent(\_:\_:\_:)](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues(\_:\_:)](cfsetgetvalues%28____%29.md): Obtains all values in a set.

### Applying a Function to Set Members

- [CFSetApplyFunction(\_:\_:\_:)](cfsetapplyfunction%28______%29.md): Calls a function once for each value in a set.

### Getting the CFSet Type ID

- [CFSetGetTypeID()](cfsetgettypeid%28%29.md): Returns the type identifier for the CFSet type.

### Callbacks

- [CFSetApplierFunction](cfsetapplierfunction.md): Prototype of a callback function that may be applied to every value in a set.
- [CFSetCopyDescriptionCallBack](cfsetcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetHashCallBack](cfsethashcallback.md): Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.

### Data Types

- [CFSetCallBacks](cfsetcallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the values of a CFSet object.

### Constants

- [Predefined Callback Structures](cfset-predefined-callback-structures.md): CFSet provides some predefined callbacks for your convenience.

## Relationships

### Inherited By

- [CFMutableSet](cfmutableset.md)

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

# CFSetRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFSet * CFSetRef;
```

<a id="Overview"></a>

## Overview

CFSet and its derived mutable type, [CFMutableSetRef](cfmutableset.md), provide support for the mathematical concept of a set. A set, both in its mathematical sense and in the implementation of CFSet, is an unordered collection of distinct elements. CFSet creates static sets and CFMutableSet creates dynamic sets.

Use bags or sets as an alternative to arrays when the order of elements isn’t important and performance in testing whether a value is contained in the collection is a consideration—while arrays are ordered, testing for membership is slower than with bags or sets. Use bags over sets if you want to allow duplicate values in your collections.

You create a static set object using either the [CFSetCreate](cfsetcreate%28________%29.md) or [CFSetCreateCopy](cfsetcreatecopy%28____%29.md) function. These functions return a set containing the values you pass in as arguments. (Note that sets can’t contain `NULL` pointers; in most cases, though, you can use the [kCFNull](kcfnull.md) constant instead.) Values are not copied but retained using the retain callback provided when the set was created. Similarly, when a value is removed from a set, it is released using the release callback.

CFSet provides functions for querying the values of a set. The [CFSetGetCount](cfsetgetcount%28__%29.md) returns the number of values in a set, the [CFSetContainsValue](cfsetcontainsvalue%28____%29.md) function checks if a value is in a set, and [CFSetGetValues](cfsetgetvalues%28____%29.md) returns a C array containing all the values in a set.

CFSet is “toll-free bridged” with its Cocoa Foundation counterpart, [NSSet](../foundation/nsset.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSSet *` parameter, you can pass in a `CFSetRef`, and in a function where you see a `CFSetRef` parameter, you can pass in an NSSet instance. This also applies to concrete subclasses of NSSet. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating Sets

- [CFSetCreate](cfsetcreate%28________%29.md): Creates an immutable CFSet object containing supplied values.
- [CFSetCreateCopy](cfsetcreatecopy%28____%29.md): Creates an immutable set containing the values of an existing set.

### Examining a Set

- [CFSetContainsValue](cfsetcontainsvalue%28____%29.md): Returns a Boolean that indicates whether a set contains a given value.
- [CFSetGetCount](cfsetgetcount%28__%29.md): Returns the number of values currently in a set.
- [CFSetGetCountOfValue](cfsetgetcountofvalue%28____%29.md): Returns the number of values in a set that match a given value.
- [CFSetGetValue](cfsetgetvalue%28____%29.md): Obtains a specified value from a set.
- [CFSetGetValueIfPresent](cfsetgetvalueifpresent%28______%29.md): Reports whether or not a value is in a set, and if it exists returns the value indirectly.
- [CFSetGetValues](cfsetgetvalues%28____%29.md): Obtains all values in a set.

### Applying a Function to Set Members

- [CFSetApplyFunction](cfsetapplyfunction%28______%29.md): Calls a function once for each value in a set.

### Getting the CFSet Type ID

- [CFSetGetTypeID](cfsetgettypeid%28%29.md): Returns the type identifier for the CFSet type.

### Callbacks

- [CFSetApplierFunction](cfsetapplierfunction.md): Prototype of a callback function that may be applied to every value in a set.
- [CFSetCopyDescriptionCallBack](cfsetcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetHashCallBack](cfsethashcallback.md): Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.

### Data Types

- [CFSetCallBacks](cfsetcallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the values of a CFSet object.

### Constants

- [Predefined Callback Structures](cfset-predefined-callback-structures.md): CFSet provides some predefined callbacks for your convenience.

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
