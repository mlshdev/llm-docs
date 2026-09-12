> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorcreaterunloopsource(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cffiledescriptorcreaterunloopsource(_:_:_:))

# CFFileDescriptorCreateRunLoopSource(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new runloop source for a given CFFileDescriptor.

## Declaration

```swift
func CFFileDescriptorCreateRunLoopSource(_ allocator: CFAllocator!, _ f: CFFileDescriptor!, _ order: CFIndex) -> CFRunLoopSource!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bag and its storage for values. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `f`: A CFFileDescriptor.
- `order`: The order for the new run loop (see [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md)).

<a id="return-value"></a>

## Return Value

A new runloop source for `f`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The context for the new runloop (see [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md)) is the same as the context passed in when the CFFileDescriptor was created (see [CFFileDescriptorCreate(\_:\_:\_:\_:\_:)](cffiledescriptorcreate%28__________%29.md)).

# CFFileDescriptorCreateRunLoopSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new runloop source for a given CFFileDescriptor.

## Declaration

```objectivec
extern CFRunLoopSourceRefCFFileDescriptorCreateRunLoopSource(CFAllocatorRef allocator, CFFileDescriptorRef f, CFIndex order);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bag and its storage for values. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `f`: A CFFileDescriptor.
- `order`: The order for the new run loop (see [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md)).

<a id="return-value"></a>

## Return Value

A new runloop source for `f`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The context for the new runloop (see [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md)) is the same as the context passed in when the CFFileDescriptor was created (see [CFFileDescriptorCreate](cffiledescriptorcreate%28__________%29.md)).
