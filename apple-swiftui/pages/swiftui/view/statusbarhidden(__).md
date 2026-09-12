> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/statusbarhidden(_:)](https://developer.apple.com/documentation/swiftui/view/statusbarhidden(_:))

# statusBarHidden(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sets the visibility of the status bar.

> Use .toolbarVisibility(\_, for: .statusBar) instead

## Declaration

```swift
@export(implementation) nonisolated func statusBarHidden(_ hidden: Bool = true) -> some View

```

## Parameters

- `hidden`: A Boolean value that indicates whether to hide the status bar.

## See Also

### Hiding system elements

- [labelsHidden()](labelshidden%28%29.md): Hides the labels of any controls contained within this view.
- [labelsVisibility(\_:)](labelsvisibility%28__%29.md): Controls the visibility of labels of any controls contained within this view.
- [labelsVisibility](../environmentvalues/labelsvisibility.md): The labels visibility set by [labelsVisibility(\_:)](labelsvisibility%28__%29.md).
- [menuIndicator(\_:)](menuindicator%28__%29.md): Sets the menu indicator visibility for controls within this view.
- [persistentSystemOverlays(\_:)](persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [Visibility](../visibility.md): The visibility of a UI element, chosen automatically based on the platform, current context, and other factors.
