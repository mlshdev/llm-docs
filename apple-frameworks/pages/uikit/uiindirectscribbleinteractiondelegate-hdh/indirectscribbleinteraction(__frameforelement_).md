> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:frameforelement:)](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:frameforelement:))

# indirectScribbleInteraction(\_:frameForElement:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Asks the delegate to provide the frame of an element.

## Declaration

```swift
func indirectScribbleInteraction(_ interaction: any UIInteraction, frameForElement elementIdentifier: Self.ElementIdentifier) -> CGRect
```

## Parameters

- `interaction`: The interaction requesting to focus an element.
- `elementIdentifier`: The identifier of the element that should receive focus.

<a id="return-value"></a>

## Return Value

Returns the frame for the element, in the view coordinate system of the interaction.

## See Also

### Finding Elements and Frames

- [indirectScribbleInteraction(\_:requestElementsIn:completion:)](indirectscribbleinteraction%28__requestelementsin_completion_%29.md): Asks the delegate to return the locations of text input elements inside the specified rectangle of the view.
