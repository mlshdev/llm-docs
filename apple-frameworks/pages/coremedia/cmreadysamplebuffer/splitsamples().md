> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/splitsamples()](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/splitsamples())

# splitSamples()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Split sample buffer into a smaller representation, ideally carrying a single sample per resulting sample buffer.

## Declaration

```swift
func splitSamples() -> [CMReadySampleBuffer<Content>]
```

<a id="discussion"></a>

## Discussion

Each sample buffer in the returned array will have individual samples, referring to the sample data and containing correct timing, size and attachments. Array with a single element is returned if the samples in the sample buffer can not be separated. For example:

- if sample sizes are not present
- samples are non-contiguous (e.g. non-interleaved audio)
