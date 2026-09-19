> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvimagebufferattachmentkeydefinitions/ambientviewingenvironment

# ambientViewingEnvironment

**Framework:** Core Video  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The ambient viewing environment for the image. The value for this key is an 8 byte big-endian data sequence to match the payload of the Ambient Viewing Environment SEI message.

## Declaration

```swift
static var ambientViewingEnvironment: CVAttachmentKeyDefinition<Self.ShouldPropagate, Data> { get }
```
