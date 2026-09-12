> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagcreatemutablecopy(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagcreatemutablecopy(_:_:_:))

# CFBagCreateMutableCopy(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable bag with the values from another bag.

## Declaration

```swift
func CFBagCreateMutableCopy(_ allocator: CFAllocator!, _ capacity: CFIndex, _ theBag: CFBag!) -> CFMutableBag!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bag and its storage for values. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new bag. The bag starts with the same count as `theBag`, and can grow to this number of values (and it can have less). If this value is `0`, the bag’s maximum capacity is not limited. This value must be greater than or equal to the count of `theBag`, and must not be negative.
- `theBag`: The bag to copy. The pointer values from `theBag` are copied into the new bag. However, the values are also retained by the new bag. The count of the new bag is the same as the count of `theBag`. The new bag uses the same callbacks as `theBag`.

<a id="return-value"></a>

## Return Value

A new mutable bag that contains the same values as `theBag`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Bag

- [CFBagCreateMutable(\_:\_:\_:)](cfbagcreatemutable%28______%29.md): Creates a new empty mutable bag.

# CFBagCreateMutableCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable bag with the values from another bag.

## Declaration

```objectivec
extern CFMutableBagRefCFBagCreateMutableCopy(CFAllocatorRef allocator, CFIndex capacity, CFBagRef theBag);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bag and its storage for values. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new bag. The bag starts with the same count as `theBag`, and can grow to this number of values (and it can have less). If this value is `0`, the bag’s maximum capacity is not limited. This value must be greater than or equal to the count of `theBag`, and must not be negative.
- `theBag`: The bag to copy. The pointer values from `theBag` are copied into the new bag. However, the values are also retained by the new bag. The count of the new bag is the same as the count of `theBag`. The new bag uses the same callbacks as `theBag`.

<a id="return-value"></a>

## Return Value

A new mutable bag that contains the same values as `theBag`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Bag

- [CFBagCreateMutable](cfbagcreatemutable%28______%29.md): Creates a new empty mutable bag.
