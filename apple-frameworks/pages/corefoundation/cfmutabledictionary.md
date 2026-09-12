> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutabledictionary](https://developer.apple.com/documentation/corefoundation/cfmutabledictionary)

# CFMutableDictionary (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableDictionary
```

<a id="Overview"></a>

## Overview

CFMutableDictionary manages dynamic dictionaries. The basic interface for managing dictionaries is provided by [CFDictionary](cfdictionary.md). CFMutableDictionary adds functions to modify the contents of a dictionary.

You create a mutable dictionary object using either the [CFDictionaryCreateMutable(\_:\_:\_:\_:)](cfdictionarycreatemutable%28________%29.md) or [CFDictionaryCreateMutableCopy(\_:\_:\_:)](cfdictionarycreatemutablecopy%28______%29.md) function. You can add key-value pairs using the [CFDictionaryAddValue(\_:\_:\_:)](cfdictionaryaddvalue%28______%29.md) and [CFDictionarySetValue(\_:\_:\_:)](cfdictionarysetvalue%28______%29.md) functions. When adding key-value pairs to a dictionary, the keys and values are not copied—they are retained so they are not invalidated before the dictionary is deallocated. You can remove key-value pairs using the [CFDictionaryRemoveValue(\_:\_:)](cfdictionaryremovevalue%28____%29.md) function. When removing key-value pairs from a dictionary, the keys and values are released.

CFMutableDictionary is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableDictionary](../foundation/nsmutabledictionary.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. This means that in a method where you see an `NSMutableDictionary *` parameter, you can pass in a `CFMutableDictionaryRef`, and in a function where you see a `CFMutableDictionaryRef` parameter, you can pass in an NSMutableDictionary instance. This also applies to concrete subclasses of NSMutableDictionary. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Mutable Dictionary

- [CFDictionaryCreateMutable(\_:\_:\_:\_:)](cfdictionarycreatemutable%28________%29.md): Creates a new mutable dictionary.
- [CFDictionaryCreateMutableCopy(\_:\_:\_:)](cfdictionarycreatemutablecopy%28______%29.md): Creates a new mutable dictionary with the key-value pairs from another dictionary.

### Modifying a Dictionary

- [CFDictionaryAddValue(\_:\_:\_:)](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues(\_:)](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue(\_:\_:)](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue(\_:\_:\_:)](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue(\_:\_:\_:)](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.

## Relationships

### Inherits From

- [CFDictionary](cfdictionary.md)

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
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFMutableDictionaryRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFDictionary * CFMutableDictionaryRef;
```

<a id="Overview"></a>

## Overview

CFMutableDictionary manages dynamic dictionaries. The basic interface for managing dictionaries is provided by [CFDictionaryRef](cfdictionary.md). CFMutableDictionary adds functions to modify the contents of a dictionary.

You create a mutable dictionary object using either the [CFDictionaryCreateMutable](cfdictionarycreatemutable%28________%29.md) or [CFDictionaryCreateMutableCopy](cfdictionarycreatemutablecopy%28______%29.md) function. You can add key-value pairs using the [CFDictionaryAddValue](cfdictionaryaddvalue%28______%29.md) and [CFDictionarySetValue](cfdictionarysetvalue%28______%29.md) functions. When adding key-value pairs to a dictionary, the keys and values are not copied—they are retained so they are not invalidated before the dictionary is deallocated. You can remove key-value pairs using the [CFDictionaryRemoveValue](cfdictionaryremovevalue%28____%29.md) function. When removing key-value pairs from a dictionary, the keys and values are released.

CFMutableDictionary is “toll-free bridged” with its Cocoa Foundation counterpart, [NSMutableDictionary](../foundation/nsmutabledictionary.md). What this means is that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. This means that in a method where you see an `NSMutableDictionary *` parameter, you can pass in a `CFMutableDictionaryRef`, and in a function where you see a `CFMutableDictionaryRef` parameter, you can pass in an NSMutableDictionary instance. This also applies to concrete subclasses of NSMutableDictionary. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Mutable Dictionary

- [CFDictionaryCreateMutable](cfdictionarycreatemutable%28________%29.md): Creates a new mutable dictionary.
- [CFDictionaryCreateMutableCopy](cfdictionarycreatemutablecopy%28______%29.md): Creates a new mutable dictionary with the key-value pairs from another dictionary.

### Modifying a Dictionary

- [CFDictionaryAddValue](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.

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
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
