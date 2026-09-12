> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysectionedrequest/filtersections(matching:contains:)-3jf7b](https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest/filtersections(matching:contains:)-3jf7b)

# filterSections(matching:contains:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Filters sections by a given optional property that contains a specific string.

## Declaration

```swift
mutating func filterSections(matching keyPath: KeyPath<SectionType.LibraryFilter, String?>, contains text: String) where SectionType : MusicLibraryRequestable
```
