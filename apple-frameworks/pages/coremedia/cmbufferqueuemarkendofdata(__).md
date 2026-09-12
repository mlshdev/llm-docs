> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuemarkendofdata(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuemarkendofdata(_:))

# CMBufferQueueMarkEndOfData(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.

## Declaration

```swift
func CMBufferQueueMarkEndOfData(_ queue: CMBufferQueue) -> OSStatus
```

## Parameters

- `queue`: The `CMBufferQueue` being marked.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`

<a id="Discussion"></a>

## Discussion

All subsequent Enqueues will be rejected until [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md) is called. Subsequent Dequeues will succeed as long as the queue is not empty.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer(\_:callback:refcon:)](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback(\_:callback:refcon:)](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger(\_:triggerToken:)](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.

# CMBufferQueueMarkEndOfData (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.

## Declaration

```objectivec
extern OSStatus CMBufferQueueMarkEndOfData(CMBufferQueueRef queue);
```

## Parameters

- `queue`: The `CMBufferQueue` being marked.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`

<a id="Discussion"></a>

## Discussion

All subsequent Enqueues will be rejected until [CMBufferQueueReset](cmbufferqueuereset%28__%29.md) is called. Subsequent Dequeues will succeed as long as the queue is not empty.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueReset](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.
