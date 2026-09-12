> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-books](https://developer.apple.com/documentation/appintents/app-schema-domain-books)

# Books

**Framework:** App Intents  
**Kind:** API Collection

Make your ebook reader’s actions available in the Shortcuts app by adopting schemas for common reading actions.

<a id="overview"></a>

## Overview

The `.books` domain defines app schemas that provide a structured representation for common reading actions and content. Apply schemas in the `.books` domain to make your ebook reader’s functionality available as actions in the Shortcuts app. Schemas in this domain don’t make your conforming types discoverable by Apple Intelligence and Siri.

> **Tip**

> Xcode generates a template implementation when you type `books_` and select a schema from the suggestions list.

For more information about app schemas, see [App schema domains](app-schema-domains.md).

## Topics

### Actions

- [navigatePage](appschema/booksintent/navigatepage.md): An intent schema that navigates to the next or previous page.
- [openBook](appschema/booksintent/openbook.md): An intent schema that opens the specified book.
- [updateCharacterSpacing](appschema/booksintent/updatecharacterspacing.md): An intent schema that updates the character spacing for a book.
- [updateFontSize](appschema/booksintent/updatefontsize.md): An intent schema that updates the font size for a book.
- [updateLineSpacing](appschema/booksintent/updatelinespacing.md): An intent schema that updates the line spacing for a book.
- [updateSettings](appschema/booksintent/updatesettings.md): An intent schema that updates the settings for a book.
- [updateWordSpacing](appschema/booksintent/updatewordspacing.md): An intent schema that updates the word spacing for a book.
- [AppSchema.BooksIntent](appschema/booksintent.md): Identifies intent schemas in the books domain.

### Content and parameter types

- [audiobook](appschema/booksentity/audiobook.md): An entity schema for an audiobook.
- [book](appschema/booksentity/book.md): An entity schema for a book.
- [settings](appschema/booksentity/settings.md): An entity schema for settings.
- [AppSchema.BooksEntity](appschema/booksentity.md): Identifies entity schemas in the books domain.

### Types for static parameters

- [contentType](appschema/booksenum/contenttype.md): An enum schema for a content type parameter.
- [font](appschema/booksenum/font.md): An enum schema for a font parameter.
- [fontSize](appschema/booksenum/fontsize.md): An enum schema for a font size parameter.
- [navigationDirection](appschema/booksenum/navigationdirection.md): An enum schema for a navigation direction parameter.
- [pageNavigationSetting](appschema/booksenum/pagenavigationsetting.md): An enum schema for a page navigation setting parameter.
- [relativeCharacterSpacingChange](appschema/booksenum/relativecharacterspacingchange.md): An enum schema for a relative character spacing change parameter.
- [relativeFontChange](appschema/booksenum/relativefontchange.md): An enum schema for a relative font change parameter.
- [relativeLineSpacingChange](appschema/booksenum/relativelinespacingchange.md): An enum schema for a relative line spacing change parameter.
- [relativeWordSpacingChange](appschema/booksenum/relativewordspacingchange.md): An enum schema for a relative word spacing change parameter.
- [theme](appschema/booksenum/theme.md): An enum schema for a theme parameter.
- [AppSchema.BooksEnum](appschema/booksenum.md): Identifies enum schemas in the books domain.

### Deprecated schemas

- [playAudiobook](appschema/booksintent/playaudiobook.md): Deprecated. An intent schema that plays an audiobook.
- [search](appschema/booksintent/search.md): Deprecated. An intent schema that opens the app and searches for the given term.

## See Also

### Shortcuts-specific domains

- [Browser](app-schema-domain-browser.md): Make your web browser’s actions available in the Shortcuts app by adopting schemas for common browsing actions.
- [Files](app-schema-domain-files.md): Make your app’s file-management actions available in the Shortcuts app.
- [Journaling](app-schema-domain-journaling.md): Make your journaling app’s actions available in the Shortcuts app by adopting schemas for journal-entry management.
- [Presentation](app-schema-domain-presentation.md): Make your presentation app’s actions available in the Shortcuts app by adopting schemas for common presentation actions.
- [Reader](app-schema-domain-reader.md): Make your document reader’s actions available in the Shortcuts app by adopting schemas for document viewing and manipulation.
- [Spreadsheet](app-schema-domain-spreadsheet.md): Make your spreadsheet app’s actions available in the Shortcuts app by adopting schemas for spreadsheet management.
- [Whiteboard](app-schema-domain-whiteboard.md): Make your whiteboard app’s actions available in the Shortcuts app by adopting schemas for common whiteboard actions.
- [Word processor](app-schema-domain-word-processor.md): Make your word processor’s actions available in the Shortcuts app by adopting schemas for document editing.
