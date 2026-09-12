> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetsamplesize(_:at:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetsamplesize(_:at:))

# CMSampleBufferGetSampleSize(\_:at:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the size in bytes of a specified sample in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetSampleSize(_ sbuf: CMSampleBuffer, at sampleIndex: CMItemIndex) -> Int
```

## Parameters

- `sbuf`: The sample buffer to inspect.
- `sampleIndex`: The zero-based sample index.

<a id="return-value"></a>

## Return Value

The size in bytes of the specified sample in the sample buffer. If the sample index is not in the range 0 to `numSamples`-1, a size of 0 will be returned.If there are no sample sizes in this sample buffer, a size of 0 will be returned.This will be true, for example, if the samples in the buffer are non-contiguous (eg. non-interleaved audio, where the channel values for a single sample are scattered through the buffer), or if this sample buffer contains a `CVImageBuffer`.

## See Also

### Inspecting Size Information

- [CMSampleBufferGetNumSamples(\_:)](cmsamplebuffergetnumsamples%28__%29.md): Returns the number of media samples in a sample buffer.
- [CMSampleBufferGetTotalSampleSize(\_:)](cmsamplebuffergettotalsamplesize%28__%29.md): Returns the total size in bytes of sample data in a sample buffer.
- [CMSampleBufferGetSampleSizeArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.

# CMSampleBufferGetSampleSize (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the size in bytes of a specified sample in a sample buffer.

## Declaration

```objectivec
extern size_t CMSampleBufferGetSampleSize(CMSampleBufferRef sbuf, CMItemIndex sampleIndex);
```

## Parameters

- `sbuf`: The sample buffer to inspect.
- `sampleIndex`: The zero-based sample index.

<a id="return-value"></a>

## Return Value

The size in bytes of the specified sample in the sample buffer. If the sample index is not in the range 0 to `numSamples`-1, a size of 0 will be returned.If there are no sample sizes in this sample buffer, a size of 0 will be returned.This will be true, for example, if the samples in the buffer are non-contiguous (eg. non-interleaved audio, where the channel values for a single sample are scattered through the buffer), or if this sample buffer contains a `CVImageBuffer`.

## See Also

### Inspecting Size Information

- [CMSampleBufferGetNumSamples](cmsamplebuffergetnumsamples%28__%29.md): Returns the number of media samples in a sample buffer.
- [CMSampleBufferGetTotalSampleSize](cmsamplebuffergettotalsamplesize%28__%29.md): Returns the total size in bytes of sample data in a sample buffer.
- [CMSampleBufferGetSampleSizeArray](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.
