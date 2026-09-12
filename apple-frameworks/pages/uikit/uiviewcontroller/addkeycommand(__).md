> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/addkeycommand(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/addkeycommand(_:))

# addKeyCommand(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Associates the specified keyboard shortcut with the view controller.

## Declaration

```swift
func addKeyCommand(_ keyCommand: UIKeyCommand)
```

## Parameters

- `keyCommand`: The key command to add.

<a id="Discussion"></a>

## Discussion

This method lets you easily add key commands to the view controller without overriding the [keyCommands](../uiresponder/keycommands.md) property. The key commands you add to a view controller are applied to the active responder chain. When the user performs a key command, UIKit searches the responder chain (starting with the first responder) for an object capable of handling the specified action.

## See Also

### Related Documentation

- [keyCommands](../uiresponder/keycommands.md): The key commands that trigger actions on this responder.

### Accessing the available key commands

- [performsActionsWhilePresentingModally](performsactionswhilepresentingmodally.md): A Boolean value indicating whether the view controller performs menu-related actions.
- [removeKeyCommand(\_:)](removekeycommand%28__%29.md): Removes the key command from the view controller.

# addKeyCommand: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Associates the specified keyboard shortcut with the view controller.

## Declaration

```objectivec
- (void) addKeyCommand:(UIKeyCommand *) keyCommand;
```

## Parameters

- `keyCommand`: The key command to add.

<a id="Discussion"></a>

## Discussion

This method lets you easily add key commands to the view controller without overriding the [keyCommands](../uiresponder/keycommands.md) property. The key commands you add to a view controller are applied to the active responder chain. When the user performs a key command, UIKit searches the responder chain (starting with the first responder) for an object capable of handling the specified action.

## See Also

### Related Documentation

- [keyCommands](../uiresponder/keycommands.md): The key commands that trigger actions on this responder.

### Accessing the available key commands

- [performsActionsWhilePresentingModally](performsactionswhilepresentingmodally.md): A Boolean value indicating whether the view controller performs menu-related actions.
- [removeKeyCommand:](removekeycommand%28__%29.md): Removes the key command from the view controller.
