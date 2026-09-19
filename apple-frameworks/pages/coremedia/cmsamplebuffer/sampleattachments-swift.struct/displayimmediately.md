> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/displayimmediately

# displayImmediately

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the sample should be displayed immediately.

## Declaration

```swift
var displayImmediately: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this key is present, the sample should be displayed as soon as possible rather than according to its presentation timestamp. Use this attachment at run time to request this behavior from a display pipeline such as the `AVSampleBufferDisplayLayer` class.

This attachment is not written to media files.
