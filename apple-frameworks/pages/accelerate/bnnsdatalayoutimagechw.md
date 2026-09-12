> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayoutimagechw](https://developer.apple.com/documentation/accelerate/bnnsdatalayoutimagechw)

# BNNSDataLayoutImageCHW (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A constant that represents a 3D image stack.

## Declaration

```swift
var BNNSDataLayoutImageCHW: BNNSDataLayout { get }
```

<a id="Discussion"></a>

## Discussion

The value `(x, y, channel)` is at index `x * stride[0] + y * stride[1] + channel * stride[2]`.

- `size[0]` is the image width in pixels.
- `size[1]` is the image height in pixels.
- `size[2]` is the number of channels.

## See Also

### 3D Data Layouts

- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayout3DLastMajor](bnnsdatalayout3dlastmajor.md): A constant that represents a 3D last-major tensor.
- [BNNSDataLayoutSNE](bnnsdatalayoutsne.md): A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.

# BNNSDataLayoutImageCHW (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A constant that represents a 3D image stack.

## Declaration

```objectivec
BNNSDataLayoutImageCHW
```

<a id="Discussion"></a>

## Discussion

The value `(x, y, channel)` is at index `x * stride[0] + y * stride[1] + channel * stride[2]`.

- `size[0]` is the image width in pixels.
- `size[1]` is the image height in pixels.
- `size[2]` is the number of channels.

## See Also

### 3D Data Layouts

- [BNNSDataLayout3DFirstMajor](bnnsdatalayout3dfirstmajor.md): A constant that represents a 3D first-major tensor.
- [BNNSDataLayout3DLastMajor](bnnsdatalayout3dlastmajor.md): A constant that represents a 3D last-major tensor.
- [BNNSDataLayoutSNE](bnnsdatalayoutsne.md): A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.
- [BNNSDataLayoutNSE](bnnsdatalayoutnse.md): A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.
