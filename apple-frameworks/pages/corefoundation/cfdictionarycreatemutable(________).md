> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarycreatemutable(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarycreatemutable(_:_:_:_:))

# CFDictionaryCreateMutable(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable dictionary.

## Declaration

```swift
func CFDictionaryCreateMutable(_ allocator: CFAllocator!, _ capacity: CFIndex, _ keyCallBacks: UnsafePointer<CFDictionaryKeyCallBacks>!, _ valueCallBacks: UnsafePointer<CFDictionaryValueCallBacks>!) -> CFMutableDictionary!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new dictionary and its storage for key-value pairs. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of key-value pairs that can be contained by the new dictionary. The dictionary starts empty and can grow to this number of key-value pairs (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.
- `keyCallBacks`: A pointer to a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure initialized with the callbacks to use to retain, release, describe, and compare keys in the dictionary. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple collection creations.

  This value may be `NULL`, which is treated as a valid structure of version `0` with all fields `NULL`. Otherwise, if any of the fields are not valid pointers to functions of the correct type, or this value is not a valid pointer to a `CFDictionaryKeyCallBacks` structure, the behavior is undefined. If any of the keys put into the collection is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

  If the dictionary will contain only CFType objects, then pass a pointer to [kCFTypeDictionaryKeyCallBacks](kcftypedictionarykeycallbacks.md) as this parameter to use the default callback functions.
- `valueCallBacks`: A pointer to a [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure initialized with the callbacks to use to retain, release, describe, and compare values in the dictionary. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple collection creations.

  This value may be `NULL`, which is treated as a valid structure of version `0` with all fields `NULL`. Otherwise, if any of the fields are not valid pointers to functions of the correct type, or this value is not a valid pointer to a `CFDictionaryValueCallBacks` structure, the behavior is undefined. If any value put into the collection is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

  If the dictionary will contain CFType objects only, then pass a pointer to [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md) as this parameter to use the default callback functions.

<a id="return-value"></a>

## Return Value

A new dictionary, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Dictionary

- [CFDictionaryCreateMutableCopy(\_:\_:\_:)](cfdictionarycreatemutablecopy%28______%29.md): Creates a new mutable dictionary with the key-value pairs from another dictionary.

# CFDictionaryCreateMutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable dictionary.

## Declaration

```objectivec
extern CFMutableDictionaryRefCFDictionaryCreateMutable(CFAllocatorRef allocator, CFIndex capacity, const CFDictionaryKeyCallBacks *keyCallBacks, const CFDictionaryValueCallBacks *valueCallBacks);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new dictionary and its storage for key-value pairs. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of key-value pairs that can be contained by the new dictionary. The dictionary starts empty and can grow to this number of key-value pairs (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.
- `keyCallBacks`: A pointer to a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure initialized with the callbacks to use to retain, release, describe, and compare keys in the dictionary. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple collection creations.

  This value may be `NULL`, which is treated as a valid structure of version `0` with all fields `NULL`. Otherwise, if any of the fields are not valid pointers to functions of the correct type, or this value is not a valid pointer to a `CFDictionaryKeyCallBacks` structure, the behavior is undefined. If any of the keys put into the collection is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

  If the dictionary will contain only CFType objects, then pass a pointer to [kCFTypeDictionaryKeyCallBacks](kcftypedictionarykeycallbacks.md) as this parameter to use the default callback functions.
- `valueCallBacks`: A pointer to a [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure initialized with the callbacks to use to retain, release, describe, and compare values in the dictionary. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple collection creations.

  This value may be `NULL`, which is treated as a valid structure of version `0` with all fields `NULL`. Otherwise, if any of the fields are not valid pointers to functions of the correct type, or this value is not a valid pointer to a `CFDictionaryValueCallBacks` structure, the behavior is undefined. If any value put into the collection is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

  If the dictionary will contain CFType objects only, then pass a pointer to [kCFTypeDictionaryValueCallBacks](kcftypedictionaryvaluecallbacks.md) as this parameter to use the default callback functions.

<a id="return-value"></a>

## Return Value

A new dictionary, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Dictionary

- [CFDictionaryCreateMutableCopy](cfdictionarycreatemutablecopy%28______%29.md): Creates a new mutable dictionary with the key-value pairs from another dictionary.
