> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/validate(_:)](https://developer.apple.com/documentation/uikit/uiresponder/validate(_:))

# validate(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the receiving responder to validate the command.

## Declaration

```swift
func validate(_ command: UICommand)
```

## Parameters

- `command`: A mutable command object.

<a id="Discussion"></a>

## Discussion

Override this method in your view controller to make changes to a command before the command system renders it as a menu item.

## See Also

### Building and validating commands

- [buildMenu(with:)](buildmenu%28with_%29.md): Asks the receiving responder to add and remove items from a menu system.
- [canPerformAction(\_:withSender:)](canperformaction%28__withsender_%29.md): Requests the receiving responder to enable or disable the specified command in the user interface.
- [target(forAction:withSender:)](target%28foraction_withsender_%29.md): Returns the target object that responds to an action.

# validateCommand: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the receiving responder to validate the command.

## Declaration

```objectivec
- (void) validateCommand:(UICommand *) command;
```

## Parameters

- `command`: A mutable command object.

<a id="Discussion"></a>

## Discussion

Override this method in your view controller to make changes to a command before the command system renders it as a menu item.

## See Also

### Building and validating commands

- [buildMenuWithBuilder:](buildmenu%28with_%29.md): Asks the receiving responder to add and remove items from a menu system.
- [canPerformAction:withSender:](canperformaction%28__withsender_%29.md): Requests the receiving responder to enable or disable the specified command in the user interface.
- [targetForAction:withSender:](target%28foraction_withsender_%29.md): Returns the target object that responds to an action.
