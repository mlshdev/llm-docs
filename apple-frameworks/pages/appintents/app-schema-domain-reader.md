> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-reader](https://developer.apple.com/documentation/appintents/app-schema-domain-reader)

# Reader

**Framework:** App Intents  
**Kind:** API Collection

Make your document reader’s actions available in the Shortcuts app by adopting schemas for document viewing and manipulation.

<a id="overview"></a>

## Overview

The `.reader` domain defines app schemas that provide a structured representation for common document reading actions and content. Apply schemas in the `.reader` domain to make your document reader’s functionality available as actions in the Shortcuts app. Schemas in this domain don’t make your conforming types discoverable by Apple Intelligence and Siri.

> **Tip**

> Xcode generates a template implementation when you type `reader_` and select a schema from the suggestions list.

For more information about app schemas, see [App schema domains](app-schema-domains.md).

## Topics

### Actions

- [deletePages](appschema/readerintent/deletepages.md): An intent schema that deletes the specified pages.
- [enhanceDocuments](appschema/readerintent/enhancedocuments.md): An intent schema that enhances the documents.
- [insertPages](appschema/readerintent/insertpages.md): An intent schema that inserts pages from the specified files.
- [openDocument](appschema/readerintent/opendocument.md): An intent schema that opens the specified files in the reader.
- [openPage](appschema/readerintent/openpage.md): An intent schema that opens the app to the specified document page.
- [resizeDocuments](appschema/readerintent/resizedocuments.md): An intent schema that resizes the documents to a particular width and height.
- [rotateDocuments](appschema/readerintent/rotatedocuments.md): An intent schema that rotates the documents in the specified direction.
- [rotatePages](appschema/readerintent/rotatepages.md): An intent schema that rotates the pages in the specified direction.
- [searchDocuments](appschema/readerintent/searchdocuments.md): An intent schema that searches for text in the documents.
- [AppSchema.ReaderIntent](appschema/readerintent.md): Identifies intent schemas in the reader domain.

### Content and parameter types

- [document](appschema/readerentity/document.md): An entity schema for a document.
- [page](appschema/readerentity/page.md): An entity schema for a page.
- [AppSchema.ReaderEntity](appschema/readerentity.md): Identifies entity schemas in the reader domain.

### Types for static parameters

- [documentKind](appschema/readerenum/documentkind.md): An enum schema for a document kind parameter.
- [AppSchema.ReaderEnum](appschema/readerenum.md): Identifies enum schemas in the reader domain.

## See Also

### Shortcuts-specific domains

- [Books](app-schema-domain-books.md): Make your ebook reader’s actions available in the Shortcuts app by adopting schemas for common reading actions.
- [Browser](app-schema-domain-browser.md): Make your web browser’s actions available in the Shortcuts app by adopting schemas for common browsing actions.
- [Files](app-schema-domain-files.md): Make your app’s file-management actions available in the Shortcuts app.
- [Journaling](app-schema-domain-journaling.md): Make your journaling app’s actions available in the Shortcuts app by adopting schemas for journal-entry management.
- [Presentation](app-schema-domain-presentation.md): Make your presentation app’s actions available in the Shortcuts app by adopting schemas for common presentation actions.
- [Spreadsheet](app-schema-domain-spreadsheet.md): Make your spreadsheet app’s actions available in the Shortcuts app by adopting schemas for spreadsheet management.
- [Whiteboard](app-schema-domain-whiteboard.md): Make your whiteboard app’s actions available in the Shortcuts app by adopting schemas for common whiteboard actions.
- [Word processor](app-schema-domain-word-processor.md): Make your word processor’s actions available in the Shortcuts app by adopting schemas for document editing.
