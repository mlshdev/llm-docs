> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageeuclideandistancetransform](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageeuclideandistancetransform)

# MPSImageEuclideanDistanceTransform (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A filter that performs a Euclidean distance transform on an image.

## Declaration

```swift
class MPSImageEuclideanDistanceTransform
```

## Topics

### Creating a Euclidean distance transform

- [init(device:)](mpsimageeuclideandistancetransform/init%28device_%29.md): Creates a Euclidean distance transform that runs on a specified device.
- [init(coder:device:)](mpsimageeuclideandistancetransform/init%28coder_device_%29.md): Creates a Euclidean distance transform that uses a specified decoder for your data and runs on a specified device.

### Limiting the search for nonzero pixels

- [searchLimitRadius](mpsimageeuclideandistancetransform/searchlimitradius.md): Limits the search in an image from a pixel to the closest nonzero pixel within a specified radius.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSImageEuclideanDistanceTransform (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A filter that performs a Euclidean distance transform on an image.

## Declaration

```objectivec
@interface MPSImageEuclideanDistanceTransform : MPSUnaryImageKernel
```

## Topics

### Creating a Euclidean distance transform

- [initWithDevice:](mpsimageeuclideandistancetransform/init%28device_%29.md): Creates a Euclidean distance transform that runs on a specified device.
- [initWithCoder:device:](mpsimageeuclideandistancetransform/init%28coder_device_%29.md): Creates a Euclidean distance transform that uses a specified decoder for your data and runs on a specified device.

### Limiting the search for nonzero pixels

- [searchLimitRadius](mpsimageeuclideandistancetransform/searchlimitradius.md): Limits the search in an image from a pixel to the closest nonzero pixel within a specified radius.

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)
