> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:didfinishwritinginelement:)](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:didfinishwritinginelement:))

# indirectScribbleInteraction(\_:didFinishWritingInElement:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Informs the delegate when the user finishes writing.

## Declaration

```swift
func indirectScribbleInteraction(_ interaction: any UIInteraction, didFinishWritingInElement elementIdentifier: Self.ElementIdentifier)
```

## Parameters

- `interaction`: The interaction where the user finished writing.
- `elementIdentifier`: The identifier of the element that should receive focus.

<a id="Discussion"></a>

## Discussion

Use this to reset placeholders or other UI elements, if appropriate, to their state from before the user started writing.

## Default Implementations

### UIIndirectScribbleInteractionDelegate Implementations

- [indirectScribbleInteraction(\_:didFinishWritingInElement:)](indirectscribbleinteraction%28__didfinishwritinginelement_%29-9q7os.md)

## See Also

### Tracking Scribble Input

- [indirectScribbleInteraction(\_:willBeginWritingInElement:)](indirectscribbleinteraction%28__willbeginwritinginelement_%29.md): Informs the delegate when the user begins writing.
