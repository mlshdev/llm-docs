> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/audiointent/createstation](https://developer.apple.com/documentation/appintents/appschema/audiointent/createstation)

# createStation

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An intent schema that starts a station based on the now-playing item.

## Declaration

```swift
var createStation: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `audio` domain and one of your app’s actions matches the `createStation` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .audio.createStation)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `createStation` schema:

```swift
@AppIntent(schema: .audio.createStation)
struct CreateStationIntent {
    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [addToLibrary](addtolibrary.md): An intent schema that adds an audio item to the person’s library.
- [addToPlaylist](addtoplaylist.md): An intent schema that adds an audio item to a playlist.
- [playAudio](playaudio.md): An intent schema that plays an audio item.
- [recognizeAudio](recognizeaudio.md): An intent schema that finds out what audio is playing nearby.
- [updateAudioAffinity](updateaudioaffinity.md): An intent schema that sets the like state of an audio item to liked, unliked, or unset.
- [warmupAudioQueue](warmupaudioqueue.md): An intent schema that warms up an audio item by setting the queue without starting playback.
- [AppSchema.AudioIntent](../audiointent.md): Identifies intent schemas in the audio domain.
