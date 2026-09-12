> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshbuffercontainer/subscript(_:)](https://developer.apple.com/documentation/realitykit/meshbuffercontainer/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The buffer for a given semantic. There can only be one buffer for any given ID.

## Declaration

```swift
subscript<S>(semantic: S) -> MeshBuffer<S.Element>? where S : MeshBufferSemantic { get set }
```
