> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/descriptor-swift.struct/allowsprimitiverestart](https://developer.apple.com/documentation/realitykit/lowlevelmesh/descriptor-swift.struct/allowsprimitiverestart)

# allowsPrimitiveRestart

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

When true, primitive-restart index values (0xFFFF for .uint16, 0xFFFFFFFF for .uint32) are permitted in the index buffer. Every part must then use a strip topology (.triangleStrip or .lineStrip); any other topology is rejected.

## Declaration

```swift
var allowsPrimitiveRestart: Bool
```
