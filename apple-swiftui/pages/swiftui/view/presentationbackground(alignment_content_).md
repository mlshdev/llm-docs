> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationbackground(alignment:content:)](https://developer.apple.com/documentation/swiftui/view/presentationbackground(alignment:content:))

# presentationBackground(alignment:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Sets the presentation background of the enclosing sheet to a custom view.

## Declaration

```swift
nonisolated func presentationBackground<V>(alignment: Alignment = .center, @ContentBuilder content: () -> V) -> some View where V : View

```

## Parameters

- `alignment`: The alignment that the modifier uses to position the implicit [ZStack](../zstack.md) that groups the background views. The default is [center](../alignment/center.md).
- `content`: The view to use as the background of the presentation.

<a id="discussion"></a>

## Discussion

The following example uses a yellow view as the sheet background:

```swift
struct ContentView: View {
    @State private var showSettings = false

    var body: some View {
        Button("View Settings") {
            showSettings = true
        }
        .sheet(isPresented: $showSettings) {
            SettingsView()
                .presentationBackground {
                    Color.yellow
                }
        }
    }
}
```

The `presentationBackground(alignment:content:)` modifier differs from the [background(alignment:content:)](background%28alignment_content_%29.md) modifier in several key ways. A presentation background:

- Automatically fills the entire presentation.
- Allows views behind the presentation to show through translucent areas of the `content` on supported platforms.

> **Note**

> Sheet presentations on macOS do not support translucency or transparency — the background is always opaque.

## See Also

### Styling a sheet and its background

- [presentationCornerRadius(\_:)](presentationcornerradius%28__%29.md): Requests that the presentation have a specific corner radius.
- [presentationBackground(\_:)](presentationbackground%28__%29.md): Sets the presentation background of the enclosing sheet using a shape style.
- [presentationBackgroundInteraction(\_:)](presentationbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presentation.
- [PresentationBackgroundInteraction](../presentationbackgroundinteraction.md): The kinds of interaction available to views behind a presentation.
