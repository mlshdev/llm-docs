> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:requestelementsin:completion:)](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:requestelementsin:completion:))

# indirectScribbleInteraction(\_:requestElementsIn:completion:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Asks the delegate to return the locations of text input elements inside the specified rectangle of the view.

## Declaration

```swift
func indirectScribbleInteraction(_ interaction: any UIInteraction, requestElementsIn rect: CGRect, completion: @escaping ([Self.ElementIdentifier]) -> Void)
```

## Parameters

- `interaction`: The interaction where the user finished writing.
- `rect`: The rect around the area where the user is trying to write, in the interaction’s view coordinate system. Return only the elements intersecting this rect.
- `completion`: A completion handler that you must call, either synchronously or asynchronously. Pass an array of identifiers of the available elements, or an empty array if there are no elements.

<a id="Discussion"></a>

## Discussion

Each rectangle returned by the completion handler represents an area where the user can start writing even if it’s not a text input field itself.

## See Also

### Finding Elements and Frames

- [indirectScribbleInteraction(\_:frameForElement:)](indirectscribbleinteraction%28__frameforelement_%29.md): Asks the delegate to provide the frame of an element.
