> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuecreatewithhandlers(_:_:_:_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuecreatewithhandlers(_:_:_:_:))

# CMBufferQueueCreateWithHandlers(\_:\_:\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Creates a buffer queue with handlers to inspect buffers.

## Declaration

```swift
func CMBufferQueueCreateWithHandlers(_ allocator: CFAllocator?, _ capacity: CMItemCount, _ handlers: OpaquePointer, _ queueOut: UnsafeMutablePointer<CMBufferQueue?>) -> OSStatus
```

## See Also

### Creating a Queue

- [CMBufferQueueCreate(allocator:capacity:callbacks:queueOut:)](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md): Creates a buffer queue with callbacks to inspect buffers.
- [CMBufferCallbacks](cmbuffercallbacks.md): A structure that stores the callbacks that perform buffer operations.

# CMBufferQueueCreateWithHandlers (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Creates a buffer queue with handlers to inspect buffers.

## Declaration

```objectivec
extern OSStatus CMBufferQueueCreateWithHandlers(CFAllocatorRef allocator, CMItemCount capacity, const CMBufferHandlers *handlers, CMBufferQueueRef*queueOut);
```

## See Also

### Creating a Queue

- [CMBufferHandlers](cmbufferhandlers.md): A structure that stores the handlers that perform buffer operations.
- [CMBufferQueueCreate](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md): Creates a buffer queue with callbacks to inspect buffers.
- [CMBufferCallbacks](cmbuffercallbacks.md): A structure that stores the callbacks that perform buffer operations.
