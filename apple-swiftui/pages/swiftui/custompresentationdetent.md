> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/custompresentationdetent](https://developer.apple.com/documentation/swiftui/custompresentationdetent)

# CustomPresentationDetent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The definition of a custom detent with a calculated height.

## Declaration

```swift
protocol CustomPresentationDetent
```

<a id="overview"></a>

## Overview

You can create and use a custom detent with built-in detents.

```swift
extension PresentationDetent {
    static let bar = Self.custom(BarDetent.self)
    static let small = Self.height(100)
    static let extraLarge = Self.fraction(0.75)
}

private struct BarDetent: CustomPresentationDetent {
    static func height(in context: Context) -> CGFloat? {
        max(44, context.maxDetentValue * 0.1)
    }
}

struct ContentView: View {
    @State private var showSettings = false
    @State private var selectedDetent = PresentationDetent.bar

    var body: some View {
        Button("View Settings") {
            showSettings = true
        }
        .sheet(isPresented: $showSettings) {
            SettingsView(selectedDetent: $selectedDetent)
                .presentationDetents(
                    [.bar, .small, .medium, .large, .extraLarge],
                    selection: $selectedDetent)
        }
    }
}
```

## Topics

### Getting the height

- [height(in:)](custompresentationdetent/height%28in_%29.md): Calculates and returns a height based on the context.
- [CustomPresentationDetent.Context](custompresentationdetent/context.md): Information that you can use to calculate the height of a custom detent.

## See Also

### Configuring a sheet’s height and placement

- [presentationDetents(\_:)](view/presentationdetents%28__%29.md): Sets the available detents for the enclosing sheet.
- [presentationDetents(\_:selection:)](view/presentationdetents%28__selection_%29.md): Sets the available detents for the enclosing sheet, giving you programmatic control of the currently selected detent.
- [presentationContentInteraction(\_:)](view/presentationcontentinteraction%28__%29.md): Configures the behavior of swipe gestures on a presentation.
- [presentationDragIndicator(\_:)](view/presentationdragindicator%28__%29.md): Sets the visibility of the drag indicator on top of a sheet.
- [PresentationDetent](presentationdetent.md): A type that represents a height where a sheet naturally rests.
- [PresentationContentInteraction](presentationcontentinteraction.md): A behavior that you can use to influence how a presentation responds to swipe gestures.
- [presentationPlacement(\_:)](view/presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
- [PresentationPlacement](presentationplacement.md): The placement of a presentation within the presenting view.
