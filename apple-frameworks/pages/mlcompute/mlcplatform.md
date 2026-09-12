> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcplatform](https://developer.apple.com/documentation/mlcompute/mlcplatform)

# MLCPlatform (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

A utility class for setting global properties in the framework.

## Declaration

```swift
class MLCPlatform
```

## Topics

### Getting the RNG Seed

- [getRNGseed()](mlcplatform/getrngseed%28%29.md): Deprecated. Returns the global random number generator seed value.

### Setting the RNG Seed

- [setRNGSeedTo(\_:)](mlcplatform/setrngseedto%28__%29.md): Deprecated. Sets the global random number generator seed value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Components

- [MLCTensor](mlctensor.md): Deprecated. The data object you use throughout the framework.
- [Layers](layers.md): Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.
- [Training and Validation](training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.

# MLCPlatform (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

A utility class for setting global properties in the framework.

## Declaration

```objectivec
@interface MLCPlatform : NSObject
```

## Topics

### Getting the RNG Seed

- [getRNGseed](mlcplatform/getrngseed%28%29.md): Deprecated. Returns the global random number generator seed value.

### Setting the RNG Seed

- [setRNGSeedTo:](mlcplatform/setrngseedto%28__%29.md): Deprecated. Sets the global random number generator seed value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Components

- [MLCTensor](mlctensor.md): Deprecated. The data object you use throughout the framework.
- [Layers](layers.md): Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.
- [Training and Validation](training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.
