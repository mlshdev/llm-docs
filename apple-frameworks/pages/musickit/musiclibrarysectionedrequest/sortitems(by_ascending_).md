> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysectionedrequest/sortitems(by:ascending:)](https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest/sortitems(by:ascending:))

# sortItems(by:ascending:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sorts items by a specified property.

## Declaration

```swift
mutating func sortItems<Value>(by keyPath: KeyPath<MusicItemType.LibrarySortProperties, Value>, ascending: Bool)
```
