> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixrandom](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixrandom)

# MPSMatrixRandom (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSMatrixRandom
```

## Topics

### Instance Properties

- [batchSize](mpsmatrixrandom/batchsize.md)
- [batchStart](mpsmatrixrandom/batchstart.md)
- [destinationDataType](mpsmatrixrandom/destinationdatatype.md)
- [distributionType](mpsmatrixrandom/distributiontype.md)

### Instance Methods

- [encode(commandBuffer:destinationMatrix:)](mpsmatrixrandom/encode%28commandbuffer_destinationmatrix_%29.md)
- [encode(commandBuffer:destinationVector:)](mpsmatrixrandom/encode%28commandbuffer_destinationvector_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSMatrixRandomMTGP32](mpsmatrixrandommtgp32.md)
- [MPSMatrixRandomPhilox](mpsmatrixrandomphilox.md)

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

# MPSMatrixRandom (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSMatrixRandom : MPSKernel
```

## Topics

### Instance Properties

- [batchSize](mpsmatrixrandom/batchsize.md)
- [batchStart](mpsmatrixrandom/batchstart.md)
- [destinationDataType](mpsmatrixrandom/destinationdatatype.md)
- [distributionType](mpsmatrixrandom/distributiontype.md)

### Instance Methods

- [encodeToCommandBuffer:destinationMatrix:](mpsmatrixrandom/encode%28commandbuffer_destinationmatrix_%29.md)
- [encodeToCommandBuffer:destinationVector:](mpsmatrixrandom/encode%28commandbuffer_destinationvector_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSMatrixRandomMTGP32](mpsmatrixrandommtgp32.md)
- [MPSMatrixRandomPhilox](mpsmatrixrandomphilox.md)
