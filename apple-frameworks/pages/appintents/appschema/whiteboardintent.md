> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/whiteboardintent](https://developer.apple.com/documentation/appintents/appschema/whiteboardintent)

# AppSchema.WhiteboardIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the whiteboard domain.

## Declaration

```swift
protocol WhiteboardIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [createBoard](whiteboardintent/createboard.md): An intent schema that creates a new board.
- [createItem](whiteboardintent/createitem.md): An intent schema that adds an item to a board.
- [deleteBoard](whiteboardintent/deleteboard.md): An intent schema that deletes one or more boards.
- [deleteItem](whiteboardintent/deleteitem.md): An intent schema that deletes the selected canvas items.
- [openBoard](whiteboardintent/openboard.md): An intent schema that opens an existing board.
- [updateBoard](whiteboardintent/updateboard.md): An intent schema that renames a board.
- [updateItem](whiteboardintent/updateitem.md): An intent schema that updates a board item.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [createBoard](whiteboardintent/createboard.md): An intent schema that creates a new board.
- [createItem](whiteboardintent/createitem.md): An intent schema that adds an item to a board.
- [deleteBoard](whiteboardintent/deleteboard.md): An intent schema that deletes one or more boards.
- [deleteItem](whiteboardintent/deleteitem.md): An intent schema that deletes the selected canvas items.
- [openBoard](whiteboardintent/openboard.md): An intent schema that opens an existing board.
- [updateBoard](whiteboardintent/updateboard.md): An intent schema that renames a board.
- [updateItem](whiteboardintent/updateitem.md): An intent schema that updates a board item.
