> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablecursoridentifier](https://developer.apple.com/documentation/tabletopkit/tablecursoridentifier)

# TableCursorIdentifier

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A unique identifier for cursors.

## Declaration

```swift
struct TableCursorIdentifier
```

<a id="overview"></a>

## Overview

A cursor identifier is unique across all instances of the same tabletop game.

## Topics

### Creating cursor identifiers

- [init(\_:)](tablecursoridentifier/init%28__%29.md)

### Getting identifier values

- [rawValue](tablecursoridentifier/rawvalue.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interactions

- [Simulating dice rolls as a component for your game](simulating-dice-rolls-as-a-component-for-your-game.md): Create a physically realistic dice game by adding interactive rolling and scoring.
- [TabletopInteraction](tabletopinteraction.md): A protocol for objects that manage the entire flow of players interacting with equipment.
- [TossableRepresentation](tossablerepresentation.md): An object that represents geometric shapes that the player can throw during gameplay, such as dice.
- [TableSnapshot](tablesnapshot.md): A snapshot of the current state of the table.
- [TableVisualState](tablevisualstate.md): A structure that represents the appearance of an object on the table.
- [TableCursor](tablecursor.md): A cursor conveys information about one equipment that is currently being controlled by an interaction.
