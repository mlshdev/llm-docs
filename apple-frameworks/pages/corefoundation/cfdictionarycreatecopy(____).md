> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarycreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarycreatecopy(_:_:))

# CFDictionaryCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates and returns a new immutable dictionary with the key-value pairs of another dictionary.

## Declaration

```swift
func CFDictionaryCreateCopy(_ allocator: CFAllocator!, _ theDict: CFDictionary!) -> CFDictionary!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new dictionary. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theDict`: The dictionary to copy. The keys and values from the dictionary are copied as pointers into the new dictionary. However, the keys and values are also retained by the new dictionary. The count of the new dictionary is the same as the count of `theDict`. The new dictionary uses the same callbacks as `theDict`.

<a id="return-value"></a>

## Return Value

A new dictionary that contains the same key-value pairs as `theDict`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a dictionary

- [CFDictionaryCreate(\_:\_:\_:\_:\_:\_:)](cfdictionarycreate%28____________%29.md): Creates an immutable dictionary containing the specified key-value pairs.

# CFDictionaryCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates and returns a new immutable dictionary with the key-value pairs of another dictionary.

## Declaration

```objectivec
extern CFDictionaryRefCFDictionaryCreateCopy(CFAllocatorRef allocator, CFDictionaryRef theDict);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new dictionary. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theDict`: The dictionary to copy. The keys and values from the dictionary are copied as pointers into the new dictionary. However, the keys and values are also retained by the new dictionary. The count of the new dictionary is the same as the count of `theDict`. The new dictionary uses the same callbacks as `theDict`.

<a id="return-value"></a>

## Return Value

A new dictionary that contains the same key-value pairs as `theDict`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a dictionary

- [CFDictionaryCreate](cfdictionarycreate%28____________%29.md): Creates an immutable dictionary containing the specified key-value pairs.
