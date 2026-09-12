> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/selectkeyview(following:)](https://developer.apple.com/documentation/appkit/nswindow/selectkeyview(following:))

# selectKeyView(following:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Gives key view status to the view that follows the given view.

## Declaration

```swift
func selectKeyView(following view: NSView)
```

## Parameters

- `view`: The view whose following view in the key view loop to seek.

<a id="Discussion"></a>

## Discussion

Sends the [nextValidKeyView](../nsview/nextvalidkeyview.md) message to `view` and, if that message returns an `NSView` object, invokes [makeFirstResponder(\_:)](makefirstresponder%28__%29.md) with the returned object.

## See Also

### Managing the Key View Loop

- [selectKeyView(preceding:)](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectPreviousKeyView(\_:)](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView(\_:)](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop()](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.

# selectKeyViewFollowingView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Gives key view status to the view that follows the given view.

## Declaration

```objectivec
- (void) selectKeyViewFollowingView:(NSView *) view;
```

## Parameters

- `view`: The view whose following view in the key view loop to seek.

<a id="Discussion"></a>

## Discussion

Sends the [nextValidKeyView](../nsview/nextvalidkeyview.md) message to `view` and, if that message returns an `NSView` object, invokes [makeFirstResponder:](makefirstresponder%28__%29.md) with the returned object.

## See Also

### Managing the Key View Loop

- [selectKeyViewPrecedingView:](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectPreviousKeyView:](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView:](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.
