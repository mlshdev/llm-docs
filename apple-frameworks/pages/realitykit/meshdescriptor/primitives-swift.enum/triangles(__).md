> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdescriptor/primitives-swift.enum/triangles(_:)](https://developer.apple.com/documentation/realitykit/meshdescriptor/primitives-swift.enum/triangles(_:))

# MeshDescriptor.Primitives.triangles(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Defines one or more triangles with an integer array of indices.

## Declaration

```swift
case triangles([UInt32])
```

<a id="discussion"></a>

## Discussion

Add three vertex index integers per triangle. For example, you can represent a single triangle with three indices.

```swift
.triangles([0, 1, 2])
```
