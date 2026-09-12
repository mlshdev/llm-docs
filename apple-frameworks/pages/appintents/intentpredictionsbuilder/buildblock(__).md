> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentpredictionsbuilder/buildblock(_:)](https://developer.apple.com/documentation/appintents/intentpredictionsbuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildBlock<A0>(_ block: A0) -> A0 where Intent == A0.Intent, A0 : IntentPredictionConfiguration
```

## See Also

### Building predictions

- [buildBlock(\_:\_:)](buildblock%28____%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Conforms when `Intent` conforms to `AppIntent`.
- [TupleIntentPrediction](../tupleintentprediction.md): A type that represents a collection of predictions for a specific app intent.
