> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:iselementfocused:](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:iselementfocused:)

# indirectScribbleInteraction:isElementFocused:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Asks the delegate if an element is currently focused, according to the internal state of the interaction’s view.

## Declaration

```objectivec
- (BOOL) indirectScribbleInteraction:(UIIndirectScribbleInteraction *) interaction isElementFocused:(UIScribbleElementIdentifier) elementIdentifier;
```

## Parameters

- `interaction`: The interaction asking for the focused state.
- `elementIdentifier`: The identifier of the element the interaction is asking about.

<a id="return-value"></a>

## Return Value

Returns `true` if the element is the one currently focused.

## See Also

### Managing focus

- [indirectScribbleInteraction:focusElementIfNeeded:referencePoint:completion:](indirectscribbleinteraction_focuselementifneeded_referencepoint_completion_.md): Asks the delegate to focus an element to handle text edits.
- [indirectScribbleInteraction:shouldDelayFocusForElement:](indirectscribbleinteraction_shoulddelayfocusforelement_.md): Allows the delegate to delay focusing an element.
