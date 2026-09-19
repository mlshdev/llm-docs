> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/part/jointinfluences

# jointInfluences

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A buffer of vertex-joint influences which defines how the mesh deforms in response to the skeleton that it is bound to. Each vertex may be influenced by one or more joints defined by the skeleton.

## Declaration

```swift
var jointInfluences: MeshResource.JointInfluences? { get set }
```
