> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/attribute/layoutindex](https://developer.apple.com/documentation/realitykit/lowlevelmesh/attribute/layoutindex)

# layoutIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The index of the layout that contains this attribute.

## Declaration

```swift
var layoutIndex: Int
```

<a id="discussion"></a>

## Discussion

The index refers to an entry in [vertexLayouts](../descriptor-swift.struct/vertexlayouts.md).

## See Also

### Describing an attribute

- [format](format.md): The format of the vertex attribute.
- [offset](offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [semantic](semantic.md): The semantic of the vertex attribute, which describes how you want RealityKit to interpret the attribute.
