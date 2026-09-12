> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationpreventsapptermination(_:)](https://developer.apple.com/documentation/swiftui/view/presentationpreventsapptermination(_:))

# presentationPreventsAppTermination(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Whether a presentation prevents the app from being terminated/quit by the system or app termination menu item.

## Declaration

```swift
nonisolated func presentationPreventsAppTermination(_ prevents: Bool?) -> some View

```

<a id="discussion"></a>

## Discussion

SwiftUI uses the buttons in a sheet’s toolbar to determine whether a particular sheet should block termination by default. If there is a singular toolbar item with the [confirmationAction](../toolbaritemplacement/confirmationaction.md) or the [cancellationAction](../toolbaritemplacement/cancellationaction.md) placement and no other toolbar items, the sheet will not prevent termination by default.

Use this modifier to specify whether a sheet should prevent app termination. Pass `nil` to explicitly request the automatic behavior/for the inert version of this modifier. Non-nil values will override `nil`, and `true` takes precedence over `false`.

Use this modifier within the `content` argument to `View/sheet`

```swift
struct LaunchScreen: View {
  @State private var presentLogin = false
  var body: some View {
    HomeView()
      .sheet(isPresented: $presentLogin) {
        LoginView()
          // explicitly allow app termination because the
          // default behavior would resolve to `true`.
          .presentationPreventsAppTermination(false)
          .toolbar {
            ToolbarItem(placement: .cancellationAction) {
              Button("Cancel") { presentLogin = false }
            }
            ToolbarItem(placement: .confirmationAction) {
              Button("Login") {
                // Attempt login...
                presentLogin = false
              }
            }
          }
        }
    }
}
```

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
- [presentationBreakthroughEffect(\_:)](presentationbreakthrougheffect%28__%29.md): Changes the way the enclosing presentation breaks through content occluding it.
- [presentationPlacement(\_:)](presentationplacement%28__%29.md): Sets the placement of a presentation within the presenting view.
- [PresentationPlacement](../presentationplacement.md): The placement of a presentation within the presenting view.
