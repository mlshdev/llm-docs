> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:iselementfocused:)](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:iselementfocused:))

# indirectScribbleInteraction(\_:isElementFocused:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Asks the delegate if an element is currently focused, according to the internal state of the interaction’s view.

## Declaration

```swift
func indirectScribbleInteraction(_ interaction: any UIInteraction, isElementFocused elementIdentifier: Self.ElementIdentifier) -> Bool
```

## Parameters

- `interaction`: The interaction asking for the focused state.
- `elementIdentifier`: The identifier of the element the interaction is asking about.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the element is the one currently focused.

## See Also

### Managing Focus

- [indirectScribbleInteraction(\_:focusElementIfNeeded:referencePoint:completion:)](indirectscribbleinteraction%28__focuselementifneeded_referencepoint_completion_%29.md): Asks the delegate to focus an element to handle text edits.
- [indirectScribbleInteraction(\_:shouldDelayFocusForElement:)](indirectscribbleinteraction%28__shoulddelayfocusforelement_%29.md): Allow the delegate to delay focusing an element.
