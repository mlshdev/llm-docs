> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/target(foraction:withsender:)](https://developer.apple.com/documentation/uikit/uiresponder/target(foraction:withsender:))

# target(forAction:withSender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the target object that responds to an action.

## Declaration

```swift
func target(forAction action: Selector, withSender sender: Any?) -> Any?
```

## Parameters

- `action`: A selector that identifies a method associated with a command.
- `sender`: The object calling this method. For the editing menu commands, this is the shared [UIApplication](../uiapplication.md) object. Depending on the context, you can query the sender for information to help you determine the target of the command.

<a id="return-value"></a>

## Return Value

The object whose action method is invoked to execute the command.

<a id="Discussion"></a>

## Discussion

This method is called whenever an action needs to be invoked by the object. The default implementation calls the [canPerformAction(\_:withSender:)](canperformaction%28__withsender_%29.md) method to determine whether it can invoke the action. If the object can invoke the action, it returns itself, otherwise it passes the request up the responder chain. Your app should override this method if it wants to override how a target is selected.

## See Also

### Building and validating commands

- [buildMenu(with:)](buildmenu%28with_%29.md): Asks the receiving responder to add and remove items from a menu system.
- [validate(\_:)](validate%28__%29.md): Asks the receiving responder to validate the command.
- [canPerformAction(\_:withSender:)](canperformaction%28__withsender_%29.md): Requests the receiving responder to enable or disable the specified command in the user interface.

# targetForAction:withSender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the target object that responds to an action.

## Declaration

```objectivec
- (id) targetForAction:(SEL) action withSender:(id) sender;
```

## Parameters

- `action`: A selector that identifies a method associated with a command.
- `sender`: The object calling this method. For the editing menu commands, this is the shared [UIApplication](../uiapplication.md) object. Depending on the context, you can query the sender for information to help you determine the target of the command.

<a id="return-value"></a>

## Return Value

The object whose action method is invoked to execute the command.

<a id="Discussion"></a>

## Discussion

This method is called whenever an action needs to be invoked by the object. The default implementation calls the [canPerformAction:withSender:](canperformaction%28__withsender_%29.md) method to determine whether it can invoke the action. If the object can invoke the action, it returns itself, otherwise it passes the request up the responder chain. Your app should override this method if it wants to override how a target is selected.

## See Also

### Building and validating commands

- [buildMenuWithBuilder:](buildmenu%28with_%29.md): Asks the receiving responder to add and remove items from a menu system.
- [validateCommand:](validate%28__%29.md): Asks the receiving responder to validate the command.
- [canPerformAction:withSender:](canperformaction%28__withsender_%29.md): Requests the receiving responder to enable or disable the specified command in the user interface.
