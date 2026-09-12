> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/selectedkeyboardinputsource](https://developer.apple.com/documentation/appkit/nstextinputcontext/selectedkeyboardinputsource)

# selectedKeyboardInputSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The identifier string for the selected keyboard text input source.

## Declaration

```swift
var selectedKeyboardInputSource: NSTextInputSourceIdentifier? { get set }
```

## See Also

### Handling Input Sources

- [handleEvent(\_:)](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText()](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates()](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [localizedName(forInputSource:)](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)

# selectedKeyboardInputSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The identifier string for the selected keyboard text input source.

## Declaration

```objectivec
@property (copy, nullable) NSTextInputSourceIdentifier selectedKeyboardInputSource;
```

## See Also

### Handling Input Sources

- [handleEvent:](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [localizedNameForInputSource:](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)
