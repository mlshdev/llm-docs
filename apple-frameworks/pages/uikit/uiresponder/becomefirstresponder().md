> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/becomefirstresponder()](https://developer.apple.com/documentation/uikit/uiresponder/becomefirstresponder())

# becomeFirstResponder() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks UIKit to make this object the first responder in its window.

## Declaration

```swift
func becomeFirstResponder() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this object is now the first responder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Call this method when you want the object to be the first responder.

Calling this method doesn’t guarantee that the object becomes the first responder. UIKit asks the current first responder to resign as first responder, which it might not do.

If the current first responder resigns as first responder, UIKit checks this object’s [canBecomeFirstResponder](canbecomefirstresponder.md) property, which is [false](https://developer.apple.com/documentation/swift/false) by default. If the object succeeds in becoming the first responder, it receives subsequent events that target the first responder, and UIKit attempts to display the object’s input view.

Only call this method on views that are part of the active view hierarchy. To determine whether a view is onscreen, check its [window](../uiview/window.md) property. If that property contains a valid window, it’s part of an active view hierarchy.

To update your object’s state or perform some action such as highlighting the selection, override this method in your custom responders. If you override this method, call `super` at some point in your implementation.

In iOS 13 or later, the root of the responder chain is the window scene’s key window. In iOS 12 or earlier, the root of the responder chain is the application’s key window.

If your responder is a [UITextField](../uitextfield.md), a [UITextView](../uitextview.md), or a text view that implements the [UIKeyInput](../uikeyinput.md) protocol, expect the software keyboard to appear only if the view’s root window is a key window. Likewise, if a hardware keyboard is attached, only the first responder from the key window receives key events.

## See Also

### Managing the responder chain

- [next](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.

# becomeFirstResponder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks UIKit to make this object the first responder in its window.

## Declaration

```objectivec
- (BOOL) becomeFirstResponder;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this object is now the first responder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Call this method when you want the object to be the first responder.

Calling this method doesn’t guarantee that the object becomes the first responder. UIKit asks the current first responder to resign as first responder, which it might not do.

If the current first responder resigns as first responder, UIKit checks this object’s [canBecomeFirstResponder](canbecomefirstresponder.md) property, which is [false](https://developer.apple.com/documentation/swift/false) by default. If the object succeeds in becoming the first responder, it receives subsequent events that target the first responder, and UIKit attempts to display the object’s input view.

Only call this method on views that are part of the active view hierarchy. To determine whether a view is onscreen, check its [window](../uiview/window.md) property. If that property contains a valid window, it’s part of an active view hierarchy.

To update your object’s state or perform some action such as highlighting the selection, override this method in your custom responders. If you override this method, call `super` at some point in your implementation.

In iOS 13 or later, the root of the responder chain is the window scene’s key window. In iOS 12 or earlier, the root of the responder chain is the application’s key window.

If your responder is a [UITextField](../uitextfield.md), a [UITextView](../uitextview.md), or a text view that implements the [UIKeyInput](../uikeyinput.md) protocol, expect the software keyboard to appear only if the view’s root window is a key window. Likewise, if a hardware keyboard is attached, only the first responder from the key window receives key events.

## See Also

### Managing the responder chain

- [nextResponder](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.
