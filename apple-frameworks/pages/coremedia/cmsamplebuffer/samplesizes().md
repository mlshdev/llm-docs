> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/samplesizes()](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/samplesizes())

# sampleSizes()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves an array of sample sizes that represents each sample in a sample buffer.

## Declaration

```swift
func sampleSizes() throws -> [Int]
```

<a id="return-value"></a>

## Return Value

An array of sample sizes.

<a id="Discussion"></a>

## Discussion

If the result contains a single element, all samples in the buffer are of this size. If there are no sample sizes in this buffer, the array is empty. This can occur if the samples in the buffer are noncontiguous, like noninterleaved audio, or if the sample buffer contains a [CVImageBuffer](../../corevideo/cvimagebuffer-q40.md).

## See Also

### Inspecting Size Information

- [numSamples](numsamples.md): The number of media samples the buffer contains.
- [sampleSize(at:)](samplesize%28at_%29.md): Returns the size of a sample in bytes.
- [totalSampleSize](totalsamplesize.md): The total size in bytes of sample data in the buffer.
