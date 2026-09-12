> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationcornerradius(_:)](https://developer.apple.com/documentation/swiftui/view/presentationcornerradius(_:))

# presentationCornerRadius(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Requests that the presentation have a specific corner radius.

## Declaration

```swift
nonisolated func presentationCornerRadius(_ cornerRadius: CGFloat?) -> some View

```

## Parameters

- `cornerRadius`: The corner radius, or `nil` to use the system default.

<a id="discussion"></a>

## Discussion

Use this modifier to change the corner radius of a presentation.

```swift
struct ContentView: View {
    @State private var showSettings = false

    var body: some View {
        Button("View Settings") {
            showSettings = true
        }
        .sheet(isPresented: $showSettings) {
            SettingsView()
                .presentationDetents([.medium, .large])
                .presentationCornerRadius(21)
        }
    }
}
```

> **Note**

> Configuring a corner radius is not supported on watchOS, tvOS, or macOS.

## See Also

### Styling a sheet and its background

- [presentationBackground(\_:)](presentationbackground%28__%29.md): Sets the presentation background of the enclosing sheet using a shape style.
- [presentationBackground(alignment:content:)](presentationbackground%28alignment_content_%29.md): Sets the presentation background of the enclosing sheet to a custom view.
- [presentationBackgroundInteraction(\_:)](presentationbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presentation.
- [PresentationBackgroundInteraction](../presentationbackgroundinteraction.md): The kinds of interaction available to views behind a presentation.
