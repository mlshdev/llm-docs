> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbarminimizationrestoration(_:for:)](https://developer.apple.com/documentation/swiftui/view/toolbarminimizationrestoration(_:for:))

# toolbarMinimizationRestoration(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sets the restoration behavior for the specified bars during minimization.

## Declaration

```swift
nonisolated func toolbarMinimizationRestoration(_ restoration: ToolbarMinimizationRestoration, for bars: ToolbarPlacement...) -> some View

```

## Parameters

- `restoration`: The restoration behavior.
- `bars`: The bars to apply the restoration behavior to.

<a id="discussion"></a>

## Discussion

Use this modifier alongside [toolbarMinimizationBehavior(\_:for:)](toolbarminimizationbehavior%28__for_%29.md) to customize when a minimized bar restores. By default, the bar restores when the user reverses scroll direction. Use [atScrollEdge](../toolbarminimizationrestoration/atscrolledge.md) to restrict restoration to when the scroll view’s content reaches the scroll edge – appropriate for screens where the bar is mostly chrome that doesn’t need to follow the user.

```swift
NavigationStack {
    ScrollView {
        // ...
    }
    .toolbarMinimizationBehavior(
        .onScrollDown, for: .navigationBar)
    .toolbarMinimizationRestoration(
        .atScrollEdge, for: .navigationBar)
}
```

Currently, only [navigationBar](../toolbarplacement/navigationbar.md) supports customizing the restoration behavior, and only when used in combination with [onScrollDown](../toolbarminimizationbehavior/onscrolldown.md).

## See Also

### Minimizing a toolbar

- [toolbarMinimizationBehavior(\_:for:)](toolbarminimizationbehavior%28__for_%29.md): Sets the minimize behavior for the specified bars.
- [ToolbarMinimizationBehavior](../toolbarminimizationbehavior.md): The minimization behavior of a toolbar.
- [ToolbarMinimizationRestoration](../toolbarminimizationrestoration.md): The restoration behavior during toolbar minimization.
- [toolbarMinimizationSafeAreaAdjustment(\_:for:)](toolbarminimizationsafeareaadjustment%28__for_%29.md): Sets the safe area adjustment for the specified bars during minimization.
- [ToolbarMinimizationSafeAreaAdjustment](../toolbarminimizationsafeareaadjustment.md): The safe area adjustment during toolbar minimization.
