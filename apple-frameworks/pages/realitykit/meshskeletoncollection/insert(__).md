> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshskeletoncollection/insert(_:)

# insert(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Add a new skeleton to the container. Returns true if added. Returns false if it already exists.

## Declaration

```swift
@discardableResult mutating func insert(_ instance: MeshResource.Skeleton) -> Bool
```
