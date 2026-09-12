> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/tupleintentprediction](https://developer.apple.com/documentation/appintents/tupleintentprediction)

# TupleIntentPrediction

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that represents a collection of predictions for a specific app intent.

## Declaration

```swift
struct TupleIntentPrediction<Intent, T> where Intent : AppIntent
```

## Relationships

### Conforms To

- [IntentPredictionConfiguration](intentpredictionconfiguration.md)

## See Also

### Building predictions

- [buildBlock(\_:)](intentpredictionsbuilder/buildblock%28__%29.md)
- [buildBlock(\_:\_:)](intentpredictionsbuilder/buildblock%28____%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:)](intentpredictionsbuilder/buildblock%28______%29.md): Conforms when `Intent` conforms to `AppIntent`.
