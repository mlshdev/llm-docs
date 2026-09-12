> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelerror-swift.struct/code/customlayer](https://developer.apple.com/documentation/coreml/mlmodelerror-swift.struct/code/customlayer)

# MLModelError.Code.customLayer (Swift)

**Framework:** Core ML  
**Kind:** Case  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

An error code for problems related to custom layers.

## Declaration

```swift
case customLayer
```

<a id="Discussion"></a>

## Discussion

Core ML typically throws (Swift) or returns (Objective-C) this error when the custom layer has a programming mistake. For example, a model’s prediction method fails with this error code if Core ML can’t find the custom layer’s implementation.

## See Also

### Error codes

- [MLModelError.Code.featureType](featuretype.md): An error code for problems related to model features.
- [MLModelError.Code.parameters](parameters.md): An error code for problems related to model parameters.
- [MLModelError.Code.modelCollection](modelcollection.md): An error code for problems related to retrieving a model collection from the deployment system.
- [MLModelError.Code.modelDecryptionKeyFetch](modeldecryptionkeyfetch.md): An error code for problems related to retrieving a model’s decryption key.
- [MLModelError.Code.modelDecryption](modeldecryption.md): An error code for problems related to decrypting models.
- [MLModelError.Code.update](update.md): An error code for problems related to on-device model updates.
- [MLModelError.Code.customModel](custommodel.md): An error code for problems related to custom models.
- [MLModelError.Code.io](io.md): An error code for problems related to the system’s input or output.
- [MLModelError.Code.predictionCancelled](predictioncancelled.md): An error code for problems related to canceling the prediction before it completes.
- [MLModelError.Code.generic](generic.md): An error code for runtime issues that don’t apply to the other error codes.

# MLModelErrorCustomLayer (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration Case  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

An error code for problems related to custom layers.

## Declaration

```objectivec
MLModelErrorCustomLayer
```

<a id="Discussion"></a>

## Discussion

Core ML typically throws (Swift) or returns (Objective-C) this error when the custom layer has a programming mistake. For example, a model’s prediction method fails with this error code if Core ML can’t find the custom layer’s implementation.

## See Also

### Error codes

- [MLModelErrorFeatureType](featuretype.md): An error code for problems related to model features.
- [MLModelErrorParameters](parameters.md): An error code for problems related to model parameters.
- [MLModelErrorModelCollection](modelcollection.md): An error code for problems related to retrieving a model collection from the deployment system.
- [MLModelErrorModelDecryptionKeyFetch](modeldecryptionkeyfetch.md): An error code for problems related to retrieving a model’s decryption key.
- [MLModelErrorModelDecryption](modeldecryption.md): An error code for problems related to decrypting models.
- [MLModelErrorUpdate](update.md): An error code for problems related to on-device model updates.
- [MLModelErrorCustomModel](custommodel.md): An error code for problems related to custom models.
- [MLModelErrorIO](io.md): An error code for problems related to the system’s input or output.
- [MLModelErrorPredictionCancelled](predictioncancelled.md): An error code for problems related to canceling the prediction before it completes.
- [MLModelErrorGeneric](generic.md): An error code for runtime issues that don’t apply to the other error codes.
