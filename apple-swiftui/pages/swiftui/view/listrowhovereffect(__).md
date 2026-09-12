> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listrowhovereffect(_:)](https://developer.apple.com/documentation/swiftui/view/listrowhovereffect(_:))

# listRowHoverEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Requests that the containing list row use the provided hover effect.

## Declaration

```swift
nonisolated func listRowHoverEffect(_ effect: HoverEffect?) -> some View

```

## Parameters

- `effect`: The hover effect applied to the entire list row.

<a id="return-value"></a>

## Return Value

A view that requests a hover effect for a containing list row

<a id="discussion"></a>

## Discussion

By default, `List` rows have built-in hover effects in visionOS. In some cases, it is useful to change the default hover effect.

This modifier can be applied to a list row’s content to request that the list row’s default effect be replaced by the provided effect. If the view is not contained within a `List` or if the view does not support hover effects in this context, the modifier has no effect.

Use a `nil` effect to indicate that the list row’s default hover effect should not be modified.

[lift](../hovereffect/lift.md) is not supported for list rows.

## See Also

### Configuring interaction

- [swipeActions(edge:allowsFullSwipe:content:)](swipeactions%28edge_allowsfullswipe_content_%29.md): Adds custom swipe actions to a row in a list.
- [selectionDisabled(\_:)](selectiondisabled%28__%29.md): Adds a condition that controls whether users can select this view.
- [listRowHoverEffectDisabled(\_:)](listrowhovereffectdisabled%28__%29.md): Requests that the containing list row have its hover effect disabled.
