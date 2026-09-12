> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:shoulddelayfocusforelement:](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:shoulddelayfocusforelement:)

# indirectScribbleInteraction:shouldDelayFocusForElement:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Allows the delegate to delay focusing an element.

## Declaration

```objectivec
- (BOOL) indirectScribbleInteraction:(UIIndirectScribbleInteraction *) interaction shouldDelayFocusForElement:(UIScribbleElementIdentifier) elementIdentifier;
```

## Parameters

- `interaction`: The interaction asking about delaying focus.
- `elementIdentifier`: The identifier of the element the interaction is asking about.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to delay focusing the element; the default is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Normally, Scribble focuses the target input as soon as the user begins writing. If you return `true` from this callback, it waits until the user pauses briefly. This is useful in cases where the view shifts or transforms when becoming first responder, which can be disruptive to a user trying to write into the field.

It’s preferable to adjust the UI behavior to avoid the layout changes. Only use delayed focus as a last resort, since transcription happens all at once instead of incrementally.

## See Also

### Managing focus

- [indirectScribbleInteraction:isElementFocused:](indirectscribbleinteraction_iselementfocused_.md): Asks the delegate if an element is currently focused, according to the internal state of the interaction’s view.
- [indirectScribbleInteraction:focusElementIfNeeded:referencePoint:completion:](indirectscribbleinteraction_focuselementifneeded_referencepoint_completion_.md): Asks the delegate to focus an element to handle text edits.
