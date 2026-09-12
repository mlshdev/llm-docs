> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/buttons](https://developer.apple.com/documentation/appkit/nsalert/buttons)

# buttons (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of response buttons for the alert.

## Declaration

```swift
var buttons: [NSButton] { get }
```

<a id="Discussion"></a>

## Discussion

The button displayed rightmost in the alert (for a left-to-right language) corresponds to the button at index `0` in this property’s array, and is considered the default button. A user can invoke this button by pressing the Return key.

Any button with a title of “Cancel” has a key equivalent of Escape, and any button with the title “Don’t Save” has a key equivalent of Command-D (but only if it is not the first button). You can also assign different key equivalents for the buttons using the [keyEquivalent](../nsbutton/keyequivalent.md) method of the `NSButton` class.

## See Also

### Accessing alert response buttons

- [addButton(withTitle:)](addbutton%28withtitle_%29.md): Adds a button with a given title to the alert.
- [NSApplication.ModalResponse](../nsapplication/modalresponse.md): A set of button return values for modal dialogs.

# buttons (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of response buttons for the alert.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSButton *> * buttons;
```

<a id="Discussion"></a>

## Discussion

The button displayed rightmost in the alert (for a left-to-right language) corresponds to the button at index `0` in this property’s array, and is considered the default button. A user can invoke this button by pressing the Return key.

Any button with a title of “Cancel” has a key equivalent of Escape, and any button with the title “Don’t Save” has a key equivalent of Command-D (but only if it is not the first button). You can also assign different key equivalents for the buttons using the [keyEquivalent](../nsbutton/keyequivalent.md) method of the `NSButton` class.

## See Also

### Accessing alert response buttons

- [addButtonWithTitle:](addbutton%28withtitle_%29.md): Adds a button with a given title to the alert.
- [NSModalResponse](../nsapplication/modalresponse.md): A set of button return values for modal dialogs.
