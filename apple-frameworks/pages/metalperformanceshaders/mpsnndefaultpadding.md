> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnndefaultpadding](https://developer.apple.com/documentation/metalperformanceshaders/mpsnndefaultpadding)

# MPSNNDefaultPadding (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that provides predefined padding policies for common tasks.

## Declaration

```swift
class MPSNNDefaultPadding
```

## Topics

### Initializers

- [init(method:)](mpsnndefaultpadding/init%28method_%29.md)
- [MPSNNPaddingMethod](mpsnnpaddingmethod.md): Options that define a graph’s padding.

### Instance Methods

- [label()](mpsnndefaultpadding/label%28%29.md)

### Type Methods

- [forTensorflowAveragePooling()](mpsnndefaultpadding/fortensorflowaveragepooling%28%29.md)
- [forTensorflowAveragePoolingValidOnly()](mpsnndefaultpadding/fortensorflowaveragepoolingvalidonly%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPSNNPadding](mpsnnpadding.md)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSNNDefaultPadding (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that provides predefined padding policies for common tasks.

## Declaration

```objectivec
@interface MPSNNDefaultPadding : NSObject
```

## Topics

### Initializers

- [paddingWithMethod:](mpsnndefaultpadding/init%28method_%29.md)
- [MPSNNPaddingMethod](mpsnnpaddingmethod.md): Options that define a graph’s padding.

### Instance Methods

- [label](mpsnndefaultpadding/label%28%29.md)

### Type Methods

- [paddingForTensorflowAveragePooling](mpsnndefaultpadding/fortensorflowaveragepooling%28%29.md)
- [paddingForTensorflowAveragePoolingValidOnly](mpsnndefaultpadding/fortensorflowaveragepoolingvalidonly%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MPSNNPadding](mpsnnpadding.md)
