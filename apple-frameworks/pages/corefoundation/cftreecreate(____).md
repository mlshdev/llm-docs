> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftreecreate(_:_:)](https://developer.apple.com/documentation/corefoundation/cftreecreate(_:_:))

# CFTreeCreate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFTree object.

## Declaration

```swift
func CFTreeCreate(_ allocator: CFAllocator!, _ context: UnsafePointer<CFTreeContext>!) -> CFTree!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new tree. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `context`: The [CFTreeContext](cftreecontext.md) structure to be copied and used as the context of the new tree. The information pointer will be retained by the tree if a retain function is provided. If this value is not a valid C pointer to a [CFTreeContext](cftreecontext.md) structure-sized block of storage, the result is undefined. If the version number of the storage is not a valid [CFTreeContext](cftreecontext.md) version number, the result is undefined.

<a id="return-value"></a>

## Return Value

A new CFTree object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

# CFTreeCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFTree object.

## Declaration

```objectivec
extern CFTreeRefCFTreeCreate(CFAllocatorRef allocator, const CFTreeContext *context);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new tree. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `context`: The [CFTreeContext](cftreecontext.md) structure to be copied and used as the context of the new tree. The information pointer will be retained by the tree if a retain function is provided. If this value is not a valid C pointer to a [CFTreeContext](cftreecontext.md) structure-sized block of storage, the result is undefined. If the version number of the storage is not a valid [CFTreeContext](cftreecontext.md) version number, the result is undefined.

<a id="return-value"></a>

## Return Value

A new CFTree object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
