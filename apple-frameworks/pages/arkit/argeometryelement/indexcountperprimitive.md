> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometryelement/indexcountperprimitive](https://developer.apple.com/documentation/arkit/argeometryelement/indexcountperprimitive)

# indexCountPerPrimitive (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The number of indices for each primitive.

## Declaration

```swift
var indexCountPerPrimitive: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property relates to the [primitiveType](primitivetype.md). For [ARGeometryPrimitiveType.triangle](../argeometryprimitivetype/triangle.md), the value is 3. For more information, see [ARGeometryPrimitiveType](../argeometryprimitivetype.md).

## See Also

### Getting Index Information

- [bytesPerIndex](bytesperindex.md): The number of bytes for each index.
- [count](count.md): The number of primitives in the buffer.
- [primitiveType](primitivetype.md): The geometry’s type of data (triangle, or line).
- [ARGeometryPrimitiveType](../argeometryprimitivetype.md): The kind of connection between vertices.

# indexCountPerPrimitive (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The number of indices for each primitive.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger indexCountPerPrimitive;
```

<a id="Discussion"></a>

## Discussion

The value of this property relates to the [primitiveType](primitivetype.md). For [ARGeometryPrimitiveTypeTriangle](../argeometryprimitivetype/triangle.md), the value is 3. For more information, see [ARGeometryPrimitiveType](../argeometryprimitivetype.md).

## See Also

### Getting Index Information

- [bytesPerIndex](bytesperindex.md): The number of bytes for each index.
- [count](count.md): The number of primitives in the buffer.
- [primitiveType](primitivetype.md): The geometry’s type of data (triangle, or line).
- [ARGeometryPrimitiveType](../argeometryprimitivetype.md): The kind of connection between vertices.
