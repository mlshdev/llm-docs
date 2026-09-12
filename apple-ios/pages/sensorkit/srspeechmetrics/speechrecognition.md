> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechmetrics/speechrecognition](https://developer.apple.com/documentation/sensorkit/srspeechmetrics/speechrecognition)

# speechRecognition (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The partial or final results of the speech recognition request.

## Declaration

```swift
var speechRecognition: SFSpeechRecognitionResult? { get }
```

## See Also

### Getting speech metrics and analytics

- [audioLevel](audiolevel.md): The audio level of the speech.
- [SRAudioLevel](../sraudiolevel.md): An object that represents the audio level for a range of speech.
- [soundClassification](soundclassification.md): The highest-ranking classifications in the time range.
- [speechExpression](speechexpression.md): The metrics and voice analytics for the range of speech.

# speechRecognition (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The partial or final results of the speech recognition request.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) SFSpeechRecognitionResult * speechRecognition;
```

## See Also

### Getting speech metrics and analytics

- [audioLevel](audiolevel.md): The audio level of the speech.
- [SRAudioLevel](../sraudiolevel.md): An object that represents the audio level for a range of speech.
- [soundClassification](soundclassification.md): The highest-ranking classifications in the time range.
- [speechExpression](speechexpression.md): The metrics and voice analytics for the range of speech.
