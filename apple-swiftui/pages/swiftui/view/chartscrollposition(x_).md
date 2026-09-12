> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartscrollposition(x:)](https://developer.apple.com/documentation/swiftui/view/chartscrollposition(x:))

# chartScrollPosition(x:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Associates a binding to be updated when the chart scrolls along the x-axis.

## Declaration

```swift
nonisolated func chartScrollPosition(x: Binding<some Plottable>) -> some View

```

## See Also

### Scrolling

- [chartScrollPosition(initialX:)](chartscrollposition%28initialx_%29.md): Sets the initial scroll position along the x-axis. Once the user scrolls the scroll view, the value provided to this modifier will have no effect.
- [chartScrollPosition(initialY:)](chartscrollposition%28initialy_%29.md): Sets the initial scroll position along the y-axis. Once the user scrolls the scroll view, the value provided to this modifier will have no effect.
- [chartScrollPosition(y:)](chartscrollposition%28y_%29.md): Associates a binding to be updated when the chart scrolls along the y-axis.
- [chartScrollTargetBehavior(\_:)](chartscrolltargetbehavior%28__%29.md): Sets the scroll behavior of the scrollable chart.
- [chartScrollableAxes(\_:)](chartscrollableaxes%28__%29.md): Configures the scrollable behavior of charts in this view.
