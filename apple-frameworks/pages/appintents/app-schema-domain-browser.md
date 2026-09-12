> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-browser](https://developer.apple.com/documentation/appintents/app-schema-domain-browser)

# Browser

**Framework:** App Intents  
**Kind:** API Collection

Make your web browser’s actions available in the Shortcuts app by adopting schemas for common browsing actions.

<a id="overview"></a>

## Overview

The `.browser` domain defines app schemas that provide a structured representation for common browsing actions and content. Apply schemas in the `.browser` domain to make your browser’s functionality available as actions in the Shortcuts app. Schemas in this domain don’t make your conforming types discoverable by Apple Intelligence and Siri.

> **Tip**

> Xcode generates a template implementation when you type `browser_` and select a schema from the suggestions list.

For more information about app schemas, see [App schema domains](app-schema-domains.md).

## Topics

### Actions

- [bookmarkTab](appschema/browserintent/bookmarktab.md): An intent schema that creates a new bookmark for this tab.
- [bookmarkURL](appschema/browserintent/bookmarkurl.md): An intent schema that creates a new bookmark for a given URL.
- [clearHistory](appschema/browserintent/clearhistory.md): An intent schema that clears history, and related cookies and other website data.
- [closeTabs](appschema/browserintent/closetabs.md): An intent schema that closes the selected tabs.
- [closeWindows](appschema/browserintent/closewindows.md): An intent schema that closes the selected windows.
- [createTab](appschema/browserintent/createtab.md): An intent schema that creates a new tab with a URL loaded, or blank if omitted.
- [createWindow](appschema/browserintent/createwindow.md): An intent schema that creates a new browser window.
- [deleteBookmarks](appschema/browserintent/deletebookmarks.md): An intent schema that deletes the selected bookmarks.
- [findOnPage](appschema/browserintent/findonpage.md): An intent schema that finds the given text on the selected tab.
- [openBookmark](appschema/browserintent/openbookmark.md): An intent schema that opens the specified bookmark.
- [openURLInTab](appschema/browserintent/openurlintab.md): An intent schema that navigates a tab to the given URL.
- [switchTab](appschema/browserintent/switchtab.md): An intent schema that switches to an existing tab.
- [AppSchema.BrowserIntent](appschema/browserintent.md): Identifies intent schemas in the browser domain.

### Content and parameter types

- [bookmark](appschema/browserentity/bookmark.md): An entity schema for a bookmark.
- [readingListItem](appschema/browserentity/readinglistitem.md): An entity schema for a reading list item.
- [tab](appschema/browserentity/tab.md): An entity schema for a tab.
- [tabGroup](appschema/browserentity/tabgroup.md): An entity schema for a tab group.
- [window](appschema/browserentity/window.md): An entity schema for a window.
- [AppSchema.BrowserEntity](appschema/browserentity.md): Identifies entity schemas in the browser domain.

### Types for static parameters

- [clearHistoryTimeFrame](appschema/browserenum/clearhistorytimeframe.md): An enum schema for a clear history time frame parameter.
- [AppSchema.BrowserEnum](appschema/browserenum.md): Identifies enum schemas in the browser domain.

### Deprecated schemas

- [search](appschema/browserintent/search.md): Deprecated. An intent schema that searches for the given string on the web.

## See Also

### Shortcuts-specific domains

- [Books](app-schema-domain-books.md): Make your ebook reader’s actions available in the Shortcuts app by adopting schemas for common reading actions.
- [Files](app-schema-domain-files.md): Make your app’s file-management actions available in the Shortcuts app.
- [Journaling](app-schema-domain-journaling.md): Make your journaling app’s actions available in the Shortcuts app by adopting schemas for journal-entry management.
- [Presentation](app-schema-domain-presentation.md): Make your presentation app’s actions available in the Shortcuts app by adopting schemas for common presentation actions.
- [Reader](app-schema-domain-reader.md): Make your document reader’s actions available in the Shortcuts app by adopting schemas for document viewing and manipulation.
- [Spreadsheet](app-schema-domain-spreadsheet.md): Make your spreadsheet app’s actions available in the Shortcuts app by adopting schemas for spreadsheet management.
- [Whiteboard](app-schema-domain-whiteboard.md): Make your whiteboard app’s actions available in the Shortcuts app by adopting schemas for common whiteboard actions.
- [Word processor](app-schema-domain-word-processor.md): Make your word processor’s actions available in the Shortcuts app by adopting schemas for document editing.
