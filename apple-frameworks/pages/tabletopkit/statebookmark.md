> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/statebookmark](https://developer.apple.com/documentation/tabletopkit/statebookmark)

# StateBookmark

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A snapshot of the game state at a point in time.

## Declaration

```swift
struct StateBookmark
```

<a id="overview"></a>

## Overview

Add bookmarks between turns so that you can jump to a prior turn and continue gameplay from there. When you jump to a bookmark, you reset the game state back to that point in time.

To add a bookmark, use the [createBookmark(\_:context:)](tabletopaction/createbookmark%28__context_%29.md) or similar method. To jump to a bookmark, use the [jumpToBookmark(\_:)](tabletopgame/jumptobookmark%28__%29.md) or similar method.

## Topics

### Initializing bookmarks

- [init(id:)](statebookmark/init%28id_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bookmarks

- [StateBookmarkIdentifier](statebookmarkidentifier.md): A unique identifier for bookmarks.
