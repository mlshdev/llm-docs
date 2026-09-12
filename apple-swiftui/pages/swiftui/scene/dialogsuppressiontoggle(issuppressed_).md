> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/dialogsuppressiontoggle(issuppressed:)](https://developer.apple.com/documentation/swiftui/scene/dialogsuppressiontoggle(issuppressed:))

# dialogSuppressionToggle(isSuppressed:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Enables user suppression of an alert with a custom suppression message.

## Declaration

```swift
nonisolated func dialogSuppressionToggle(isSuppressed: Binding<Bool>) -> some Scene

```

## Parameters

- `isSuppressed`: Whether the suppression toggle is on or off in the dialog.

<a id="discussion"></a>

## Discussion

Applying dialog suppression adds a toggle to dialogs on macOS, which allows the user to request the alert not be displayed again. Typically whether a dialog is suppressed is stored in `AppStorage` and used to decide whether to present the dialog in the future.

The following example configures an alert with a suppression toggle. The toggle’s state is stored in `AppStorage` and used to determine whether or not to show the dialog when the “Delete Items” button is pressed.

```swift
struct MyApp: App {
    @State private var isShowingDialog = false
    @AppStorage("suppressEraseItemAlert")
    private var suppressAlert = false

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
        .dialogSuppressionToggle(
            "Do not ask about erasing items again",
            isSuppressed: $suppressAlert)
    }
}
```

## See Also

### Configuring a dialog

- [dialogIcon(\_:)](../view/dialogicon%28__%29.md): Configures the icon used by dialogs within this view.
- [dialogIcon(\_:)](dialogicon%28__%29.md): Configures the icon used by alerts.
- [dialogSeverity(\_:)](../view/dialogseverity%28__%29.md)
- [dialogSeverity(\_:)](dialogseverity%28__%29.md): Sets the severity for alerts.
- [dialogSuppressionToggle(isSuppressed:)](../view/dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a default suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(\_:isSuppressed:)](../view/dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a custom suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(\_:isSuppressed:)](dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogPreventsAppTermination(\_:)](../view/dialogpreventsapptermination%28__%29.md): Whether the alert or confirmation dialog prevents the app from being quit/terminated by the system or app termination menu item.
