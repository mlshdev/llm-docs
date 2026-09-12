> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentpredictionsbuilder](https://developer.apple.com/documentation/appintents/intentpredictionsbuilder)

# IntentPredictionsBuilder

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A result builder that allows you to declaratively describe the predictions for an app intent.

## Declaration

```swift
@resultBuilder enum IntentPredictionsBuilder<Intent> where Intent : AppIntent
```

## Topics

### Building predictions

- [buildBlock(\_:)](intentpredictionsbuilder/buildblock%28__%29.md)
- [buildBlock(\_:\_:)](intentpredictionsbuilder/buildblock%28____%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:)](intentpredictionsbuilder/buildblock%28______%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [TupleIntentPrediction](tupleintentprediction.md): A type that represents a collection of predictions for a specific app intent.

### Type Methods

- [buildBlock(\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28__________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28____________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28______________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28__________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28____________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28______________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28__________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28____________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](intentpredictionsbuilder/buildblock%28______________________________%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildExpression(\_:)](intentpredictionsbuilder/buildexpression%28__%29.md)

## See Also

### Getting the supporting types

- [IntentPrediction](intentprediction.md): A prediction for an app intent that the system might display to someone when it’s relevant.
- [Prediction](predictableintent/prediction.md)
- [IntentPredictionConfiguration](intentpredictionconfiguration.md): An interface that provides the configuration for a single prediction.
