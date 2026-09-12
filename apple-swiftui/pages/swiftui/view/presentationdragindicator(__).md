> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationdragindicator(_:)](https://developer.apple.com/documentation/swiftui/view/presentationdragindicator(_:))

# presentationDragIndicator(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the visibility of the drag indicator on top of a sheet.

## Declaration

```swift
nonisolated func presentationDragIndicator(_ visibility: Visibility) -> some View

```

## Parameters

- `visibility`: The preferred visibility of the drag indicator.

<a id="discussion"></a>

## Discussion

You can show a drag indicator when it isn’t apparent that a sheet can resize or when the sheet can’t dismiss interactively.

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
                .presentationDragIndicator(.visible)
        }
    }
}
```

## See Also

### Configuring a sheet’s height and placement

- [presentationDetents(\_:)](presentationdetents%28__%29.md): Sets the available detents for the enclosing sheet.
- [presentationDetents(\_:selection:)](presentationdetents%28__selection_%29.md): Sets the available detents for the enclosing sheet, giving you programmatic control of the currently selected detent.
- [presentationContentInteraction(\_:)](presentationcontentinteraction%28__%29.md): Configures the behavior of swipe gestures on a presentation.
- [PresentationDetent](../presentationdetent.md): A type that represents a height where a sheet naturally rests.
- [CustomPresentationDetent](../custompresentationdetent.md): The definition of a custom detent with a calculated height.
- [PresentationContentInteraction](../presentationcontentinteraction.md): A behavior that you can use to influence how a presentation responds to swipe gestures.
- [presentationPlacement(\_:)](presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
- [PresentationPlacement](../presentationplacement.md): The placement of a presentation within the presenting view.
