> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibraryrequest/filter(matching:contains:)-4q231

# filter(matching:contains:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters items by a given optional property that contains a specific string.

## Declaration

```swift
mutating func filter(matching keyPath: KeyPath<MusicItemType.LibraryFilter, String?>, contains text: String)
```
