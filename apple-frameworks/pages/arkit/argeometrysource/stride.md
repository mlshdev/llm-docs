> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/argeometrysource/stride

# stride (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The length, in bytes, of the start of one vector in the buffer to the start of the next vector.

## Declaration

```swift
var stride: Int { get }
```

<a id="Discussion"></a>

## Discussion

Stride may contain padding, so it’s not always equal to the vector-format’s total size in bytes.

## See Also

### Getting Geometry Information

- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [count](count.md): The number of vectors in the buffer.
- [format](format.md): The type of vector data in the buffer.
- [offset](offset.md): The offset, in bytes, from the beginning of the buffer.

# stride (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The length, in bytes, of the start of one vector in the buffer to the start of the next vector.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger stride;
```

<a id="Discussion"></a>

## Discussion

Stride may contain padding, so it’s not always equal to the vector-format’s total size in bytes.

## See Also

### Getting Geometry Information

- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [count](count.md): The number of vectors in the buffer.
- [format](format.md): The type of vector data in the buffer.
- [offset](offset.md): The offset, in bytes, from the beginning of the buffer.
