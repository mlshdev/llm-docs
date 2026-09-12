> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayout3dlastmajor](https://developer.apple.com/documentation/accelerate/bnnsdatalayout3dlastmajor)

# BNNSDataLayout3DLastMajor (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 3D last-major tensor.

## Declaration

```swift
var BNNSDataLayout3DLastMajor: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k)` is at index `i * stride[0] + j * stride[1] + k * stride[2]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).

## See Also

### 3D Data Layouts

- [BNNSDataLayoutImageCHW](bnnsdatalayoutimagechw.md): A constant that represents a 3D image stack.
- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayoutSNE](bnnsdatalayoutsne.md): A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.

# BNNSDataLayout3DLastMajor (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A constant that represents a 3D last-major tensor.

## Declaration

```objectivec
BNNSDataLayout3DLastMajor
```

<a id="Discussion"></a>

## Discussion

The value `(i, j, k)` is at index `i * stride[0] + j * stride[1] + k * stride[2]`.

- `size[0]` is the size of the first dimension (`i`).
- `size[1]` is the size of the second dimension (`j`).
- `size[2]` is the size of the third dimension (`k`).

## See Also

### 3D Data Layouts

- [BNNSDataLayoutImageCHW](bnnsdatalayoutimagechw.md): A constant that represents a 3D image stack.
- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayoutSNE](bnnsdatalayoutsne.md): A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.
