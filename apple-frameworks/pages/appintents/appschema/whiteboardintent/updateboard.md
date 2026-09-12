> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/whiteboardintent/updateboard](https://developer.apple.com/documentation/appintents/appschema/whiteboardintent/updateboard)

# updateBoard

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that renames a board.

## Declaration

```swift
var updateBoard: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `whiteboard` domain and one of your app’s actions matches the `updateBoard` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .whiteboard.updateBoard)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `updateBoard` schema:

```swift
@AppIntent(schema: .whiteboard.updateBoard)
struct UpdateCanvasBoardIntent {
    var target: <#CanvasEntity#>
    var title: String?

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [createBoard](createboard.md): An intent schema that creates a new board.
- [createItem](createitem.md): An intent schema that adds an item to a board.
- [deleteBoard](deleteboard.md): An intent schema that deletes one or more boards.
- [deleteItem](deleteitem.md): An intent schema that deletes the selected canvas items.
- [openBoard](openboard.md): An intent schema that opens an existing board.
- [updateItem](updateitem.md): An intent schema that updates a board item.
- [AppSchema.WhiteboardIntent](../whiteboardintent.md): Identifies intent schemas in the whiteboard domain.
