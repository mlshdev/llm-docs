> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffersetoutputpresentationtimestamp(_:newvalue:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffersetoutputpresentationtimestamp(_:newvalue:))

# CMSampleBufferSetOutputPresentationTimeStamp(\_:newValue:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets an output presentation timestamp to use in place of a calculated value.

## Declaration

```swift
func CMSampleBufferSetOutputPresentationTimeStamp(_ sbuf: CMSampleBuffer, newValue outputPresentationTimeStamp: CMTime) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer being interrogated
- `outputPresentationTimeStamp`: New value for `OutputPresentationTimeStamp`. Pass `kCMTimeInvalid` to go back to the default calculation.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

The output presentation timestamp is the time at which the decoded, trimmed, stretched and possibly reversed samples should commence being presented. By default, this is calculated by calling `CMSampleBufferGetOutputPresentationTimeStamp`. Call `CMSampleBufferSetOutputPresentationTimeStamp` to explicitly set the value for `CMSampleBufferGetOutputPresentationTimeStamp` to return.

For general forward playback in a scaled edit, the OutputPresentationTimeStamp should be set to:

`((PresentationTimeStamp + TrimDurationAtStart - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime.`

For general reversed playback `OutputPresentationTimeStamp` should be set to:

`((PresentationTimeStamp + Duration - TrimDurationAtEnd - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime`.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration(\_:)](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp(\_:)](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp(\_:)](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration(\_:)](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp(\_:)](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferGetSampleTimingInfo(\_:at:timingInfoOut:)](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.

# CMSampleBufferSetOutputPresentationTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets an output presentation timestamp to use in place of a calculated value.

## Declaration

```objectivec
extern OSStatus CMSampleBufferSetOutputPresentationTimeStamp(CMSampleBufferRef sbuf, CMTime outputPresentationTimeStamp);
```

## Parameters

- `sbuf`: The sample buffer being interrogated
- `outputPresentationTimeStamp`: New value for `OutputPresentationTimeStamp`. Pass `kCMTimeInvalid` to go back to the default calculation.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

The output presentation timestamp is the time at which the decoded, trimmed, stretched and possibly reversed samples should commence being presented. By default, this is calculated by calling `CMSampleBufferGetOutputPresentationTimeStamp`. Call `CMSampleBufferSetOutputPresentationTimeStamp` to explicitly set the value for `CMSampleBufferGetOutputPresentationTimeStamp` to return.

For general forward playback in a scaled edit, the OutputPresentationTimeStamp should be set to:

`((PresentationTimeStamp + TrimDurationAtStart - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime.`

For general reversed playback `OutputPresentationTimeStamp` should be set to:

`((PresentationTimeStamp + Duration - TrimDurationAtEnd - EditStartMediaTime) / EditSpeedMultiplier) + EditStartTrackTime`.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferGetSampleTimingInfo](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.
