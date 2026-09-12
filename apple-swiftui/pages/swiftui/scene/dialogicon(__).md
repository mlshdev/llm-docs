> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/dialogicon(_:)](https://developer.apple.com/documentation/swiftui/scene/dialogicon(_:))

# dialogIcon(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Configures the icon used by alerts.

## Declaration

```swift
nonisolated func dialogIcon(_ icon: Image?) -> some Scene

```

## Parameters

- `icon`: The custom icon to use for the alert. Passing `nil` will use the default app icon.

<a id="discussion"></a>

## Discussion

In macOS, this icon replaces the default icon of the app.

```swift
struct MyApp: App {
    @State private var isShowingDialog = false

    var body: some Scene {
        Window(...) {
            Button("Delete items") {
                isShowingDialog = true
            }
        }

        AlertScene(
            "Are you sure you want to erase these items?",
            isPresented: $isShowingDialog
        ) {
            Button("Erase", role: .destructive) {
                // Handle item deletion.
            }
            Button("Cancel", role: .cancel) {
                // Handle cancellation
            }
        }
        .dialogIcon(Image(Trash.png))
    }
}
```

## See Also

### Configuring a dialog

- [dialogIcon(\_:)](../view/dialogicon%28__%29.md): Configures the icon used by dialogs within this view.
- [dialogSeverity(\_:)](../view/dialogseverity%28__%29.md)
- [dialogSeverity(\_:)](dialogseverity%28__%29.md): Sets the severity for alerts.
- [dialogSuppressionToggle(isSuppressed:)](../view/dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a default suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(isSuppressed:)](dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogSuppressionToggle(\_:isSuppressed:)](../view/dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a custom suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(\_:isSuppressed:)](dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogPreventsAppTermination(\_:)](../view/dialogpreventsapptermination%28__%29.md): Whether the alert or confirmation dialog prevents the app from being quit/terminated by the system or app termination menu item.
