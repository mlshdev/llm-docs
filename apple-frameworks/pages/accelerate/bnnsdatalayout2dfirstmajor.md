> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayout2dfirstmajor](https://developer.apple.com/documentation/accelerate/bnnsdatalayout2dfirstmajor)

# BNNSDataLayout2DFirstMajor (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 2D first-major matrix.

## Declaration

```swift
var BNNSDataLayout2DFirstMajor: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(i, j)` is at index `j * stride[0] + i * stride[1]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).

This is the BLAS/LAPACK row-major equivalent.

## See Also

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayoutRowMajorMatrix](bnnsdatalayoutrowmajormatrix.md): A constant that represents a 2D row-major matrix.
- [BNNSDataLayout2DLastMajor](bnnsdatalayout2dlastmajor.md): A constant that represents a 2D last-major matrix.

# BNNSDataLayout2DFirstMajor (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 2D first-major matrix.

## Declaration

```objectivec
BNNSDataLayout2DFirstMajor
```

<a id="Discussion"></a>

## Discussion

The value `(i, j)` is at index `j * stride[0] + i * stride[1]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).

This is the BLAS/LAPACK row-major equivalent.

## See Also

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayoutRowMajorMatrix](bnnsdatalayoutrowmajormatrix.md): A constant that represents a 2D row-major matrix.
- [BNNSDataLayout2DLastMajor](bnnsdatalayout2dlastmajor.md): A constant that represents a 2D last-major matrix.
