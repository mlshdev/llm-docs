> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/isdependedonbyothers](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/isdependedonbyothers)

# isDependedOnByOthers

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether other samples depend on this sample for decoding.

## Declaration

```swift
var isDependedOnByOthers: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

This key has no default value. If this key is not present, dependency information for the sample is unknown. If this key is present and its value is false, the frame is considered droppable.

This attachment is read from and written to media files.
