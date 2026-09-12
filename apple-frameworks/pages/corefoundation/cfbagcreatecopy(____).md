> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagcreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagcreatecopy(_:_:))

# CFBagCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable bag with the values of another bag.

## Declaration

```swift
func CFBagCreateCopy(_ allocator: CFAllocator!, _ theBag: CFBag!) -> CFBag!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bag and its storage for values. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theBag`: The bag to copy. The pointer values from `theBag` are copied into the new bag. However, the values are also retained by the new bag. The count of the new bag is the same as the count of `theBag`. The new bag uses the same callbacks as `theBag`.

<a id="return-value"></a>

## Return Value

A new bag that contains the same values as `theBag`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Bag

- [CFBagCreate(\_:\_:\_:\_:)](cfbagcreate%28________%29.md): Creates an immutable bag containing specified values.

# CFBagCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable bag with the values of another bag.

## Declaration

```objectivec
extern CFBagRefCFBagCreateCopy(CFAllocatorRef allocator, CFBagRef theBag);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bag and its storage for values. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theBag`: The bag to copy. The pointer values from `theBag` are copied into the new bag. However, the values are also retained by the new bag. The count of the new bag is the same as the count of `theBag`. The new bag uses the same callbacks as `theBag`.

<a id="return-value"></a>

## Return Value

A new bag that contains the same values as `theBag`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Bag

- [CFBagCreate](cfbagcreate%28________%29.md): Creates an immutable bag containing specified values.
