> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometrysource/format](https://developer.apple.com/documentation/arkit/argeometrysource/format)

# format (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The type of vector data in the buffer.

## Declaration

```swift
var format: MTLVertexFormat { get }
```

<a id="Discussion"></a>

## Discussion

## See Also

### Getting Geometry Information

- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [count](count.md): The number of vectors in the buffer.
- [offset](offset.md): The offset, in bytes, from the beginning of the buffer.
- [stride](stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.

# format (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The type of vector data in the buffer.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) MTLVertexFormat format;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Getting Geometry Information

- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [count](count.md): The number of vectors in the buffer.
- [offset](offset.md): The offset, in bytes, from the beginning of the buffer.
- [stride](stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.
