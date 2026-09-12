> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/interactions](https://developer.apple.com/documentation/uikit/uiview/interactions)

# interactions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The array of interactions for the view.

## Declaration

```swift
var interactions: [any UIInteraction] { get set }
```

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)
- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

## See Also

### Adding and removing interactions

- [addInteraction(\_:)](addinteraction%28__%29.md): Adds an interaction to the view.
- [removeInteraction(\_:)](removeinteraction%28__%29.md): Removes an interaction from the view.
- [UIInteraction](../uiinteraction.md): The protocol that an interaction implements to access the view that owns it.

# interactions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The array of interactions for the view.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<id<UIInteraction>> * interactions;
```

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)
- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

## See Also

### Adding and removing interactions

- [addInteraction:](addinteraction%28__%29.md): Adds an interaction to the view.
- [removeInteraction:](removeinteraction%28__%29.md): Removes an interaction from the view.
- [UIInteraction](../uiinteraction.md): The protocol that an interaction implements to access the view that owns it.
