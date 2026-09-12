> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetdecodetimestamp(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetdecodetimestamp(_:))

# CMSampleBufferGetDecodeTimeStamp(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetDecodeTimeStamp(_ sbuf: CMSampleBuffer) -> CMTime
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The numerically earliest sample decode timestamp in the `CMSampleBuffer` or `kCMTimeInvalid` if there is an error.

<a id="Discussion"></a>

## Discussion

The returned decode timestamp is always the decode timestamp of the first sample in the buffer, because even out-of-presentation-order samples are expected to be in decode order in the buffer.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration(\_:)](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp(\_:)](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration(\_:)](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp(\_:)](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp(\_:newValue:)](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo(\_:at:timingInfoOut:)](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.

# CMSampleBufferGetDecodeTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.

## Declaration

```objectivec
extern CMTime CMSampleBufferGetDecodeTimeStamp(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The numerically earliest sample decode timestamp in the `CMSampleBuffer` or `kCMTimeInvalid` if there is an error.

<a id="Discussion"></a>

## Discussion

The returned decode timestamp is always the decode timestamp of the first sample in the buffer, because even out-of-presentation-order samples are expected to be in decode order in the buffer.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.
