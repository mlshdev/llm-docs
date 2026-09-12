> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayoutrowmajormatrix](https://developer.apple.com/documentation/accelerate/bnnsdatalayoutrowmajormatrix)

# BNNSDataLayoutRowMajorMatrix (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 2D row-major matrix.

## Declaration

```swift
var BNNSDataLayoutRowMajorMatrix: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(row, col)` is at index `col * stride[0] + row * stride[1]`.

- `size[0]` is the number of columns.
- `size[1]` is the number of rows.

## See Also

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayout2DFirstMajor](bnnsdatalayout2dfirstmajor.md): A constant that represents a 2D first-major matrix.
- [BNNSDataLayout2DLastMajor](bnnsdatalayout2dlastmajor.md): A constant that represents a 2D last-major matrix.

# BNNSDataLayoutRowMajorMatrix (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 2D row-major matrix.

## Declaration

```objectivec
BNNSDataLayoutRowMajorMatrix
```

<a id="Discussion"></a>

## Discussion

The value `(row, col)` is at index `col * stride[0] + row * stride[1]`.

- `size[0]` is the number of columns.
- `size[1]` is the number of rows.

## See Also

### 2D Data Layouts

- [BNNSDataLayoutColumnMajorMatrix](bnnsdatalayoutcolumnmajormatrix.md): A constant that represents a 2D column-major matrix.
- [BNNSDataLayout2DFirstMajor](bnnsdatalayout2dfirstmajor.md): A constant that represents a 2D first-major matrix.
- [BNNSDataLayout2DLastMajor](bnnsdatalayout2dlastmajor.md): A constant that represents a 2D last-major matrix.
