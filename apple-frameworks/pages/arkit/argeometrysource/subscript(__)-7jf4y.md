> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometrysource/subscript(_:)-7jf4y](https://developer.apple.com/documentation/arkit/argeometrysource/subscript(_:)-7jf4y)

# subscript(\_:)

**Framework:** ARKit  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Provides the number at the subscripted index.

## Declaration

```swift
@nonobjc subscript(index: Int32) -> CUnsignedChar { get }
```

<a id="Discussion"></a>

## Discussion

This subscript operates on one-component geometry sources with a [format](format.md) of [MTLVertexFormat.uchar](../../metal/mtlvertexformat/uchar.md), such as [classification](../armeshgeometry/classification.md).

## See Also

### Accessing Geometry

- [subscript(\_:)](subscript%28__%29-3v98f.md): Provides the source float triplet at the subscripted index.
- [buffer](buffer.md): A Metal buffer that contains a list of vectors.
