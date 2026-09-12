> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/postdecodeprocessingmetadata](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/postdecodeprocessingmetadata)

# postDecodeProcessingMetadata

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Represents the sequence and frame level metadata for post decode processing. This attachment is used to pass sequence and frame level metadata from a format reader to a decoder or RAW processor. The value should only contain plist types.

## Declaration

```swift
var postDecodeProcessingMetadata: [String : any Sendable]? { get set }
```
