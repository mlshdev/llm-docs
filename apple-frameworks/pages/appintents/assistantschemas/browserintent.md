> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/browserintent](https://developer.apple.com/documentation/appintents/assistantschemas/browserintent)

# AssistantSchemas.BrowserIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app intents that offer web browsing functionality.

## Declaration

```swift
protocol BrowserIntent : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [bookmarkTab](browserintent/bookmarktab.md): Deprecated. The app intent conforms to the schema for creating a new bookmark for a browser tab.
- [bookmarkURL](browserintent/bookmarkurl.md): Deprecated. The app intent conforms to the schema for creating a bookmark for a URL.
- [clearHistory](browserintent/clearhistory.md): Deprecated. The app intent conforms to the schema for clearing the browser history.
- [closeTabs](browserintent/closetabs.md): Deprecated. The app intent conforms to the schema for closing a browser tab.
- [closeWindows](browserintent/closewindows.md): Deprecated. The app intent conforms to the schema for closing one or more browser windows.
- [createTab](browserintent/createtab.md): Deprecated. The app intent conforms to the schema for creating a browser tab.
- [createWindow](browserintent/createwindow.md): Deprecated. The app intent conforms to the schema for creating a new browser window.
- [deleteBookmarks](browserintent/deletebookmarks.md): Deprecated. The app intent conforms to the schema for deleting a bookmark.
- [findOnPage](browserintent/findonpage.md): Deprecated. The app intent conforms to the schema for finding text on a web page.
- [openBookmark](browserintent/openbookmark.md): Deprecated. The app intent conforms to the Assistant schema for opening a bookmarked URL.
- [openURLInTab](browserintent/openurlintab.md): Deprecated. The app intent conforms to the Assistant schema for loading a URL in a browser tab.
- [search](browserintent/search.md): Deprecated. The app intent conforms to the Assistant schema for performing a web search.
- [switchTab](browserintent/switchtab.md): Deprecated. The app intent conforms to the schema for switching to a specific tab.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.IntentSchema](../assistantschema/intentschema.md)
- [AssistantSchemas.IntentSchema](intentschema.md)
