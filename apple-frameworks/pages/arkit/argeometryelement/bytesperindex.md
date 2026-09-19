> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/argeometryelement/bytesperindex

# bytesPerIndex (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The number of bytes for each index.

## Declaration

```swift
var bytesPerIndex: Int { get }
```

## See Also

### Getting Index Information

- [count](count.md): The number of primitives in the buffer.
- [indexCountPerPrimitive](indexcountperprimitive.md): The number of indices for each primitive.
- [primitiveType](primitivetype.md): The geometry’s type of data (triangle, or line).
- [ARGeometryPrimitiveType](../argeometryprimitivetype.md): The kind of connection between vertices.

# bytesPerIndex (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The number of bytes for each index.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger bytesPerIndex;
```

## See Also

### Getting Index Information

- [count](count.md): The number of primitives in the buffer.
- [indexCountPerPrimitive](indexcountperprimitive.md): The number of indices for each primitive.
- [primitiveType](primitivetype.md): The geometry’s type of data (triangle, or line).
- [ARGeometryPrimitiveType](../argeometryprimitivetype.md): The kind of connection between vertices.
