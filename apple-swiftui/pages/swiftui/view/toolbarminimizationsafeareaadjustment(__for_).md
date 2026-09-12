> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbarminimizationsafeareaadjustment(_:for:)](https://developer.apple.com/documentation/swiftui/view/toolbarminimizationsafeareaadjustment(_:for:))

# toolbarMinimizationSafeAreaAdjustment(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sets the safe area adjustment for the specified bars during minimization.

## Declaration

```swift
nonisolated func toolbarMinimizationSafeAreaAdjustment(_ adjustment: ToolbarMinimizationSafeAreaAdjustment, for bars: ToolbarPlacement...) -> some View

```

## Parameters

- `adjustment`: The safe area adjustment.
- `bars`: The bars to apply the adjustment to.

<a id="discussion"></a>

## Discussion

By default, the safe area adjusts as bars minimize, allowing content to reflow into the space vacated by the bar. Use this modifier to disable that adjustment when content should remain in place – for example, when displaying full-bleed media beneath a minimizing bar.

Currently, only [navigationBar](../toolbarplacement/navigationbar.md) supports customizing the safe area adjustment.

Use this modifier alongside [toolbarMinimizationBehavior(\_:for:)](toolbarminimizationbehavior%28__for_%29.md):

```swift
NavigationStack {
    ScrollView {
        // ...
    }
    .toolbarMinimizationBehavior(
        .onScrollDown, for: .navigationBar)
    .toolbarMinimizationSafeAreaAdjustment(
        .disabled, for: .navigationBar)
}
```

## See Also

### Minimizing a toolbar

- [toolbarMinimizationBehavior(\_:for:)](toolbarminimizationbehavior%28__for_%29.md): Sets the minimize behavior for the specified bars.
- [ToolbarMinimizationBehavior](../toolbarminimizationbehavior.md): The minimization behavior of a toolbar.
- [toolbarMinimizationRestoration(\_:for:)](toolbarminimizationrestoration%28__for_%29.md): Sets the restoration behavior for the specified bars during minimization.
- [ToolbarMinimizationRestoration](../toolbarminimizationrestoration.md): The restoration behavior during toolbar minimization.
- [ToolbarMinimizationSafeAreaAdjustment](../toolbarminimizationsafeareaadjustment.md): The safe area adjustment during toolbar minimization.
