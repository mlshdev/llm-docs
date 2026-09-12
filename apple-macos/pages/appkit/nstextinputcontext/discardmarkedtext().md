> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/discardmarkedtext()](https://developer.apple.com/documentation/appkit/nstextinputcontext/discardmarkedtext())

# discardMarkedText() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Tells the Cocoa text input system to discard the current conversion session.

## Declaration

```swift
func discardMarkedText()
```

<a id="Discussion"></a>

## Discussion

The client should clear its marked range when sending this message.

## See Also

### Handling Input Sources

- [handleEvent(\_:)](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [invalidateCharacterCoordinates()](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedName(forInputSource:)](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)

# discardMarkedText (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Tells the Cocoa text input system to discard the current conversion session.

## Declaration

```objectivec
- (void) discardMarkedText;
```

<a id="Discussion"></a>

## Discussion

The client should clear its marked range when sending this message.

## See Also

### Handling Input Sources

- [handleEvent:](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [invalidateCharacterCoordinates](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedNameForInputSource:](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)
