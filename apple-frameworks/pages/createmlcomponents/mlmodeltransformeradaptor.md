> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/mlmodeltransformeradaptor](https://developer.apple.com/documentation/createmlcomponents/mlmodeltransformeradaptor)

# MLModelTransformerAdaptor

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that uses a Core ML model.

## Declaration

```swift
struct MLModelTransformerAdaptor<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

## Topics

### Creating an adaptor

- [init(model:)](mlmodeltransformeradaptor/init%28model_%29.md): Creates a model adaptor from an MLModel.
- [init(contentsOf:configuration:)](mlmodeltransformeradaptor/init%28contentsof_configuration_%29.md): Creates a model adaptor from a CoreML model URL.

### Getting the model

- [model](mlmodeltransformeradaptor/model.md): The CoreML model.

### Performing the transformation

- [applied(to:eventHandler:)](mlmodeltransformeradaptor/applied%28to_eventhandler_%29.md): Performs a transformation on a single input.

## Relationships

### Conforms To

- [Transformer](transformer.md)

## See Also

### Core ML adaptors

- [MLModelClassifierAdaptor](mlmodelclassifieradaptor.md): A transformer that uses a Core ML model as a classifier.
- [MLModelRegressorAdaptor](mlmodelregressoradaptor.md): A transformer that uses a Core ML model as a regressor.
- [ModelMetadata](modelmetadata.md): User info keys that specify useful information about a model.
