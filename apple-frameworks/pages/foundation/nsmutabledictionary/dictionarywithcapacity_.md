> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/dictionarywithcapacity:](https://developer.apple.com/documentation/foundation/nsmutabledictionary/dictionarywithcapacity:)

# dictionaryWithCapacity:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a mutable dictionary, initially giving it enough allocated memory to hold a given number of entries.

## Declaration

```objectivec
+ (instancetype) dictionaryWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the new dictionary.

<a id="return-value"></a>

## Return Value

A new mutable dictionary with enough allocated memory to hold `numItems` entries.

<a id="Discussion"></a>

## Discussion

Mutable dictionaries allocate additional memory as needed, so `numItems` simply establishes the object’s initial capacity.

## See Also

### Related Documentation

- [dictionary](../nsdictionary/dictionary.md): Creates an empty dictionary.
- [dictionaryWithObjectsAndKeys:](../nsdictionary/dictionarywithobjectsandkeys_.md): Creates a dictionary containing entries constructed from the specified set of values and keys.
- [dictionaryWithObjects:forKeys:](../nsdictionary/dictionarywithobjects_forkeys_.md): Creates a dictionary containing entries constructed from the contents of an array of keys and an array of values.
- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)
- [dictionaryWithObject:forKey:](../nsdictionary/init%28object_forkey_%29.md): Creates a dictionary containing a given key and value.
- [dictionaryWithContentsOfFile:](../nsdictionary/dictionarywithcontentsoffile_.md): Deprecated. Creates a dictionary using the keys and values found in a file specified by a given path.
- [dictionaryWithObjects:forKeys:count:](../nsdictionary/dictionarywithobjects_forkeys_count_.md): Creates a dictionary containing a specified number of objects from a C array.

### Creating and Initializing a Mutable Dictionary

- [initWithCapacity:](init%28capacity_%29.md): Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.
- [init](init%28%29.md): Initializes a newly allocated mutable dictionary.
- [dictionaryWithSharedKeySet:](init%28sharedkeyset_%29.md): Creates a mutable dictionary which is optimized for dealing with a known set of keys.
