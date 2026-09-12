> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetsampletiminginfo(_:at:timinginfoout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetsampletiminginfo(_:at:timinginfoout:))

# CMSampleBufferGetSampleTimingInfo(\_:at:timingInfoOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a timing information structure that describes a specified sample in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetSampleTimingInfo(_ sbuf: CMSampleBuffer, at sampleIndex: CMItemIndex, timingInfoOut: UnsafeMutablePointer<CMSampleTimingInfo>) -> OSStatus
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `sampleIndex`: Sample index (0 is the first sample in `sbuf`).
- `timingInfoOut`: On output, points to a single `CMSampleTimingInfo` struct to receive the timing info.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

A sample-specific [CMSampleTimingInfo](cmsampletiminginfo.md) struct will be returned with a sample-specific `presentationTimeStamp` and `decodeTimeStamp`, even if a single `CMSampleTimingInfo` struct was used during creation to describe all the samples in the buffer. The timing info struct must be allocated by the caller. If the sample index isn’t in the range 0…numSamples-1, [CMSampleBuffer](cmsamplebuffer.md) will be returned. If there’s no `timingInfo` in this `CMSampleBuffer`, [CMSampleBuffer](cmsamplebuffer.md) will be returned.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration(\_:)](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp(\_:)](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp(\_:)](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration(\_:)](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp(\_:)](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp(\_:newValue:)](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.

# CMSampleBufferGetSampleTimingInfo (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a timing information structure that describes a specified sample in a sample buffer.

## Declaration

```objectivec
extern OSStatus CMSampleBufferGetSampleTimingInfo(CMSampleBufferRef sbuf, CMItemIndex sampleIndex, CMSampleTimingInfo *timingInfoOut);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `sampleIndex`: Sample index (0 is the first sample in `sbuf`).
- `timingInfoOut`: On output, points to a single `CMSampleTimingInfo` struct to receive the timing info.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

A sample-specific [CMSampleTimingInfo](cmsampletiminginfo.md) struct will be returned with a sample-specific `presentationTimeStamp` and `decodeTimeStamp`, even if a single `CMSampleTimingInfo` struct was used during creation to describe all the samples in the buffer. The timing info struct must be allocated by the caller. If the sample index isn’t in the range 0…numSamples-1, [CMSampleBufferRef](cmsamplebuffer.md) will be returned. If there’s no `timingInfo` in this `CMSampleBuffer`, [CMSampleBufferRef](cmsamplebuffer.md) will be returned.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfoArray](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.
