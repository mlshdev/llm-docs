> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-journaling](https://developer.apple.com/documentation/appintents/app-schema-domain-journaling)

# Journaling

**Framework:** App Intents  
**Kind:** API Collection

Make your journaling app’s actions available in the Shortcuts app by adopting schemas for journal-entry management.

<a id="overview"></a>

## Overview

The `.journal` domain defines app schemas that provide a structured representation for common journaling actions and content. Apply schemas in the `.journal` domain to make your journaling app’s functionality available as actions in the Shortcuts app. Schemas in this domain don’t make your conforming types discoverable by Apple Intelligence and Siri.

> **Tip**

> Xcode generates a template implementation when you type `journal_` and select a schema from the suggestions list.

For more information about app schemas, see [App schema domains](app-schema-domains.md).

## Topics

### Actions

- [createAudioEntry](appschema/journalintent/createaudioentry.md): An intent schema that creates a new audio journal entry.
- [createEntry](appschema/journalintent/createentry.md): An intent schema that creates a new journal entry.
- [deleteEntry](appschema/journalintent/deleteentry.md): An intent schema that deletes the specified journal entries.
- [updateEntry](appschema/journalintent/updateentry.md): An intent schema that updates journal entry.
- [AppSchema.JournalIntent](appschema/journalintent.md): Identifies intent schemas in the journal domain.

### Content and parameter types

- [entry](appschema/journalentity/entry.md): An entity schema for an entry.
- [AppSchema.JournalEntity](appschema/journalentity.md): Identifies entity schemas in the journal domain.

### Deprecated schemas

- [search](appschema/journalintent/search.md): Deprecated. An intent schema that searches journal entries.

## See Also

### Shortcuts-specific domains

- [Books](app-schema-domain-books.md): Make your ebook reader’s actions available in the Shortcuts app by adopting schemas for common reading actions.
- [Browser](app-schema-domain-browser.md): Make your web browser’s actions available in the Shortcuts app by adopting schemas for common browsing actions.
- [Files](app-schema-domain-files.md): Make your app’s file-management actions available in the Shortcuts app.
- [Presentation](app-schema-domain-presentation.md): Make your presentation app’s actions available in the Shortcuts app by adopting schemas for common presentation actions.
- [Reader](app-schema-domain-reader.md): Make your document reader’s actions available in the Shortcuts app by adopting schemas for document viewing and manipulation.
- [Spreadsheet](app-schema-domain-spreadsheet.md): Make your spreadsheet app’s actions available in the Shortcuts app by adopting schemas for spreadsheet management.
- [Whiteboard](app-schema-domain-whiteboard.md): Make your whiteboard app’s actions available in the Shortcuts app by adopting schemas for common whiteboard actions.
- [Word processor](app-schema-domain-word-processor.md): Make your word processor’s actions available in the Shortcuts app by adopting schemas for document editing.
