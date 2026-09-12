> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibraryrequest/filter(matching:equalto:)-8efya](https://developer.apple.com/documentation/musickit/musiclibraryrequest/filter(matching:equalto:)-8efya)

# filter(matching:equalTo:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters items by a given optional property that matches a specific value.

## Declaration

```swift
mutating func filter<Value>(matching keyPath: KeyPath<MusicItemType.LibraryFilter, Value?>, equalTo value: Value?) where Value : MusicLibraryRequestFilterValueEquatable
```
