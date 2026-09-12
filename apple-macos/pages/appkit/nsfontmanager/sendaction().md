> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/sendaction()](https://developer.apple.com/documentation/appkit/nsfontmanager/sendaction())

# sendAction() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

A Boolean value that indicates whether a responder handled the font manager’s action message.

## Declaration

```swift
func sendAction() -> Bool
```

<a id="Discussion"></a>

## Discussion

By default, the font manager’s action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). The value of this property is [true](https://developer.apple.com/documentation/swift/true) if some responder object handled the [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:) message or [false](https://developer.apple.com/documentation/swift/false) if the message went unheard.

## See Also

### Related Documentation

- [action](action.md): The action sent to the first responder when the user selects a new font from the Font panel or chooses a command from the Font menu.

### Setting and Examining the Selected Font

- [setSelectedFont(\_:isMultiple:)](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](selectedfont.md): The currently selected font object.
- [isMultiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [localizedName(forFamily:face:)](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.

# sendAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

A Boolean value that indicates whether a responder handled the font manager’s action message.

## Declaration

```objectivec
- (BOOL) sendAction;
```

<a id="Discussion"></a>

## Discussion

By default, the font manager’s action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). The value of this property is [true](https://developer.apple.com/documentation/swift/true) if some responder object handled the [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:) message or [false](https://developer.apple.com/documentation/swift/false) if the message went unheard.

## See Also

### Related Documentation

- [action](action.md): The action sent to the first responder when the user selects a new font from the Font panel or chooses a command from the Font menu.

### Setting and Examining the Selected Font

- [setSelectedFont:isMultiple:](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](selectedfont.md): The currently selected font object.
- [multiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [localizedNameForFamily:face:](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.
