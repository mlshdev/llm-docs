> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/setselectedfont(_:ismultiple:)](https://developer.apple.com/documentation/appkit/nsfontmanager/setselectedfont(_:ismultiple:))

# setSelectedFont(\_:isMultiple:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Records the specified font as the currently selected font and updates the Font panel.

## Declaration

```swift
func setSelectedFont(_ fontObj: NSFont, isMultiple flag: Bool)
```

## Parameters

- `fontObj`: The font to set as selected.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the Font panel indicates that more than one font is contained in the selection; if [false](https://developer.apple.com/documentation/swift/false), it does not.

<a id="Discussion"></a>

## Discussion

An object that manipulates fonts should invoke this method whenever it becomes first responder and whenever its selection changes. It shouldn’t invoke this method in the process of handling a [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:) message, as this causes the font manager to lose the information necessary to effect the change. After all fonts have been converted, the font manager itself records the new selected font.

## See Also

### Setting and Examining the Selected Font

- [selectedFont](selectedfont.md): The currently selected font object.
- [isMultiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction()](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedName(forFamily:face:)](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.

# setSelectedFont:isMultiple: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Records the specified font as the currently selected font and updates the Font panel.

## Declaration

```objectivec
- (void) setSelectedFont:(NSFont *) fontObj isMultiple:(BOOL) flag;
```

## Parameters

- `fontObj`: The font to set as selected.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the Font panel indicates that more than one font is contained in the selection; if [false](https://developer.apple.com/documentation/swift/false), it does not.

<a id="Discussion"></a>

## Discussion

An object that manipulates fonts should invoke this method whenever it becomes first responder and whenever its selection changes. It shouldn’t invoke this method in the process of handling a [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:) message, as this causes the font manager to lose the information necessary to effect the change. After all fonts have been converted, the font manager itself records the new selected font.

## See Also

### Setting and Examining the Selected Font

- [selectedFont](selectedfont.md): The currently selected font object.
- [multiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedNameForFamily:face:](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.
