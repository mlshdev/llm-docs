> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/init(unsafemarkeronlysamplebuffer:)

# init(unsafeMarkerOnlySampleBuffer:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a ready sample buffer with marker content from an existing sample buffer.

## Declaration

```swift
init(unsafeMarkerOnlySampleBuffer unsafeBuffer: sending CMSampleBuffer)
```

<a id="discussion"></a>

## Discussion

Marker sample buffers have no content and no format description.
