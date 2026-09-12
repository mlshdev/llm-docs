> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetoutputpresentationtimestamp(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetoutputpresentationtimestamp(_:))

# CMSampleBufferGetOutputPresentationTimeStamp(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the output presentation timestamp of a sample buffer.

## Declaration

```swift
func CMSampleBufferGetOutputPresentationTimeStamp(_ sbuf: CMSampleBuffer) -> CMTime
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The output presentation timestamp of the `CMSampleBuffer` or `kCMTimeInvalid` if there is an error.

<a id="Discussion"></a>

## Discussion

The output presentation timestamp is the time at which the decoded, trimmed, stretched, and possibly reversed samples should start being presented. If [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md) has been called to explicitly set the output PTS, [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md) returns it. If not, [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md) calculates its result as `(PresentationTimeStamp + TrimDurationAtStart)` unless `kCMSampleBufferAttachmentKey_Reverse` is `kCFBooleanTrue`, in which case it calculates the result as  `(PresentationTimeStamp + Duration - TrimDurationAtEnd)`. These are generally correct for un-stretched, un-shifted playback.

For general forward playback in a scaled edit, the `OutputPresentationTimeStamp` should be set to:

`((PresentationTimeStamp + TrimDurationAtStart - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime`

For general reversed playback:

`((PresentationTimeStamp + Duration - TrimDurationAtEnd - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime`

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration(\_:)](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp(\_:)](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp(\_:)](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration(\_:)](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp(\_:)](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp(\_:newValue:)](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo(\_:at:timingInfoOut:)](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.

# CMSampleBufferGetOutputPresentationTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the output presentation timestamp of a sample buffer.

## Declaration

```objectivec
extern CMTime CMSampleBufferGetOutputPresentationTimeStamp(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The output presentation timestamp of the `CMSampleBuffer` or `kCMTimeInvalid` if there is an error.

<a id="Discussion"></a>

## Discussion

The output presentation timestamp is the time at which the decoded, trimmed, stretched, and possibly reversed samples should start being presented. If [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md) has been called to explicitly set the output PTS, [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md) returns it. If not, [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md) calculates its result as `(PresentationTimeStamp + TrimDurationAtStart)` unless `kCMSampleBufferAttachmentKey_Reverse` is `kCFBooleanTrue`, in which case it calculates the result as  `(PresentationTimeStamp + Duration - TrimDurationAtEnd)`. These are generally correct for un-stretched, un-shifted playback.

For general forward playback in a scaled edit, the `OutputPresentationTimeStamp` should be set to:

`((PresentationTimeStamp + TrimDurationAtStart - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime`

For general reversed playback:

`((PresentationTimeStamp + Duration - TrimDurationAtEnd - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime`

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.
