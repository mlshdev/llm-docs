> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/browserintent/closetabs](https://developer.apple.com/documentation/appintents/appschema/browserintent/closetabs)

# closeTabs

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that closes the selected tabs.

## Declaration

```swift
var closeTabs: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `browser` domain and one of your app’s actions matches the `closeTabs` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .browser.closeTabs)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `closeTabs` schema:

```swift
@AppIntent(schema: .browser.closeTabs)
struct CloseTabsIntent {
    var target: [<#TabEntity#>]

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

- [bookmarkTab](bookmarktab.md): An intent schema that creates a new bookmark for this tab.
- [bookmarkURL](bookmarkurl.md): An intent schema that creates a new bookmark for a given URL.
- [clearHistory](clearhistory.md): An intent schema that clears history, and related cookies and other website data.
- [closeWindows](closewindows.md): An intent schema that closes the selected windows.
- [createTab](createtab.md): An intent schema that creates a new tab with a URL loaded, or blank if omitted.
- [createWindow](createwindow.md): An intent schema that creates a new browser window.
- [deleteBookmarks](deletebookmarks.md): An intent schema that deletes the selected bookmarks.
- [findOnPage](findonpage.md): An intent schema that finds the given text on the selected tab.
- [openBookmark](openbookmark.md): An intent schema that opens the specified bookmark.
- [openURLInTab](openurlintab.md): An intent schema that navigates a tab to the given URL.
- [switchTab](switchtab.md): An intent schema that switches to an existing tab.
- [AppSchema.BrowserIntent](../browserintent.md): Identifies intent schemas in the browser domain.
