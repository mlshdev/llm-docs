> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/documentbrowsercontextmenu(_:)](https://developer.apple.com/documentation/swiftui/scene/documentbrowsercontextmenu(_:))

# documentBrowserContextMenu(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 1.0+

Adds to a `DocumentGroupLaunchScene` actions that accept a list of selected files as their parameter.

## Declaration

```swift
@MainActor @preconcurrency func documentBrowserContextMenu(@ContentBuilder _ menu: @escaping ([URL]?) -> some View) -> some Scene

```

## Parameters

- `menu`: Items representing the content of the menu.

<a id="discussion"></a>

## Discussion

The actions are displayed in the document browser navigation bar when a document browser is in Select mode, and also added to context menu for the file items.

## See Also

### Configuring a document launcher scene

- [documentLaunchTitle(\_:)](documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
