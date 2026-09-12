> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationdetents(_:)](https://developer.apple.com/documentation/swiftui/view/presentationdetents(_:))

# presentationDetents(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the available detents for the enclosing sheet.

## Declaration

```swift
nonisolated func presentationDetents(_ detents: Set<PresentationDetent>) -> some View

```

## Parameters

- `detents`: A set of supported detents for the sheet. If you provide more that one detent, people can drag the sheet to resize it.

<a id="discussion"></a>

## Discussion

By default, sheets support the [large](../presentationdetent/large.md) detent.

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
        }
    }
}
```

## See Also

### Configuring a sheet’s height and placement

- [presentationDetents(\_:selection:)](presentationdetents%28__selection_%29.md): Sets the available detents for the enclosing sheet, giving you programmatic control of the currently selected detent.
- [presentationContentInteraction(\_:)](presentationcontentinteraction%28__%29.md): Configures the behavior of swipe gestures on a presentation.
- [presentationDragIndicator(\_:)](presentationdragindicator%28__%29.md): Sets the visibility of the drag indicator on top of a sheet.
- [PresentationDetent](../presentationdetent.md): A type that represents a height where a sheet naturally rests.
- [CustomPresentationDetent](../custompresentationdetent.md): The definition of a custom detent with a calculated height.
- [PresentationContentInteraction](../presentationcontentinteraction.md): A behavior that you can use to influence how a presentation responds to swipe gestures.
- [presentationPlacement(\_:)](presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
- [PresentationPlacement](../presentationplacement.md): The placement of a presentation within the presenting view.
