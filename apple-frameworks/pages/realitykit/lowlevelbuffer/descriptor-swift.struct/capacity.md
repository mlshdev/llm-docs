> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelbuffer/descriptor-swift.struct/capacity

# capacity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Length of the buffer in bytes.

## Declaration

```swift
var capacity: Int
```

<a id="discussion"></a>

## Discussion

Where it is more efficient to do so, returned buffers may have capacity larger than this value.
