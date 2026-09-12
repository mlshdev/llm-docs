> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/ismultiple](https://developer.apple.com/documentation/appkit/nsfontmanager/ismultiple)

# isMultiple (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the currently selected font has multiple fonts.

## Declaration

```swift
var isMultiple: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the last font selection recorded has multiple fonts; if the last font selection recorded is a single font, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting and Examining the Selected Font

- [setSelectedFont(\_:isMultiple:)](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](selectedfont.md): The currently selected font object.
- [sendAction()](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedName(forFamily:face:)](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.

# multiple (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the currently selected font has multiple fonts.

## Declaration

```objectivec
@property (readonly, getter=isMultiple) BOOL multiple;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the last font selection recorded has multiple fonts; if the last font selection recorded is a single font, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting and Examining the Selected Font

- [setSelectedFont:isMultiple:](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](selectedfont.md): The currently selected font object.
- [sendAction](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedNameForFamily:face:](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.
