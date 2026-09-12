> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetsampletiminginfoarray(_:entrycount:arraytofill:entriesneededout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetsampletiminginfoarray(_:entrycount:arraytofill:entriesneededout:))

# CMSampleBufferGetSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves an array of sample timing information structures that represents each sample in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetSampleTimingInfoArray(_ sbuf: CMSampleBuffer, entryCount numSampleTimingEntries: CMItemCount, arrayToFill timingArrayOut: UnsafeMutablePointer<CMSampleTimingInfo>?, entriesNeededOut timingArrayEntriesNeededOut: UnsafeMutablePointer<CMItemCount>?) -> OSStatus
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `numSampleTimingEntries`: Number of entries in `timingArray`.\`\`
- `timingArrayOut`: On output, points to an array of `CMSampleTimingInfo` structs to receive the timing info.
- `timingArrayEntriesNeededOut`: Number of entries needed for the result.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

If only one `CMSampleTimingInfo` struct is returned, it applies to all samples in the buffer. See documentation of [CMSampleTimingInfo](cmsampletiminginfo.md) for details of how a single `CMSampleTimingInfo` struct can apply to multiple samples.

The `timingArrayOut` must be allocated by the caller, and the number of entries allocated must be passed in `timingArrayEntries`. If `timingArrayOut` is `NULL`, `timingArrayEntriesNeededOut` will return the required number of entries. Similarly, if `timingArrayEntriesNeededOut` is too small, [CMSampleBuffer](cmsamplebuffer.md) will be returned, and `timingArrayEntriesNeededOut` will return the required number of entries. In either case, the caller can then make an appropriately-sized `timingArrayOut` and call again. For example, the caller might pass the address of a `CMSampleTimingInfo` struct on the stack (as `timingArrayOut`), and 1 as `timingArrayEntries`. If all samples are describable with a single `CMSampleTimingInfo` struct (or there’s only one sample in the `CMSampleBuffer`), this call will succeed. If not, it will fail, and will return the number of entries required in `timingArrayEntriesNeededOut`. Only in this case will the caller actually need to allocate an array. If there’s no `timingInfo` in this `CMSampleBuffer`, [CMSampleBuffer](cmsamplebuffer.md) will be returned, and `timingArrayEntriesNeededOut` will be set to 0.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration(\_:)](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp(\_:)](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp(\_:)](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration(\_:)](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp(\_:)](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp(\_:newValue:)](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo(\_:at:timingInfoOut:)](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.

# CMSampleBufferGetSampleTimingInfoArray (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves an array of sample timing information structures that represents each sample in a sample buffer.

## Declaration

```objectivec
extern OSStatus CMSampleBufferGetSampleTimingInfoArray(CMSampleBufferRef sbuf, CMItemCount numSampleTimingEntries, CMSampleTimingInfo *timingArrayOut, CMItemCount *timingArrayEntriesNeededOut);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `numSampleTimingEntries`: Number of entries in `timingArray`.\`\`
- `timingArrayOut`: On output, points to an array of `CMSampleTimingInfo` structs to receive the timing info.
- `timingArrayEntriesNeededOut`: Number of entries needed for the result.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

If only one `CMSampleTimingInfo` struct is returned, it applies to all samples in the buffer. See documentation of [CMSampleTimingInfo](cmsampletiminginfo.md) for details of how a single `CMSampleTimingInfo` struct can apply to multiple samples.

The `timingArrayOut` must be allocated by the caller, and the number of entries allocated must be passed in `timingArrayEntries`. If `timingArrayOut` is `NULL`, `timingArrayEntriesNeededOut` will return the required number of entries. Similarly, if `timingArrayEntriesNeededOut` is too small, [CMSampleBufferRef](cmsamplebuffer.md) will be returned, and `timingArrayEntriesNeededOut` will return the required number of entries. In either case, the caller can then make an appropriately-sized `timingArrayOut` and call again. For example, the caller might pass the address of a `CMSampleTimingInfo` struct on the stack (as `timingArrayOut`), and 1 as `timingArrayEntries`. If all samples are describable with a single `CMSampleTimingInfo` struct (or there’s only one sample in the `CMSampleBuffer`), this call will succeed. If not, it will fail, and will return the number of entries required in `timingArrayEntriesNeededOut`. Only in this case will the caller actually need to allocate an array. If there’s no `timingInfo` in this `CMSampleBuffer`, [CMSampleBufferRef](cmsamplebuffer.md) will be returned, and `timingArrayEntriesNeededOut` will be set to 0.

## See Also

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.
