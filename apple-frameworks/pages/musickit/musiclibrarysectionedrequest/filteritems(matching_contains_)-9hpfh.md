> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysectionedrequest/filteritems(matching:contains:)-9hpfh](https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest/filteritems(matching:contains:)-9hpfh)

# filterItems(matching:contains:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters items by a given optional property that contains a specific string.

## Declaration

```swift
mutating func filterItems(matching keyPath: KeyPath<MusicItemType.LibraryFilter, String?>, contains text: String)
```
