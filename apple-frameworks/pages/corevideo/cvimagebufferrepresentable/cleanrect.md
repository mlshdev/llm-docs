> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvimagebufferrepresentable/cleanrect

# cleanRect

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Source rectangle of a CVImageBuffer that represents the clean aperture of the buffer in encoded pixels. For example, an NTSC DV frame would return a CGRect with an origin of 8,0 and a size of 704,480. Note that the origin of this rect is always the lower left corner. This is the same coordinate system as used by CoreImage.

## Declaration

```swift
var cleanRect: CGRect { get }
```
