> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometryelement/subscript(_:)](https://developer.apple.com/documentation/arkit/argeometryelement/subscript(_:))

# subscript(\_:)

**Framework:** ARKit  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Provides an array of vertex indices that respresents the geometric primitive at the subscripted index.

## Declaration

```swift
@nonobjc subscript(index: Int) -> [Int32] { get }
```

<a id="Discussion"></a>

## Discussion

This subscript operates on geometry elements of type [Int32](https://developer.apple.com/documentation/swift/int32) with `4` [bytesPerIndex](bytesperindex.md). In the case of the [faces](../armeshgeometry/faces.md) property, this operator returns an array of size `3`. The contents of the array are vertex indices that compose a triangle primitive, which represents the face identified by the argument face index.

## See Also

### Accessing Index Data

- [buffer](buffer.md): A Metal buffer containing primitive data.
