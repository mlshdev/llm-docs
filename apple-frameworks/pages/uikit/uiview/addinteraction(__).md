> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiview/addinteraction(_:)

# addInteraction(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Adds an interaction to the view.

## Declaration

```swift
func addInteraction(_ interaction: any UIInteraction)
```

## Parameters

- `interaction`: The interaction object to add to the view.

## See Also

### Adding and removing interactions

- [removeInteraction(\_:)](removeinteraction%28__%29.md): Removes an interaction from the view.
- [interactions](interactions.md): The array of interactions for the view.
- [UIInteraction](../uiinteraction.md): The protocol that an interaction implements to access the view that owns it.

# addInteraction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Adds an interaction to the view.

## Declaration

```objectivec
- (void) addInteraction:(id<UIInteraction>) interaction;
```

## Parameters

- `interaction`: The interaction object to add to the view.

## See Also

### Adding and removing interactions

- [removeInteraction:](removeinteraction%28__%29.md): Removes an interaction from the view.
- [interactions](interactions.md): The array of interactions for the view.
- [UIInteraction](../uiinteraction.md): The protocol that an interaction implements to access the view that owns it.
