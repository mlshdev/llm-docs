> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetcreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetcreatecopy(_:_:))

# CFSetCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable set containing the values of an existing set.

## Declaration

```swift
func CFSetCreateCopy(_ allocator: CFAllocator!, _ theSet: CFSet!) -> CFSet!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new set and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theSet`: The set to copy.

<a id="return-value"></a>

## Return Value

A new set that contains the same values as `theSet`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The pointer values from `theSet` are copied into the new set, and the values are retained by the new set. The count of the new set is the same as the count of `theSet`. The new set uses the same callbacks as `theSet`.

## See Also

### Creating Sets

- [CFSetCreate(\_:\_:\_:\_:)](cfsetcreate%28________%29.md): Creates an immutable CFSet object containing supplied values.

# CFSetCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable set containing the values of an existing set.

## Declaration

```objectivec
extern CFSetRefCFSetCreateCopy(CFAllocatorRef allocator, CFSetRef theSet);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new set and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theSet`: The set to copy.

<a id="return-value"></a>

## Return Value

A new set that contains the same values as `theSet`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The pointer values from `theSet` are copied into the new set, and the values are retained by the new set. The count of the new set is the same as the count of `theSet`. The new set uses the same callbacks as `theSet`.

## See Also

### Creating Sets

- [CFSetCreate](cfsetcreate%28________%29.md): Creates an immutable CFSet object containing supplied values.
