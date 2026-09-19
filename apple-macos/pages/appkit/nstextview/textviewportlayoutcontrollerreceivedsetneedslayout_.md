> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextview/textviewportlayoutcontrollerreceivedsetneedslayout:

# textViewportLayoutControllerReceivedSetNeedsLayout:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

`NSTextViewportLayoutControllerDelegate` method that the framework calls when the text viewport layout controller receives a `setNeedsLayout` call. Requires a call to super.

## Declaration

```objectivec
- (void) textViewportLayoutControllerReceivedSetNeedsLayout:(NSTextViewportLayoutController *) textViewportLayoutController;
```
