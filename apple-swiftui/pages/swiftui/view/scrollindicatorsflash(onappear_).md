> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/scrollindicatorsflash(onappear:)](https://developer.apple.com/documentation/swiftui/view/scrollindicatorsflash(onappear:))

# scrollIndicatorsFlash(onAppear:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Flashes the scroll indicators of a scrollable view when it appears.

## Declaration

```swift
nonisolated func scrollIndicatorsFlash(onAppear: Bool) -> some View

```

## Parameters

- `onAppear`: A Boolean value that indicates whether the scroll indicators flash when the scroll view appears.

<a id="return-value"></a>

## Return Value

A view that flashes any visible scroll indicators when it first appears.

<a id="discussion"></a>

## Discussion

Use this modifier to control whether the scroll indicators of a scroll view briefly flash when the view first appears. For example, you can make the indicators flash by setting the `onAppear` parameter to `true`:

```swift
ScrollView {
    // ...
}
.scrollIndicatorsFlash(onAppear: true)
```

Only scroll indicators that you configure to be visible flash. To flash scroll indicators when a value changes, use [scrollIndicatorsFlash(trigger:)](scrollindicatorsflash%28trigger_%29.md) instead.

## See Also

### Showing scroll indicators

- [scrollIndicatorsFlash(trigger:)](scrollindicatorsflash%28trigger_%29.md): Flashes the scroll indicators of scrollable views when a value changes.
- [scrollIndicators(\_:axes:)](scrollindicators%28__axes_%29.md): Sets the visibility of scroll indicators within this view.
- [horizontalScrollIndicatorVisibility](../environmentvalues/horizontalscrollindicatorvisibility.md): The visibility to apply to scroll indicators of any horizontally scrollable content.
- [verticalScrollIndicatorVisibility](../environmentvalues/verticalscrollindicatorvisibility.md): The visiblity to apply to scroll indicators of any vertically scrollable content.
- [ScrollIndicatorVisibility](../scrollindicatorvisibility.md): The visibility of scroll indicators of a UI element.
