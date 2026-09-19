> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/samplepropertiescollection/timings

# timings

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access sample timings.

## Declaration

```swift
var timings: CMSampleBuffer.TimingPerSample? { get set }
```

<a id="discussion"></a>

## Discussion

When setting distinct timings, the number of entries must match [count](count.md).
