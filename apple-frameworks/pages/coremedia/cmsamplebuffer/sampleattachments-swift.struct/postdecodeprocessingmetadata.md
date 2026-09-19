> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/postdecodeprocessingmetadata

# postDecodeProcessingMetadata

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Represents the sequence and frame level metadata for post decode processing. This attachment is used to pass sequence and frame level metadata from a format reader to a decoder or RAW processor. The value should only contain plist types.

## Declaration

```swift
var postDecodeProcessingMetadata: [String : any Sendable]? { get set }
```
