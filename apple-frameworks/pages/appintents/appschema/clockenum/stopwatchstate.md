> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/clockenum/stopwatchstate](https://developer.apple.com/documentation/appintents/appschema/clockenum/stopwatchstate)

# stopwatchState

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An enum schema for a stopwatch state parameter.

## Declaration

```swift
var stopwatchState: some AppSchemaEnum { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s parameter types available to Apple Intelligence, conform your [AppEnum](../../appenum.md) to a schema that describes a parameter’s possible values to the system. If your app’s functionality aligns with the `clock` domain and a parameter type matches the `stopwatchState` schema, you can generate the protocol conformance the schema requires for your app enum implementation with the `@AppEnum( .clock.stopwatchState)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app enum that conforms to the `stopwatchState` schema:

```swift
@AppEnum(schema: .clock.stopwatchState)
enum StopwatchState: String {
    case paused
    case running

    static let caseDisplayRepresentations: [Self: DisplayRepresentation] = [
        .paused: "Paused",
        .running: "Running"
    ]
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).
