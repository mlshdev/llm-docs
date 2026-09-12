> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/selectedfont](https://developer.apple.com/documentation/appkit/nsfontmanager/selectedfont)

# selectedFont (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The currently selected font object.

## Declaration

```swift
var selectedFont: NSFont? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the last font recorded with a [setSelectedFont(\_:isMultiple:)](setselectedfont%28__ismultiple_%29.md) message.

While fonts are being converted in response to a [convert(\_:)](convert%28__%29.md) message, you can determine the font selected in the Font panel like this:

```objc
NSFontManager *fontManager = [NSFontManager sharedFontManager];
panelFont = [fontManager convertFont:[fontManager.selectedFont]];
```

## See Also

### Setting and Examining the Selected Font

- [setSelectedFont(\_:isMultiple:)](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [isMultiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction()](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedName(forFamily:face:)](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.

# selectedFont (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The currently selected font object.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSFont * selectedFont;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the last font recorded with a [setSelectedFont:isMultiple:](setselectedfont%28__ismultiple_%29.md) message.

While fonts are being converted in response to a [convertFont:](convert%28__%29.md) message, you can determine the font selected in the Font panel like this:

```objc
NSFontManager *fontManager = [NSFontManager sharedFontManager];
panelFont = [fontManager convertFont:[fontManager.selectedFont]];
```

## See Also

### Setting and Examining the Selected Font

- [setSelectedFont:isMultiple:](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [multiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedNameForFamily:face:](localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.
