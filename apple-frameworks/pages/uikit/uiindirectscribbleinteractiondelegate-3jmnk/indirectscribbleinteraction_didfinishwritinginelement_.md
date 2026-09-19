> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:didfinishwritinginelement:

# indirectScribbleInteraction:didFinishWritingInElement:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Informs the delegate when the user finishes writing.

## Declaration

```objectivec
- (void) indirectScribbleInteraction:(UIIndirectScribbleInteraction *) interaction didFinishWritingInElement:(UIScribbleElementIdentifier) elementIdentifier;
```

## Parameters

- `interaction`: The interaction where the user finished writing.
- `elementIdentifier`: The identifier of the element that should receive focus.

<a id="Discussion"></a>

## Discussion

Use this to reset placeholders or other UI elements, if appropriate, to their state from before the user started writing.

## See Also

### Tracking Scribble input

- [indirectScribbleInteraction:willBeginWritingInElement:](indirectscribbleinteraction_willbeginwritinginelement_.md): Informs the delegate when the user begins writing.
