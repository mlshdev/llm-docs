> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelerror-swift.struct/code/featuretype](https://developer.apple.com/documentation/coreml/mlmodelerror-swift.struct/code/featuretype)

# MLModelError.Code.featureType (Swift)

**Framework:** Core ML  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An error code for problems related to model features.

## Declaration

```swift
case featureType
```

<a id="Discussion"></a>

## Discussion

Core ML typically throws (Swift) or returns (Objective-C) this error when an app sends an input feature a value that’s of an incorrect type.

## See Also

### Error codes

- [MLModelError.Code.parameters](parameters.md): An error code for problems related to model parameters.
- [MLModelError.Code.modelCollection](modelcollection.md): An error code for problems related to retrieving a model collection from the deployment system.
- [MLModelError.Code.modelDecryptionKeyFetch](modeldecryptionkeyfetch.md): An error code for problems related to retrieving a model’s decryption key.
- [MLModelError.Code.modelDecryption](modeldecryption.md): An error code for problems related to decrypting models.
- [MLModelError.Code.update](update.md): An error code for problems related to on-device model updates.
- [MLModelError.Code.customLayer](customlayer.md): An error code for problems related to custom layers.
- [MLModelError.Code.customModel](custommodel.md): An error code for problems related to custom models.
- [MLModelError.Code.io](io.md): An error code for problems related to the system’s input or output.
- [MLModelError.Code.predictionCancelled](predictioncancelled.md): An error code for problems related to canceling the prediction before it completes.
- [MLModelError.Code.generic](generic.md): An error code for runtime issues that don’t apply to the other error codes.

# MLModelErrorFeatureType (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An error code for problems related to model features.

## Declaration

```objectivec
MLModelErrorFeatureType
```

<a id="Discussion"></a>

## Discussion

Core ML typically throws (Swift) or returns (Objective-C) this error when an app sends an input feature a value that’s of an incorrect type.

## See Also

### Error codes

- [MLModelErrorParameters](parameters.md): An error code for problems related to model parameters.
- [MLModelErrorModelCollection](modelcollection.md): An error code for problems related to retrieving a model collection from the deployment system.
- [MLModelErrorModelDecryptionKeyFetch](modeldecryptionkeyfetch.md): An error code for problems related to retrieving a model’s decryption key.
- [MLModelErrorModelDecryption](modeldecryption.md): An error code for problems related to decrypting models.
- [MLModelErrorUpdate](update.md): An error code for problems related to on-device model updates.
- [MLModelErrorCustomLayer](customlayer.md): An error code for problems related to custom layers.
- [MLModelErrorCustomModel](custommodel.md): An error code for problems related to custom models.
- [MLModelErrorIO](io.md): An error code for problems related to the system’s input or output.
- [MLModelErrorPredictionCancelled](predictioncancelled.md): An error code for problems related to canceling the prediction before it completes.
- [MLModelErrorGeneric](generic.md): An error code for runtime issues that don’t apply to the other error codes.
