> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-whiteboard](https://developer.apple.com/documentation/appintents/app-schema-domain-whiteboard)

# Whiteboard

**Framework:** App Intents  
**Kind:** API Collection

Make your whiteboard app’s actions available in the Shortcuts app by adopting schemas for common whiteboard actions.

<a id="overview"></a>

## Overview

The `.whiteboard` domain defines app schemas that provide a structured representation for common whiteboard actions and content. Apply schemas in the `.whiteboard` domain to make your app’s whiteboard functionality available as actions in the Shortcuts app. Schemas in this domain don’t make your conforming types discoverable by Apple Intelligence and Siri.

> **Tip**

> Xcode generates a template implementation when you type `whiteboard_` and select a schema from the suggestions list.

For more information about app schemas, see [App schema domains](app-schema-domains.md).

## Topics

### Actions

- [createBoard](appschema/whiteboardintent/createboard.md): An intent schema that creates a new board.
- [createItem](appschema/whiteboardintent/createitem.md): An intent schema that adds an item to a board.
- [deleteBoard](appschema/whiteboardintent/deleteboard.md): An intent schema that deletes one or more boards.
- [deleteItem](appschema/whiteboardintent/deleteitem.md): An intent schema that deletes the selected canvas items.
- [openBoard](appschema/whiteboardintent/openboard.md): An intent schema that opens an existing board.
- [updateBoard](appschema/whiteboardintent/updateboard.md): An intent schema that renames a board.
- [updateItem](appschema/whiteboardintent/updateitem.md): An intent schema that updates a board item.
- [AppSchema.WhiteboardIntent](appschema/whiteboardintent.md): Identifies intent schemas in the whiteboard domain.

### Content and parameter types

- [board](appschema/whiteboardentity/board.md): An entity schema for a board.
- [item](appschema/whiteboardentity/item.md): An entity schema for an item.
- [AppSchema.WhiteboardEntity](appschema/whiteboardentity.md): Identifies entity schemas in the whiteboard domain.

### Types for static parameters

- [color](appschema/whiteboardenum/color.md): An enum schema for a color parameter.
- [itemType](appschema/whiteboardenum/itemtype.md): An enum schema for an item type parameter.
- [AppSchema.WhiteboardEnum](appschema/whiteboardenum.md): Identifies enum schemas in the whiteboard domain.

## See Also

### Shortcuts-specific domains

- [Books](app-schema-domain-books.md): Make your ebook reader’s actions available in the Shortcuts app by adopting schemas for common reading actions.
- [Browser](app-schema-domain-browser.md): Make your web browser’s actions available in the Shortcuts app by adopting schemas for common browsing actions.
- [Files](app-schema-domain-files.md): Make your app’s file-management actions available in the Shortcuts app.
- [Journaling](app-schema-domain-journaling.md): Make your journaling app’s actions available in the Shortcuts app by adopting schemas for journal-entry management.
- [Presentation](app-schema-domain-presentation.md): Make your presentation app’s actions available in the Shortcuts app by adopting schemas for common presentation actions.
- [Reader](app-schema-domain-reader.md): Make your document reader’s actions available in the Shortcuts app by adopting schemas for document viewing and manipulation.
- [Spreadsheet](app-schema-domain-spreadsheet.md): Make your spreadsheet app’s actions available in the Shortcuts app by adopting schemas for spreadsheet management.
- [Word processor](app-schema-domain-word-processor.md): Make your word processor’s actions available in the Shortcuts app by adopting schemas for document editing.
