> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/album/artistname](https://developer.apple.com/documentation/musickit/album/artistname)

# artistName

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The artist’s name.

## Declaration

```swift
var artistName: String { get }
```

<a id="discussion"></a>

## Discussion

You can find more precise information about this album’s artists in the [artists](artists.md) relationship, which, unlike [artistName](artistname.md), requires that you load it explicitly using the [with(\_:)](../musicpropertycontainer/with%28__%29.md) method, as in the following example:

```swift
    let detailedAlbum = try await album.with([.artists])
    let firstArtist = album.artists?.first
```
