> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationbreakthrougheffect(_:)](https://developer.apple.com/documentation/swiftui/view/presentationbreakthrougheffect(_:))

# presentationBreakthroughEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Changes the way the enclosing presentation breaks through content occluding it.

## Declaration

```swift
nonisolated func presentationBreakthroughEffect(_ effect: BreakthroughEffect) -> some View

```

## Parameters

- `effect`: The type of effect to apply when a presentation element is occluded by other content.

<a id="discussion"></a>

## Discussion

Use this modifier to disable or customize a breakthrough effect for the enclosing presentation.

Breakthrough is an effect allowing elements to be visible to the user even when other app content (3D models, UI elements) is occluding it. The way the element appears depends on the chosen [BreakthroughEffect](../breakthrougheffect.md).

Most system presentations appear with a breakthrough effect by default. For these cases, you can customize the type of effect by applying the [presentationBreakthroughEffect(\_:)](presentationbreakthrougheffect%28__%29.md) modifier to the content of the presentation, like in the following example:

```swift
Button("Show Details") {
    isShowingDetails = true
}
.popover(isPresented: $isShowingDetails) {
    DetailsView()
        .presentationBreakthroughEffect(.prominent)
}
```

Only popovers allow breakthrough to be disabled altogether. Passing a `.none` value for a sheet has no effect.

## See Also

### Sheet and popover configuration

- [interactiveDismissDisabled(\_:)](interactivedismissdisabled%28__%29.md): Conditionally prevents interactive dismissal of presentations like popovers, sheets, and inspectors.
- [presentationDetents(\_:)](presentationdetents%28__%29.md): Sets the available detents for the enclosing sheet.
- [presentationDetents(\_:selection:)](presentationdetents%28__selection_%29.md): Sets the available detents for the enclosing sheet, giving you programmatic control of the currently selected detent.
- [presentationDragIndicator(\_:)](presentationdragindicator%28__%29.md): Sets the visibility of the drag indicator on top of a sheet.
- [presentationBackground(\_:)](presentationbackground%28__%29.md): Sets the presentation background of the enclosing sheet using a shape style.
- [presentationBackground(alignment:content:)](presentationbackground%28alignment_content_%29.md): Sets the presentation background of the enclosing sheet to a custom view.
- [presentationBackgroundInteraction(\_:)](presentationbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presentation.
- [presentationCompactAdaptation(horizontal:vertical:)](presentationcompactadaptation%28horizontal_vertical_%29.md): Specifies how to adapt a presentation to horizontally and vertically compact size classes.
- [presentationCompactAdaptation(\_:)](presentationcompactadaptation%28__%29.md): Specifies how to adapt a presentation to compact size classes.
- [presentationContentInteraction(\_:)](presentationcontentinteraction%28__%29.md): Configures the behavior of swipe gestures on a presentation.
- [presentationCornerRadius(\_:)](presentationcornerradius%28__%29.md): Requests that the presentation have a specific corner radius.
- [presentationSizing(\_:)](presentationsizing%28__%29.md): Sets the sizing of the containing presentation.
- [presentationPreventsAppTermination(\_:)](presentationpreventsapptermination%28__%29.md): Whether a presentation prevents the app from being terminated/quit by the system or app termination menu item.
- [presentationPlacement(\_:)](presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
- [PresentationPlacement](../presentationplacement.md): The placement of a presentation within the presenting view.
