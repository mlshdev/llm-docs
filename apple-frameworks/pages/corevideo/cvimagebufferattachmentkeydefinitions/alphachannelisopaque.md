> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvimagebufferattachmentkeydefinitions/alphachannelisopaque

# alphaChannelIsOpaque

**Framework:** Core Video  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

True if the alpha channel in the image data is fully opaque.

## Declaration

```swift
static var alphaChannelIsOpaque: CVAttachmentKeyDefinition<Self.ShouldPropagate, Bool> { get }
```

<a id="discussion"></a>

## Discussion

This key is not used if the pixel format type has no alpha channel.
