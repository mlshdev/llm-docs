> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibraryrequest/filter(matching:contains:)-9756l](https://developer.apple.com/documentation/musickit/musiclibraryrequest/filter(matching:contains:)-9756l)

# filter(matching:contains:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters items by a given relationship that matches a specific value.

## Declaration

```swift
mutating func filter<RelatedMusicItemType>(matching keyPath: KeyPath<MusicItemType.LibraryFilter, MusicItemCollection<RelatedMusicItemType>?>, contains relatedItem: RelatedMusicItemType) where RelatedMusicItemType : MusicItem
```
