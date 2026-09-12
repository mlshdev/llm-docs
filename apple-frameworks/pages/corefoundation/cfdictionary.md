> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionary](https://developer.apple.com/documentation/corefoundation/cfdictionary)

# CFDictionary (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFDictionary
```

<a id="Overview"></a>

## Overview

CFDictionary and its derived mutable type, [CFMutableDictionary](cfmutabledictionary.md), manage associations of key-value pairs. CFDictionary creates static dictionaries where you set the key-value pairs when first creating a dictionary and cannot modify them afterward; CFMutableDictionary creates dynamic dictionaries where you can add or delete key-value pairs at any time, and the dictionary automatically allocates memory as needed.

A key-value pair within a dictionary is called an entry. Each entry consists of one object that represents the key and a second object that is that key’s value. Within a dictionary, the keys are unique. That is, no two keys in a single dictionary are equal (as determined by the equal callback). Internally, a dictionary uses a hash table to organize its storage and to provide rapid access to a value given the corresponding key.

Keys for a CFDictionary may be of any C type, however note that if you want to convert a CFPropertyList to XML, any dictionary’s keys must be CFString objects.

You create static dictionaries using either the [CFDictionaryCreate(\_:\_:\_:\_:\_:\_:)](cfdictionarycreate%28____________%29.md) or [CFDictionaryCreateCopy(\_:\_:)](cfdictionarycreatecopy%28____%29.md) function. Key-value pairs are passed as parameters to [CFDictionaryCreate(\_:\_:\_:\_:\_:\_:)](cfdictionarycreate%28____________%29.md). When adding key-value pairs to a dictionary, the keys and values are not copied—they are retained so they are not invalidated before the dictionary is deallocated.

CFDictionary provides functions for querying the values of a dictionary. The function [CFDictionaryGetCount(\_:)](cfdictionarygetcount%28__%29.md) returns the number of key-value pairs in a dictionary; the [CFDictionaryContainsValue(\_:\_:)](cfdictionarycontainsvalue%28____%29.md) function checks if a value is in a dictionary; and [CFDictionaryGetKeysAndValues(\_:\_:\_:)](cfdictionarygetkeysandvalues%28______%29.md) returns a C array containing all the values and a C array containing all the keys in a dictionary.

The [CFDictionaryApplyFunction(\_:\_:\_:)](cfdictionaryapplyfunction%28______%29.md) function lets you apply a function to all key-value pairs in a dictionary.

CFDictionary is “toll-free bridged” with its Cocoa Foundation counterpart, [NSDictionary](../foundation/nsdictionary.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSDictionary *` parameter, you can pass in a `CFDictionaryRef`, and in a function where you see a `CFDictionaryRef` parameter, you can pass in an NSDictionary instance. This also applies to concrete subclasses of NSDictionary. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a dictionary

- [CFDictionaryCreate(\_:\_:\_:\_:\_:\_:)](cfdictionarycreate%28____________%29.md): Creates an immutable dictionary containing the specified key-value pairs.
- [CFDictionaryCreateCopy(\_:\_:)](cfdictionarycreatecopy%28____%29.md): Creates and returns a new immutable dictionary with the key-value pairs of another dictionary.

### Examining a dictionary

- [CFDictionaryContainsKey(\_:\_:)](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue(\_:\_:)](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount(\_:)](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey(\_:\_:)](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue(\_:\_:)](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues(\_:\_:\_:)](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue(\_:\_:)](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent(\_:\_:\_:)](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

### Applying a function to a dictionary

- [CFDictionaryApplyFunction(\_:\_:\_:)](cfdictionaryapplyfunction%28______%29.md): Calls a function once for each key-value pair in a dictionary.

### Getting the CFDictionary type ID

- [CFDictionaryGetTypeID()](cfdictionarygettypeid%28%29.md): Returns the type identifier for the CFDictionary opaque type.

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.

### Data Types

- [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the keys in a dictionary.
- [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the values in a dictionary.

### Constants

- [Predefined Callback Structures](cfdictionary-predefined-callback-structures.md): CFDictionary provides some predefined callbacks for your convenience.

## Relationships

### Inherited By

- [CFMutableDictionary](cfmutabledictionary.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
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
- [CFError](cferror.md)
- [CFFileDescriptor](cffiledescriptor.md)

# CFDictionaryRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFDictionary * CFDictionaryRef;
```

<a id="Overview"></a>

## Overview

CFDictionary and its derived mutable type, [CFMutableDictionaryRef](cfmutabledictionary.md), manage associations of key-value pairs. CFDictionary creates static dictionaries where you set the key-value pairs when first creating a dictionary and cannot modify them afterward; CFMutableDictionary creates dynamic dictionaries where you can add or delete key-value pairs at any time, and the dictionary automatically allocates memory as needed.

A key-value pair within a dictionary is called an entry. Each entry consists of one object that represents the key and a second object that is that key’s value. Within a dictionary, the keys are unique. That is, no two keys in a single dictionary are equal (as determined by the equal callback). Internally, a dictionary uses a hash table to organize its storage and to provide rapid access to a value given the corresponding key.

Keys for a CFDictionary may be of any C type, however note that if you want to convert a CFPropertyList to XML, any dictionary’s keys must be CFString objects.

You create static dictionaries using either the [CFDictionaryCreate](cfdictionarycreate%28____________%29.md) or [CFDictionaryCreateCopy](cfdictionarycreatecopy%28____%29.md) function. Key-value pairs are passed as parameters to [CFDictionaryCreate](cfdictionarycreate%28____________%29.md). When adding key-value pairs to a dictionary, the keys and values are not copied—they are retained so they are not invalidated before the dictionary is deallocated.

CFDictionary provides functions for querying the values of a dictionary. The function [CFDictionaryGetCount](cfdictionarygetcount%28__%29.md) returns the number of key-value pairs in a dictionary; the [CFDictionaryContainsValue](cfdictionarycontainsvalue%28____%29.md) function checks if a value is in a dictionary; and [CFDictionaryGetKeysAndValues](cfdictionarygetkeysandvalues%28______%29.md) returns a C array containing all the values and a C array containing all the keys in a dictionary.

The [CFDictionaryApplyFunction](cfdictionaryapplyfunction%28______%29.md) function lets you apply a function to all key-value pairs in a dictionary.

CFDictionary is “toll-free bridged” with its Cocoa Foundation counterpart, [NSDictionary](../foundation/nsdictionary.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSDictionary *` parameter, you can pass in a `CFDictionaryRef`, and in a function where you see a `CFDictionaryRef` parameter, you can pass in an NSDictionary instance. This also applies to concrete subclasses of NSDictionary. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a dictionary

- [CFDictionaryCreate](cfdictionarycreate%28____________%29.md): Creates an immutable dictionary containing the specified key-value pairs.
- [CFDictionaryCreateCopy](cfdictionarycreatecopy%28____%29.md): Creates and returns a new immutable dictionary with the key-value pairs of another dictionary.

### Examining a dictionary

- [CFDictionaryContainsKey](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

### Applying a function to a dictionary

- [CFDictionaryApplyFunction](cfdictionaryapplyfunction%28______%29.md): Calls a function once for each key-value pair in a dictionary.

### Getting the CFDictionary type ID

- [CFDictionaryGetTypeID](cfdictionarygettypeid%28%29.md): Returns the type identifier for the CFDictionary opaque type.

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.

### Data Types

- [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the keys in a dictionary.
- [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md): This structure contains the callbacks used to retain, release, describe, and compare the values in a dictionary.

### Constants

- [Predefined Callback Structures](cfdictionary-predefined-callback-structures.md): CFDictionary provides some predefined callbacks for your convenience.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
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
- [CFErrorRef](cferror.md)
- [CFFileDescriptorRef](cffiledescriptor.md)
