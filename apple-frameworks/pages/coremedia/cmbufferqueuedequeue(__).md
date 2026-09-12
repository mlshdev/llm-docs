> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuedequeue(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuedequeue(_:))

# CMBufferQueueDequeue(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues a buffer from a queue.

## Declaration

```swift
func CMBufferQueueDequeue(_ queue: CMBufferQueue) -> CMBuffer?
```

## Parameters

- `queue`: The `CMBufferQueue` from which to dequeue a buffer.

<a id="return-value"></a>

## Return Value

The dequeued buffer.  Will be `NULL` if the queue is empty.

<a id="Discussion"></a>

## Discussion

The buffer is released by the queue, but it is also retained for the client. Buffer ownership is thereby transferred from queue to client.  The client need not retain the buffer, but is responsible to release it when done with it.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer(\_:callback:refcon:)](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData(\_:)](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback(\_:callback:refcon:)](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger(\_:triggerToken:)](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.

# CMBufferQueueDequeueAndRetain (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues a buffer from a queue.

## Declaration

```objectivec
extern CMBufferRefCMBufferQueueDequeueAndRetain(CMBufferQueueRef queue);
```

## Parameters

- `queue`: The `CMBufferQueue` from which to dequeue a buffer.

<a id="return-value"></a>

## Return Value

The dequeued buffer.  Will be `NULL` if the queue is empty.

<a id="Discussion"></a>

## Discussion

The buffer is released by the queue, but it is also retained for the client. Buffer ownership is thereby transferred from queue to client.  The client need not retain the buffer, but is responsible to release it when done with it.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.
