> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetnumsamples(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetnumsamples(_:))

# CMSampleBufferGetNumSamples(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the number of media samples in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetNumSamples(_ sbuf: CMSampleBuffer) -> CMItemCount
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The number of media samples in the `CMSampleBuffer`. 0 is returned if there is an error.

## See Also

### Inspecting Size Information

- [CMSampleBufferGetTotalSampleSize(\_:)](cmsamplebuffergettotalsamplesize%28__%29.md): Returns the total size in bytes of sample data in a sample buffer.
- [CMSampleBufferGetSampleSize(\_:at:)](cmsamplebuffergetsamplesize%28__at_%29.md): Returns the size in bytes of a specified sample in a sample buffer.
- [CMSampleBufferGetSampleSizeArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.

# CMSampleBufferGetNumSamples (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the number of media samples in a sample buffer.

## Declaration

```objectivec
extern CMItemCount CMSampleBufferGetNumSamples(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The number of media samples in the `CMSampleBuffer`. 0 is returned if there is an error.

## See Also

### Inspecting Size Information

- [CMSampleBufferGetTotalSampleSize](cmsamplebuffergettotalsamplesize%28__%29.md): Returns the total size in bytes of sample data in a sample buffer.
- [CMSampleBufferGetSampleSize](cmsamplebuffergetsamplesize%28__at_%29.md): Returns the size in bytes of a specified sample in a sample buffer.
- [CMSampleBufferGetSampleSizeArray](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.
