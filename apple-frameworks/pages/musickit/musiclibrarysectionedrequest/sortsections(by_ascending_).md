> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysectionedrequest/sortsections(by:ascending:)](https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest/sortsections(by:ascending:))

# sortSections(by:ascending:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sorts sections by a specified property.

## Declaration

```swift
mutating func sortSections<Value>(by keyPath: KeyPath<SectionType.LibrarySortProperties, Value>, ascending: Bool) where SectionType : MusicLibraryRequestable
```
