> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/recalculatekeyviewloop()](https://developer.apple.com/documentation/appkit/nswindow/recalculatekeyviewloop())

# recalculateKeyViewLoop() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the key view loop as “dirty” and in need of recalculation.

## Declaration

```swift
func recalculateKeyViewLoop()
```

<a id="Discussion"></a>

## Discussion

The key view loop is recalculated the next time someone requests the next or previous key view of the window. The recalculated loop is based on the geometric order of the views in the window.

If you don’t want to maintain the key view loop of your window manually, you can use this method to do it for you. When it’s first loaded, `NSWindow` calls this method automatically if your window doesn’t have a key view loop already established. If you add or remove views later, you can call this method manually to update the window’s key view loop. You can also set the [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md) property to have the window recalculate the loop automatically.

## See Also

### Managing the Key View Loop

- [selectKeyView(preceding:)](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyView(following:)](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView(\_:)](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView(\_:)](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.

# recalculateKeyViewLoop (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the key view loop as “dirty” and in need of recalculation.

## Declaration

```objectivec
- (void) recalculateKeyViewLoop;
```

<a id="Discussion"></a>

## Discussion

The key view loop is recalculated the next time someone requests the next or previous key view of the window. The recalculated loop is based on the geometric order of the views in the window.

If you don’t want to maintain the key view loop of your window manually, you can use this method to do it for you. When it’s first loaded, `NSWindow` calls this method automatically if your window doesn’t have a key view loop already established. If you add or remove views later, you can call this method manually to update the window’s key view loop. You can also set the [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md) property to have the window recalculate the loop automatically.

## See Also

### Managing the Key View Loop

- [selectKeyViewPrecedingView:](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyViewFollowingView:](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView:](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView:](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
