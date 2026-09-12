> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/attribute/format](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/attribute/format)

# format

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The format of the vertex attribute.

## Declaration

```swift
var format: MTLVertexFormat { get set }
```

<a id="discussion"></a>

## Discussion

When reading from a geometry modifier or surface shader, the value converts to its runtime representation using Metal’s standard rules. See `MTLVertexAttributeDescriptor.format` for details.
