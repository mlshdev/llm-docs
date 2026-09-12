> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/mlmodelclassifieradaptor](https://developer.apple.com/documentation/createmlcomponents/mlmodelclassifieradaptor)

# MLModelClassifierAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that uses a Core ML model as a classifier.

## Declaration

```swift
struct MLModelClassifierAdaptor<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

## Topics

### Creating a transformer

- [init(model:)](mlmodelclassifieradaptor/init%28model_%29.md): Creates a MLModel classifier adaptor from a model.
- [init(contentsOf:configuration:)](mlmodelclassifieradaptor/init%28contentsof_configuration_%29.md): Creates a model adaptor from a CoreML model URL.

### Getting the model

- [model](mlmodelclassifieradaptor/model.md): The CoreML model.

### Performing the transformation

- [applied(to:eventHandler:)](mlmodelclassifieradaptor/applied%28to_eventhandler_%29.md): Performs a prediction from a single input.
- [MLModelClassifierAdaptor.Label](mlmodelclassifieradaptor/label.md): The classifier label type.

## Relationships

### Conforms To

- [Classifier](classifier.md)
- [Transformer](transformer.md)

## See Also

### Core ML adaptors

- [MLModelTransformerAdaptor](mlmodeltransformeradaptor.md): A transformer that uses a Core ML model.
- [MLModelRegressorAdaptor](mlmodelregressoradaptor.md): A transformer that uses a Core ML model as a regressor.
- [ModelMetadata](modelmetadata.md): User info keys that specify useful information about a model.
