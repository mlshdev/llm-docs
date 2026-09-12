> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/activitypreviewviewkind/dynamicislandpreviewviewstate](https://developer.apple.com/documentation/widgetkit/activitypreviewviewkind/dynamicislandpreviewviewstate)

# ActivityPreviewViewKind.DynamicIslandPreviewViewState

**Framework:** WidgetKit  
**Kind:** Enumeration  
**Availability:** iOS 16.2+ · iPadOS 16.2+

Values that represent the different presentations of a Live Activity in the Dynamic Island for use in Xcode previews.

## Declaration

```swift
@preconcurrency enum DynamicIslandPreviewViewState
```

## Topics

### Dynamic Island presentations

- [ActivityPreviewViewKind.DynamicIslandPreviewViewState.compact](dynamicislandpreviewviewstate/compact.md): The presentation of a Live Activity in the Dynamic Island that shows both the [compactLeading](../dynamicislandmode/compactleading.md) and [compactTrailing](../dynamicislandmode/compacttrailing.md) views combined.
- [ActivityPreviewViewKind.DynamicIslandPreviewViewState.minimal](dynamicislandpreviewviewstate/minimal.md): The minimal presentation of a Live Activity in the Dynamic Island.
- [ActivityPreviewViewKind.DynamicIslandPreviewViewState.expanded](dynamicislandpreviewviewstate/expanded.md): The expanded presentation of a Live Activity in the Dynamic Island.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Live Activity preview types

- [ActivityPreviewViewKind.content](content.md): The Live Activity presentation that appears on the Lock Screen and as a banner on devices that don’t support the Dynamic Island.
- [ActivityPreviewViewKind.dynamicIsland(\_:)](dynamicisland%28__%29.md): The Live Activity presentation that appears in the Dynamic Island.
