> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffergettimecallback](https://developer.apple.com/documentation/coremedia/cmbuffergettimecallback)

# CMBufferGetTimeCallback (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Callback that returns a `CMTime` from a `CMBuffer`.

## Declaration

```swift
typealias CMBufferGetTimeCallback = (CMBuffer, UnsafeMutableRawPointer?) -> CMTime
```

<a id="Discussion"></a>

## Discussion

There are three callbacks of this type that can be provided to `Creating Buffer Queues`: getDuration (required), getDecodeTimeStamp (optional), and getPresentationTimeStamp (optional).

<a id="Callback-Parameters"></a>

### Callback Parameters

- **buf**: The buffer being interrogated.
- **refcon**: The contextual data from the client (which may be `NULL`).

## See Also

### Properties

- [compare](cmbuffercallbacks/compare.md): This callback is called multiple times from [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferCompareCallback](cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
- [CMBufferGetBooleanCallback](cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [dataBecameReadyNotification](cmbuffercallbacks/databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](cmbuffercallbacks/getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](cmbuffercallbacks/getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getPresentationTimeStamp](cmbuffercallbacks/getpresentationtimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getSize](cmbuffercallbacks/getsize.md)
- [isDataReady](cmbuffercallbacks/isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](cmbuffercallbacks/refcon.md): Contextual data to be passed to all callbacks.
- [version](cmbuffercallbacks/version.md): The callback version.

# CMBufferGetTimeCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Callback that returns a `CMTime` from a `CMBuffer`.

## Declaration

```objectivec
typedef CMTime (*)(const void *, void *) CMBufferGetTimeCallback;
```

<a id="Discussion"></a>

## Discussion

There are three callbacks of this type that can be provided to `Creating Buffer Queues`: getDuration (required), getDecodeTimeStamp (optional), and getPresentationTimeStamp (optional).

<a id="Callback-Parameters"></a>

### Callback Parameters

- **buf**: The buffer being interrogated.
- **refcon**: The contextual data from the client (which may be `NULL`).

## See Also

### Properties

- [compare](cmbuffercallbacks/compare.md): This callback is called multiple times from [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferCompareCallback](cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
- [CMBufferGetBooleanCallback](cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [dataBecameReadyNotification](cmbuffercallbacks/databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](cmbuffercallbacks/getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](cmbuffercallbacks/getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getPresentationTimeStamp](cmbuffercallbacks/getpresentationtimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getSize](cmbuffercallbacks/getsize.md)
- [isDataReady](cmbuffercallbacks/isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](cmbuffercallbacks/refcon.md): Contextual data to be passed to all callbacks.
- [version](cmbuffercallbacks/version.md): The callback version.
