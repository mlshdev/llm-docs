> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentpredictionsbuilder/buildblock(_:_:)](https://developer.apple.com/documentation/appintents/intentpredictionsbuilder/buildblock(_:_:))

# buildBlock(\_:\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildBlock<A0, A1>(_ a0: A0, _ a1: A1) -> TupleIntentPrediction<A0.Intent, (A0, A1)> where Intent == A0.Intent, A0 : IntentPredictionConfiguration, A1 : IntentPredictionConfiguration, A0.Intent == A1.Intent
```

## See Also

### Building predictions

- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [TupleIntentPrediction](../tupleintentprediction.md): A type that represents a collection of predictions for a specific app intent.
