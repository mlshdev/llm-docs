> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetcreatemutable(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetcreatemutable(_:_:_:))

# CFSetCreateMutable(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an empty CFMutableSet object.

## Declaration

```swift
func CFSetCreateMutable(_ allocator: CFAllocator!, _ capacity: CFIndex, _ callBacks: UnsafePointer<CFSetCallBacks>!) -> CFMutableSet!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new set and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new set. The set starts empty and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.
- `callBacks`: A pointer to a [CFSetCallBacks](cfsetcallbacks.md) structure initialized with the callbacks to use to retain, release, describe, and compare values in the set. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple collection creations. This parameter may be `NULL`, which is treated as if a valid structure of version `0` with all fields `NULL` had been passed in.

  If any of the fields are not valid pointers to functions of the correct type, or this parameter is not a valid pointer to a `CFSetCallBacks` structure, the behavior is undefined. If any value put into the collection is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

  If the collection contains CFType objects only, then pass [kCFTypeSetCallBacks](kcftypesetcallbacks.md) as this parameter to use the default callback functions.

<a id="return-value"></a>

## Return Value

A new mutable set, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue(\_:\_:)](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutableCopy(\_:\_:\_:)](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues(\_:)](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue(\_:\_:)](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue(\_:\_:)](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue(\_:\_:)](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.

# CFSetCreateMutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an empty CFMutableSet object.

## Declaration

```objectivec
extern CFMutableSetRefCFSetCreateMutable(CFAllocatorRef allocator, CFIndex capacity, const CFSetCallBacks *callBacks);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new set and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new set. The set starts empty and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.
- `callBacks`: A pointer to a [CFSetCallBacks](cfsetcallbacks.md) structure initialized with the callbacks to use to retain, release, describe, and compare values in the set. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple collection creations. This parameter may be `NULL`, which is treated as if a valid structure of version `0` with all fields `NULL` had been passed in.

  If any of the fields are not valid pointers to functions of the correct type, or this parameter is not a valid pointer to a `CFSetCallBacks` structure, the behavior is undefined. If any value put into the collection is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

  If the collection contains CFType objects only, then pass [kCFTypeSetCallBacks](kcftypesetcallbacks.md) as this parameter to use the default callback functions.

<a id="return-value"></a>

## Return Value

A new mutable set, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutableCopy](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.
