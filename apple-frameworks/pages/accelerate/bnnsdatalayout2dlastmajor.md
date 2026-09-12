> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayout2dlastmajor](https://developer.apple.com/documentation/accelerate/bnnsdatalayout2dlastmajor)

# BNNSDataLayout2DLastMajor (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 2D last-major matrix.

## Declaration

```swift
var BNNSDataLayout2DLastMajor: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(i, j)` is at index `i * stride[0] + j * stride[1]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).

This is the BLAS/LAPACK column-major equivalent.

## See Also

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayoutRowMajorMatrix](bnnsdatalayoutrowmajormatrix.md): A constant that represents a 2D row-major matrix.
- [BNNSDataLayout2DFirstMajor](bnnsdatalayout2dfirstmajor.md): A constant that represents a 2D first-major matrix.

# BNNSDataLayout2DLastMajor (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 2D last-major matrix.

## Declaration

```objectivec
BNNSDataLayout2DLastMajor
```

<a id="Discussion"></a>

## Discussion

The value `(i, j)` is at index `i * stride[0] + j * stride[1]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).

This is the BLAS/LAPACK column-major equivalent.

## See Also

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayoutRowMajorMatrix](bnnsdatalayoutrowmajormatrix.md): A constant that represents a 2D row-major matrix.
- [BNNSDataLayout2DFirstMajor](bnnsdatalayout2dfirstmajor.md): A constant that represents a 2D first-major matrix.
