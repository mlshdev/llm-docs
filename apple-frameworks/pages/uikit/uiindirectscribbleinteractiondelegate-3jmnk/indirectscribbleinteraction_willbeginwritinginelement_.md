> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction:willbeginwritinginelement:

# indirectScribbleInteraction:willBeginWritingInElement:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Informs the delegate when the user begins writing.

## Declaration

```objectivec
- (void) indirectScribbleInteraction:(UIIndirectScribbleInteraction *) interaction willBeginWritingInElement:(UIScribbleElementIdentifier) elementIdentifier;
```

## Parameters

- `interaction`: The interaction where the user started writing.
- `elementIdentifier`: The identifier of the element that should receive focus.

<a id="Discussion"></a>

## Discussion

Use this to hide custom placeholders or other UI elements that can interfere with writing.

## See Also

### Tracking Scribble input

- [indirectScribbleInteraction:didFinishWritingInElement:](indirectscribbleinteraction_didfinishwritinginelement_.md): Informs the delegate when the user finishes writing.
