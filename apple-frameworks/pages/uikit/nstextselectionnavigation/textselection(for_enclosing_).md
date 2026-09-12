> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/textselection(for:enclosing:)](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/textselection(for:enclosing:))

# textSelection(for:enclosing:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.

## Declaration

```swift
func textSelection(for selectionGranularity: NSTextSelection.Granularity, enclosing textSelection: NSTextSelection) -> NSTextSelection
```

## Parameters

- `selectionGranularity`: One of the available [NSTextSelection.Granularity](../nstextselection/granularity-swift.enum.md) options.
- `textSelection`: The text selection that describes the text range of interest.

<a id="return-value"></a>

## Return Value

A new text selection.

## See Also

### Working with text selections

- [textSelections(interactingAt:inContainerAt:anchors:modifiers:selecting:bounds:)](textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): Returns an array of text selections produced by a tap or click at the point you specify.
- [destinationSelection(for:direction:destination:extending:confined:)](destinationselection%28for_direction_destination_extending_confined_%29.md): Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.

# textSelectionForSelectionGranularity:enclosingTextSelection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.

## Declaration

```objectivec
- (NSTextSelection *) textSelectionForSelectionGranularity:(NSTextSelectionGranularity) selectionGranularity enclosingTextSelection:(NSTextSelection *) textSelection;
```

## Parameters

- `selectionGranularity`: One of the available [NSTextSelectionGranularity](../nstextselection/granularity-swift.enum.md) options.
- `textSelection`: The text selection that describes the text range of interest.

<a id="return-value"></a>

## Return Value

A new text selection.

## See Also

### Working with text selections

- [textSelectionsInteractingAtPoint:inContainerAtLocation:anchors:modifiers:selecting:bounds:](textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): Returns an array of text selections produced by a tap or click at the point you specify.
- [destinationSelectionForTextSelection:direction:destination:extending:confined:](destinationselection%28for_direction_destination_extending_confined_%29.md): Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.
