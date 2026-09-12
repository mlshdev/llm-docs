> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelerror-swift.struct/code](https://developer.apple.com/documentation/coreml/mlmodelerror-swift.struct/code)

# MLModelError.Code (Swift)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Information about a Core ML model error.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MLModelError.Code.featureType](code/featuretype.md): An error code for problems related to model features.
- [MLModelError.Code.parameters](code/parameters.md): An error code for problems related to model parameters.
- [MLModelError.Code.modelCollection](code/modelcollection.md): An error code for problems related to retrieving a model collection from the deployment system.
- [MLModelError.Code.modelDecryptionKeyFetch](code/modeldecryptionkeyfetch.md): An error code for problems related to retrieving a model’s decryption key.
- [MLModelError.Code.modelDecryption](code/modeldecryption.md): An error code for problems related to decrypting models.
- [MLModelError.Code.update](code/update.md): An error code for problems related to on-device model updates.
- [MLModelError.Code.customLayer](code/customlayer.md): An error code for problems related to custom layers.
- [MLModelError.Code.customModel](code/custommodel.md): An error code for problems related to custom models.
- [MLModelError.Code.io](code/io.md): An error code for problems related to the system’s input or output.
- [MLModelError.Code.predictionCancelled](code/predictioncancelled.md): An error code for problems related to canceling the prediction before it completes.
- [MLModelError.Code.generic](code/generic.md): An error code for runtime issues that don’t apply to the other error codes.

### Error domain

- [MLModelErrorDomain](../mlmodelerrordomain.md): The domain for Core ML errors.
- [errorDomain](errordomain.md)

### Creating a model error

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model errors

- [MLModelError](../mlmodelerror-swift.struct.md): Information about a Core ML model error.
- [MLModelErrorDomain](../mlmodelerrordomain.md): The domain for Core ML errors.

# MLModelError (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Information about a Core ML model error.

## Declaration

```objectivec
enum MLModelError : NSInteger;
```

## Topics

### Error codes

- [MLModelErrorFeatureType](code/featuretype.md): An error code for problems related to model features.
- [MLModelErrorParameters](code/parameters.md): An error code for problems related to model parameters.
- [MLModelErrorModelCollection](code/modelcollection.md): An error code for problems related to retrieving a model collection from the deployment system.
- [MLModelErrorModelDecryptionKeyFetch](code/modeldecryptionkeyfetch.md): An error code for problems related to retrieving a model’s decryption key.
- [MLModelErrorModelDecryption](code/modeldecryption.md): An error code for problems related to decrypting models.
- [MLModelErrorUpdate](code/update.md): An error code for problems related to on-device model updates.
- [MLModelErrorCustomLayer](code/customlayer.md): An error code for problems related to custom layers.
- [MLModelErrorCustomModel](code/custommodel.md): An error code for problems related to custom models.
- [MLModelErrorIO](code/io.md): An error code for problems related to the system’s input or output.
- [MLModelErrorPredictionCancelled](code/predictioncancelled.md): An error code for problems related to canceling the prediction before it completes.
- [MLModelErrorGeneric](code/generic.md): An error code for runtime issues that don’t apply to the other error codes.

### Error domain

- [MLModelErrorDomain](../mlmodelerrordomain.md): The domain for Core ML errors.

## See Also

### Model errors

- [MLModelErrorDomain](../mlmodelerrordomain.md): The domain for Core ML errors.
