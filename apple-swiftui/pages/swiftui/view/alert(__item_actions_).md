> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/alert(_:item:actions:)](https://developer.apple.com/documentation/swiftui/view/alert(_:item:actions:))

# alert(\_:item:actions:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Presents an alert using the given data to produce the alert’s content and a text view as a title.

## Declaration

```swift
@export(implementation) nonisolated func alert<A, T>(_ title: Text, item data: Binding<T?>, @ContentBuilder actions: (T) -> A) -> some View where A : View

```

## Parameters

- `title`: The title of the alert.
- `data`: A binding to optional source of truth for the alert. The system presents the alert when the binding’s value is non-nil. When the user presses or taps one of the alert’s actions, the system sets this value to `nil` and dismisses. The system passes the contents to the modifier’s closures. You use this data to populate the fields of an alert that you create that the system displays to the user.
- `actions`: A [ContentBuilder](../contentbuilder.md) returning the alert’s actions given the currently available data.

<a id="discussion"></a>

## Discussion

For the alert to appear, `data` must not be `nil`. The data should not change after the presentation occurs. Any changes that you make after the presentation occurs are ignored.

Use this method when you need to populate the fields of an alert with content from a data source. The example below shows a custom data source, `SaveDetails`, that provides data to populate the alert:

```swift
struct SaveDetails: Identifiable {
    let name: String
    let error: String
    let id = UUID()
}

struct SaveButton: View {
    @State private var details: SaveDetails?
    let alertTitle: String = "Save failed."

    var body: some View {
        Button("Save") {
            details = model.save()
        }
        .alert(
            Text(alertTitle),
            item: $details
        ) { details in
            Button(role: .destructive) {
                // Handle the deletion.
            } label: {
                Text("Delete \(details.name)")
            }
            Button("Retry") {
                // Handle the retry action.
            }
        }
    }
}
```

All actions in an alert dismiss the alert after the action runs. The default button is shown with greater prominence. You can influence the default button by assigning it the [defaultAction](../keyboardshortcut/defaultaction.md) keyboard shortcut.

The system may reorder the buttons based on their role and prominence.

If no actions are present, the system includes a standard “OK” action. No default cancel action is provided. If you want to show a cancel action, use a button with a role of [cancel](../buttonrole/cancel.md).

On iOS, tvOS, and watchOS, alerts only support controls with labels that are [Text](../text.md). Passing any other type of view results in the content being omitted.

## See Also

### Presenting an alert

- [AlertScene](../alertscene.md): A scene that renders itself as a standalone alert dialog.
- [alert(\_:isPresented:actions:)](alert%28__ispresented_actions_%29.md): Presents an alert when a given condition is true, using a localized string resource for the title.
- [alert(\_:isPresented:presenting:actions:)](alert%28__ispresented_presenting_actions_%29.md): Presents an alert using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(error:actions:)](alert%28error_actions_%29.md): Presents an alert when an error is present.
- [alert(isPresented:error:actions:)](alert%28ispresented_error_actions_%29.md): Presents an alert when an error is present.
- [alert(\_:isPresented:actions:message:)](alert%28__ispresented_actions_message_%29.md): Presents an alert with a message when a given condition is true, using a localized string resource for a title.
- [alert(\_:isPresented:presenting:actions:message:)](alert%28__ispresented_presenting_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(\_:item:actions:message:)](alert%28__item_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string key for a title.
- [alert(error:actions:message:)](alert%28error_actions_message_%29.md): Presents an alert with a message when an error is present.
- [alert(isPresented:error:actions:message:)](alert%28ispresented_error_actions_message_%29.md): Presents an alert with a message when an error is present.
