> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/copypcmdata(fromrange:into:)

# copyPCMData(fromRange:into:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Copies PCM audio data from the sample buffer into a pre-allocated `AudioBufferList`.

## Declaration

```swift
func copyPCMData(fromRange range: Range<Int>, into bufferList: UnsafeMutablePointer<AudioBufferList>) throws
```

## Parameters

- `range`: Range of frames to copy.
- `bufferList`: Pre-allocated `AudioBufferList`.

<a id="discussion"></a>

## Discussion

The `AudioBufferList` must contain the same number of channels and its data buffers must be sized to hold the specified number of frames.

> **Throws**

> `CMSampleBuffer.Error.sampleIndexOutOfRange` if the range does not fit in the sample buffer or if the bufferList does not have enough capacity.
