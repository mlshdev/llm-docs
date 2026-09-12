> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorcreate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfallocatorcreate(_:_:))

# CFAllocatorCreate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an allocator object.

## Declaration

```swift
func CFAllocatorCreate(_ allocator: CFAllocator!, _ context: UnsafeMutablePointer<CFAllocatorContext>!) -> Unmanaged<CFAllocator>!
```

## Parameters

- `allocator`: The existing allocator to use to allocate memory for the new allocator. Pass the [kCFAllocatorUseContext](kcfallocatorusecontext.md) constant for this parameter to allocate memory using the appropriate function callback specified in the `context` parameter. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to allocate memory for the new allocator using the default allocator.
- `context`: A structure of type [CFAllocatorContext](cfallocatorcontext.md). The fields of this structure hold (among other things) function pointers to callbacks used for allocating, reallocating, and deallocating memory.

<a id="return-value"></a>

## Return Value

The new allocator object, or `NULL` if there was a problem allocating memory. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You use this function to create custom allocators which you can then pass into various Core Foundation object-creation functions. You must implement a function callback that allocates memory and assign it to the `allocate` field of this structure. You typically also implement deallocate, reallocate, and preferred-size callbacks.

# CFAllocatorCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an allocator object.

## Declaration

```objectivec
extern CFAllocatorRefCFAllocatorCreate(CFAllocatorRef allocator, CFAllocatorContext *context);
```

## Parameters

- `allocator`: The existing allocator to use to allocate memory for the new allocator. Pass the [kCFAllocatorUseContext](kcfallocatorusecontext.md) constant for this parameter to allocate memory using the appropriate function callback specified in the `context` parameter. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to allocate memory for the new allocator using the default allocator.
- `context`: A structure of type [CFAllocatorContext](cfallocatorcontext.md). The fields of this structure hold (among other things) function pointers to callbacks used for allocating, reallocating, and deallocating memory.

<a id="return-value"></a>

## Return Value

The new allocator object, or `NULL` if there was a problem allocating memory. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You use this function to create custom allocators which you can then pass into various Core Foundation object-creation functions. You must implement a function callback that allocates memory and assign it to the `allocate` field of this structure. You typically also implement deallocate, reallocate, and preferred-size callbacks.
