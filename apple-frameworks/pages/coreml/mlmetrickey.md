> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmetrickey](https://developer.apple.com/documentation/coreml/mlmetrickey)

# MLMetricKey (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A key for the metrics dictionary in an update context.

## Declaration

```swift
class MLMetricKey
```

## Topics

### Getting the keys

- [lossValue](mlmetrickey/lossvalue.md): The key you use to access the current loss (a `float` value).
- [epochIndex](mlmetrickey/epochindex.md): The key you use to access the epoch index (an `Int64` value).
- [miniBatchIndex](mlmetrickey/minibatchindex.md): The key you use to access the mini-batch index (an `Int64` value) within an epoch.

### Supporting types

- [MLKey](mlkey.md): An abstract base class for machine learning key types.

## Relationships

### Inherits From

- [MLKey](mlkey.md)

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

### Evaluating the update

- [metrics](mlupdatecontext/metrics.md): The training metrics of the model for the update task, contained in a dictionary.

# MLMetricKey (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A key for the metrics dictionary in an update context.

## Declaration

```objectivec
@interface MLMetricKey : MLKey
```

## Topics

### Getting the keys

- [lossValue](mlmetrickey/lossvalue.md): The key you use to access the current loss (a `float` value).
- [epochIndex](mlmetrickey/epochindex.md): The key you use to access the epoch index (an `Int64` value).
- [miniBatchIndex](mlmetrickey/minibatchindex.md): The key you use to access the mini-batch index (an `Int64` value) within an epoch.

### Supporting types

- [MLKey](mlkey.md): An abstract base class for machine learning key types.

## Relationships

### Inherits From

- [MLKey](mlkey.md)

## See Also

### Evaluating the update

- [metrics](mlupdatecontext/metrics.md): The training metrics of the model for the update task, contained in a dictionary.
