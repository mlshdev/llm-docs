> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuegetfirstpresentationtimestamp(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuegetfirstpresentationtimestamp(_:))

# CMBufferQueueGetFirstPresentationTimeStamp(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the presentation timestamp of the first buffer in a buffer queue.

## Declaration

```swift
func CMBufferQueueGetFirstPresentationTimeStamp(_ queue: CMBufferQueue) -> CMTime
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

The presentation timestamp of the first buffer in the interrogated `CMBufferQueue`.

<a id="Discussion"></a>

## Discussion

This API is is a faster alternative to [CMBufferQueueTestTrigger(\_:triggerToken:)](cmbufferqueuetesttrigger%28__triggertoken_%29.md),                but only works if you know your queue is sorted by presentation                timestamp. If the `getPresentationTimeStamp` callback is `NULL`,                `kCMTimeInvalid` will be returned.

## See Also

### Inspecting Duration and Timing

- [CMBufferQueueGetDuration(\_:)](cmbufferqueuegetduration%28__%29.md): Gets the duration of a buffer queue.
- [CMBufferQueueGetMinDecodeTimeStamp(\_:)](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetFirstDecodeTimeStamp(\_:)](cmbufferqueuegetfirstdecodetimestamp%28__%29.md): Gets the decode timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp(\_:)](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp(\_:)](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp(\_:)](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS()](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers()](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.

# CMBufferQueueGetFirstPresentationTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the presentation timestamp of the first buffer in a buffer queue.

## Declaration

```objectivec
extern CMTime CMBufferQueueGetFirstPresentationTimeStamp(CMBufferQueueRef queue);
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

The presentation timestamp of the first buffer in the interrogated `CMBufferQueue`.

<a id="Discussion"></a>

## Discussion

This API is is a faster alternative to [CMBufferQueueTestTrigger](cmbufferqueuetesttrigger%28__triggertoken_%29.md),                but only works if you know your queue is sorted by presentation                timestamp. If the `getPresentationTimeStamp` callback is `NULL`,                `kCMTimeInvalid` will be returned.

## See Also

### Inspecting Duration and Timing

- [CMBufferQueueGetDuration](cmbufferqueuegetduration%28__%29.md): Gets the duration of a buffer queue.
- [CMBufferQueueGetMinDecodeTimeStamp](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetFirstDecodeTimeStamp](cmbufferqueuegetfirstdecodetimestamp%28__%29.md): Gets the decode timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.
