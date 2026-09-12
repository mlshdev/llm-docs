> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/audio-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/audio-swift.struct)

# SpotlightSearchTool.ContentDomain.Audio

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attribute mapping for the audio domain.

## Declaration

```swift
struct Audio
```

## Topics

### Configuring the domain

- [init(artist:album:transcription:date:)](audio-swift.struct/init%28artist_album_transcription_date_%29.md)

### Getting the domain attributes

- [album](audio-swift.struct/album.md): Attributes queried for the album. Default: [album](../../searchableitemattribute/album.md)
- [artist](audio-swift.struct/artist.md): Attributes queried for the artist. Default: [artist](../../searchableitemattribute/artist.md)
- [date](audio-swift.struct/date.md): Attributes queried for the recording date. Default: [contentCreationDate](../../searchableitemattribute/contentcreationdate.md)
- [transcription](audio-swift.struct/transcription.md): Attributes queried for transcribed text.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the audio domain

- [audio](audio-swift.type.property.md): Music, podcasts, voice memos, and other audio content.
- [audio(\_:)](audio%28__%29.md): Music, podcasts, voice memos, and other audio content with custom attribute mapping.
