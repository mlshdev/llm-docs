> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysectionedrequest/filteritems(matching:memberof:)-zmb0](https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest/filteritems(matching:memberof:)-zmb0)

# filterItems(matching:memberOf:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters items by an optional property for an array of possible values.

## Declaration

```swift
mutating func filterItems<Value>(matching keyPath: KeyPath<MusicItemType.LibraryFilter, Value?>, memberOf values: [Value?]) where Value : MusicLibraryRequestFilterValueMembershipComparable
```
