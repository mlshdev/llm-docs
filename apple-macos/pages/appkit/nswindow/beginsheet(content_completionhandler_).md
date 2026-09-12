> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/beginsheet(content:completionhandler:)](https://developer.apple.com/documentation/appkit/nswindow/beginsheet(content:completionhandler:))

# beginSheet(content:completionHandler:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Presents a SwiftUI view as a sheet on the receiving NSWindow.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func beginSheet<V>(@ContentBuilder content: () -> V, completionHandler: (() -> Void)? = nil) -> NSWindow.HostingSheetRepresentation<V> where V : View
```

## Parameters

- `content`: The SwiftUI view to present in a sheet.
- `completionHandler`: An optional completion handler that is called when the sheet is dismissed for any reason.

<a id="return-value"></a>

## Return Value

A discardable [NSWindow.HostingSheetRepresentation](hostingsheetrepresentation.md) instance.

<a id="discussion"></a>

## Discussion

The presented view supports the same features as when used in the [sheet(isPresented:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/sheet%28ispresented:ondismiss:content:%29) or [sheet(item:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/sheet%28item:ondismiss:content:%29) view modifier, such as:

- Automatic dismissal with the Escape key and disabling interactive dismissal with [interactiveDismissDisabled(\_:)](https://developer.apple.com/documentation/swiftui/view/interactivedismissdisabled%28_:%29)
- Use of [`@Environment(\.dismiss)`](https://developer.apple.com/documentation/swiftui/environmentvalues/dismiss) to dismiss the sheet
- Sheet sizing using [presentationSizing(\_:)](https://developer.apple.com/documentation/swiftui/view/presentationsizing%28_:%29)
- Standard sheet toolbars using [toolbar(content:)](https://developer.apple.com/documentation/swiftui/view/toolbar%28content:%29).

```
parentWindow.beginSheet {
    NameADogSheet(dog: observableDog)
}

struct NameADogSheet: View {
    var dog: Dog
    @Environment(\.dismiss) private var dismiss
    @State private var name: String = ""

    var body: some View {
        Form {
            TextField("Who's a good dog?", text: $name)
        }
        .formStyle(.grouped)
        .toolbar {
            ToolbarItem(placement: .cancellationAction) {
                Button("Cancel") {
                    dismiss()
                }
            }
            ToolbarItem(placement: .confirmationAction) {
                Button("Suggest Name") {
                    dog.name = name
                    dismiss()
                }
                .disabled(name.isEmpty)
            }
        }
    }
}
```

The returned [NSWindow.HostingSheetRepresentation](hostingsheetrepresentation.md) can be ignored unless the sheet needs to be manipulated from an AppKit context, such as changing the root view or programmatically changing the sheet.
