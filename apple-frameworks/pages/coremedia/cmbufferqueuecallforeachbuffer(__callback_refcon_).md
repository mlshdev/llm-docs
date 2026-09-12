> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuecallforeachbuffer(_:callback:refcon:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuecallforeachbuffer(_:callback:refcon:))

# CMBufferQueueCallForEachBuffer(\_:callback:refcon:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Calls a function for every buffer in a queue.

## Declaration

```swift
func CMBufferQueueCallForEachBuffer(_ queue: CMBufferQueue, callback: (CMBuffer, UnsafeMutableRawPointer?) -> OSStatus, refcon: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `queue`: `CMBufferQueue` that may contain multiple buffers.
- `callback`: Function to be called for each buffer. The callback may modify buffer attachments but should not modify sort-affecting properties (eg, timestamps). The callback should not make other calls to the buffer queue.
- `refcon`: Reference constant supplied to the callback function.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

If the callback function returns an error, iteration will stop immediately and the error will be returned.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData(\_:)](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback(\_:callback:refcon:)](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger(\_:triggerToken:)](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.

# CMBufferQueueCallForEachBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Calls a function for every buffer in a queue.

## Declaration

```objectivec
extern OSStatus CMBufferQueueCallForEachBuffer(CMBufferQueueRef queue, int (*)(const void *, void *)callback, void *refcon);
```

## Parameters

- `queue`: `CMBufferQueue` that may contain multiple buffers.
- `callback`: Function to be called for each buffer. The callback may modify buffer attachments but should not modify sort-affecting properties (eg, timestamps). The callback should not make other calls to the buffer queue.
- `refcon`: Reference constant supplied to the callback function.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

If the callback function returns an error, iteration will stop immediately and the error will be returned.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
- [CMBufferQueueRemoveTrigger](cmbufferqueueremovetrigger%28__triggertoken_%29.md): Removes a previously installed trigger from a buffer queue.
