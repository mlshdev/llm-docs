> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuegetduration(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuegetduration(_:))

# CMBufferQueueGetDuration(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the duration of a buffer queue.

## Declaration

```swift
func CMBufferQueueGetDuration(_ queue: CMBufferQueue) -> CMTime
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

Returns sum of all the individual buffer durations in the `CMBufferQueue`.

<a id="Discussion"></a>

## Discussion

The duration of the `CMBufferQueue` is the sum of all the individual                buffer durations, as reported by the `getDuration` callback (provided to                `Creating Buffer Queues`).  If there are no buffers in the queue,                `kCMTimeZero` will be returned.

## See Also

### Inspecting Duration and Timing

- [CMBufferQueueGetMinDecodeTimeStamp(\_:)](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetFirstDecodeTimeStamp(\_:)](cmbufferqueuegetfirstdecodetimestamp%28__%29.md): Gets the decode timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp(\_:)](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetFirstPresentationTimeStamp(\_:)](cmbufferqueuegetfirstpresentationtimestamp%28__%29.md): Gets the presentation timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp(\_:)](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp(\_:)](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS()](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers()](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.

# CMBufferQueueGetDuration (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the duration of a buffer queue.

## Declaration

```objectivec
extern CMTime CMBufferQueueGetDuration(CMBufferQueueRef queue);
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

Returns sum of all the individual buffer durations in the `CMBufferQueue`.

<a id="Discussion"></a>

## Discussion

The duration of the `CMBufferQueue` is the sum of all the individual                buffer durations, as reported by the `getDuration` callback (provided to                `Creating Buffer Queues`).  If there are no buffers in the queue,                `kCMTimeZero` will be returned.

## See Also

### Inspecting Duration and Timing

- [CMBufferQueueGetMinDecodeTimeStamp](cmbufferqueuegetmindecodetimestamp%28__%29.md): Gets the earliest decode timestamp of a buffer queue.
- [CMBufferQueueGetFirstDecodeTimeStamp](cmbufferqueuegetfirstdecodetimestamp%28__%29.md): Gets the decode timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetMinPresentationTimeStamp](cmbufferqueuegetminpresentationtimestamp%28__%29.md): Gets the earliest presentation timestamp of a buffer queue.
- [CMBufferQueueGetFirstPresentationTimeStamp](cmbufferqueuegetfirstpresentationtimestamp%28__%29.md): Gets the presentation timestamp of the first buffer in a buffer queue.
- [CMBufferQueueGetEndPresentationTimeStamp](cmbufferqueuegetendpresentationtimestamp%28__%29.md): Gets the greatest end presentation timestamp of a buffer queue.
- [CMBufferQueueGetMaxPresentationTimeStamp](cmbufferqueuegetmaxpresentationtimestamp%28__%29.md): Gets the greatest presentation timestamp of a buffer queue.
- [CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS](cmbufferqueuegetcallbacksforsamplebufferssortedbyoutputpts%28%29.md): Returns a pointer to a structure that contains callbacks to sort sample buffers by output presentation timestamp.
- [CMBufferQueueGetCallbacksForUnsortedSampleBuffers](cmbufferqueuegetcallbacksforunsortedsamplebuffers%28%29.md): Returns a pointer to a callback structure for unsorted sample buffers.
