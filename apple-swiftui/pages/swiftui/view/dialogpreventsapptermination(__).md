> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/dialogpreventsapptermination(_:)](https://developer.apple.com/documentation/swiftui/view/dialogpreventsapptermination(_:))

# dialogPreventsAppTermination(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Whether the alert or confirmation dialog prevents the app from being quit/terminated by the system or app termination menu item.

## Declaration

```swift
nonisolated func dialogPreventsAppTermination(_ prevents: Bool?) -> some View

```

<a id="discussion"></a>

## Discussion

SwiftUI uses the actions passed to the above dialogs to determine whether the dialog should block app termination by default when presented. If all of the following are satisfied, the dialog will not block app quit:

- There is only a single button and its role is not [destructive](../buttonrole/destructive.md)
- The [dialogSeverity(\_:)](dialogseverity%28__%29.md) is not \`DialogSeverity/critical\`\`
- There are no [TextField](../textfield.md)s

Use this modifier after a `View/alert` or `View/confirmationDialog` to specify whether the dialog should prevent app termination. Pass `nil` to explicitly request the automatic behavior/for the inert version of this modifier.

```swift
struct ConfirmLogoutView: View {
  @State private var isConfirming = false

  var body: some View {
    Button("Logout") { isConfirming = true }
      .confirmationDialog(
        Text("Logout?"),
          isPresented: $isConfirming
        ) {
          Button("Yes") {
            // Handle logout action.
          }
        }
        .dialogPreventsAppTermination(false)
    }
}
```

## See Also

### Configuring a dialog

- [dialogIcon(\_:)](dialogicon%28__%29.md): Configures the icon used by dialogs within this view.
- [dialogIcon(\_:)](../scene/dialogicon%28__%29.md): Configures the icon used by alerts.
- [dialogSeverity(\_:)](dialogseverity%28__%29.md)
- [dialogSeverity(\_:)](../scene/dialogseverity%28__%29.md): Sets the severity for alerts.
- [dialogSuppressionToggle(isSuppressed:)](dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a default suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(isSuppressed:)](../scene/dialogsuppressiontoggle%28issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
- [dialogSuppressionToggle(\_:isSuppressed:)](dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of dialogs and alerts presented within `self`, with a custom suppression message on macOS. Unused on other platforms.
- [dialogSuppressionToggle(\_:isSuppressed:)](../scene/dialogsuppressiontoggle%28__issuppressed_%29.md): Enables user suppression of an alert with a custom suppression message.
