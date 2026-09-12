> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/audioenum/appviewidentifier](https://developer.apple.com/documentation/appintents/appschema/audioenum/appviewidentifier)

# appViewIdentifier

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An enum schema for an app view identifier parameter.

## Declaration

```swift
var appViewIdentifier: some AppSchemaEnum { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s parameter types available to Apple Intelligence, conform your [AppEnum](../../appenum.md) to a schema that describes a parameter’s possible values to the system. If your app’s functionality aligns with the `audio` domain and a parameter type matches the `appViewIdentifier` schema, you can generate the protocol conformance the schema requires for your app enum implementation with the `@AppEnum( .audio.appViewIdentifier)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app enum that conforms to the `appViewIdentifier` schema:

```swift
@AppEnum(schema: .audio.appViewIdentifier)
enum AudioAppViewIdentifier: String {
    case nowPlaying

    static let caseDisplayRepresentations: [Self: DisplayRepresentation] = [
        .nowPlaying: "NowPlaying"
    ]
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Types for static parameters

- [activity](activity.md): An enum schema for an activity parameter.
- [affinityState](affinitystate.md): An enum schema for an affinity state parameter.
- [invocationSource](invocationsource.md): An enum schema for an invocation source parameter.
- [playbackAttributes](playbackattributes.md): An enum schema for a playback attributes parameter.
- [queueInsertionLocation](queueinsertionlocation.md): An enum schema for a queue insertion location parameter.
- [AppSchema.AudioEnum](../audioenum.md): Identifies enum schemas in the audio domain.
