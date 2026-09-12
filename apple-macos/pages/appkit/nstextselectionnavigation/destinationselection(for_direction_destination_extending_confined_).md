> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/destinationselection(for:direction:destination:extending:confined:)](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/destinationselection(for:direction:destination:extending:confined:))

# destinationSelection(for:direction:destination:extending:confined:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.

## Declaration

```swift
func destinationSelection(for textSelection: NSTextSelection, direction: NSTextSelectionNavigation.Direction, destination: NSTextSelectionNavigation.Destination, extending: Bool, confined: Bool) -> NSTextSelection?
```

## Parameters

- `textSelection`: The source selection.
- `direction`: One of the available [NSTextSelectionNavigation.Direction](direction.md) directions.
- `destination`: One of the available [NSTextSelectionNavigation.Destination](destination.md) destinations.
- `extending`: Whether this selection extends an existing selection.
- `confined`: Whether to confine movement to the existing selection.

<a id="return-value"></a>

## Return Value

A new [NSTextSelection](../nstextselection.md), or `nil` if the operation doesn’t produce a logically valid result.

<a id="Discussion"></a>

## Discussion

If `confined` is `true`, confine any movement to the text element that the selection already lies within.

## See Also

### Working with text selections

- [textSelection(for:enclosing:)](textselection%28for_enclosing_%29.md): Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.
- [textSelections(interactingAt:inContainerAt:anchors:modifiers:selecting:bounds:)](textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): Returns an array of text selections produced by a tap or click at the point you specify.

# destinationSelectionForTextSelection:direction:destination:extending:confined: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.

## Declaration

```objectivec
- (NSTextSelection *) destinationSelectionForTextSelection:(NSTextSelection *) textSelection direction:(NSTextSelectionNavigationDirection) direction destination:(NSTextSelectionNavigationDestination) destination extending:(BOOL) extending confined:(BOOL) confined;
```

## Parameters

- `textSelection`: The source selection.
- `direction`: One of the available [NSTextSelectionNavigationDirection](direction.md) directions.
- `destination`: One of the available [NSTextSelectionNavigationDestination](destination.md) destinations.
- `extending`: Whether this selection extends an existing selection.
- `confined`: Whether to confine movement to the existing selection.

<a id="return-value"></a>

## Return Value

A new [NSTextSelection](../nstextselection.md), or `nil` if the operation doesn’t produce a logically valid result.

<a id="Discussion"></a>

## Discussion

If `confined` is `true`, confine any movement to the text element that the selection already lies within.

## See Also

### Working with text selections

- [textSelectionForSelectionGranularity:enclosingTextSelection:](textselection%28for_enclosing_%29.md): Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.
- [textSelectionsInteractingAtPoint:inContainerAtLocation:anchors:modifiers:selecting:bounds:](textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): Returns an array of text selections produced by a tap or click at the point you specify.
