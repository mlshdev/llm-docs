> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibraryrequest/sort(by:ascending:)

# sort(by:ascending:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sorts items by a specified property.

## Declaration

```swift
mutating func sort<Value>(by keyPath: KeyPath<MusicItemType.LibrarySortProperties, Value>, ascending: Bool)
```
