> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/numsamples](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/numsamples)

# numSamples

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of media samples the buffer contains.

## Declaration

```swift
var numSamples: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value is `0` if an error occurs.

## See Also

### Inspecting Size Information

- [sampleSizes()](samplesizes%28%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.
- [sampleSize(at:)](samplesize%28at_%29.md): Returns the size of a sample in bytes.
- [totalSampleSize](totalsamplesize.md): The total size in bytes of sample data in the buffer.
