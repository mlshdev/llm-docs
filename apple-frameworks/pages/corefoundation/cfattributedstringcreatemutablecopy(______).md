> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringcreatemutablecopy(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringcreatemutablecopy(_:_:_:))

# CFAttributedStringCreateMutableCopy(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a mutable copy of an attributed string.

## Declaration

```swift
func CFAttributedStringCreateMutableCopy(_ alloc: CFAllocator!, _ maxLength: CFIndex, _ aStr: CFAttributedString!) -> CFMutableAttributedString!
```

## Parameters

- `alloc`: The allocator to be used to allocate memory for the new attributed string. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `maxLength`: The limit on the length of the new attributed string. The string starts empty and can grow to this length (it can be shorter).

  Pass `0` to specify that the maximum length is not limited. If non-`0`, `maxLength` must be greater than or equal to the length of `aStr`.
- `aStr`: The attributed string to copy.

<a id="return-value"></a>

## Return Value

A mutable copy of `aStr`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFMutableAttributedString

- [CFAttributedStringCreateMutable(\_:\_:)](cfattributedstringcreatemutable%28____%29.md): Creates a mutable attributed string.

# CFAttributedStringCreateMutableCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a mutable copy of an attributed string.

## Declaration

```objectivec
extern CFMutableAttributedStringRefCFAttributedStringCreateMutableCopy(CFAllocatorRef alloc, CFIndex maxLength, CFAttributedStringRef aStr);
```

## Parameters

- `alloc`: The allocator to be used to allocate memory for the new attributed string. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `maxLength`: The limit on the length of the new attributed string. The string starts empty and can grow to this length (it can be shorter).

  Pass `0` to specify that the maximum length is not limited. If non-`0`, `maxLength` must be greater than or equal to the length of `aStr`.
- `aStr`: The attributed string to copy.

<a id="return-value"></a>

## Return Value

A mutable copy of `aStr`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFMutableAttributedString

- [CFAttributedStringCreateMutable](cfattributedstringcreatemutable%28____%29.md): Creates a mutable attributed string.
