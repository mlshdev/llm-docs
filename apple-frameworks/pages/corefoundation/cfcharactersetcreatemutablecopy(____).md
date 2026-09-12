> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetcreatemutablecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetcreatemutablecopy(_:_:))

# CFCharacterSetCreateMutableCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable character set with the values from another character set.

## Declaration

```swift
func CFCharacterSetCreateMutableCopy(_ alloc: CFAllocator!, _ theSet: CFCharacterSet!) -> CFMutableCharacterSet!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The character set to copy.

<a id="return-value"></a>

## Return Value

A new mutable character set containing the same characters as `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Character Set

- [CFCharacterSetCreateMutable(\_:)](cfcharactersetcreatemutable%28__%29.md): Creates a new empty mutable character set.

# CFCharacterSetCreateMutableCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable character set with the values from another character set.

## Declaration

```objectivec
extern CFMutableCharacterSetRefCFCharacterSetCreateMutableCopy(CFAllocatorRef alloc, CFCharacterSetRef theSet);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The character set to copy.

<a id="return-value"></a>

## Return Value

A new mutable character set containing the same characters as `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Character Set

- [CFCharacterSetCreateMutable](cfcharactersetcreatemutable%28__%29.md): Creates a new empty mutable character set.
