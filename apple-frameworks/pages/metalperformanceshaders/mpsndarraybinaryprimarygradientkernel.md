> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraybinaryprimarygradientkernel](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraybinaryprimarygradientkernel)

# MPSNDArrayBinaryPrimaryGradientKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSNDArrayBinaryPrimaryGradientKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpsndarraybinaryprimarygradientkernel/init%28coder_device_%29.md)
- [init(device:)](mpsndarraybinaryprimarygradientkernel/init%28device_%29.md)

### Instance Methods

- [encode(to:primarySourceArray:secondarySourceArray:sourceGradient:gradientState:)](mpsndarraybinaryprimarygradientkernel/encode%28to_primarysourcearray_secondarysourcearray_sourcegradient_gradientstate_%29.md)
- [encode(to:primarySourceArray:secondarySourceArray:sourceGradient:gradientState:destinationArray:)](mpsndarraybinaryprimarygradientkernel/encode%28to_primarysourcearray_secondarysourcearray_sourcegradient_gradientstate_destinationarray_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryGradientKernel](mpsndarraymultiarygradientkernel.md)

### Inherited By

- [MPSNDArrayGatherGradient](mpsndarraygathergradient.md)

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

# MPSNDArrayBinaryPrimaryGradientKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSNDArrayBinaryPrimaryGradientKernel : MPSNDArrayMultiaryGradientKernel
```

## Topics

### Instance Methods

- [encodeToCommandBuffer:primarySourceArray:secondarySourceArray:sourceGradient:gradientState:](mpsndarraybinaryprimarygradientkernel/encode%28to_primarysourcearray_secondarysourcearray_sourcegradient_gradientstate_%29.md)
- [encodeToCommandBuffer:primarySourceArray:secondarySourceArray:sourceGradient:gradientState:destinationArray:](mpsndarraybinaryprimarygradientkernel/encode%28to_primarysourcearray_secondarysourcearray_sourcegradient_gradientstate_destinationarray_%29.md)
- [initWithCoder:device:](mpsndarraybinaryprimarygradientkernel/init%28coder_device_%29.md)
- [initWithDevice:](mpsndarraybinaryprimarygradientkernel/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayMultiaryGradientKernel](mpsndarraymultiarygradientkernel.md)

### Inherited By

- [MPSNDArrayGatherGradient](mpsndarraygathergradient.md)
