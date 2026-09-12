> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacontentrepresentable/appentityidentifiers](https://developer.apple.com/documentation/nowplaying/mediacontentrepresentable/appentityidentifiers)

# appEntityIdentifiers

**Framework:** NowPlaying  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The entities that represent this content, making them available to Siri and Apple Intelligence.

## Declaration

```swift
var appEntityIdentifiers: [EntityIdentifier] { get set }
```

<a id="discussion"></a>

## Discussion

Associate one or more `EntityIdentifier` values with the content so the system can connect the currently playing media to your app’s `AppEntity` types.

```swift
var content: any MediaContentRepresentable {
    var musicContent = MusicContent(id: song.id, songTitle: song.title, artistName: song.artist)
    musicContent.appEntityIdentifiers = [EntityIdentifier(for: SongEntity.self, identifier: song.id)]
    return musicContent
}
```
