> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationbackground(_:)](https://developer.apple.com/documentation/swiftui/view/presentationbackground(_:))

# presentationBackground(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Sets the presentation background of the enclosing sheet using a shape style.

## Declaration

```swift
nonisolated func presentationBackground<S>(_ style: S) -> some View where S : ShapeStyle

```

## Parameters

- `style`: The shape style to use as the presentation background.

<a id="discussion"></a>

## Discussion

The following example uses the [thick](../material/thick.md) material as the sheet background:

```swift
struct ContentView: View {
    @State private var showSettings = false

    var body: some View {
        Button("View Settings") {
            showSettings = true
        }
        .sheet(isPresented: $showSettings) {
            SettingsView()
                .presentationBackground(.thickMaterial)
        }
    }
}
```

The `presentationBackground(_:)` modifier differs from the [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md) modifier in several key ways. A presentation background:

- Automatically fills the entire presentation.
- Allows views behind the presentation to show through translucent styles on supported platforms.

> **Note**

> Sheet presentations on macOS do not support translucency or transparency — the background is always opaque.

## See Also

### Styling a sheet and its background

- [presentationCornerRadius(\_:)](presentationcornerradius%28__%29.md): Requests that the presentation have a specific corner radius.
- [presentationBackground(alignment:content:)](presentationbackground%28alignment_content_%29.md): Sets the presentation background of the enclosing sheet to a custom view.
- [presentationBackgroundInteraction(\_:)](presentationbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presentation.
- [PresentationBackgroundInteraction](../presentationbackgroundinteraction.md): The kinds of interaction available to views behind a presentation.
