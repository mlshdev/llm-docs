> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/keyboardinputsources](https://developer.apple.com/documentation/appkit/nstextinputcontext/keyboardinputsources)

# keyboardInputSources (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The array of keyboard text input source identifier strings available to the receiver. (read-only)

## Declaration

```swift
var keyboardInputSources: [NSTextInputSourceIdentifier]? { get }
```

<a id="Discussion"></a>

## Discussion

The Text Input Source Services API identifies text input sources with text input source identifier strings (for example, `com.apple.inputmethod.Kotoeri.Japanese`) supplied by the underlying text input sources framework. The ID corresponds to the `kTISPropertyInputSourceID` attribute.

For more information on the Text Input Source Services API, see `Text Input Source Services`.

## See Also

### Handling Input Sources

- [handleEvent(\_:)](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText()](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates()](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedName(forInputSource:)](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)

# keyboardInputSources (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The array of keyboard text input source identifier strings available to the receiver. (read-only)

## Declaration

```objectivec
@property (readonly, nullable) NSArray<NSString *> * keyboardInputSources;
```

<a id="Discussion"></a>

## Discussion

The Text Input Source Services API identifies text input sources with text input source identifier strings (for example, `com.apple.inputmethod.Kotoeri.Japanese`) supplied by the underlying text input sources framework. The ID corresponds to the `kTISPropertyInputSourceID` attribute.

For more information on the Text Input Source Services API, see `Text Input Source Services`.

## See Also

### Handling Input Sources

- [handleEvent:](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedNameForInputSource:](localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)
