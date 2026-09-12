> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listrowhovereffectdisabled(_:)](https://developer.apple.com/documentation/swiftui/view/listrowhovereffectdisabled(_:))

# listRowHoverEffectDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Requests that the containing list row have its hover effect disabled.

## Declaration

```swift
nonisolated func listRowHoverEffectDisabled(_ disabled: Bool = true) -> some View

```

## Parameters

- `disabled`: A Boolean value that determines whether the containing list row should display its default hover effect.

<a id="return-value"></a>

## Return Value

A view that requests the default hover effect on its containing list row to conditionally be disabled.

<a id="discussion"></a>

## Discussion

By default, `List` rows have built-in hover effects in visionOS. In some cases, it is useful to disable the default hover effect.

## See Also

### Configuring interaction

- [swipeActions(edge:allowsFullSwipe:content:)](swipeactions%28edge_allowsfullswipe_content_%29.md): Adds custom swipe actions to a row in a list.
- [selectionDisabled(\_:)](selectiondisabled%28__%29.md): Adds a condition that controls whether users can select this view.
- [listRowHoverEffect(\_:)](listrowhovereffect%28__%29.md): Requests that the containing list row use the provided hover effect.
