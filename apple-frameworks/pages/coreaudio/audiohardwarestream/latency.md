> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwarestream/latency

# latency

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An Int containing the number of frames of latency in the stream.

## Declaration

```swift
var latency: Int { get throws }
```

<a id="discussion"></a>

## Discussion

Note that the owning device may have additional latency so it should be queried as well. If both the device and the stream say they have latency, then the total latency for the stream is the device latency summed with the stream latency.
