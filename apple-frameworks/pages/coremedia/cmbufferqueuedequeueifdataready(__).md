> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuedequeueifdataready(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuedequeueifdataready(_:))

# CMBufferQueueDequeueIfDataReady(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues a buffer from a queue, if it’s ready.

## Declaration

```swift
func CMBufferQueueDequeueIfDataReady(_ queue: CMBufferQueue) -> CMBuffer?
```

## Parameters

- `queue`: The `CMBufferQueue` from which to dequeue a buffer (if the buffer is ready).

<a id="return-value"></a>

## Return Value

The dequeued buffer.  Will be `NULL` if the queue is empty, or if the buffer to be dequeued is not yet ready.

<a id="Discussion"></a>

## Discussion

The buffer is released by the queue, but it is also retained for the client. Buffer ownership is thereby transferred from queue to client.  The client need not retain the buffer, but is responsible to release it when done with it.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer(\_:callback:refcon:)](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueMarkEndOfData(\_:)](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback(\_:callback:refcon:)](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger(\_:triggerToken:)](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.

# CMBufferQueueDequeueIfDataReadyAndRetain (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues a buffer from a queue, if it’s ready.

## Declaration

```objectivec
extern CMBufferRefCMBufferQueueDequeueIfDataReadyAndRetain(CMBufferQueueRef queue);
```

## Parameters

- `queue`: The `CMBufferQueue` from which to dequeue a buffer (if the buffer is ready).

<a id="return-value"></a>

## Return Value

The dequeued buffer.  Will be `NULL` if the queue is empty, or if the buffer to be dequeued is not yet ready.

<a id="Discussion"></a>

## Discussion

The buffer is released by the queue, but it is also retained for the client. Buffer ownership is thereby transferred from queue to client.  The client need not retain the buffer, but is responsible to release it when done with it.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueMarkEndOfData](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.
