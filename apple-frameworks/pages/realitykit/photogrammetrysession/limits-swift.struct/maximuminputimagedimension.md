> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysession/limits-swift.struct/maximuminputimagedimension

# maximumInputImageDimension

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The maximum allowed dimension (either height or width) of input images that can be ingested by the reconstruction session. If images larger than this are provided, they will be ignored and an `.invalidSample` message will be output.

## Declaration

```swift
var maximumInputImageDimension: Int { get }
```
