> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometrysource/subscript(_:)-3v98f](https://developer.apple.com/documentation/arkit/argeometrysource/subscript(_:)-3v98f)

# subscript(\_:)

**Framework:** ARKit  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Provides the source float triplet at the subscripted index.

## Declaration

```swift
@nonobjc subscript(index: Int32) -> (Float, Float, Float) { get }
```

<a id="Discussion"></a>

## Discussion

This subscript operates on three-component geometry sources with a [format](format.md) of [MTLVertexFormat.float3](../../metal/mtlvertexformat/float3.md). This operator returns an (x, y, z) offset relative to its parent anchor’s position that corresponds to the subscripted vertex position in [vertices](../armeshgeometry/vertices.md) and to the subscripted normal vector in [normals](../armeshgeometry/normals.md).

## See Also

### Accessing Geometry

- [subscript(\_:)](subscript%28__%29-7jf4y.md): Provides the number at the subscripted index.
- [buffer](buffer.md): A Metal buffer that contains a list of vectors.
