> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/alert(_:ispresented:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert(_:ispresented:actions:message:))

# alert(\_:isPresented:actions:message:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Presents an alert with a message when a given condition is true, using a localized string resource for a title.

## Declaration

```swift
@export(implementation) nonisolated func alert<A, M>(_ titleResource: LocalizedStringResource, isPresented: Binding<Bool>, @ContentBuilder actions: () -> A, @ContentBuilder message: () -> M) -> some View where A : View, M : View

```

## Parameters

- `titleResource`: Text resource for the localized string that describes the title of the alert.
- `isPresented`: A binding to a Boolean value that determines whether to present the alert. When the user presses or taps one of the alert’s actions, the system sets this value to `false` and dismisses.
- `actions`: A [ContentBuilder](../contentbuilder.md) returning the alert’s actions.
- `message`: A [ContentBuilder](../contentbuilder.md) returning the message for the alert.

<a id="discussion"></a>

## Discussion

In the example below, a login form conditionally presents an alert by setting the `didFail` state variable. When the form sets the value to to `true`, the system displays an alert with an “OK” action.

```swift
struct Login: View {
    @State private var didFail = false

    var body: some View {
        LoginForm(didFail: $didFail)
            .alert(
                "Login failed.",
                isPresented: $didFail
            ) {
                Button("OK") {
                    // Handle the acknowledgement.
                }
            } message: {
                Text("Please check your credentials and try again.")
            }
    }
}
```

All actions in an alert dismiss the alert after the action runs. The default button is shown with greater prominence. You can influence the default button by assigning it the [defaultAction](../keyboardshortcut/defaultaction.md) keyboard shortcut.

The system may reorder the buttons based on their role and prominence.

If no actions are present, the system includes a standard “OK” action. No default cancel action is provided. If you want to show a cancel action, use a button with a role of [cancel](../buttonrole/cancel.md).

On iOS, tvOS, and watchOS, alerts only support controls with labels that are [Text](../text.md). Passing any other type of view results in the content being omitted.

Only unstyled text is supported for the message.

This modifier creates a [Text](../text.md) view for the title on your behalf. See [Text](../text.md) for more information about localizing strings.

## See Also

### Presenting an alert

- [AlertScene](../alertscene.md): A scene that renders itself as a standalone alert dialog.
- [alert(\_:isPresented:actions:)](alert%28__ispresented_actions_%29.md): Presents an alert when a given condition is true, using a localized string resource for the title.
- [alert(\_:isPresented:presenting:actions:)](alert%28__ispresented_presenting_actions_%29.md): Presents an alert using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(\_:item:actions:)](alert%28__item_actions_%29.md): Presents an alert using the given data to produce the alert’s content and a text view as a title.
- [alert(error:actions:)](alert%28error_actions_%29.md): Presents an alert when an error is present.
- [alert(isPresented:error:actions:)](alert%28ispresented_error_actions_%29.md): Presents an alert when an error is present.
- [alert(\_:isPresented:presenting:actions:message:)](alert%28__ispresented_presenting_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(\_:item:actions:message:)](alert%28__item_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string key for a title.
- [alert(error:actions:message:)](alert%28error_actions_message_%29.md): Presents an alert with a message when an error is present.
- [alert(isPresented:error:actions:message:)](alert%28ispresented_error_actions_message_%29.md): Presents an alert with a message when an error is present.
