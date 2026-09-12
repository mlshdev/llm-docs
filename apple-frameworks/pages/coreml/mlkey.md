> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlkey](https://developer.apple.com/documentation/coreml/mlkey)

# MLKey (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An abstract base class for machine learning key types.

## Declaration

```swift
class MLKey
```

<a id="overview"></a>

## Overview

You don’t create use this class directly. Instead, use a class that inherits from this one, such as [MLParameterKey](mlparameterkey.md) or [MLMetricKey](mlmetrickey.md).

## Topics

### Retrieving a key’s information

- [name](mlkey/name.md): The name of the machine learning key.
- [scope](mlkey/scope.md): The applicable scope of the machine learning key.

### Initializers

- [init(coder:)](mlkey/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLMetricKey](mlmetrickey.md)
- [MLParameterKey](mlparameterkey.md)

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

## See Also

### Supporting types

- [MLModelConfiguration](mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
- [MLOptimizationHints](mloptimizationhints-swift.struct.md)

# MLKey (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An abstract base class for machine learning key types.

## Declaration

```objectivec
@interface MLKey : NSObject
```

<a id="overview"></a>

## Overview

You don’t create use this class directly. Instead, use a class that inherits from this one, such as [MLParameterKey](mlparameterkey.md) or [MLMetricKey](mlmetrickey.md).

## Topics

### Retrieving a key’s information

- [name](mlkey/name.md): The name of the machine learning key.
- [scope](mlkey/scope.md): The applicable scope of the machine learning key.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLMetricKey](mlmetrickey.md)
- [MLParameterKey](mlparameterkey.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MLModelConfiguration](mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
