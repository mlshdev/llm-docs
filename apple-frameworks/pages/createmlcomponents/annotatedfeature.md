> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/annotatedfeature](https://developer.apple.com/documentation/createmlcomponents/annotatedfeature)

# AnnotatedFeature

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An annotated example for fitting a supervised estimator.

## Declaration

```swift
struct AnnotatedFeature<Feature, Annotation>
```

## Mentioned In

- [Creating a multi-label image classifier](creating-a-multi-label-image-classifier.md)

## Topics

### Creating the feature

- [init(feature:annotation:)](annotatedfeature/init%28feature_annotation_%29.md): Creates an example with a feature and an annotation.

### Getting the properties

- [annotation](annotatedfeature/annotation.md): The annotation.
- [feature](annotatedfeature/feature.md): The feature value.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Annotations

- [AnnotatedFiles](annotatedfiles.md): An annotated files collection.
- [AnnotatedBatch](annotatedbatch.md): A batch of annotated examples for fitting a supervised estimator.
- [AnnotatedFeatureProvider](annotatedfeatureprovider.md): An adaptor that converts a regular estimator to a tabular estimator by selecting features and annotations from columns.
- [AnnotatedPrediction](annotatedprediction.md): An annotated prediction.
- [DataFrameTemporalAnnotationParameters](dataframetemporalannotationparameters.md): Annotation parameters for the dataframe containing temporal annotations.
