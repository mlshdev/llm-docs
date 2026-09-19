> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibraryrequest/filter(matching:memberof:)-3e2ab

# filter(matching:memberOf:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters items by a property for an array of possible values.

## Declaration

```swift
mutating func filter<Value>(matching keyPath: KeyPath<MusicItemType.LibraryFilter, Value>, memberOf values: [Value]) where Value : MusicLibraryRequestFilterValueMembershipComparable
```
