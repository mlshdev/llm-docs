> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/pickablemusicitem](https://developer.apple.com/documentation/musickit/pickablemusicitem)

# PickableMusicItem

**Framework:** MusicKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A protocol for the MusicKit item type that can be selected in the music picker.

## Declaration

```swift
protocol PickableMusicItem : MusicItem, Decodable, Encodable, Hashable
```

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MusicItem](musicitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [MusicVideo](musicvideo.md)
- [Song](song.md)
- [Track](track.md)
