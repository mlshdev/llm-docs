> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffercallbacks/version](https://developer.apple.com/documentation/coremedia/cmbuffercallbacks/version)

# version (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The callback version.

## Declaration

```swift
var version: UInt32
```

<a id="Discussion"></a>

## Discussion

The `version` must be 0.

## See Also

### Properties

- [compare](compare.md): This callback is called multiple times from [CMBufferQueueEnqueue(\_:buffer:)](../cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
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

# version (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback version.

## Declaration

```objectivec
uint32_t version;
```

<a id="Discussion"></a>

## Discussion

The `version` must be 0.

## See Also

### Properties

- [compare](compare.md): This callback is called multiple times from [CMBufferQueueEnqueue](../cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
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
