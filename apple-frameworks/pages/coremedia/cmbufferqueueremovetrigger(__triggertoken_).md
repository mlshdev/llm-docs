> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueueremovetrigger(_:triggertoken:)](https://developer.apple.com/documentation/coremedia/cmbufferqueueremovetrigger(_:triggertoken:))

# CMBufferQueueRemoveTrigger(\_:triggerToken:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Removes a previously installed trigger from a buffer queue.

## Declaration

```swift
func CMBufferQueueRemoveTrigger(_ queue: CMBufferQueue, triggerToken: CMBufferQueueTriggerToken) -> OSStatus
```

## Parameters

- `queue`: `CMBufferQueue` from which the trigger is to be removed.
- `triggerToken`: Trigger to remove from the queue.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`

<a id="Discussion"></a>

## Discussion

Triggers will automatically be removed when a queue is finalized.  However, if more than one module has access to a queue, it may be hard for an individual module to know when the queue is finalized since other modules may retain it.  To address this concern, modules should remove their triggers before they themselves are finalized.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer(\_:callback:refcon:)](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeue(\_:)](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData(\_:)](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset(\_:)](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback(\_:callback:refcon:)](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.

# CMBufferQueueRemoveTrigger (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Removes a previously installed trigger from a buffer queue.

## Declaration

```objectivec
extern OSStatus CMBufferQueueRemoveTrigger(CMBufferQueueRef queue, CMBufferQueueTriggerToken triggerToken);
```

## Parameters

- `queue`: `CMBufferQueue` from which the trigger is to be removed.
- `triggerToken`: Trigger to remove from the queue.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`

<a id="Discussion"></a>

## Discussion

Triggers will automatically be removed when a queue is finalized.  However, if more than one module has access to a queue, it may be hard for an individual module to know when the queue is finalized since other modules may retain it.  To address this concern, modules should remove their triggers before they themselves are finalized.

## See Also

### Managing a Queue

- [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md): Enqueues a buffer onto a queue.
- [CMBufferQueueCallForEachBuffer](cmbufferqueuecallforeachbuffer%28__callback_refcon_%29.md): Calls a function for every buffer in a queue.
- [CMBufferQueueDequeueAndRetain](cmbufferqueuedequeue%28__%29.md): Dequeues a buffer from a queue.
- [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md): Dequeues a buffer from a queue, if it’s ready.
- [CMBufferQueueMarkEndOfData](cmbufferqueuemarkendofdata%28__%29.md): Sets a marker to indicate this queue doesn’t allow enqueuing new buffers.
- [CMBufferQueueReset](cmbufferqueuereset%28__%29.md): Resets a buffer queue, which allows it to enqueue new buffers.
- [CMBufferQueueResetWithCallback](cmbufferqueueresetwithcallback%28__callback_refcon_%29.md): A callback that invokes a function for every buffer in a queue and then resets the queue.
