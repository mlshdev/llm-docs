> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/dialogicon(_:)](https://developer.apple.com/documentation/swiftui/view/dialogicon(_:))

# dialogIcon(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · tvOS 17.0+ · watchOS 10.0+

Configures the icon used by dialogs within this view.

## Declaration

```swift
nonisolated func dialogIcon(_ icon: Image?) -> some View

```

## Parameters

- `icon`: The custom icon to use for confirmation dialogs and alerts. Passing `nil` will use the default app icon.

<a id="discussion"></a>

## Discussion

On macOS, this icon replaces the default icon of the app.

On watchOS, this icon will be shown in any dialogs presented.

This modifier has no effect on other platforms.

The following example configures a `confirmationDialog` with a custom image.

```swift
Button("Delete items") {
    isShowingDialog = true
}
.confirmationDialog(
    "Are you sure you want to erase these items?",
        isPresented: $isShowingDialog
) {
    Button("Erase", role: .destructive) {
        // Handle item deletion.
    }
    Button("Cancel", role: .cancel) {
        isShowingDialog = false
    }
}
.dialogIcon(Image(...))
```

## See Also

### Configuring a dialog

- [dialogIcon(\_:)](../scene/dialogicon%28__%29.md): Configures the icon used by alerts.
- [dialogSeverity(\_:)](dialogseverity%28__%29.md)
- [dialogSeverity(\_:)](../scene/dialogseverity%28__%29.md): Sets the severity for alerts.
- [dialogSuppressionToggle(isSuppressed:)](dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a default suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(isSuppressed:)](../scene/dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogSuppressionToggle(\_:isSuppressed:)](dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a custom suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(\_:isSuppressed:)](../scene/dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogPreventsAppTermination(\_:)](dialogpreventsapptermination%28__%29.md): Whether the alert or confirmation dialog prevents the app from being quit/terminated by the system or app termination menu item.
