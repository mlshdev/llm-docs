> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/whiteboardintent](https://developer.apple.com/documentation/appintents/assistantschemas/whiteboardintent)

# AssistantSchemas.WhiteboardIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app intents that offer whiteboard functionality.

## Declaration

```swift
protocol WhiteboardIntent : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [createBoard](whiteboardintent/createboard.md): Deprecated. The app intent conforms to the schema for creating a new whiteboard canvas.
- [createItem](whiteboardintent/createitem.md): Deprecated. The app intent conforms to the schema for creating an item on a whiteboard canvas.
- [deleteBoard](whiteboardintent/deleteboard.md): Deprecated. The app intent conforms to the schema for deleting a whiteboard canvas.
- [deleteItem](whiteboardintent/deleteitem.md): Deprecated. The app intent conforms to the schema for deleting an item on a whiteboard canvas.
- [openBoard](whiteboardintent/openboard.md): Deprecated. The app intent conforms to the schema for opening a new whiteboard canvas.
- [updateBoard](whiteboardintent/updateboard.md): Deprecated. The app intent conforms to the schema for updating a whiteboard canvas.
- [updateItem](whiteboardintent/updateitem.md): Deprecated. The app intent conforms to the schema for updating an item on a whiteboard canvas.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.IntentSchema](../assistantschema/intentschema.md)
- [AssistantSchemas.IntentSchema](intentschema.md)
