> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-spreadsheet](https://developer.apple.com/documentation/appintents/app-schema-domain-spreadsheet)

# Spreadsheet

**Framework:** App Intents  
**Kind:** API Collection

Make your spreadsheet app’s actions available in the Shortcuts app by adopting schemas for spreadsheet management.

<a id="overview"></a>

## Overview

The `.spreadsheet` domain defines app schemas that provide a structured representation for common spreadsheet actions and content. Apply schemas in the `.spreadsheet` domain to make your spreadsheet app’s functionality available as actions in the Shortcuts app. Schemas in this domain don’t make your conforming types discoverable by Apple Intelligence and Siri.

> **Tip**

> Xcode generates a template implementation when you type `spreadsheet_` and select a schema from the suggestions list.

For more information about app schemas, see [App schema domains](app-schema-domains.md).

## Topics

### Actions

- [addAudioToSheet](appschema/spreadsheetintent/addaudiotosheet.md): An intent schema that adds an audio clip to a sheet.
- [addCommentToSheet](appschema/spreadsheetintent/addcommenttosheet.md): An intent schema that adds a comment to a sheet.
- [addImageToSheet](appschema/spreadsheetintent/addimagetosheet.md): An intent schema that adds an image to a sheet.
- [addTextBoxToSheet](appschema/spreadsheetintent/addtextboxtosheet.md): An intent schema that adds text to a sheet.
- [addVideoToSheet](appschema/spreadsheetintent/addvideotosheet.md): An intent schema that adds a video to a sheet.
- [addWebVideoToSheet](appschema/spreadsheetintent/addwebvideotosheet.md): An intent schema that adds a web video to a sheet.
- [create](appschema/spreadsheetintent/create.md): An intent schema that opens the app for composing a new spreadsheet.
- [createSheet](appschema/spreadsheetintent/createsheet.md): An intent schema that creates a new sheet in a spreadsheet.
- [delete](appschema/spreadsheetintent/delete.md): An intent schema that deletes existing spreadsheets.
- [deleteSheet](appschema/spreadsheetintent/deletesheet.md): An intent schema that deletes sheets in a spreadsheet.
- [open](appschema/spreadsheetintent/open.md): An intent schema that opens the app into an existing spreadsheet.
- [openSheet](appschema/spreadsheetintent/opensheet.md): An intent schema that opens a sheet.
- [update](appschema/spreadsheetintent/update.md): An intent schema that renames an existing spreadsheet.
- [updateSheet](appschema/spreadsheetintent/updatesheet.md): An intent schema that updates an existing sheet.
- [AppSchema.SpreadsheetIntent](appschema/spreadsheetintent.md): Identifies intent schemas in the spreadsheet domain.

### Content and parameter types

- [document](appschema/spreadsheetentity/document.md): An entity schema for a document.
- [sheet](appschema/spreadsheetentity/sheet.md): An entity schema for a sheet.
- [template](appschema/spreadsheetentity/template.md): An entity schema for a template.
- [AppSchema.SpreadsheetEntity](appschema/spreadsheetentity.md): Identifies entity schemas in the spreadsheet domain.

## See Also

### Shortcuts-specific domains

- [Books](app-schema-domain-books.md): Make your ebook reader’s actions available in the Shortcuts app by adopting schemas for common reading actions.
- [Browser](app-schema-domain-browser.md): Make your web browser’s actions available in the Shortcuts app by adopting schemas for common browsing actions.
- [Files](app-schema-domain-files.md): Make your app’s file-management actions available in the Shortcuts app.
- [Journaling](app-schema-domain-journaling.md): Make your journaling app’s actions available in the Shortcuts app by adopting schemas for journal-entry management.
- [Presentation](app-schema-domain-presentation.md): Make your presentation app’s actions available in the Shortcuts app by adopting schemas for common presentation actions.
- [Reader](app-schema-domain-reader.md): Make your document reader’s actions available in the Shortcuts app by adopting schemas for document viewing and manipulation.
- [Whiteboard](app-schema-domain-whiteboard.md): Make your whiteboard app’s actions available in the Shortcuts app by adopting schemas for common whiteboard actions.
- [Word processor](app-schema-domain-word-processor.md): Make your word processor’s actions available in the Shortcuts app by adopting schemas for document editing.
