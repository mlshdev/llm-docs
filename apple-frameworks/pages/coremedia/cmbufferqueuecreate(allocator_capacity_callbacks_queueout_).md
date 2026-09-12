> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuecreate(allocator:capacity:callbacks:queueout:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuecreate(allocator:capacity:callbacks:queueout:))

# CMBufferQueueCreate(allocator:capacity:callbacks:queueOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a buffer queue with callbacks to inspect buffers.

## Declaration

```swift
func CMBufferQueueCreate(allocator: CFAllocator?, capacity: CMItemCount, callbacks: UnsafePointer<CMBufferCallbacks>, queueOut: UnsafeMutablePointer<CMBufferQueue?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMBufferQueue` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `capacity`: Maximum number of buffers in the queue.  Pass 0 to create a queue that will grow as needed.
- `callbacks`: Callbacks the queue should use to interrogate the buffer objects.  This struct is copied internally, so the client can pass a pointer to a temporary struct on the stack.
- `queueOut`: On Output, the newly created `CMBufferQueue`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned `CMBufferQueue`, and must release it when done with it.

## See Also

### Creating a Queue

- [CMBufferQueueCreateWithHandlers(\_:\_:\_:\_:)](cmbufferqueuecreatewithhandlers%28________%29.md): Creates a buffer queue with handlers to inspect buffers.
- [CMBufferCallbacks](cmbuffercallbacks.md): A structure that stores the callbacks that perform buffer operations.

# CMBufferQueueCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a buffer queue with callbacks to inspect buffers.

## Declaration

```objectivec
extern OSStatus CMBufferQueueCreate(CFAllocatorRef allocator, CMItemCount capacity, const CMBufferCallbacks *callbacks, CMBufferQueueRef*queueOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMBufferQueue` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `capacity`: Maximum number of buffers in the queue.  Pass 0 to create a queue that will grow as needed.
- `callbacks`: Callbacks the queue should use to interrogate the buffer objects.  This struct is copied internally, so the client can pass a pointer to a temporary struct on the stack.
- `queueOut`: On Output, the newly created `CMBufferQueue`.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

On return, the caller owns the returned `CMBufferQueue`, and must release it when done with it.

## See Also

### Creating a Queue

- [CMBufferQueueCreateWithHandlers](cmbufferqueuecreatewithhandlers%28________%29.md): Creates a buffer queue with handlers to inspect buffers.
- [CMBufferHandlers](cmbufferhandlers.md): A structure that stores the handlers that perform buffer operations.
- [CMBufferCallbacks](cmbuffercallbacks.md): A structure that stores the callbacks that perform buffer operations.
