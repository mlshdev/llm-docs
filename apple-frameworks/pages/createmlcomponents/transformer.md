> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer](https://developer.apple.com/documentation/createmlcomponents/transformer)

# Transformer

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that takes an input and produces an output.

## Declaration

```swift
protocol Transformer<Input, Output>
```

## Topics

### Applying and adapting

- [applied(to:eventHandler:)](transformer/applied%28to_eventhandler_%29.md): Performs the transformation on a single input.
- [adaptedAsAnnotatedFeatureTransformer(annotationType:)](transformer/adaptedasannotatedfeaturetransformer%28annotationtype_%29.md): Returns an annotated-feature transformer that transforms the features using this transformer while leaving the annotations unchanged.
- [adaptedAsAnnotatedPredictionTransformer(annotationType:)](transformer/adaptedasannotatedpredictiontransformer%28annotationtype_%29.md): Returns an annotated-prediction transformer that transforms the predictions using this transformer while leaving the annotations unchanged.
- [adaptedAsEstimator()](transformer/adaptedasestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [adaptedAsRandomTransformer()](transformer/adaptedasrandomtransformer%28%29.md): Returns a random transformer wrapping a transformer.
- [adaptedAsTemporal()](transformer/adaptedastemporal%28%29.md): Exposes this transformer as a temporal transformer.
- [adaptedAsUpdatableEstimator()](transformer/adaptedasupdatableestimator%28%29.md): Exposes this transformer as a trivial estimator.
- [Input](transformer/input.md): The input type.
- [Output](transformer/output.md): The output type.

### Appending

- [appending(\_:)](transformer/appending%28__%29.md): Composes this transformer with an annotated-feature transformer.

### Transforming and predicting

- [callAsFunction(\_:eventHandler:)](transformer/callasfunction%28__eventhandler_%29.md): Performs the transformation on a single input.
- [prediction(from:)](transformer/prediction%28from_%29.md): Performs a prediction from a single input.
- [prediction(from:eventHandler:)](transformer/prediction%28from_eventhandler_%29.md): Performs a prediction on a sequence of annotated inputs.

### Exporting

- [export(to:)](transformer/export%28to_%29.md): Exports this transformer as a CoreML model.
- [export(to:metadata:)](transformer/export%28to_metadata_%29.md): Exports this transformer as a CoreML model with userInfo.

## Relationships

### Inherited By

- [Classifier](classifier.md)
- [ImageFeatureExtractor](imagefeatureextractor.md)
- [Regressor](regressor.md)
- [TabularTransformer](tabulartransformer.md)

### Conforming Types

- [AudioConvertingTransformer](audioconvertingtransformer.md)
- [AudioReader](audioreader.md)
- [ColumnConcatenator](columnconcatenator.md)
- [ColumnSelectorTransformer](columnselectortransformer.md)
- [ComposedTabularTransformer](composedtabulartransformer.md)
- [ComposedTransformer](composedtransformer.md)
- [DateFeatureExtractor](datefeatureextractor.md)
- [FullyConnectedNetworkClassifierModel](fullyconnectednetworkclassifiermodel.md)
- [FullyConnectedNetworkMultiLabelClassifierModel](fullyconnectednetworkmultilabelclassifiermodel.md)
- [FullyConnectedNetworkRegressorModel](fullyconnectednetworkregressormodel.md)
- [HumanBodyActionPeriodPredictor](humanbodyactionperiodpredictor.md)
- [HumanBodyPoseExtractor](humanbodyposeextractor.md)
- [HumanHandPoseExtractor](humanhandposeextractor.md)
- [ImageBlur](imageblur.md)
- [ImageColorTransformer](imagecolortransformer.md)
- [ImageCropper](imagecropper.md)
- [ImageExposureAdjuster](imageexposureadjuster.md)
- [ImageFeaturePrint](imagefeatureprint.md)
- [ImageFlipper](imageflipper.md)
- [ImageReader](imagereader.md)
- [ImageRotator](imagerotator.md)
- [ImageScaler](imagescaler.md)
- [ImputeTransformer](imputetransformer.md)
- [JointsSelector](jointsselector.md)
- [LinearRegressorModel](linearregressormodel.md)
- [LinearTimeSeriesForecaster.Model](lineartimeseriesforecaster/model.md)
- [LinearTransformer](lineartransformer.md)
- [LogisticRegressionClassifierModel](logisticregressionclassifiermodel.md)
- [MLModelClassifierAdaptor](mlmodelclassifieradaptor.md)
- [MLModelImageFeatureExtractor](mlmodelimagefeatureextractor.md)
- [MLModelRegressorAdaptor](mlmodelregressoradaptor.md)
- [MLModelTransformerAdaptor](mlmodeltransformeradaptor.md)
- [MaxAbsScaler.Transformer](maxabsscaler/transformer.md)
- [MinMaxScaler.Transformer](minmaxscaler/transformer.md)
- [MultivariateLinearRegressor.Model](multivariatelinearregressor/model.md)
- [NormalizationScaler.Transformer](normalizationscaler/transformer.md)
- [OneHotEncoder.Transformer](onehotencoder/transformer.md)
- [OptionalUnwrapper](optionalunwrapper.md)
- [OrdinalEncoder.Transformer](ordinalencoder/transformer.md)
- [PoseSelector](poseselector.md)
- [RandomImageNoiseGenerator](randomimagenoisegenerator.md)
- [Reshaper](reshaper.md)
- [RobustScaler.Transformer](robustscaler/transformer.md)
- [StandardScaler.Transformer](standardscaler/transformer.md)
- [TimeSeriesClassifier.Model](timeseriesclassifier/model.md)
- [TreeClassifierModel](treeclassifiermodel.md)
- [TreeRegressorModel](treeregressormodel.md)
- [VideoReader](videoreader.md)

## See Also

### Protocols

- [TemporalTransformer](temporaltransformer.md): A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output sequence.
- [RandomTransformer](randomtransformer.md): A transformer that takes an input and a random number generator and produces a randomized output.
- [Estimator](estimator.md): An estimator that creates a transformer by fitting to a data set.
- [TemporalEstimator](temporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of temporal features.
- [SupervisedEstimator](supervisedestimator.md): An estimator that creates a transformer by fitting to a data set.
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of annotated temporal features.
- [UpdatableEstimator](updatableestimator.md): An estimator that can be incrementally updated.
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md): A supervised estimator that can be incrementally updated.
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
