> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibraryrequest/sort(by:ascending:)](https://developer.apple.com/documentation/musickit/musiclibraryrequest/sort(by:ascending:))

# sort(by:ascending:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sorts items by a specified property.

## Declaration

```swift
mutating func sort<Value>(by keyPath: KeyPath<MusicItemType.LibrarySortProperties, Value>, ascending: Bool)
```
