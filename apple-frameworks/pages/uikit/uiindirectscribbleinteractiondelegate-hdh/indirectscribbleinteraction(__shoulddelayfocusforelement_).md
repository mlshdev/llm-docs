> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:shoulddelayfocusforelement:)](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:shoulddelayfocusforelement:))

# indirectScribbleInteraction(\_:shouldDelayFocusForElement:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Allow the delegate to delay focusing an element.

## Declaration

```swift
func indirectScribbleInteraction(_ interaction: any UIInteraction, shouldDelayFocusForElement elementIdentifier: Self.ElementIdentifier) -> Bool
```

## Parameters

- `interaction`: The interaction asking about delaying focus.
- `elementIdentifier`: The identifier of the element the interaction is asking about.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to delay focusing the element; the default is [false](https://developer.apple.com/documentation/swift/false).

## Default Implementations

### UIIndirectScribbleInteractionDelegate Implementations

- [indirectScribbleInteraction(\_:shouldDelayFocusForElement:)](indirectscribbleinteraction%28__shoulddelayfocusforelement_%29-9dmtl.md)

## See Also

### Managing Focus

- [indirectScribbleInteraction(\_:isElementFocused:)](indirectscribbleinteraction%28__iselementfocused_%29.md): Asks the delegate if an element is currently focused, according to the internal state of the interaction’s view.
- [indirectScribbleInteraction(\_:focusElementIfNeeded:referencePoint:completion:)](indirectscribbleinteraction%28__focuselementifneeded_referencepoint_completion_%29.md): Asks the delegate to focus an element to handle text edits.
