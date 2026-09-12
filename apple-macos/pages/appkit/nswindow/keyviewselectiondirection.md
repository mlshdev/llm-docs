> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/keyviewselectiondirection](https://developer.apple.com/documentation/appkit/nswindow/keyviewselectiondirection)

# keyViewSelectionDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The direction the window is currently using to change the key view.

## Declaration

```swift
var keyViewSelectionDirection: NSWindow.SelectionDirection { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property can be one of the values described in [NSWindow.SelectionDirection](selectiondirection.md).

## See Also

### Managing the Key View Loop

- [selectKeyView(preceding:)](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyView(following:)](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView(\_:)](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView(\_:)](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop()](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.

# keyViewSelectionDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The direction the window is currently using to change the key view.

## Declaration

```objectivec
@property (readonly) NSSelectionDirection keyViewSelectionDirection;
```

<a id="Discussion"></a>

## Discussion

The value of this property can be one of the values described in [NSSelectionDirection](selectiondirection.md).

## See Also

### Managing the Key View Loop

- [selectKeyViewPrecedingView:](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyViewFollowingView:](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView:](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView:](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.
