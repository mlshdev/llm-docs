> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/predictableintent/predictionconfiguration](https://developer.apple.com/documentation/appintents/predictableintent/predictionconfiguration)

# predictionConfiguration

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A collection of predictions the system can use when it suggests the app intent.

## Declaration

```swift
@IntentPredictionsBuilder<Self> static var predictionConfiguration: Self.Prediction { get }
```

<a id="discussion"></a>

## Discussion

Use this property to offer descriptions of your app intent that the system can use when making predictions. In the implementation of this property, use a result builder to create one or more [IntentPrediction](../intentprediction.md) structures, and use these structures to describe a suggested action. To include data from your app intent in a description, initialize the [IntentPrediction](../intentprediction.md) type with key paths to parameters of your app intent. The following example creates an intent prediction for an app intent with a `name` property that serves as a parameter to that app intent.

```swift
static var predictionConfiguration: some IntentPredictionConfiguration {
   IntentPrediction(parameters: (\Self.$name)) { name in
       DisplayRepresentation(
           title: "Create a book named \(name)"
       )
   }
}
```
