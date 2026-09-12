> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/sendaction(_:to:from:)](https://developer.apple.com/documentation/appkit/nsapplication/sendaction(_:to:from:))

# sendAction(\_:to:from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends the given action message to the given target.

## Declaration

```swift
func sendAction(_ action: Selector, to target: Any?, from sender: Any?) -> Bool
```

## Parameters

- `action`: The action message you want to send.
- `target`: The target object that defines the specified action message.
- `sender`: The object to pass for the action message’s parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully sent; otherwise [false](https://developer.apple.com/documentation/swift/false). This method also returns [false](https://developer.apple.com/documentation/swift/false) if `anAction` is `nil`.

<a id="Discussion"></a>

## Discussion

If `aTarget` is `nil`, [shared](shared.md) looks for an object that can respond to the message—that is, an object that implements a method matching `anAction`. It begins with the first responder of the key window. If the first responder can’t respond, it tries the first responder’s next responder and continues following next responder links up the responder chain. If none of the objects in the key window’s responder chain can handle the message, [shared](shared.md) attempts to send the message to the key window’s delegate.

If the delegate doesn’t respond and the main window is different from the key window, [shared](shared.md) begins again with the first responder in the main window. If objects in the main window can’t respond, [shared](shared.md) attempts to send the message to the main window’s delegate. If still no object has responded, [shared](shared.md) tries to handle the message itself. If [shared](shared.md) can’t respond, it attempts to send the message to its own delegate.

## See Also

### Related Documentation

- [makeWindowsPerform(\_:inOrder:)](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.

### Posting actions

- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [target(forAction:)](target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.
- [target(forAction:to:from:)](target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.

# sendAction:to:from: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends the given action message to the given target.

## Declaration

```objectivec
- (BOOL) sendAction:(SEL) action to:(id) target from:(id) sender;
```

## Parameters

- `action`: The action message you want to send.
- `target`: The target object that defines the specified action message.
- `sender`: The object to pass for the action message’s parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully sent; otherwise [false](https://developer.apple.com/documentation/swift/false). This method also returns [false](https://developer.apple.com/documentation/swift/false) if `anAction` is `nil`.

<a id="Discussion"></a>

## Discussion

If `aTarget` is `nil`, [sharedApplication](shared.md) looks for an object that can respond to the message—that is, an object that implements a method matching `anAction`. It begins with the first responder of the key window. If the first responder can’t respond, it tries the first responder’s next responder and continues following next responder links up the responder chain. If none of the objects in the key window’s responder chain can handle the message, [sharedApplication](shared.md) attempts to send the message to the key window’s delegate.

If the delegate doesn’t respond and the main window is different from the key window, [sharedApplication](shared.md) begins again with the first responder in the main window. If objects in the main window can’t respond, [sharedApplication](shared.md) attempts to send the message to the main window’s delegate. If still no object has responded, [sharedApplication](shared.md) tries to handle the message itself. If [sharedApplication](shared.md) can’t respond, it attempts to send the message to its own delegate.

## See Also

### Related Documentation

- [makeWindowsPerform:inOrder:](makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.

### Posting actions

- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [targetForAction:](target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.
- [targetForAction:to:from:](target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.
