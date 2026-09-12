> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteractiondelegate-hdh](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-hdh)

# UIIndirectScribbleInteractionDelegate

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Methods that customize behavior on views that aren’t formally text input views.

## Declaration

```swift
protocol UIIndirectScribbleInteractionDelegate : NSObjectProtocol
```

## Topics

### Identifying Elements

- [ElementIdentifier](uiindirectscribbleinteractiondelegate-hdh/elementidentifier.md): A unique identifier for a control that isn’t a text field in a Scribble interaction.

### Managing Focus

- [indirectScribbleInteraction(\_:isElementFocused:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__iselementfocused_%29.md): Asks the delegate if an element is currently focused, according to the internal state of the interaction’s view.
- [indirectScribbleInteraction(\_:focusElementIfNeeded:referencePoint:completion:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__focuselementifneeded_referencepoint_completion_%29.md): Asks the delegate to focus an element to handle text edits.
- [indirectScribbleInteraction(\_:shouldDelayFocusForElement:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__shoulddelayfocusforelement_%29.md): Allow the delegate to delay focusing an element.

### Tracking Scribble Input

- [indirectScribbleInteraction(\_:willBeginWritingInElement:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__willbeginwritinginelement_%29.md): Informs the delegate when the user begins writing.
- [indirectScribbleInteraction(\_:didFinishWritingInElement:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__didfinishwritinginelement_%29.md): Informs the delegate when the user finishes writing.

### Finding Elements and Frames

- [indirectScribbleInteraction(\_:frameForElement:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__frameforelement_%29.md): Asks the delegate to provide the frame of an element.
- [indirectScribbleInteraction(\_:requestElementsIn:completion:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__requestelementsin_completion_%29.md): Asks the delegate to return the locations of text input elements inside the specified rectangle of the view.

### Instance Methods

- [indirectScribbleInteraction(\_:focusElementIfNeeded:referencePoint:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__focuselementifneeded_referencepoint_%29.md)
- [indirectScribbleInteraction(\_:requestElementsIn:)](uiindirectscribbleinteractiondelegate-hdh/indirectscribbleinteraction%28__requestelementsin_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom views

- [UIIndirectScribbleInteraction](uiindirectscribbleinteraction-1nfjm.md): An interaction for using Scribble to enter text by writing on a view that isn’t formally a text input.
- [ElementIdentifier](uiindirectscribbleinteractiondelegate-hdh/elementidentifier.md): A unique identifier for a control that isn’t a text field in a Scribble interaction.
