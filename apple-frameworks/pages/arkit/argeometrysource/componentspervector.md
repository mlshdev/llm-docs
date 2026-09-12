> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometrysource/componentspervector](https://developer.apple.com/documentation/arkit/argeometrysource/componentspervector)

# componentsPerVector (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The number of scalar components in each vector.

## Declaration

```swift
var componentsPerVector: Int { get }
```

<a id="Discussion"></a>

## Discussion

In the case that [componentsPerVector](componentspervector.md) is greater than 1, the element type of the geometry-source array is itself, a sequence.

## See Also

### Getting Geometry Information

- [count](count.md): The number of vectors in the buffer.
- [format](format.md): The type of vector data in the buffer.
- [offset](offset.md): The offset, in bytes, from the beginning of the buffer.
- [stride](stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.

# componentsPerVector (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The number of scalar components in each vector.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger componentsPerVector;
```

<a id="Discussion"></a>

## Discussion

In the case that [componentsPerVector](componentspervector.md) is greater than 1, the element type of the geometry-source array is itself, a sequence.

## See Also

### Getting Geometry Information

- [count](count.md): The number of vectors in the buffer.
- [format](format.md): The type of vector data in the buffer.
- [offset](offset.md): The offset, in bytes, from the beginning of the buffer.
- [stride](stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.
