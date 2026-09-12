> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueueenqueue(_:buffer:)](https://developer.apple.com/documentation/coremedia/cmbufferqueueenqueue(_:buffer:))

# CMBufferQueueEnqueue(\_:buffer:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Enqueues a buffer onto a queue.

## Declaration

```swift
func CMBufferQueueEnqueue(_ queue: CMBufferQueue, buffer buf: CMBuffer) -> OSStatus
```

## Parameters

- `queue`: The `CMBufferQueue` on which to enqueue the buffer.
- `buf`: The buffer to enqueue.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`.

<a id="Discussion"></a>

## Discussion

The buffer is retained by the queue, so the client can safely release the buffer if it has no further use for it. If the compare callback is non-`NULL`, this API performs an insertion sort using that compare operation. If the validation callback is non-`NULL`, this API calls it; if it returns a nonzero `OSStatus`, the buffer will not be enqueued and this API will return the same error `OSStatus`.

## See Also

### Managing a Queue

- [CMBufferQueueCallForEachBuffer(\_:callback:refcon:)](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData(\_:)](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback(\_:callback:refcon:)](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger(\_:triggerToken:)](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.

# CMBufferQueueEnqueue (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Enqueues a buffer onto a queue.

## Declaration

```objectivec
extern OSStatus CMBufferQueueEnqueue(CMBufferQueueRef queue, CMBufferRef buf);
```

## Parameters

- `queue`: The `CMBufferQueue` on which to enqueue the buffer.
- `buf`: The buffer to enqueue.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`.

<a id="Discussion"></a>

## Discussion

The buffer is retained by the queue, so the client can safely release the buffer if it has no further use for it. If the compare callback is non-`NULL`, this API performs an insertion sort using that compare operation. If the validation callback is non-`NULL`, this API calls it; if it returns a nonzero `OSStatus`, the buffer will not be enqueued and this API will return the same error `OSStatus`.

## See Also

### Managing a Queue

- [CMBufferQueueCallForEachBuffer](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.
