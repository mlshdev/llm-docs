> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/delegate](https://developer.apple.com/documentation/appkit/nswindow/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s delegate.

## Declaration

```swift
weak var delegate: (any NSWindowDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the window doesn’t have a delegate.

A window object’s delegate is inserted in the responder chain after the window itself and is informed of various actions by the window through delegation messages.

## See Also

### Related Documentation

- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
- [sendAction(\_:to:from:)](../nsapplication/sendaction%28__to_from_%29.md): Sends the given action message to the given target.

### Managing the Window’s Behavior

- [NSWindowDelegate](../nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSWindowDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the window doesn’t have a delegate.

A window object’s delegate is inserted in the responder chain after the window itself and is informed of various actions by the window through delegation messages.

## See Also

### Related Documentation

- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches action messages with a given argument.
- [sendAction:to:from:](../nsapplication/sendaction%28__to_from_%29.md): Sends the given action message to the given target.

### Managing the Window’s Behavior

- [NSWindowDelegate](../nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
