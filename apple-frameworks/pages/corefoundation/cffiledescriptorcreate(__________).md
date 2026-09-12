> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorcreate(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cffiledescriptorcreate(_:_:_:_:_:))

# CFFileDescriptorCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFFileDescriptor.

## Declaration

```swift
func CFFileDescriptorCreate(_ allocator: CFAllocator!, _ fd: CFFileDescriptorNativeDescriptor, _ closeOnInvalidate: Bool, _ callout: CFFileDescriptorCallBack!, _ context: UnsafePointer<CFFileDescriptorContext>!) -> CFFileDescriptor!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new file descriptor object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `fd`: The file descriptor for the new CFFileDescriptor.
- `closeOnInvalidate`: `true` if the new CFFileDescriptor should close `fd` when it is invalidated, otherwise `false`.
- `callout`: The CFFileDescriptorCallBack for the new CFFileDescriptor.
- `context`: Contextual information for the new CFFileDescriptor.

<a id="return-value"></a>

## Return Value

A new CFFileDescriptor or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Related Documentation

- [CFFileDescriptorGetContext(\_:\_:)](cffiledescriptorgetcontext%28____%29.md): Gets the context for a given CFFileDescriptor.
- [CFFileDescriptorInvalidate(\_:)](cffiledescriptorinvalidate%28__%29.md): Invalidates a CFFileDescriptor object.

# CFFileDescriptorCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFFileDescriptor.

## Declaration

```objectivec
extern CFFileDescriptorRefCFFileDescriptorCreate(CFAllocatorRef allocator, CFFileDescriptorNativeDescriptor fd, Boolean closeOnInvalidate, CFFileDescriptorCallBack callout, const CFFileDescriptorContext *context);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new file descriptor object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `fd`: The file descriptor for the new CFFileDescriptor.
- `closeOnInvalidate`: `true` if the new CFFileDescriptor should close `fd` when it is invalidated, otherwise `false`.
- `callout`: The CFFileDescriptorCallBack for the new CFFileDescriptor.
- `context`: Contextual information for the new CFFileDescriptor.

<a id="return-value"></a>

## Return Value

A new CFFileDescriptor or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Related Documentation

- [CFFileDescriptorGetContext](cffiledescriptorgetcontext%28____%29.md): Gets the context for a given CFFileDescriptor.
- [CFFileDescriptorInvalidate](cffiledescriptorinvalidate%28__%29.md): Invalidates a CFFileDescriptor object.
