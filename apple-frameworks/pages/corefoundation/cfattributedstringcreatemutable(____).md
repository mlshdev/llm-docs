> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringcreatemutable(_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringcreatemutable(_:_:))

# CFAttributedStringCreateMutable(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a mutable attributed string.

## Declaration

```swift
func CFAttributedStringCreateMutable(_ alloc: CFAllocator!, _ maxLength: CFIndex) -> CFMutableAttributedString!
```

## Parameters

- `alloc`: An allocator to be used to allocate memory for the new attributed string. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `maxLength`: The limit on the length of the new attributed string. The string starts empty and can grow to this length (it can be shorter).

  Pass `0` to specify that the maximum length is not limited. The value must not be negative.

<a id="return-value"></a>

## Return Value

A new mutable attributed string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFMutableAttributedString

- [CFAttributedStringCreateMutableCopy(\_:\_:\_:)](cfattributedstringcreatemutablecopy%28______%29.md): Creates a mutable copy of an attributed string.

# CFAttributedStringCreateMutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a mutable attributed string.

## Declaration

```objectivec
extern CFMutableAttributedStringRefCFAttributedStringCreateMutable(CFAllocatorRef alloc, CFIndex maxLength);
```

## Parameters

- `alloc`: An allocator to be used to allocate memory for the new attributed string. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `maxLength`: The limit on the length of the new attributed string. The string starts empty and can grow to this length (it can be shorter).

  Pass `0` to specify that the maximum length is not limited. The value must not be negative.

<a id="return-value"></a>

## Return Value

A new mutable attributed string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFMutableAttributedString

- [CFAttributedStringCreateMutableCopy](cfattributedstringcreatemutablecopy%28______%29.md): Creates a mutable copy of an attributed string.
