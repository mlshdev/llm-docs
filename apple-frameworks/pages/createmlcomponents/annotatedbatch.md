> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/annotatedbatch](https://developer.apple.com/documentation/createmlcomponents/annotatedbatch)

# AnnotatedBatch

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A batch of annotated examples for fitting a supervised estimator.

## Declaration

```swift
struct AnnotatedBatch<Scalar> where Scalar : MLShapedArrayScalar
```

## Topics

### Creating an annotated batch

- [init(features:annotations:)](annotatedbatch/init%28features_annotations_%29.md): Creates an annotated batch.

### Inspecting an annotated batch

- [annotations](annotatedbatch/annotations.md): The shaped array of annotations.
- [count](annotatedbatch/count.md): The number of examples in the batch.
- [features](annotatedbatch/features.md): The shaped array of features.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Annotations

- [AnnotatedFiles](annotatedfiles.md): An annotated files collection.
- [AnnotatedFeature](annotatedfeature.md): An annotated example for fitting a supervised estimator.
- [AnnotatedFeatureProvider](annotatedfeatureprovider.md): An adaptor that converts a regular estimator to a tabular estimator by selecting features and annotations from columns.
- [AnnotatedPrediction](annotatedprediction.md): An annotated prediction.
- [DataFrameTemporalAnnotationParameters](dataframetemporalannotationparameters.md): Annotation parameters for the dataframe containing temporal annotations.
