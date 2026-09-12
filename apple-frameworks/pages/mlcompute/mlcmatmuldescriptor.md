> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmatmuldescriptor](https://developer.apple.com/documentation/mlcompute/mlcmatmuldescriptor)

# MLCMatMulDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a matrix multiplication layer.

## Declaration

```swift
class MLCMatMulDescriptor
```

## Topics

### Creating Matrix Multiplication Descriptors

- [init()](mlcmatmuldescriptor/init%28%29.md): Deprecated. Creates a batched matrix multiplication descriptor.
- [init(alpha:transposesX:transposesY:)](mlcmatmuldescriptor/init%28alpha_transposesx_transposesy_%29.md): Deprecated. Creates a batched matrix multiplication descriptor with the alpha value and transpose options you specify.

### Inspecting Matrix Multiplication Descriptors

- [alpha](mlcmatmuldescriptor/alpha.md): Deprecated. A scalar value you specify to scale the result in C = alpha x A x B.
- [transposesX](mlcmatmuldescriptor/transposesx.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of x.
- [transposesY](mlcmatmuldescriptor/transposesy.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of y.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Matrix Multiplication Layers

- [init(descriptor:)](mlcmatmullayer/init%28descriptor_%29.md): Deprecated. Creates a matrix multiplication layer with the specified descriptor you specify.

# MLCMatMulDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a matrix multiplication layer.

## Declaration

```objectivec
@interface MLCMatMulDescriptor : NSObject
```

## Topics

### Creating Matrix Multiplication Descriptors

- [descriptor](mlcmatmuldescriptor/init%28%29.md): Deprecated. Creates a batched matrix multiplication descriptor.
- [descriptorWithAlpha:transposesX:transposesY:](mlcmatmuldescriptor/init%28alpha_transposesx_transposesy_%29.md): Deprecated. Creates a batched matrix multiplication descriptor with the alpha value and transpose options you specify.

### Inspecting Matrix Multiplication Descriptors

- [alpha](mlcmatmuldescriptor/alpha.md): Deprecated. A scalar value you specify to scale the result in C = alpha x A x B.
- [transposesX](mlcmatmuldescriptor/transposesx.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of x.
- [transposesY](mlcmatmuldescriptor/transposesy.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of y.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Matrix Multiplication Layers

- [layerWithDescriptor:](mlcmatmullayer/init%28descriptor_%29.md): Deprecated. Creates a matrix multiplication layer with the specified descriptor you specify.
