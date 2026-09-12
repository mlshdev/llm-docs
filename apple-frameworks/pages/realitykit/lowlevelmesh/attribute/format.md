> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/attribute/format](https://developer.apple.com/documentation/realitykit/lowlevelmesh/attribute/format)

# format

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The format of the vertex attribute.

## Declaration

```swift
var format: MTLVertexFormat
```

<a id="discussion"></a>

## Discussion

When reading from a geometry modifier or surface shader, the value converts to its runtime representation using Metal’s standard rules.

For details about Metal’s standard rules, see [format](../../../metal/mtlvertexattributedescriptor/format.md).

## See Also

### Describing an attribute

- [offset](offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [layoutIndex](layoutindex.md): The index of the layout that contains this attribute.
- [semantic](semantic.md): The semantic of the vertex attribute, which describes how you want RealityKit to interpret the attribute.
