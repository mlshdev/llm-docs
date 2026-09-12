> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationplacement(_:)](https://developer.apple.com/documentation/swiftui/view/presentationplacement(_:))

# presentationPlacement(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sets the placement of a presentation within the presenting view.

## Declaration

```swift
nonisolated func presentationPlacement(_ placement: PresentationPlacement) -> some View

```

## Parameters

- `placement`: The placement of the presentation within the presenting view.

<a id="discussion"></a>

## Discussion

By default, a presentation uses [automatic](../presentationplacement/automatic.md) placement. Use this modifier to place it on the leading or trailing edge. For example, to maximize the visibility of the primary content behind a presented sheet:

```swift
Map()
    .sheet(isPresented: $isPresented) {
        PlaceDetailView()
            .presentationDetents([.medium, .large])
            .presentationPlacement(.leading)
    }
```

Only sheet presentations respect this placement.

## See Also

### Configuring a sheet’s height and placement

- [presentationDetents(\_:)](presentationdetents%28__%29.md): Sets the available detents for the enclosing sheet.
- [presentationDetents(\_:selection:)](presentationdetents%28__selection_%29.md): Sets the available detents for the enclosing sheet, giving you programmatic control of the currently selected detent.
- [presentationContentInteraction(\_:)](presentationcontentinteraction%28__%29.md): Configures the behavior of swipe gestures on a presentation.
- [presentationDragIndicator(\_:)](presentationdragindicator%28__%29.md): Sets the visibility of the drag indicator on top of a sheet.
- [PresentationDetent](../presentationdetent.md): A type that represents a height where a sheet naturally rests.
- [CustomPresentationDetent](../custompresentationdetent.md): The definition of a custom detent with a calculated height.
- [PresentationContentInteraction](../presentationcontentinteraction.md): A behavior that you can use to influence how a presentation responds to swipe gestures.
- [PresentationPlacement](../presentationplacement.md): The placement of a presentation within the presenting view.
