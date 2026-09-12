> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/statebookmarkidentifier](https://developer.apple.com/documentation/tabletopkit/statebookmarkidentifier)

# StateBookmarkIdentifier

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A unique identifier for bookmarks.

## Declaration

```swift
struct StateBookmarkIdentifier
```

<a id="overview"></a>

## Overview

A bookmark identifier needs to be unique across all instances of the same tabletop game.

## Topics

### Creating bookmark identifiers

- [init(\_:)](statebookmarkidentifier/init%28__%29.md)

### Getting identifier values

- [rawValue](statebookmarkidentifier/rawvalue.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bookmarks

- [StateBookmark](statebookmark.md): A snapshot of the game state at a point in time.
