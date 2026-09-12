> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffercallbacks](https://developer.apple.com/documentation/coremedia/cmbuffercallbacks)

# CMBufferCallbacks (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that stores the callbacks that perform buffer operations.

## Declaration

```swift
struct CMBufferCallbacks
```

<a id="overview"></a>

## Overview

With the exception of `isDataReady`, all these callbacks must always return the same result for the same arguments.

A buffer’s duration, timestamps, or position relative to other buffers must not appear to change while it is in the queue. Once `isDataReady` has returned true for a given `CMBuffer`, it must always return true for that `CMBuffer`.

Durations must always be positive.

## Topics

### Properties

- [compare](cmbuffercallbacks/compare.md): This callback is called multiple times from [CMBufferQueueEnqueue(\_:buffer:)](cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferCompareCallback](cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
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

### Initializers

- [init(version:refcon:getDecodeTimeStamp:getPresentationTimeStamp:getDuration:isDataReady:compare:dataBecameReadyNotification:getSize:)](cmbuffercallbacks/init%28version_refcon_getdecodetimestamp_getpresentationtimestamp_getduration_isdataready_compare_databecamereadynotification_getsize_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Creating a Queue

- [CMBufferQueueCreateWithHandlers(\_:\_:\_:\_:)](cmbufferqueuecreatewithhandlers%28________%29.md): Creates a buffer queue with handlers to inspect buffers.
- [CMBufferQueueCreate(allocator:capacity:callbacks:queueOut:)](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md): Creates a buffer queue with callbacks to inspect buffers.

# CMBufferCallbacks (Objective-C)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that stores the callbacks that perform buffer operations.

## Declaration

```objectivec
typedef struct { ... } CMBufferCallbacks;
```

<a id="overview"></a>

## Overview

With the exception of `isDataReady`, all these callbacks must always return the same result for the same arguments.

A buffer’s duration, timestamps, or position relative to other buffers must not appear to change while it is in the queue. Once `isDataReady` has returned true for a given `CMBuffer`, it must always return true for that `CMBuffer`.

Durations must always be positive.

## Topics

### Properties

- [compare](cmbuffercallbacks/compare.md): This callback is called multiple times from [CMBufferQueueEnqueue](cmbufferqueueenqueue%28__buffer_%29.md), to perform an insertion sort.
- [CMBufferCompareCallback](cmbuffercomparecallback.md): Callback that compares one `CMBuffer` with another.
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

## See Also

### Creating a Queue

- [CMBufferQueueCreateWithHandlers](cmbufferqueuecreatewithhandlers%28________%29.md): Creates a buffer queue with handlers to inspect buffers.
- [CMBufferHandlers](cmbufferhandlers.md): A structure that stores the handlers that perform buffer operations.
- [CMBufferQueueCreate](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md): Creates a buffer queue with callbacks to inspect buffers.
