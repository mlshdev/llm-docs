> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvproresrawmetadata/recommendedcrop-swift.property

# recommendedCrop

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The recommended number of: pixels to discard from the start (left) of each row of the image; pixels to discard from the end (right) of each row of the image; rows of pixels to discard from the top of the image; and rows of pixels to discard from the bottom of the image. Pixels/rows are discarded after raw conversion.

## Declaration

```swift
var recommendedCrop: CVProResRawMetadata.RecommendedCrop
```
