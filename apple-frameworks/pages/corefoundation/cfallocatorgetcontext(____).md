> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorgetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cfallocatorgetcontext(_:_:))

# CFAllocatorGetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains the context of the specified allocator or of the default allocator.

## Declaration

```swift
func CFAllocatorGetContext(_ allocator: CFAllocator!, _ context: UnsafeMutablePointer<CFAllocatorContext>!)
```

## Parameters

- `allocator`: The allocator to examine. Pass `NULL` to obtain the context of the default allocator.
- `context`: On return, contains the context of `allocator`.

<a id="Discussion"></a>

## Discussion

An allocator’s context, a structure of type `CFAllocatorContext`, holds pointers to various function callbacks (particularly those that allocate, reallocate, and deallocate memory for an object). The context also contains a version number and the `info` field for program-defined data. To obtain the value of the `info` field you usually first have to get an allocator’s context.

# CFAllocatorGetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains the context of the specified allocator or of the default allocator.

## Declaration

```objectivec
extern void CFAllocatorGetContext(CFAllocatorRef allocator, CFAllocatorContext *context);
```

## Parameters

- `allocator`: The allocator to examine. Pass `NULL` to obtain the context of the default allocator.
- `context`: On return, contains the context of `allocator`.

<a id="Discussion"></a>

## Discussion

An allocator’s context, a structure of type `CFAllocatorContext`, holds pointers to various function callbacks (particularly those that allocate, reallocate, and deallocate memory for an object). The context also contains a version number and the `info` field for program-defined data. To obtain the value of the `info` field you usually first have to get an allocator’s context.
