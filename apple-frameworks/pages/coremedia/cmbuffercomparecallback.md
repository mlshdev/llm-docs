> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffercomparecallback](https://developer.apple.com/documentation/coremedia/cmbuffercomparecallback)

# CMBufferCompareCallback (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Callback that compares one `CMBuffer` with another.

## Declaration

```swift
typealias CMBufferCompareCallback = (CMBuffer, CMBuffer, UnsafeMutableRawPointer?) -> CFComparisonResult
```

<a id="Discussion"></a>

## Discussion

You can use a `CFComparatorFunction` as a callback.

<a id="Callback-parameters"></a>

### Callback parameters

- **buf1**: The first buffer being compared.
- **buf2**: The second buffer being compared.
- **refcon**: The contextual data from the client (which may be `NULL`).

## See Also

### Properties

- [compare](cmbuffercallbacks/compare.md): This callback is called multiple times from [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferGetBooleanCallback](cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [CMBufferGetTimeCallback](cmbuffergettimecallback.md): Callback that returns a `CMTime` from a `CMBuffer`.
- [dataBecameReadyNotification](cmbuffercallbacks/databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](cmbuffercallbacks/getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](cmbuffercallbacks/getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getPresentationTimeStamp](cmbuffercallbacks/getpresentationtimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getSize](cmbuffercallbacks/getsize.md)
- [isDataReady](cmbuffercallbacks/isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](cmbuffercallbacks/refcon.md): Contextual data to be passed to all callbacks.
- [version](cmbuffercallbacks/version.md): The callback version.

# CMBufferCompareCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Callback that compares one `CMBuffer` with another.

## Declaration

```objectivec
typedef enum CFComparisonResult (*)(const void *, const void *, void *) CMBufferCompareCallback;
```

<a id="Discussion"></a>

## Discussion

You can use a `CFComparatorFunction` as a callback.

<a id="Callback-parameters"></a>

### Callback parameters

- **buf1**: The first buffer being compared.
- **buf2**: The second buffer being compared.
- **refcon**: The contextual data from the client (which may be `NULL`).

## See Also

### Properties

- [compare](cmbuffercallbacks/compare.md): This callback is called multiple times from [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferGetBooleanCallback](cmbuffergetbooleancallback.md): Callback that returns a Boolean value from a `CMBuffer`.
- [CMBufferGetTimeCallback](cmbuffergettimecallback.md): Callback that returns a `CMTime` from a `CMBuffer`.
- [dataBecameReadyNotification](cmbuffercallbacks/databecamereadynotification.md): If triggers of type `kCMBufferQueueTrigger_WhenDataBecomesReady` are installed, the queue will listen for this notification on the head buffer.
- [getDecodeTimeStamp](cmbuffercallbacks/getdecodetimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getDuration](cmbuffercallbacks/getduration.md): This callback is called (once) during enqueue and dequeue operations to update the total duration of the queue.
- [getPresentationTimeStamp](cmbuffercallbacks/getpresentationtimestamp.md): Client callback that returns a `CMTime` from a `CMBuffer`.
- [getSize](cmbuffercallbacks/getsize.md)
- [isDataReady](cmbuffercallbacks/isdataready.md): This callback is called from [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md), to ask if the buffer that is about to be dequeued is ready.
- [refcon](cmbuffercallbacks/refcon.md): Contextual data to be passed to all callbacks.
- [version](cmbuffercallbacks/version.md): The callback version.
