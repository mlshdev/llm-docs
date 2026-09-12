> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelerror-swift.struct/featuretype](https://developer.apple.com/documentation/coreml/mlmodelerror-swift.struct/featuretype)

# featureType

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An error code for problems related to model features.

## Declaration

```swift
static var featureType: MLModelError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Core ML typically throws this error when an app sends an input feature a value that’s of an incorrect type.

## See Also

### Error Codes

- [parameters](parameters.md): An error code for problems related to model parameters.
- [modelCollection](modelcollection.md): An error code for problems related to retrieving a model collection from the deployment system.
- [modelDecryptionKeyFetch](modeldecryptionkeyfetch.md): An error code for problems related to retrieving a model’s decryption key.
- [modelDecryption](modeldecryption.md): An error code for problems related to decrypting models.
- [update](update.md): An error code for problems related to on-device model updates.
- [customLayer](customlayer.md): An error code for problems related to custom layers.
- [customModel](custommodel.md): An error code for problems related to custom models.
- [io](io.md): An error code for problems related to the system’s input or output.
- [predictionCancelled](predictioncancelled.md): An error code for problems related to cancelling the prediction before it completes.
- [generic](generic.md): An error code for runtime issues that don’t apply to the other error codes.
- [MLModelError.Code](code.md): Information about a Core ML model error.
