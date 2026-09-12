> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:willbeginwritinginelement:)](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction(_:willbeginwritinginelement:))

# indirectScribbleInteraction(\_:willBeginWritingInElement:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Informs the delegate when the user begins writing.

## Declaration

```swift
func indirectScribbleInteraction(_ interaction: any UIInteraction, willBeginWritingInElement elementIdentifier: Self.ElementIdentifier)
```

## Parameters

- `interaction`: The interaction where the user started writing.
- `elementIdentifier`: The identifier of the element that should receive focus.

<a id="Discussion"></a>

## Discussion

Use this to hide custom placeholders or other UI elements that can interfere with writing.

## Default Implementations

### UIIndirectScribbleInteractionDelegate Implementations

- [indirectScribbleInteraction(\_:willBeginWritingInElement:)](indirectscribbleinteraction%28__willbeginwritinginelement_%29-8qsa.md)

## See Also

### Tracking Scribble Input

- [indirectScribbleInteraction(\_:didFinishWritingInElement:)](indirectscribbleinteraction%28__didfinishwritinginelement_%29.md): Informs the delegate when the user finishes writing.
