> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:frameforelement:](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:frameforelement:)

# indirectScribbleInteraction:frameForElement:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Asks the delegate to provide the frame of an element.

## Declaration

```objectivec
- (CGRect) indirectScribbleInteraction:(UIIndirectScribbleInteraction *) interaction frameForElement:(UIScribbleElementIdentifier) elementIdentifier;
```

## Parameters

- `interaction`: The interaction requesting to focus an element.
- `elementIdentifier`: The identifier of the element that should receive focus.

<a id="return-value"></a>

## Return Value

Returns the frame for the element, in the view coordinate system of the interaction.

## See Also

### Finding elements and frames

- [indirectScribbleInteraction:requestElementsInRect:completion:](indirectscribbleinteraction_requestelementsinrect_completion_.md): Asks the delegate to return the locations of text input elements inside the specified rectangle of the view.
