> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergettotalsamplesize(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergettotalsamplesize(_:))

# CMSampleBufferGetTotalSampleSize(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the total size in bytes of sample data in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetTotalSampleSize(_ sbuf: CMSampleBuffer) -> Int
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

Total size in bytes of sample data in the `CMSampleBuffer`. If there are no sample sizes in this `CMSampleBuffer`, a size of 0 will be returned.

## See Also

### Inspecting Size Information

- [CMSampleBufferGetNumSamples(\_:)](cmsamplebuffergetnumsamples%28__%29.md): Returns the number of media samples in a sample buffer.
- [CMSampleBufferGetSampleSize(\_:at:)](cmsamplebuffergetsamplesize%28__at_%29.md): Returns the size in bytes of a specified sample in a sample buffer.
- [CMSampleBufferGetSampleSizeArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.

# CMSampleBufferGetTotalSampleSize (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the total size in bytes of sample data in a sample buffer.

## Declaration

```objectivec
extern size_t CMSampleBufferGetTotalSampleSize(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

Total size in bytes of sample data in the `CMSampleBuffer`. If there are no sample sizes in this `CMSampleBuffer`, a size of 0 will be returned.

## See Also

### Inspecting Size Information

- [CMSampleBufferGetNumSamples](cmsamplebuffergetnumsamples%28__%29.md): Returns the number of media samples in a sample buffer.
- [CMSampleBufferGetSampleSize](cmsamplebuffergetsamplesize%28__at_%29.md): Returns the size in bytes of a specified sample in a sample buffer.
- [CMSampleBufferGetSampleSizeArray](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.
