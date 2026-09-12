> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffercallbacks/getpresentationtimestamp](https://developer.apple.com/documentation/coremedia/cmbuffercallbacks/getpresentationtimestamp)

# getPresentationTimeStamp (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Client callback that returns a `CMTime` from a `CMBuffer`.

## Declaration

```swift
var getPresentationTimeStamp: CMBufferGetTimeCallback?
```

<a id="Discussion"></a>

## Discussion

This callback is called from once [CMBufferQueueGetFirstPresentationTimeStamp(\_:)](../cmbufferqueuegetfirstpresentationtimestamp%28__%29.md) and multiple times from [CMBufferQueueGetMinPresentationTimeStamp(\_:)](../cmbufferqueuegetminpresentationtimestamp%28__%29.md).

It should return the presentation timestamp of the buffer.  If there are multiple samples in the buffer, this callback should return the minimum presentation timestamp in the buffer.

This can be `NULL` ([CMBufferQueueGetFirstPresentationTimeStamp(\_:)](../cmbufferqueuegetfirstpresentationtimestamp%28__%29.md) and [CMBufferQueueGetMinPresentationTimeStamp(\_:)](../cmbufferqueuegetminpresentationtimestamp%28__%29.md) will return `kCMTimeInvalid`).

## See Also

### Properties

- [compare](compare.md): This callback is called multiple times from [CMBufferQueueEnqueue(\_:buffer:)](../cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferCompareCallback](../cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
- [CMBufferGetBooleanCallback](../cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [CMBufferGetTimeCallback](../cmbuffergettimecallback.md): Callback that returns a `CMTime` from a `CMBuffer`.
- [dataBecameReadyNotification](databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getSize](getsize.md)
- [isDataReady](isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReady(\_:)](../cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](refcon.md): Contextual data to be passed to all callbacks.
- [version](version.md): The callback version.

# getPresentationTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Client callback that returns a `CMTime` from a `CMBuffer`.

## Declaration

```objectivec
CMBufferGetTimeCallback getPresentationTimeStamp;
```

<a id="Discussion"></a>

## Discussion

This callback is called from once [CMBufferQueueGetFirstPresentationTimeStamp](../cmbufferqueuegetfirstpresentationtimestamp%28__%29.md) and multiple times from [CMBufferQueueGetMinPresentationTimeStamp](../cmbufferqueuegetminpresentationtimestamp%28__%29.md).

It should return the presentation timestamp of the buffer.  If there are multiple samples in the buffer, this callback should return the minimum presentation timestamp in the buffer.

This can be `NULL` ([CMBufferQueueGetFirstPresentationTimeStamp](../cmbufferqueuegetfirstpresentationtimestamp%28__%29.md) and [CMBufferQueueGetMinPresentationTimeStamp](../cmbufferqueuegetminpresentationtimestamp%28__%29.md) will return `kCMTimeInvalid`).

## See Also

### Properties

- [compare](compare.md): This callback is called multiple times from [CMBufferQueueEnqueue](../cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferCompareCallback](../cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
- [CMBufferGetBooleanCallback](../cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [CMBufferGetTimeCallback](../cmbuffergettimecallback.md): Callback that returns a `CMTime` from a `CMBuffer`.
- [dataBecameReadyNotification](databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getSize](getsize.md)
- [isDataReady](isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReadyAndRetain](../cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](refcon.md): Contextual data to be passed to all callbacks.
- [version](version.md): The callback version.
