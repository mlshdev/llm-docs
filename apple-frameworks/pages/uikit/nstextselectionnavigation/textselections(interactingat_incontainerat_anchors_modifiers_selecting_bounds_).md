> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/textselections(interactingat:incontainerat:anchors:modifiers:selecting:bounds:)](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/textselections(interactingat:incontainerat:anchors:modifiers:selecting:bounds:))

# textSelections(interactingAt:inContainerAt:anchors:modifiers:selecting:bounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an array of text selections produced by a tap or click at the point you specify.

## Declaration

```swift
func textSelections(interactingAt point: CGPoint, inContainerAt containerLocation: any NSTextLocation, anchors: [NSTextSelection], modifiers: NSTextSelectionNavigation.Modifier, selecting: Bool, bounds: CGRect) -> [NSTextSelection]
```

## Parameters

- `point`: A `CGPoint` that represents the location of the tap or click.
- `containerLocation`: A `NSTextLocation that describes the contasiner location`.
- `anchors`: An array of `NSTextSelection` objects.
- `modifiers`: One or more [NSTextSelectionNavigation.Modifier](modifier.md) options.
- `selecting`: A Boolean value that indicates if the selection is in drag session.
- `bounds`: A `CGRect` that defines the view area in the container’s coordinate system that can interact with events.

<a id="return-value"></a>

## Return Value

An array of text selections.

## See Also

### Working with text selections

- [textSelection(for:enclosing:)](textselection%28for_enclosing_%29.md): Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.
- [destinationSelection(for:direction:destination:extending:confined:)](destinationselection%28for_direction_destination_extending_confined_%29.md): Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.

# textSelectionsInteractingAtPoint:inContainerAtLocation:anchors:modifiers:selecting:bounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an array of text selections produced by a tap or click at the point you specify.

## Declaration

```objectivec
- (NSArray<NSTextSelection *> *) textSelectionsInteractingAtPoint:(CGPoint) point inContainerAtLocation:(id<NSTextLocation>) containerLocation anchors:(NSArray<NSTextSelection *> *) anchors modifiers:(NSTextSelectionNavigationModifier) modifiers selecting:(BOOL) selecting bounds:(CGRect) bounds;
```

## Parameters

- `point`: A `CGPoint` that represents the location of the tap or click.
- `containerLocation`: A `NSTextLocation that describes the contasiner location`.
- `anchors`: An array of `NSTextSelection` objects.
- `modifiers`: One or more [NSTextSelectionNavigationModifier](modifier.md) options.
- `selecting`: A Boolean value that indicates if the selection is in drag session.
- `bounds`: A `CGRect` that defines the view area in the container’s coordinate system that can interact with events.

<a id="return-value"></a>

## Return Value

An array of text selections.

## See Also

### Working with text selections

- [textSelectionForSelectionGranularity:enclosingTextSelection:](textselection%28for_enclosing_%29.md): Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.
- [destinationSelectionForTextSelection:direction:destination:extending:confined:](destinationselection%28for_direction_destination_extending_confined_%29.md): Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.
