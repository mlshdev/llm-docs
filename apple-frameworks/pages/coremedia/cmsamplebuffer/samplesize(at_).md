> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/samplesize(at:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/samplesize(at:))

# sampleSize(at:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the size of a sample in bytes.

## Declaration

```swift
func sampleSize(at sampleIndex: Int) -> Int
```

## Parameters

- `sampleIndex`: The index of the sample to query.

<a id="return-value"></a>

## Return Value

The size of the sample.

<a id="Discussion"></a>

## Discussion

If you specify a sample index that isn’t in the range, the system returns `0`. It also returns `0` if the sample buffer contains no sizes, which occurs if the samples in the buffer are noncontiguous, such as noninterleaved audio, or if the sample buffer contains a [CVImageBuffer](../../corevideo/cvimagebuffer-q40.md).

## See Also

### Inspecting Size Information

- [numSamples](numsamples.md): The number of media samples the buffer contains.
- [sampleSizes()](samplesizes%28%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.
- [totalSampleSize](totalsamplesize.md): The total size in bytes of sample data in the buffer.
