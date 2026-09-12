> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/annotatedfeatureprovider](https://developer.apple.com/documentation/createmlcomponents/annotatedfeatureprovider)

# AnnotatedFeatureProvider

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An adaptor that converts a regular estimator to a tabular estimator by selecting features and annotations from columns.

## Declaration

```swift
struct AnnotatedFeatureProvider<Base, UnwrappedInput> where Base : SupervisedEstimator, Base.Transformer.Input == UnwrappedInput?
```

<a id="overview"></a>

## Overview

Tabular estimators use multiple features columns as input. When there is a single column of features, you may use a non-tabular estimator. Do this by combining multiple columns with a `ColumnConcatenator` transformer. Once there is a single column of features, use `AnnotatedFeatureProvider` to specify which column contains the features, which column contains the annotations, and which column should hold the results.

When using `AnnotatedFeatureProvider`, make sure to handle missing values before using a non-tabular estimator that takes non-optional values. This example includes an `OptionalUnwrapper` transformer.

```
let concatenation = ColumnConcatenator<Float>(
    columnSelection: .include(columnNames: ["type", "region"]),
    concatenatedColumnName: "features"
)
let regression = AnnotatedFeatureProvider(
    OptionalUnwrapper<MLShapedArray<Float>>().appending(LinearRegressor<Float>()),
    annotationsColumnName: "price",
    featuresColumnName: "features",
    resultsColumnName: "result"
)
let task = concatenation.appending(regression)
```

## Topics

### Creating the provider

- [init(\_:annotationsColumnName:featuresColumnName:resultsColumnName:)](annotatedfeatureprovider/init%28__annotationscolumnname_featurescolumnname_resultscolumnname_%29.md): Creates an adaptor that converts a regular estimator to a tabular estimator.

### Getting the properties

- [annotationColumnID](annotatedfeatureprovider/annotationcolumnid.md): The annotation column identifier.
- [AnnotatedFeatureProvider.Annotation](annotatedfeatureprovider/annotation.md): The annotation type.
- [base](annotatedfeatureprovider/base.md): The base estimator.
- [featuresColumnName](annotatedfeatureprovider/featurescolumnname.md): The features column name.
- [resultsColumnName](annotatedfeatureprovider/resultscolumnname.md): The results column name.

### Encoding and decoding

- [encode(\_:to:)](annotatedfeatureprovider/encode%28__to_%29.md): Encodes a fitted transformer.
- [decode(from:)](annotatedfeatureprovider/decode%28from_%29.md): Decodes a previously fitted transformer.

### Fitting

- [fitted(to:validateOn:eventHandler:)](annotatedfeatureprovider/fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame
- [AnnotatedFeatureProvider.Transformer](annotatedfeatureprovider/transformer.md): The transformer type created by this estimator.

### Default Implementations

- [UpdatableSupervisedTabularEstimator Implementations](annotatedfeatureprovider/updatablesupervisedtabularestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTabularEstimator](supervisedtabularestimator.md)
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md)

## See Also

### Annotations

- [AnnotatedFiles](annotatedfiles.md): An annotated files collection.
- [AnnotatedBatch](annotatedbatch.md): A batch of annotated examples for fitting a supervised estimator.
- [AnnotatedFeature](annotatedfeature.md): An annotated example for fitting a supervised estimator.
- [AnnotatedPrediction](annotatedprediction.md): An annotated prediction.
- [DataFrameTemporalAnnotationParameters](dataframetemporalannotationparameters.md): Annotation parameters for the dataframe containing temporal annotations.
