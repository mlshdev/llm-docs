> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlpredictionoptions](https://developer.apple.com/documentation/coreml/mlpredictionoptions)

# MLPredictionOptions (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The options available when making a prediction.

## Declaration

```swift
class MLPredictionOptions
```

## Topics

### Getting features

- [outputBackings](mlpredictionoptions/outputbackings.md): A dictionary of feature names and client-allocated buffers.

### Restricting computation to the CPU

- [usesCPUOnly](mlpredictionoptions/usescpuonly.md): Deprecated. A Boolean value that indicates whether a prediction is computed using only the CPU.

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

### Making predictions

- [prediction(from:)](mlmodel/prediction%28from_%29.md)
- [prediction(from:options:)](mlmodel/prediction%28from_options_%29.md)
- [predictions(fromBatch:)](mlmodel/predictions%28frombatch_%29.md): Generates predictions for each input feature provider within the batch provider.
- [predictions(from:options:)](mlmodel/predictions%28from_options_%29.md): Generates a prediction for each input feature provider within the batch provider using the prediction options.
- [prediction(from:using:)](mlmodel/prediction%28from_using_%29.md)
- [prediction(from:using:options:)](mlmodel/prediction%28from_using_options_%29.md)
- [Background Inference](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.

# MLPredictionOptions (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The options available when making a prediction.

## Declaration

```objectivec
@interface MLPredictionOptions : NSObject
```

## Topics

### Getting features

- [outputBackings](mlpredictionoptions/outputbackings.md): A dictionary of feature names and client-allocated buffers.

### Restricting computation to the CPU

- [usesCPUOnly](mlpredictionoptions/usescpuonly.md): Deprecated. A Boolean value that indicates whether a prediction is computed using only the CPU.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
