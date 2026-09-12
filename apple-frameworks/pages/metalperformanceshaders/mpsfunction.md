> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfunction](https://developer.apple.com/documentation/metalperformanceshaders/mpsfunction)

# MPSFunction (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class MPSFunction
```

## Topics

### Initializers

- [init(coder:)](mpsfunction/init%28coder_%29.md)

### Instance Properties

- [device](mpsfunction/device.md)
- [error](mpsfunction/error.md): The error produced when attempting to build the function
- [function](mpsfunction/function.md): A MTLFunction that you can link into your shader
- [name](mpsfunction/name.md)

### Instance Methods

- [copy(with:device:)](mpsfunction/copy%28with_device_%29.md)
- [functionPrototype()](mpsfunction/functionprototype%28%29.md)

### Type Methods

- [supportsSecureCoding()](mpsfunction/supportssecurecoding%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSFColorConversion](mpsfcolorconversion.md)

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

# MPSFunction (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface MPSFunction : NSObject
```

## Topics

### Instance Properties

- [device](mpsfunction/device.md)
- [error](mpsfunction/error.md): The error produced when attempting to build the function
- [function](mpsfunction/function.md): A MTLFunction that you can link into your shader
- [name](mpsfunction/name.md)

### Instance Methods

- [copyWithZone:device:](mpsfunction/copy%28with_device_%29.md)
- [functionPrototype](mpsfunction/functionprototype%28%29.md)
- [initWithCoder:](mpsfunction/init%28coder_%29.md)

### Type Methods

- [supportsSecureCoding](mpsfunction/supportssecurecoding%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSFColorConversion](mpsfcolorconversion.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
