> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/previouskeyview](https://developer.apple.com/documentation/appkit/nsview/previouskeyview)

# previousKeyView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view object preceding the current view in the key view loop.

## Declaration

```swift
unowned(unsafe) var previousKeyView: NSView? { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` if there is no view preceding the current view in the key view loop. The view in this property should, if possible, be made first responder when the user navigates backward from the current view using keyboard interface control.

## See Also

### Related Documentation

- [selectKeyView(following:)](../nswindow/selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectNextKeyView(\_:)](../nswindow/selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [selectPreviousKeyView(\_:)](../nswindow/selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectKeyView(preceding:)](../nswindow/selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.

### Managing the Key-View Loop

- [canBecomeKeyView](canbecomekeyview.md): A Boolean value indicating whether the view can become key view.
- [needsPanelToBecomeKey](needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [nextKeyView](nextkeyview.md): The view object that follows the current view in the key view loop.
- [nextValidKeyView](nextvalidkeyview.md): The closest view object in the key view loop that follows the current view in the key view loop and accepts first responder status.
- [previousValidKeyView](previousvalidkeyview.md): The closest view object in the key view loop that precedes the current view and accepts first responder status.

# previousKeyView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view object preceding the current view in the key view loop.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSView * previousKeyView;
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` if there is no view preceding the current view in the key view loop. The view in this property should, if possible, be made first responder when the user navigates backward from the current view using keyboard interface control.

## See Also

### Related Documentation

- [selectKeyViewFollowingView:](../nswindow/selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectNextKeyView:](../nswindow/selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [selectPreviousKeyView:](../nswindow/selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectKeyViewPrecedingView:](../nswindow/selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.

### Managing the Key-View Loop

- [canBecomeKeyView](canbecomekeyview.md): A Boolean value indicating whether the view can become key view.
- [needsPanelToBecomeKey](needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [nextKeyView](nextkeyview.md): The view object that follows the current view in the key view loop.
- [nextValidKeyView](nextvalidkeyview.md): The closest view object in the key view loop that follows the current view in the key view loop and accepts first responder status.
- [previousValidKeyView](previousvalidkeyview.md): The closest view object in the key view loop that precedes the current view and accepts first responder status.
