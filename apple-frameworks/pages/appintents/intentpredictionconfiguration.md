> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentpredictionconfiguration

# IntentPredictionConfiguration

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface that provides the configuration for a single prediction.

## Declaration

```swift
protocol IntentPredictionConfiguration
```

## Topics

### Associated Types

- [Intent](intentpredictionconfiguration/intent.md)

## Relationships

### Conforming Types

- [IntentPrediction](intentprediction.md)
- [TupleIntentPrediction](tupleintentprediction.md)

## See Also

### Getting the supporting types

- [IntentPrediction](intentprediction.md): A prediction for an app intent that the system might display to someone when it’s relevant.
- [Prediction](predictableintent/prediction.md)
- [IntentPredictionsBuilder](intentpredictionsbuilder.md): A result builder that allows you to declaratively describe the predictions for an app intent.
