> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagecanny](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagecanny)

# MPSImageCanny (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```swift
class MPSImageCanny
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagecanny/init%28coder_device_%29.md)
- [init(device:)](mpsimagecanny/init%28device_%29.md)
- [init(device:linearToGrayScaleTransform:sigma:)](mpsimagecanny/init%28device_lineartograyscaletransform_sigma_%29.md)

### Instance Properties

- [colorTransform](mpsimagecanny/colortransform.md)
- [highThreshold](mpsimagecanny/highthreshold.md)
- [lowThreshold](mpsimagecanny/lowthreshold.md)
- [sigma](mpsimagecanny/sigma.md)
- [useFastMode](mpsimagecanny/usefastmode.md)

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

# MPSImageCanny (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSImageCanny : MPSUnaryImageKernel
```

## Topics

### Instance Properties

- [colorTransform](mpsimagecanny/colortransform.md)
- [highThreshold](mpsimagecanny/highthreshold.md)
- [lowThreshold](mpsimagecanny/lowthreshold.md)
- [sigma](mpsimagecanny/sigma.md)
- [useFastMode](mpsimagecanny/usefastmode.md)

### Instance Methods

- [initWithCoder:device:](mpsimagecanny/init%28coder_device_%29.md)
- [initWithDevice:](mpsimagecanny/init%28device_%29.md)
- [initWithDevice:linearToGrayScaleTransform:sigma:](mpsimagecanny/init%28device_lineartograyscaletransform_sigma_%29.md)

## Relationships

### Inherits From

- [MPSUnaryImageKernel](mpsunaryimagekernel.md)
