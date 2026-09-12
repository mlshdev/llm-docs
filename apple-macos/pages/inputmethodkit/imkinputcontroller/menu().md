> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/menu()](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/menu())

# menu() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a menu of commands that are specific to an input method.

## Declaration

```swift
func menu() -> NSMenu!
```

<a id="return-value"></a>

## Return Value

The menu object.

<a id="Discussion"></a>

## Discussion

This method is called whenever the menu needs to be drawn so that an input method can update the menu to reflect the current state.

## See Also

### Working with Custom Commands

- [doCommand(by:command:)](docommand%28by_command_%29.md): Passes commands that are not generated as part of the text input process.

# menu (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a menu of commands that are specific to an input method.

## Declaration

```objectivec
- (NSMenu *) menu;
```

<a id="return-value"></a>

## Return Value

The menu object.

<a id="Discussion"></a>

## Discussion

This method is called whenever the menu needs to be drawn so that an input method can update the menu to reflect the current state.

## See Also

### Working with Custom Commands

- [doCommandBySelector:commandDictionary:](docommand%28by_command_%29.md): Passes commands that are not generated as part of the text input process.
