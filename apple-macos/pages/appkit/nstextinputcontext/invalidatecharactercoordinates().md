> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/invalidatecharactercoordinates()](https://developer.apple.com/documentation/appkit/nstextinputcontext/invalidatecharactercoordinates())

# invalidateCharacterCoordinates() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.

## Declaration

```swift
func invalidateCharacterCoordinates()
```

## See Also

### Handling Input Sources

- [handleEvent(\_:)](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText()](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedName(forInputSource:)](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)

# invalidateCharacterCoordinates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.

## Declaration

```objectivec
- (void) invalidateCharacterCoordinates;
```

## See Also

### Handling Input Sources

- [handleEvent:](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedNameForInputSource:](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)
