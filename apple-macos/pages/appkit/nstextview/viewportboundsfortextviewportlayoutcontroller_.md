> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/viewportboundsfortextviewportlayoutcontroller:](https://developer.apple.com/documentation/appkit/nstextview/viewportboundsfortextviewportlayoutcontroller:)

# viewportBoundsForTextViewportLayoutController:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

`NSTextViewportLayoutControllerDelegate` method that the framework calls to request the current viewport, which is the view visible bounds plus the overdraw area. Requires a call to super.

## Declaration

```objectivec
- (CGRect) viewportBoundsForTextViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController;
```
