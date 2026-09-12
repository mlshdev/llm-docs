> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuesetvalidationhandler(_:_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuesetvalidationhandler(_:_:))

# CMBufferQueueSetValidationHandler(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

A validation handler for the queue to call before enqueuing buffers.

## Declaration

```swift
func CMBufferQueueSetValidationHandler(_ queue: CMBufferQueue, _ handler: @escaping CMBufferValidationHandler) -> OSStatus
```

## See Also

### Validating a Queue

- [CMBufferValidationHandler](cmbuffervalidationhandler.md): A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.
- [CMBufferQueueSetValidationCallback(\_:callback:refcon:)](cmbufferqueuesetvalidationcallback%28__callback_refcon_%29.md): A validation callback for the queue to call before enqueuing buffers.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.

# CMBufferQueueSetValidationHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

A validation handler for the queue to call before enqueuing buffers.

## Declaration

```objectivec
extern OSStatus CMBufferQueueSetValidationHandler(CMBufferQueueRef queue, CMBufferValidationHandler handler);
```

## See Also

### Validating a Queue

- [CMBufferValidationHandler](cmbuffervalidationhandler.md): A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.
- [CMBufferQueueSetValidationCallback](cmbufferqueuesetvalidationcallback%28__callback_refcon_%29.md): A validation callback for the queue to call before enqueuing buffers.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.
