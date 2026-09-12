> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputsourceidentifier](https://developer.apple.com/documentation/appkit/nstextinputsourceidentifier)

# NSTextInputSourceIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias NSTextInputSourceIdentifier = String
```

## See Also

### Handling Input Sources

- [handleEvent(\_:)](nstextinputcontext/handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText()](nstextinputcontext/discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates()](nstextinputcontext/invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](nstextinputcontext/keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](nstextinputcontext/selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedName(forInputSource:)](nstextinputcontext/localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.

# NSTextInputSourceIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef NSString * NSTextInputSourceIdentifier;
```

## See Also

### Handling Input Sources

- [handleEvent:](nstextinputcontext/handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText](nstextinputcontext/discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates](nstextinputcontext/invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](nstextinputcontext/keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](nstextinputcontext/selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedNameForInputSource:](nstextinputcontext/localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
