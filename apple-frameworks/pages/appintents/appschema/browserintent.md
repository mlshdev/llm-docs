> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/browserintent](https://developer.apple.com/documentation/appintents/appschema/browserintent)

# AppSchema.BrowserIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the browser domain.

## Declaration

```swift
protocol BrowserIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [bookmarkTab](browserintent/bookmarktab.md): An intent schema that creates a new bookmark for this tab.
- [bookmarkURL](browserintent/bookmarkurl.md): An intent schema that creates a new bookmark for a given URL.
- [clearHistory](browserintent/clearhistory.md): An intent schema that clears history, and related cookies and other website data.
- [closeTabs](browserintent/closetabs.md): An intent schema that closes the selected tabs.
- [closeWindows](browserintent/closewindows.md): An intent schema that closes the selected windows.
- [createTab](browserintent/createtab.md): An intent schema that creates a new tab with a URL loaded, or blank if omitted.
- [createWindow](browserintent/createwindow.md): An intent schema that creates a new browser window.
- [deleteBookmarks](browserintent/deletebookmarks.md): An intent schema that deletes the selected bookmarks.
- [findOnPage](browserintent/findonpage.md): An intent schema that finds the given text on the selected tab.
- [openBookmark](browserintent/openbookmark.md): An intent schema that opens the specified bookmark.
- [openURLInTab](browserintent/openurlintab.md): An intent schema that navigates a tab to the given URL.
- [search](browserintent/search.md): Deprecated. An intent schema that searches for the given string on the web.
- [switchTab](browserintent/switchtab.md): An intent schema that switches to an existing tab.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [bookmarkTab](browserintent/bookmarktab.md): An intent schema that creates a new bookmark for this tab.
- [bookmarkURL](browserintent/bookmarkurl.md): An intent schema that creates a new bookmark for a given URL.
- [clearHistory](browserintent/clearhistory.md): An intent schema that clears history, and related cookies and other website data.
- [closeTabs](browserintent/closetabs.md): An intent schema that closes the selected tabs.
- [closeWindows](browserintent/closewindows.md): An intent schema that closes the selected windows.
- [createTab](browserintent/createtab.md): An intent schema that creates a new tab with a URL loaded, or blank if omitted.
- [createWindow](browserintent/createwindow.md): An intent schema that creates a new browser window.
- [deleteBookmarks](browserintent/deletebookmarks.md): An intent schema that deletes the selected bookmarks.
- [findOnPage](browserintent/findonpage.md): An intent schema that finds the given text on the selected tab.
- [openBookmark](browserintent/openbookmark.md): An intent schema that opens the specified bookmark.
- [openURLInTab](browserintent/openurlintab.md): An intent schema that navigates a tab to the given URL.
- [switchTab](browserintent/switchtab.md): An intent schema that switches to an existing tab.
