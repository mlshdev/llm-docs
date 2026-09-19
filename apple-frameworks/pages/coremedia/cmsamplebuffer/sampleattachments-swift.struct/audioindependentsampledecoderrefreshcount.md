> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/audioindependentsampledecoderrefreshcount

# audioIndependentSampleDecoderRefreshCount

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Only present if the audio sample is an independent frame or immediate playout frame.

## Declaration

```swift
var audioIndependentSampleDecoderRefreshCount: Int? { get set }
```

<a id="discussion"></a>

## Discussion

Zero indicates an Immediate Playout Frame. Non-zero indicates an Independent Frame.
