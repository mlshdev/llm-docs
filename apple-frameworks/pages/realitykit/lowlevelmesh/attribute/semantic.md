> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/attribute/semantic](https://developer.apple.com/documentation/realitykit/lowlevelmesh/attribute/semantic)

# semantic

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The semantic of the vertex attribute, which describes how you want RealityKit to interpret the attribute.

## Declaration

```swift
var semantic: LowLevelMesh.VertexSemantic
```

<a id="discussion"></a>

## Discussion

RealityKit consults the vertex semantic when interpreting the data in your [LowLevelMesh](../../lowlevelmesh.md). For example, an attribute with the semantic value of [LowLevelMesh.VertexSemantic.position](../vertexsemantic/position.md) uses to determine the position of a vertex.

## See Also

### Describing an attribute

- [format](format.md): The format of the vertex attribute.
- [offset](offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [layoutIndex](layoutindex.md): The index of the layout that contains this attribute.
