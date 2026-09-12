> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebufferattachmentkeydefinitions/contentlightlevelinfo](https://developer.apple.com/documentation/corevideo/cvimagebufferattachmentkeydefinitions/contentlightlevelinfo)

# contentLightLevelInfo

**Framework:** Core Video  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The content light level information for the image.

## Declaration

```swift
static var contentLightLevelInfo: CVAttachmentKeyDefinition<Self.ShouldPropagate, Data> { get }
```

<a id="discussion"></a>

## Discussion

The value for this key is a 4 byte big-endian data sequence to match the payload of the content light level information metadata in the supplemental enhancement information (SEI) message.
