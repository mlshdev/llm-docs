> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/audioentity/radioshow](https://developer.apple.com/documentation/appintents/appschema/audioentity/radioshow)

# radioShow

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An entity schema for a radio show.

## Declaration

```swift
var radioShow: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `audio` domain and its content matches the `radioShow` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .audio.radioShow)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `radioShow` schema:

```swift
@AppEntity(schema: .audio.radioShow)
struct RadioShowEntity {
    // MARK: Static

    static let defaultQuery = RadioShowEntityQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var title: String

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct RadioShowEntityQuery: EntityQuery {
        func entities(for identifiers: [RadioShowEntity.ID]) async throws -> [RadioShowEntity] {
            <#code#>
        }
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Content and parameter types

- [album](album.md): An entity schema for an album.
- [algorithmicRadioStation](algorithmicradiostation.md): An entity schema for an algorithmic radio station.
- [ambientSound](ambientsound.md): An entity schema for an ambient sound.
- [artist](artist.md): An entity schema for an artist.
- [audiobook](audiobook.md): An entity schema for an audiobook.
- [classicalMusicRecording](classicalmusicrecording.md): An entity schema for a classical music recording.
- [liveRadioStation](liveradiostation.md): An entity schema for a live radio station.
- [newsBrief](newsbrief.md): An entity schema for news brief.
- [newsProvider](newsprovider.md): An entity schema for news provider.
- [playlist](playlist.md): An entity schema for a playlist.
- [podcastCollection](podcastcollection.md): An entity schema for a podcast collection.
- [podcastEpisode](podcastepisode.md): An entity schema for a podcast episode.
- [podcastShow](podcastshow.md): An entity schema for a podcast show.
- [radioShowEpisode](radioshowepisode.md): An entity schema for a radio show episode.
- [song](song.md): An entity schema for a song.
