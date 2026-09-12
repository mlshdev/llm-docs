> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/totalsamplesize](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/totalsamplesize)

# totalSampleSize

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The total size in bytes of sample data in the buffer.

## Declaration

```swift
var totalSampleSize: Int { get }
```

<a id="Discussion"></a>

## Discussion

If a sample buffer doesn’t contain same sizes, the value of this property is `0`.

## See Also

### Inspecting Size Information

- [numSamples](numsamples.md): The number of media samples the buffer contains.
- [sampleSizes()](samplesizes%28%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.
- [sampleSize(at:)](samplesize%28at_%29.md): Returns the size of a sample in bytes.
