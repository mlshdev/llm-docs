> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/docommand(by:command:)](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/docommand(by:command:))

# doCommand(by:command:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Passes commands that are not generated as part of the text input process.

## Declaration

```swift
func doCommand(by aSelector: Selector!, command infoDictionary: [AnyHashable : Any]!)
```

## Parameters

- `aSelector`: A selector that represents a command from the text input menu.
- `infoDictionary`: A dictionary that contains two key-value pairs:

  - [kIMKCommandMenuItemName](../kimkcommandmenuitemname.md), whose value is an `NSMenuItem` object. That is, the item selected by the user.
  - [kIMKCommandClientName](../kimkcommandclientname.md), whose value is the current client—`id<IMKTextInput, NSObject>`.

<a id="Discussion"></a>

## Discussion

The default implementation checks if the input controller object (that is, self) responds to the selector. If so, it sends the message [perform(\_:with:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform%28_:with:%29) to the input controller class. The object parameter in that case is the `infoDictionary` parameter.

This method is called when a user selects a command from the text input menu. To support this, an input method must provide actions for each menu item that is placed in the menu. For example, `(void)menuAction:(id)sender`. Note that the sender in this instance is the info dictionary.

## See Also

### Working with Custom Commands

- [menu()](menu%28%29.md): Returns a menu of commands that are specific to an input method.

# doCommandBySelector:commandDictionary: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Passes commands that are not generated as part of the text input process.

## Declaration

```objectivec
- (void) doCommandBySelector:(SEL) aSelector commandDictionary:(NSDictionary *) infoDictionary;
```

## Parameters

- `aSelector`: A selector that represents a command from the text input menu.
- `infoDictionary`: A dictionary that contains two key-value pairs:

  - [kIMKCommandMenuItemName](../kimkcommandmenuitemname.md), whose value is an `NSMenuItem` object. That is, the item selected by the user.
  - [kIMKCommandClientName](../kimkcommandclientname.md), whose value is the current client—`id<IMKTextInput, NSObject>`.

<a id="Discussion"></a>

## Discussion

The default implementation checks if the input controller object (that is, self) responds to the selector. If so, it sends the message [performSelector:withObject:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform%28_:with:%29) to the input controller class. The object parameter in that case is the `infoDictionary` parameter.

This method is called when a user selects a command from the text input menu. To support this, an input method must provide actions for each menu item that is placed in the menu. For example, `(void)menuAction:(id)sender`. Note that the sender in this instance is the info dictionary.

## See Also

### Working with Custom Commands

- [menu](menu%28%29.md): Returns a menu of commands that are specific to an input method.
