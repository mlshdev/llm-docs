> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/mlmodelregressoradaptor](https://developer.apple.com/documentation/createmlcomponents/mlmodelregressoradaptor)

# MLModelRegressorAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that uses a Core ML model as a regressor.

## Declaration

```swift
struct MLModelRegressorAdaptor<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

## Topics

### Creating an adaptor

- [init(model:)](mlmodelregressoradaptor/init%28model_%29.md): Creates a MLModel regressor adaptor from a model.
- [init(contentsOf:configuration:)](mlmodelregressoradaptor/init%28contentsof_configuration_%29.md): Creates a model adaptor from a CoreML model URL.

### Getting the model

- [model](mlmodelregressoradaptor/model.md): The CoreML model.

### Performing the prediction

- [applied(to:eventHandler:)](mlmodelregressoradaptor/applied%28to_eventhandler_%29.md): Performs a prediction from a single input.

## Relationships

### Conforms To

- [Regressor](regressor.md)
- [Transformer](transformer.md)

## See Also

### Core ML adaptors

- [MLModelTransformerAdaptor](mlmodeltransformeradaptor.md): A transformer that uses a Core ML model.
- [MLModelClassifierAdaptor](mlmodelclassifieradaptor.md): A transformer that uses a Core ML model as a classifier.
- [ModelMetadata](modelmetadata.md): User info keys that specify useful information about a model.
