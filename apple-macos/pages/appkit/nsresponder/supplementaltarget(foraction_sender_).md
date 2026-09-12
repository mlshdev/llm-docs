> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/supplementaltarget(foraction:sender:)](https://developer.apple.com/documentation/appkit/nsresponder/supplementaltarget(foraction:sender:))

# supplementalTarget(forAction:sender:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Finds a target for an action method.

## Declaration

```swift
func supplementalTarget(forAction action: Selector, sender: Any?) -> Any?
```

## Parameters

- `action`: The requested action.
- `sender`: The message sender.

<a id="return-value"></a>

## Return Value

An object which responds to the action, or `nil`.

<a id="Discussion"></a>

## Discussion

If this `NSResponder` instance does not itself `respondsToSelector:`, then `supplementalTargetForAction:sender:` is called.

This method should return an object which responds to the action; if this responder does not have a supplemental object that does that, the implementation of this method should call `super`’s `supplementalTargetForAction:sender:`.

NSResponder’s implementation returns `nil`.

## See Also

### Responding to Action Messages

- [NSStandardKeyBindingResponding](../nsstandardkeybindingresponding.md): Methods that responder subclasses implement to support key binding commands, such as inserting tabs and newlines, or moving the insertion point.
- [Action Messages](../action-messages.md): Implement action messages in your first responders to handle common tasks.

# supplementalTargetForAction:sender: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Finds a target for an action method.

## Declaration

```objectivec
- (id) supplementalTargetForAction:(SEL) action sender:(id) sender;
```

## Parameters

- `action`: The requested action.
- `sender`: The message sender.

<a id="return-value"></a>

## Return Value

An object which responds to the action, or `nil`.

<a id="Discussion"></a>

## Discussion

If this `NSResponder` instance does not itself `respondsToSelector:`, then `supplementalTargetForAction:sender:` is called.

This method should return an object which responds to the action; if this responder does not have a supplemental object that does that, the implementation of this method should call `super`’s `supplementalTargetForAction:sender:`.

NSResponder’s implementation returns `nil`.

## See Also

### Responding to Action Messages

- [NSStandardKeyBindingResponding](../nsstandardkeybindingresponding.md): Methods that responder subclasses implement to support key binding commands, such as inserting tabs and newlines, or moving the insertion point.
- [Action Messages](../action-messages.md): Implement action messages in your first responders to handle common tasks.
