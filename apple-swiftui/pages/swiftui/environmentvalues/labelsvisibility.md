> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/labelsvisibility](https://developer.apple.com/documentation/swiftui/environmentvalues/labelsvisibility)

# labelsVisibility

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The labels visibility set by [labelsVisibility(\_:)](../view/labelsvisibility%28__%29.md).

## Declaration

```swift
var labelsVisibility: Visibility { get set }
```

<a id="discussion"></a>

## Discussion

Read this environment value from within a view to obtain the preferred visibility for labels within the hierarchy. If you would like to dynamically hide the label of your custom view, make sure to include an accessibility label via the [accessibilityLabel(content:)](../view/accessibilitylabel%28content_%29.md) modifier as illustrated below:

```swift
@Environment(\.labelsVisibility)
private var labelsVisibility

var body: some View {
    VStack {
        QuizCardView()
        if labelsVisibility != .hidden {
            label
        }
    }
    .accessibilityLabel {
        label
    }
}

private var label: some View {
    Text("Quiz Card")
}
```

## See Also

### Hiding system elements

- [labelsHidden()](../view/labelshidden%28%29.md): Hides the labels of any controls contained within this view.
- [labelsVisibility(\_:)](../view/labelsvisibility%28__%29.md): Controls the visibility of labels of any controls contained within this view.
- [menuIndicator(\_:)](../view/menuindicator%28__%29.md): Sets the menu indicator visibility for controls within this view.
- [statusBarHidden(\_:)](../view/statusbarhidden%28__%29.md): Deprecated. Sets the visibility of the status bar.
- [persistentSystemOverlays(\_:)](../view/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [Visibility](../visibility.md): The visibility of a UI element, chosen automatically based on the platform, current context, and other factors.
