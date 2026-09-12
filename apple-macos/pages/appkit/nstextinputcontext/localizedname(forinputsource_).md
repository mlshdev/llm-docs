> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/localizedname(forinputsource:)](https://developer.apple.com/documentation/appkit/nstextinputcontext/localizedname(forinputsource:))

# localizedName(forInputSource:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the display name for the given text input source identifier.

## Declaration

```swift
class func localizedName(forInputSource inputSourceIdentifier: NSTextInputSourceIdentifier) -> String?
```

## Parameters

- `inputSourceIdentifier`: The text input source identifier.

<a id="return-value"></a>

## Return Value

The localized display name for `inputSourceIdentifier`.

## See Also

### Handling Input Sources

- [handleEvent(\_:)](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText()](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates()](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)

# localizedNameForInputSource: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the display name for the given text input source identifier.

## Declaration

```objectivec
+ (NSString *) localizedNameForInputSource:(NSTextInputSourceIdentifier) inputSourceIdentifier;
```

## Parameters

- `inputSourceIdentifier`: The text input source identifier.

<a id="return-value"></a>

## Return Value

The localized display name for `inputSourceIdentifier`.

## See Also

### Handling Input Sources

- [handleEvent:](handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText](discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates](invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [NSTextInputSourceIdentifier](../nstextinputsourceidentifier.md)
