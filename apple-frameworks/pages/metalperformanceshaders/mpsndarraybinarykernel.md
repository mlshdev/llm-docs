> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraybinarykernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraybinarykernel)

# MPSNDArrayBinaryKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayBinaryKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpsndarraybinarykernel/init%28coder_device_%29.md)
- [init(device:)](mpsndarraybinarykernel/init%28device_%29.md)

### Instance Properties

- [primaryDilationRates](mpsndarraybinarykernel/primarydilationrates.md): Deprecated.
- [primaryEdgeMode](mpsndarraybinarykernel/primaryedgemode.md): Deprecated.
- [primaryKernelSizes](mpsndarraybinarykernel/primarykernelsizes.md): Deprecated.
- [primaryOffsets](mpsndarraybinarykernel/primaryoffsets.md): Deprecated.
- [primaryStrides](mpsndarraybinarykernel/primarystrides.md): Deprecated.
- [secondaryDilationRates](mpsndarraybinarykernel/secondarydilationrates.md): Deprecated.
- [secondaryEdgeMode](mpsndarraybinarykernel/secondaryedgemode.md): Deprecated.
- [secondaryKernelSizes](mpsndarraybinarykernel/secondarykernelsizes.md): Deprecated.
- [secondaryOffsets](mpsndarraybinarykernel/secondaryoffsets.md): Deprecated.
- [secondaryStrides](mpsndarraybinarykernel/secondarystrides.md): Deprecated.

### Instance Methods

- [encode(to:primarySourceArray:secondarySourceArray:)](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_%29.md)
- [encode(to:primarySourceArray:secondarySourceArray:destinationArray:)](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_destinationarray_%29.md)
- [encode(to:primarySourceArray:secondarySourceArray:resultState:destinationArray:)](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_resultstate_destinationarray_%29.md)
- [encode(to:primarySourceArray:secondarySourceArray:resultState:outputStateIsTemporary:)](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_resultstate_outputstateistemporary_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryKernel](mpsndarraymultiarykernel.md)

### Inherited By

- [MPSNDArrayGather](mpsndarraygather.md)

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

# MPSNDArrayBinaryKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayBinaryKernel : MPSNDArrayMultiaryKernel
```

## Topics

### Instance Properties

- [primaryDilationRates](mpsndarraybinarykernel/primarydilationrates.md): Deprecated.
- [primaryEdgeMode](mpsndarraybinarykernel/primaryedgemode.md): Deprecated.
- [primaryKernelSizes](mpsndarraybinarykernel/primarykernelsizes.md): Deprecated.
- [primaryOffsets](mpsndarraybinarykernel/primaryoffsets.md): Deprecated.
- [primaryStrides](mpsndarraybinarykernel/primarystrides.md): Deprecated.
- [secondaryDilationRates](mpsndarraybinarykernel/secondarydilationrates.md): Deprecated.
- [secondaryEdgeMode](mpsndarraybinarykernel/secondaryedgemode.md): Deprecated.
- [secondaryKernelSizes](mpsndarraybinarykernel/secondarykernelsizes.md): Deprecated.
- [secondaryOffsets](mpsndarraybinarykernel/secondaryoffsets.md): Deprecated.
- [secondaryStrides](mpsndarraybinarykernel/secondarystrides.md): Deprecated.

### Instance Methods

- [encodeToCommandBuffer:primarySourceArray:secondarySourceArray:](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_%29.md)
- [encodeToCommandBuffer:primarySourceArray:secondarySourceArray:destinationArray:](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_destinationarray_%29.md)
- [encodeToCommandBuffer:primarySourceArray:secondarySourceArray:resultState:destinationArray:](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_resultstate_destinationarray_%29.md)
- [encodeToCommandBuffer:primarySourceArray:secondarySourceArray:resultState:outputStateIsTemporary:](mpsndarraybinarykernel/encode%28to_primarysourcearray_secondarysourcearray_resultstate_outputstateistemporary_%29.md)
- [initWithCoder:device:](mpsndarraybinarykernel/init%28coder_device_%29.md)
- [initWithDevice:](mpsndarraybinarykernel/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryKernel](mpsndarraymultiarykernel.md)

### Inherited By

- [MPSNDArrayGather](mpsndarraygather.md)
