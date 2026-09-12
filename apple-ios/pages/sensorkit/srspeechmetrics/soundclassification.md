> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechmetrics/soundclassification](https://developer.apple.com/documentation/sensorkit/srspeechmetrics/soundclassification)

# soundClassification (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The highest-ranking classifications in the time range.

## Declaration

```swift
var soundClassification: SNClassificationResult? { get }
```

## See Also

### Getting speech metrics and analytics

- [audioLevel](audiolevel.md): The audio level of the speech.
- [SRAudioLevel](../sraudiolevel.md): An object that represents the audio level for a range of speech.
- [speechRecognition](speechrecognition.md): The partial or final results of the speech recognition request.
- [speechExpression](speechexpression.md): The metrics and voice analytics for the range of speech.

# soundClassification (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The highest-ranking classifications in the time range.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) SNClassificationResult * soundClassification;
```

## See Also

### Getting speech metrics and analytics

- [audioLevel](audiolevel.md): The audio level of the speech.
- [SRAudioLevel](../sraudiolevel.md): An object that represents the audio level for a range of speech.
- [speechRecognition](speechrecognition.md): The partial or final results of the speech recognition request.
- [speechExpression](speechexpression.md): The metrics and voice analytics for the range of speech.
