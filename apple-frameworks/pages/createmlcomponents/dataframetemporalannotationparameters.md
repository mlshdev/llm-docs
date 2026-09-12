> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/dataframetemporalannotationparameters](https://developer.apple.com/documentation/createmlcomponents/dataframetemporalannotationparameters)

# DataFrameTemporalAnnotationParameters

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Annotation parameters for the dataframe containing temporal annotations.

## Declaration

```swift
struct DataFrameTemporalAnnotationParameters<Annotation> where Annotation : Equatable, Annotation : Sendable
```

## Topics

### Creating the parameters

- [init()](dataframetemporalannotationparameters/init%28%29.md): Creates a DataFrameTemporalAnnotationParameters by using default options.

### Getting the properties

- [annotationColumnID](dataframetemporalannotationparameters/annotationcolumnid.md): The column id that contains the annotation. The default value is “annotation” with `Annotation` type.
- [endTimeColumnID](dataframetemporalannotationparameters/endtimecolumnid.md): The column id that contains the end time. The default value is `nil`.
- [filePathColumnID](dataframetemporalannotationparameters/filepathcolumnid.md): The column id that contains the file path. The default value is “filePath” with String type.
- [filePathType](dataframetemporalannotationparameters/filepathtype-swift.property.md): The file path type in the annotation file. The default value is `.absolute`.
- [startTimeColumnID](dataframetemporalannotationparameters/starttimecolumnid.md): The column id that contains the start time. The default value is `nil`.

### Specifying the path type

- [DataFrameTemporalAnnotationParameters.FilePathType](dataframetemporalannotationparameters/filepathtype-swift.enum.md): The file path type to be used.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Annotations

- [AnnotatedFiles](annotatedfiles.md): An annotated files collection.
- [AnnotatedBatch](annotatedbatch.md): A batch of annotated examples for fitting a supervised estimator.
- [AnnotatedFeature](annotatedfeature.md): An annotated example for fitting a supervised estimator.
- [AnnotatedFeatureProvider](annotatedfeatureprovider.md): An adaptor that converts a regular estimator to a tabular estimator by selecting features and annotations from columns.
- [AnnotatedPrediction](annotatedprediction.md): An annotated prediction.
