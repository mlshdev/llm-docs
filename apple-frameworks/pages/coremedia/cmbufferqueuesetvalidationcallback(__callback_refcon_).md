> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuesetvalidationcallback(_:callback:refcon:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuesetvalidationcallback(_:callback:refcon:))

# CMBufferQueueSetValidationCallback(\_:callback:refcon:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A validation callback for the queue to call before enqueuing buffers.

## Declaration

```swift
func CMBufferQueueSetValidationCallback(_ queue: CMBufferQueue, callback: CMBufferValidationCallback, refcon: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `queue`: `CMBufferQueue` that will use the validation callback.
- `callback`: Callback that will validate each buffer enqueued.
- `refcon`: Context refcon for validation callback.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`.

## See Also

### Validating a Queue

- [CMBufferQueueSetValidationHandler(\_:\_:)](cmbufferqueuesetvalidationhandler%28____%29.md): A validation handler for the queue to call before enqueuing buffers.
- [CMBufferValidationHandler](cmbuffervalidationhandler.md): A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.

# CMBufferQueueSetValidationCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A validation callback for the queue to call before enqueuing buffers.

## Declaration

```objectivec
extern OSStatus CMBufferQueueSetValidationCallback(CMBufferQueueRef queue, CMBufferValidationCallback callback, void *refcon);
```

## Parameters

- `queue`: `CMBufferQueue` that will use the validation callback.
- `callback`: Callback that will validate each buffer enqueued.
- `refcon`: Context refcon for validation callback.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`.

## See Also

### Validating a Queue

- [CMBufferQueueSetValidationHandler](cmbufferqueuesetvalidationhandler%28____%29.md): A validation handler for the queue to call before enqueuing buffers.
- [CMBufferValidationHandler](cmbuffervalidationhandler.md): A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.
