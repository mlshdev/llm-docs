> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/localizedname(forfamily:face:)](https://developer.apple.com/documentation/appkit/nsfontmanager/localizedname(forfamily:face:))

# localizedName(forFamily:face:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a localized string with the name of the specified font family and face, if one exists.

## Declaration

```swift
func localizedName(forFamily family: String, face faceKey: String?) -> String
```

## Parameters

- `family`: The font family, for example, `@"Times"`.
- `faceKey`: The font face, for example, `@"Roman"`.

<a id="return-value"></a>

## Return Value

A localized string with the name of the specified font family and face, or, if `face` is `nil`, the font family only.

<a id="Discussion"></a>

## Discussion

The user’s locale is determined from the user’s `NSLanguages` default setting. The method also loads the localized strings for the font, if they aren’t already loaded.

## See Also

### Setting and Examining the Selected Font

- [setSelectedFont(\_:isMultiple:)](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](selectedfont.md): The currently selected font object.
- [isMultiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction()](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.

# localizedNameForFamily:face: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a localized string with the name of the specified font family and face, if one exists.

## Declaration

```objectivec
- (NSString *) localizedNameForFamily:(NSString *) family face:(NSString *) faceKey;
```

## Parameters

- `family`: The font family, for example, `@"Times"`.
- `faceKey`: The font face, for example, `@"Roman"`.

<a id="return-value"></a>

## Return Value

A localized string with the name of the specified font family and face, or, if `face` is `nil`, the font family only.

<a id="Discussion"></a>

## Discussion

The user’s locale is determined from the user’s `NSLanguages` default setting. The method also loads the localized strings for the font, if they aren’t already loaded.

## See Also

### Setting and Examining the Selected Font

- [setSelectedFont:isMultiple:](setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](selectedfont.md): The currently selected font object.
- [multiple](ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction](sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
