> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/donotdisplay

# doNotDisplay

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the sample should be decoded but not displayed.

## Declaration

```swift
var doNotDisplay: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Use this attachment at run time to request this behavior from a display pipeline such as the `AVSampleBufferDisplayLayer` class.

This attachment is not written to media files.
