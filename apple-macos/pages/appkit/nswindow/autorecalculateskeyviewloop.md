> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/autorecalculateskeyviewloop](https://developer.apple.com/documentation/appkit/nswindow/autorecalculateskeyviewloop)

# autorecalculatesKeyViewLoop (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.

## Declaration

```swift
var autorecalculatesKeyViewLoop: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window automatically recalculates the key view loop when views are added; otherwise, [false](https://developer.apple.com/documentation/swift/false). If [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md) is [false](https://developer.apple.com/documentation/swift/false), the client code must update the key view loop manually or call [recalculateKeyViewLoop()](recalculatekeyviewloop%28%29.md) to have the window recalculate it.

## See Also

### Managing the Key View Loop

- [selectKeyView(preceding:)](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyView(following:)](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView(\_:)](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView(\_:)](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [recalculateKeyViewLoop()](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.

# autorecalculatesKeyViewLoop (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.

## Declaration

```objectivec
@property BOOL autorecalculatesKeyViewLoop;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window automatically recalculates the key view loop when views are added; otherwise, [false](https://developer.apple.com/documentation/swift/false). If [autorecalculatesKeyViewLoop](autorecalculateskeyviewloop.md) is [false](https://developer.apple.com/documentation/swift/false), the client code must update the key view loop manually or call [recalculateKeyViewLoop](recalculatekeyviewloop%28%29.md) to have the window recalculate it.

## See Also

### Managing the Key View Loop

- [selectKeyViewPrecedingView:](selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyViewFollowingView:](selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView:](selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView:](selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [recalculateKeyViewLoop](recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.
