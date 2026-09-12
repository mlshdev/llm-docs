> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuegetfirstdecodetimestamp(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuegetfirstdecodetimestamp(_:))

# CMBufferQueueGetFirstDecodeTimeStamp(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the decode timestamp of the first buffer in a buffer queue.

## Declaration

```swift
func CMBufferQueueGetFirstDecodeTimeStamp(_ queue: CMBufferQueue) -> CMTime
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

The decode timestamp of the first buffer in the interrogated `CMBufferQueue`.

<a id="Discussion"></a>

## Discussion

This API is is a faster alternative to [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md),                but only gives the same answer if your queue is in decode order.                If the `getDecodeTimeStamp` callback is `NULL`, `kCMTimeInvalid` will                be returned.

## See Also

### Inspecting Duration and Timing

- [CMBufferQueueGetDuration(\_:)](cmbufferqueuegetduration%28__%29.md): Gets the duration of a buffer queue.
- [CMBufferQueueGetMinDecodeTimeStamp(\_:)](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp(\_:)](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetFirstPresentationTimeStamp(\_:)](cmbufferqueuegetfirstpresentationtimestamp%28__%29.md): Gets the presentation timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp(\_:)](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp(\_:)](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS()](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers()](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.

# CMBufferQueueGetFirstDecodeTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the decode timestamp of the first buffer in a buffer queue.

## Declaration

```objectivec
extern CMTime CMBufferQueueGetFirstDecodeTimeStamp(CMBufferQueueRef queue);
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

The decode timestamp of the first buffer in the interrogated `CMBufferQueue`.

<a id="Discussion"></a>

## Discussion

This API is is a faster alternative to [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md),                but only gives the same answer if your queue is in decode order.                If the `getDecodeTimeStamp` callback is `NULL`, `kCMTimeInvalid` will                be returned.

## See Also

### Inspecting Duration and Timing

- [CMBufferQueueGetDuration](cmbufferqueuegetduration%28__%29.md): Gets the duration of a buffer queue.
- [CMBufferQueueGetMinDecodeTimeStamp](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetFirstPresentationTimeStamp](cmbufferqueuegetfirstpresentationtimestamp%28__%29.md): Gets the presentation timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.
