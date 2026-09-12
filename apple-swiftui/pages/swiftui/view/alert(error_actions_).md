> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/alert(error:actions:)](https://developer.apple.com/documentation/swiftui/view/alert(error:actions:))

# alert(error:actions:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Presents an alert when an error is present.

## Declaration

```swift
@export(implementation) nonisolated func alert<E, A>(error: Binding<E?>, @ContentBuilder actions: () -> A) -> some View where E : LocalizedError, A : View

```

## Parameters

- `error`: A binding to an optional localized Error. The system presents the alert when the binding’s value is non-nil, and uses the error to generate the alert’s title. When the user presses or taps one of the alert’s actions, the system sets this value to `nil` and dismisses. The error’s `errorDescription` will be used as the title.
- `actions`: A [ContentBuilder](../contentbuilder.md) returning the alert’s actions.

<a id="discussion"></a>

## Discussion

In the example below, a form conditionally presents an alert depending upon the value of an error. When the error value isn’t `nil`, the system presents an alert with an “OK” action.

The title of the alert is inferred from the error’s `errorDescription`.

```swift
struct TicketPurchase: View {
    @State private var error: TicketPurchaseError? = nil

    var body: some View {
        TicketForm(error: $error)
            .alert(error: $error) {
                Button("OK") {
                    // Handle acknowledgement.
                }
            }
    }
}
```

All actions in an alert dismiss the alert after the action runs. The default button is shown with greater prominence. You can influence the default button by assigning it the [defaultAction](../keyboardshortcut/defaultaction.md) keyboard shortcut.

The system may reorder the buttons based on their role and prominence.

If no actions are present, the system includes a standard “OK” action. No default cancel action is provided. If you want to show a cancel action, use a button with a role of [cancel](../buttonrole/cancel.md).

On iOS, tvOS, and watchOS, alerts only support controls with labels that are [Text](../text.md). Passing any other type of view results in the content being omitted.

This modifier creates a [Text](../text.md) view for the title on your behalf, and treats the localized key similar to [init(\_:tableName:bundle:comment:)](../text/init%28__tablename_bundle_comment_%29.md). See [Text](../text.md) for more information about localizing strings.

## See Also

### Presenting an alert

- [AlertScene](../alertscene.md): A scene that renders itself as a standalone alert dialog.
- [alert(\_:isPresented:actions:)](alert%28__ispresented_actions_%29.md): Presents an alert when a given condition is true, using a localized string resource for the title.
- [alert(\_:isPresented:presenting:actions:)](alert%28__ispresented_presenting_actions_%29.md): Presents an alert using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(\_:item:actions:)](alert%28__item_actions_%29.md): Presents an alert using the given data to produce the alert’s content and a text view as a title.
- [alert(isPresented:error:actions:)](alert%28ispresented_error_actions_%29.md): Presents an alert when an error is present.
- [alert(\_:isPresented:actions:message:)](alert%28__ispresented_actions_message_%29.md): Presents an alert with a message when a given condition is true, using a localized string resource for a title.
- [alert(\_:isPresented:presenting:actions:message:)](alert%28__ispresented_presenting_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(\_:item:actions:message:)](alert%28__item_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string key for a title.
- [alert(error:actions:message:)](alert%28error_actions_message_%29.md): Presents an alert with a message when an error is present.
- [alert(isPresented:error:actions:message:)](alert%28ispresented_error_actions_message_%29.md): Presents an alert with a message when an error is present.
