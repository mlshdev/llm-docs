> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/target(foraction:to:from:)](https://developer.apple.com/documentation/appkit/nsapplication/target(foraction:to:from:))

# target(forAction:to:from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches for an object that can receive the message specified by the given selector.

## Declaration

```swift
func target(forAction action: Selector, to target: Any?, from sender: Any?) -> Any?
```

## Parameters

- `action`: The desired action message. May be `nil`, in which case this method will return `nil`.
- `target`: The target object to check. Specify `nil` if you want to search the responder chain starting with the current first responder.
- `sender`: The potential sender for the action message.

<a id="return-value"></a>

## Return Value

The object that can accept the specified action message or `nil` if no target object can receive the message from the specified `sender`. Returns `nil` if `anAction` is `nil`.

<a id="Discussion"></a>

## Discussion

The system looks for an object that implements a method matching `anAction`.

If `aTarget` is specified, the system verifies that it’s a valid target for the provided action and sender, returning `aTarget` if valid, `nil` otherwise.

If the provided target is `nil`, the search begins with the first responder of the key window. The system follows the responder object looking for targets. If no object capable of handling the message is found in the responder chain, the system returns `nil`.

## See Also

### Posting actions

- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction(\_:to:from:)](sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [target(forAction:)](target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.

# targetForAction:to:from: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Searches for an object that can receive the message specified by the given selector.

## Declaration

```objectivec
- (id) targetForAction:(SEL) action to:(id) target from:(id) sender;
```

## Parameters

- `action`: The desired action message. May be `nil`, in which case this method will return `nil`.
- `target`: The target object to check. Specify `nil` if you want to search the responder chain starting with the current first responder.
- `sender`: The potential sender for the action message.

<a id="return-value"></a>

## Return Value

The object that can accept the specified action message or `nil` if no target object can receive the message from the specified `sender`. Returns `nil` if `anAction` is `nil`.

<a id="Discussion"></a>

## Discussion

The system looks for an object that implements a method matching `anAction`.

If `aTarget` is specified, the system verifies that it’s a valid target for the provided action and sender, returning `aTarget` if valid, `nil` otherwise.

If the provided target is `nil`, the search begins with the first responder of the key window. The system follows the responder object looking for targets. If no object capable of handling the message is found in the responder chain, the system returns `nil`.

## See Also

### Posting actions

- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction:to:from:](sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [targetForAction:](target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.
