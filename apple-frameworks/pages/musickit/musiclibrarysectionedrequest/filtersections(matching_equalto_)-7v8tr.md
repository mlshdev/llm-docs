> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysectionedrequest/filtersections(matching:equalto:)-7v8tr](https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest/filtersections(matching:equalto:)-7v8tr)

# filterSections(matching:equalTo:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters sections by a given property that matches a specific value.

## Declaration

```swift
mutating func filterSections<Value>(matching keyPath: KeyPath<SectionType.LibraryFilter, Value>, equalTo value: Value) where SectionType : MusicLibraryRequestable, Value : MusicLibraryRequestFilterValueEquatable
```
