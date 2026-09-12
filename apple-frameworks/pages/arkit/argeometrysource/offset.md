> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometrysource/offset](https://developer.apple.com/documentation/arkit/argeometrysource/offset)

# offset (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The offset, in bytes, from the beginning of the buffer.

## Declaration

```swift
var offset: Int { get }
```

## See Also

### Getting Geometry Information

- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [count](count.md): The number of vectors in the buffer.
- [format](format.md): The type of vector data in the buffer.
- [stride](stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.

# offset (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The offset, in bytes, from the beginning of the buffer.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger offset;
```

## See Also

### Getting Geometry Information

- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [count](count.md): The number of vectors in the buffer.
- [format](format.md): The type of vector data in the buffer.
- [stride](stride.md): The length, in bytes, of the start of one vector in the buffer to the start of the next vector.
