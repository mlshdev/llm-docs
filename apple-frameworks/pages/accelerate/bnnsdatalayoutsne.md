> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayoutsne](https://developer.apple.com/documentation/accelerate/bnnsdatalayoutsne)

# BNNSDataLayoutSNE (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.

## Declaration

```swift
var BNNSDataLayoutSNE: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(e, n, s)` is at index `e * stride[0] + n * stride[1] + s * stride[2]`:

- `size[0]` is the embedding dimension (`e`).
- `size[1]` is the batch size (`n`).
- `size[2]` is the sequence length (`s`).

## See Also

### 3D Data Layouts

- [BNNSDataLayoutImageCHW](bnnsdatalayoutimagechw.md): A constant that represents a 3D image stack.
- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayout3DLastMajor](bnnsdatalayout3dlastmajor.md): A constant that represents a 3D last-major tensor.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.

# BNNSDataLayoutSNE (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.

## Declaration

```objectivec
BNNSDataLayoutSNE
```

<a id="Discussion"></a>

## Discussion

The value `(e, n, s)` is at index `e * stride[0] + n * stride[1] + s * stride[2]`:

- `size[0]` is the embedding dimension (`e`).
- `size[1]` is the batch size (`n`).
- `size[2]` is the sequence length (`s`).

## See Also

### 3D Data Layouts

- [BNNSDataLayoutImageCHW](bnnsdatalayoutimagechw.md): A constant that represents a 3D image stack.
- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayout3DLastMajor](bnnsdatalayout3dlastmajor.md): A constant that represents a 3D last-major tensor.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.
