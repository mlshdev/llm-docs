> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/createbookmarkaction](https://developer.apple.com/documentation/tabletopkit/createbookmarkaction)

# CreateBookmarkAction

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An action that takes a snapshot of the game.

## Declaration

```swift
struct CreateBookmarkAction
```

<a id="overview"></a>

## Overview

To create a bookmark action, use the [createBookmark(\_:context:)](tabletopaction/createbookmark%28__context_%29.md) or the [createBookmark(id:context:)](tabletopaction/createbookmark%28id_context_%29.md) static method.

## Topics

### Getting the bookmark

- [bookmark](createbookmarkaction/bookmark.md)

### Getting game-specific information

- [context](createbookmarkaction/context.md): An integer value that your game uses.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabletopAction](tabletopaction.md)

## See Also

### Actions

- [TabletopAction](tabletopaction.md): A protocol for objects that describe an action in a tabletop game.
- [MoveEquipmentAction](moveequipmentaction.md): An action that moves a piece of equipment on the table or changes the grouping.
- [UpdateEquipmentAction](updateequipmentaction.md): An action that updates properties of equipment on the table.
- [SetTurnAction](setturnaction.md): An action that sets the current seats participating in the current turn.
- [UpdateCounterAction](updatecounteraction.md): An action that updates the game counter.
- [CustomAction](customaction.md): A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.
