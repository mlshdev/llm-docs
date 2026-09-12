> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct/instancecapacity](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/descriptor-swift.struct/instancecapacity)

# instanceCapacity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The maximum number of instances the mesh supports when using per-instance vertex data.

## Declaration

```swift
var instanceCapacity: Int { get set }
```

<a id="discussion"></a>

## Discussion

Set this to the maximum number of instances you intend to draw when any `Layout` in `vertexLayouts` uses a `stepFunction` of `.perInstance`. Defaults to `0`.

Corresponds to `MTLVertexDescriptor`’s per-instance buffer layout capacity.
