> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/canbecomekeyview](https://developer.apple.com/documentation/appkit/nsview/canbecomekeyview)

# canBecomeKeyView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view can become key view.

## Declaration

```swift
var canBecomeKeyView: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the view can become the key view. In order to become the key view, the view must be visible, it must be installed in a window that supports keyboard entry, and the view’s [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) method must return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Key-View Loop

- [needsPanelToBecomeKey](needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [nextKeyView](nextkeyview.md): The view object that follows the current view in the key view loop.
- [nextValidKeyView](nextvalidkeyview.md): The closest view object in the key view loop that follows the current view in the key view loop and accepts first responder status.
- [previousKeyView](previouskeyview.md): The view object preceding the current view in the key view loop.
- [previousValidKeyView](previousvalidkeyview.md): The closest view object in the key view loop that precedes the current view and accepts first responder status.

# canBecomeKeyView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view can become key view.

## Declaration

```objectivec
@property (readonly) BOOL canBecomeKeyView;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the view can become the key view. In order to become the key view, the view must be visible, it must be installed in a window that supports keyboard entry, and the view’s [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) method must return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Key-View Loop

- [needsPanelToBecomeKey](needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [nextKeyView](nextkeyview.md): The view object that follows the current view in the key view loop.
- [nextValidKeyView](nextvalidkeyview.md): The closest view object in the key view loop that follows the current view in the key view loop and accepts first responder status.
- [previousKeyView](previouskeyview.md): The view object preceding the current view in the key view loop.
- [previousValidKeyView](previousvalidkeyview.md): The closest view object in the key view loop that precedes the current view and accepts first responder status.
