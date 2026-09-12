> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/annotatedfiles](https://developer.apple.com/documentation/createmlcomponents/annotatedfiles)

# AnnotatedFiles

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An annotated files collection.

## Declaration

```swift
struct AnnotatedFiles
```

## Topics

### Creating the feature

- [init(labeledBySubdirectoryNamesAt:type:continueOnFailure:)](annotatedfiles/init%28labeledbysubdirectorynamesat_type_continueonfailure_%29.md): Reads training examples from a directory containing files in labeled sub-directories.
- [init(labeledByNamesAt:separator:index:type:continueOnFailure:)](annotatedfiles/init%28labeledbynamesat_separator_index_type_continueonfailure_%29.md): Reads training examples from a directory containing files having their labels in the name. The name can contain multiple words separated by a `separator`. So the `index` tells the position of the label in the file name. Files with incorrect name format are ignored.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Annotations

- [AnnotatedBatch](annotatedbatch.md): A batch of annotated examples for fitting a supervised estimator.
- [AnnotatedFeature](annotatedfeature.md): An annotated example for fitting a supervised estimator.
- [AnnotatedFeatureProvider](annotatedfeatureprovider.md): An adaptor that converts a regular estimator to a tabular estimator by selecting features and annotations from columns.
- [AnnotatedPrediction](annotatedprediction.md): An annotated prediction.
- [DataFrameTemporalAnnotationParameters](dataframetemporalannotationparameters.md): Annotation parameters for the dataframe containing temporal annotations.
