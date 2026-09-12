> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbarminimizationbehavior(_:for:)](https://developer.apple.com/documentation/swiftui/view/toolbarminimizationbehavior(_:for:))

# toolbarMinimizationBehavior(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sets the minimize behavior for the specified bars.

## Declaration

```swift
nonisolated func toolbarMinimizationBehavior(_ behavior: ToolbarMinimizationBehavior, for bars: ToolbarPlacement...) -> some View

```

## Parameters

- `behavior`: The minimize behavior.
- `bars`: The bars to apply the behavior to.

<a id="discussion"></a>

## Discussion

Use this modifier to enable toolbar minimization in response to scrolling. The supported placement is [navigationBar](../toolbarplacement/navigationbar.md). When the navigation bar minimizes, an integrated top tab bar will also minimize.

By default, the safe area adjusts as the navigation bar minimizes. Use [toolbarMinimizationSafeAreaAdjustment(\_:for:)](toolbarminimizationsafeareaadjustment%28__for_%29.md) to customize this.

```swift
NavigationStack {
    ScrollView {
        ForEach(0 ..< 50) { index in
            Text("\(index)").padding()
        }
    }
    .navigationTitle("Minimizing Title")
    .toolbarMinimizationBehavior(.onScrollDown, for: .navigationBar)
}
```

## See Also

### Minimizing a toolbar

- [ToolbarMinimizationBehavior](../toolbarminimizationbehavior.md): The minimization behavior of a toolbar.
- [toolbarMinimizationRestoration(\_:for:)](toolbarminimizationrestoration%28__for_%29.md): Sets the restoration behavior for the specified bars during minimization.
- [ToolbarMinimizationRestoration](../toolbarminimizationrestoration.md): The restoration behavior during toolbar minimization.
- [toolbarMinimizationSafeAreaAdjustment(\_:for:)](toolbarminimizationsafeareaadjustment%28__for_%29.md): Sets the safe area adjustment for the specified bars during minimization.
- [ToolbarMinimizationSafeAreaAdjustment](../toolbarminimizationsafeareaadjustment.md): The safe area adjustment during toolbar minimization.
