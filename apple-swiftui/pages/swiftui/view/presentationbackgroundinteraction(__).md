> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationbackgroundinteraction(_:)](https://developer.apple.com/documentation/swiftui/view/presentationbackgroundinteraction(_:))

# presentationBackgroundInteraction(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Controls whether people can interact with the view behind a presentation.

## Declaration

```swift
nonisolated func presentationBackgroundInteraction(_ interaction: PresentationBackgroundInteraction) -> some View

```

## Parameters

- `interaction`: A specification of how people can interact with the view behind a presentation.

<a id="discussion"></a>

## Discussion

On many platforms, SwiftUI automatically disables the view behind a sheet that you present, so that people can’t interact with the backing view until they dismiss the sheet. Use this modifier if you want to enable interaction.

The following example enables people to interact with the view behind the sheet when the sheet is at the smallest detent, but not at the other detents:

```swift
struct ContentView: View {
    @State private var showSettings = false

    var body: some View {
        Button("View Settings") {
            showSettings = true
        }
        .sheet(isPresented: $showSettings) {
            SettingsView()
                .presentationDetents(
                    [.height(120), .medium, .large])
                .presentationBackgroundInteraction(
                    .enabled(upThrough: .height(120)))
        }
    }
}
```

## See Also

### Styling a sheet and its background

- [presentationCornerRadius(\_:)](presentationcornerradius%28__%29.md): Requests that the presentation have a specific corner radius.
- [presentationBackground(\_:)](presentationbackground%28__%29.md): Sets the presentation background of the enclosing sheet using a shape style.
- [presentationBackground(alignment:content:)](presentationbackground%28alignment_content_%29.md): Sets the presentation background of the enclosing sheet to a custom view.
- [PresentationBackgroundInteraction](../presentationbackgroundinteraction.md): The kinds of interaction available to views behind a presentation.
