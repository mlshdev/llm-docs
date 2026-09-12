> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/textviewportlayoutcontroller:configurerenderingsurfacefortextlayoutfragment:](https://developer.apple.com/documentation/appkit/nstextview/textviewportlayoutcontroller:configurerenderingsurfacefortextlayoutfragment:)

# textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

`NSTextViewportLayoutControllerDelegate` method that the framework calls when the layout controller lays out a text layout fragment in the UI. Requires a call to super.

## Declaration

```objectivec
- (void) textViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController configureRenderingSurfaceForTextLayoutFragment:(NSTextLayoutFragment *) textLayoutFragment;
```
