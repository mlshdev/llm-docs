> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetcreatemutable(_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetcreatemutable(_:))

# CFCharacterSetCreateMutable(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new empty mutable character set.

## Declaration

```swift
func CFCharacterSetCreateMutable(_ alloc: CFAllocator!) -> CFMutableCharacterSet!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.

<a id="return-value"></a>

## Return Value

A new empty mutable character set. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Character Set

- [CFCharacterSetCreateMutableCopy(\_:\_:)](cfcharactersetcreatemutablecopy%28____%29.md): Creates a new mutable character set with the values from another character set.

# CFCharacterSetCreateMutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new empty mutable character set.

## Declaration

```objectivec
extern CFMutableCharacterSetRefCFCharacterSetCreateMutable(CFAllocatorRef alloc);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.

<a id="return-value"></a>

## Return Value

A new empty mutable character set. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Character Set

- [CFCharacterSetCreateMutableCopy](cfcharactersetcreatemutablecopy%28____%29.md): Creates a new mutable character set with the values from another character set.
