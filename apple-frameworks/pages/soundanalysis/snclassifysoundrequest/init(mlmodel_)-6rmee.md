> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifysoundrequest/init(mlmodel:)-6rmee](https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest/init(mlmodel:)-6rmee)

# init(mlModel:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a request that uses a custom sound classification model.

## Declaration

```swift
init(mlModel: MLModel) throws
```

## Parameters

- `mlModel`: A Core ML sound classification model.

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

<a id="Discussion"></a>

## Discussion

The model you provide must accept audio data as input and produce a classification dictionary output that contains the probability of each category. For example, you can generate a sound classifier model by creating an [MLSoundClassifier](../../createml/mlsoundclassifier.md) and training it with your own audio files.

## See Also

### Creating a Request

- [init(classifierIdentifier:)](init%28classifieridentifier_%29.md): Creates a request that uses the framework’s built-in sound classification model.
- [SNClassifierIdentifier](../snclassifieridentifier.md): An identifier that represents the versions of the framework’s sound classifier.

# initWithMLModel:error: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a request that uses a custom sound classification model.

## Declaration

```objectivec
- (instancetype) initWithMLModel:(MLModel *) mlModel error:(NSError **) error;
```

## Parameters

- `mlModel`: A Core ML sound classification model.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise, `nil`.

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

<a id="Discussion"></a>

## Discussion

The model you provide must accept audio data as input and produce a classification dictionary output that contains the probability of each category. For example, you can generate a sound classifier model by creating an [MLSoundClassifier](../../createml/mlsoundclassifier.md) and training it with your own audio files.

## See Also

### Creating a Request

- [initWithClassifierIdentifier:error:](init%28classifieridentifier_%29.md): Creates a request that uses the framework’s built-in sound classification model.
- [SNClassifierIdentifier](../snclassifieridentifier.md): An identifier that represents the versions of the framework’s sound classifier.
