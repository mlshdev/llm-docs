> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/removeinteraction(_:)](https://developer.apple.com/documentation/uikit/uiview/removeinteraction(_:))

# removeInteraction(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Removes an interaction from the view.

## Declaration

```swift
func removeInteraction(_ interaction: any UIInteraction)
```

## Parameters

- `interaction`: The interaction object to remove from the view.

## See Also

### Adding and removing interactions

- [addInteraction(\_:)](addinteraction%28__%29.md): Adds an interaction to the view.
- [interactions](interactions.md): The array of interactions for the view.
- [UIInteraction](../uiinteraction.md): The protocol that an interaction implements to access the view that owns it.

# removeInteraction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Removes an interaction from the view.

## Declaration

```objectivec
- (void) removeInteraction:(id<UIInteraction>) interaction;
```

## Parameters

- `interaction`: The interaction object to remove from the view.

## See Also

### Adding and removing interactions

- [addInteraction:](addinteraction%28__%29.md): Adds an interaction to the view.
- [interactions](interactions.md): The array of interactions for the view.
- [UIInteraction](../uiinteraction.md): The protocol that an interaction implements to access the view that owns it.
