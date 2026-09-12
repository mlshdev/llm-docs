> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/removekeycommand(_:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/removekeycommand(_:))

# removeKeyCommand(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Removes the key command from the view controller.

## Declaration

```swift
func removeKeyCommand(_ keyCommand: UIKeyCommand)
```

## Parameters

- `keyCommand`: The key command to remove.

<a id="Discussion"></a>

## Discussion

This method lets you easily remove key commands without overriding the [keyCommands](../uiresponder/keycommands.md) property.

## See Also

### Related Documentation

- [keyCommands](../uiresponder/keycommands.md): The key commands that trigger actions on this responder.

### Accessing the available key commands

- [performsActionsWhilePresentingModally](performsactionswhilepresentingmodally.md): A Boolean value indicating whether the view controller performs menu-related actions.
- [addKeyCommand(\_:)](addkeycommand%28__%29.md): Associates the specified keyboard shortcut with the view controller.

# removeKeyCommand: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the key command from the view controller.

## Declaration

```objectivec
- (void) removeKeyCommand:(UIKeyCommand *) keyCommand;
```

## Parameters

- `keyCommand`: The key command to remove.

<a id="Discussion"></a>

## Discussion

This method lets you easily remove key commands without overriding the [keyCommands](../uiresponder/keycommands.md) property.

## See Also

### Related Documentation

- [keyCommands](../uiresponder/keycommands.md): The key commands that trigger actions on this responder.

### Accessing the available key commands

- [performsActionsWhilePresentingModally](performsactionswhilepresentingmodally.md): A Boolean value indicating whether the view controller performs menu-related actions.
- [addKeyCommand:](addkeycommand%28__%29.md): Associates the specified keyboard shortcut with the view controller.
