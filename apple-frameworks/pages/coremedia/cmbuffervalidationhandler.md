> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffervalidationhandler](https://developer.apple.com/documentation/coremedia/cmbuffervalidationhandler)

# CMBufferValidationHandler (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.

## Declaration

```swift
typealias CMBufferValidationHandler = (CMBufferQueue, CMBuffer) -> OSStatus
```

## See Also

### Validating a Queue

- [CMBufferQueueSetValidationHandler(\_:\_:)](cmbufferqueuesetvalidationhandler%28____%29.md): A validation handler for the queue to call before enqueuing buffers.
- [CMBufferQueueSetValidationCallback(\_:callback:refcon:)](cmbufferqueuesetvalidationcallback%28__callback_refcon_%29.md): A validation callback for the queue to call before enqueuing buffers.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.

# CMBufferValidationHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

A type alias for a handler that tests whether a buffer is in a valid state to add to a queue.

## Declaration

```objectivec
typedef int (^)(struct opaqueCMBufferQueue *, const void *) CMBufferValidationHandler;
```

## See Also

### Validating a Queue

- [CMBufferQueueSetValidationHandler](cmbufferqueuesetvalidationhandler%28____%29.md): A validation handler for the queue to call before enqueuing buffers.
- [CMBufferQueueSetValidationCallback](cmbufferqueuesetvalidationcallback%28__callback_refcon_%29.md): A validation callback for the queue to call before enqueuing buffers.
- [CMBufferValidationCallback](cmbuffervalidationcallback.md): A type alias for a callback that tests whether a buffer is in a valid state to add to a queue.
