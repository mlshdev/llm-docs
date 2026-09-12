> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/selectpreviouskeyview(_:)](https://developer.apple.com/documentation/appkit/nswindow/selectpreviouskeyview(_:))

# selectPreviousKeyView(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.

## Declaration

```swift
func selectPreviousKeyView(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

The candidate is one of the following (which this function searches for in this order):

- The current first responder’s previous valid key view, which the [previousValidKeyView](../nsview/previousvalidkeyview.md) method of `NSView` returns
- The [initialFirstResponder](initialfirstresponder.md) designates as the window’s initial first responder if it returns [true](https://developer.apple.com/documentation/swift/true) to an [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) message
- Otherwise, the initial first responder’s previous valid key view, which may be `nil`

## See Also

### Managing the Key View Loop

- [selectKeyView(preceding:)](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyView(following:)](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectNextKeyView(\_:)](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop()](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.

# selectPreviousKeyView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.

## Declaration

```objectivec
- (void) selectPreviousKeyView:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

The candidate is one of the following (which this function searches for in this order):

- The current first responder’s previous valid key view, which the [previousValidKeyView](../nsview/previousvalidkeyview.md) method of `NSView` returns
- The [initialFirstResponder](initialfirstresponder.md) designates as the window’s initial first responder if it returns [true](https://developer.apple.com/documentation/swift/true) to an [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) message
- Otherwise, the initial first responder’s previous valid key view, which may be `nil`

## See Also

### Managing the Key View Loop

- [selectKeyViewPrecedingView:](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyViewFollowingView:](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectNextKeyView:](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.
