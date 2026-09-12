> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/dialogseverity(_:)](https://developer.apple.com/documentation/swiftui/view/dialogseverity(_:))

# dialogSeverity(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 13.0+ · watchOS 10.0+

## Declaration

```swift
nonisolated func dialogSeverity(_ severity: DialogSeverity) -> some View

```

## Parameters

- `severity`: The severity to use for confirmation dialogs and alerts.

## See Also

### Configuring a dialog

- [dialogIcon(\_:)](dialogicon%28__%29.md): Configures the icon used by dialogs within this view.
- [dialogIcon(\_:)](../scene/dialogicon%28__%29.md): Configures the icon used by alerts.
- [dialogSeverity(\_:)](../scene/dialogseverity%28__%29.md): Sets the severity for alerts.
- [dialogSuppressionToggle(isSuppressed:)](dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a default suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(isSuppressed:)](../scene/dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogSuppressionToggle(\_:isSuppressed:)](dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a custom suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(\_:isSuppressed:)](../scene/dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogPreventsAppTermination(\_:)](dialogpreventsapptermination%28__%29.md): Whether the alert or confirmation dialog prevents the app from being quit/terminated by the system or app termination menu item.
