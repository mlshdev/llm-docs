> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffercallbacks/compare](https://developer.apple.com/documentation/coremedia/cmbuffercallbacks/compare)

# compare (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

This callback is called multiple times from [CMBufferQueueEnqueue(\_:buffer:)](../cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.

## Declaration

```swift
var compare: CMBufferCompareCallback?
```

<a id="Discussion"></a>

## Discussion

This may be `NULL` (queue will be FIFO).

## See Also

### Properties

- [CMBufferCompareCallback](../cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
- [CMBufferGetBooleanCallback](../cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [CMBufferGetTimeCallback](../cmbuffergettimecallback.md): Callback that returns a `CMTime` from a `CMBuffer`.
- [dataBecameReadyNotification](databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getPresentationTimeStamp](getpresentationtimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getSize](getsize.md)
- [isDataReady](isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReady(\_:)](../cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](refcon.md): Contextual data to be passed to all callbacks.
- [version](version.md): The callback version.

# compare (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This callback is called multiple times from [CMBufferQueueEnqueue](../cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.

## Declaration

```objectivec
CMBufferCompareCallback compare;
```

<a id="Discussion"></a>

## Discussion

This may be `NULL` (queue will be FIFO).

## See Also

### Properties

- [CMBufferCompareCallback](../cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
- [CMBufferGetBooleanCallback](../cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [CMBufferGetTimeCallback](../cmbuffergettimecallback.md): Callback that returns a `CMTime` from a `CMBuffer`.
- [dataBecameReadyNotification](databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getPresentationTimeStamp](getpresentationtimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getSize](getsize.md)
- [isDataReady](isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReadyAndRetain](../cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](refcon.md): Contextual data to be passed to all callbacks.
- [version](version.md): The callback version.
