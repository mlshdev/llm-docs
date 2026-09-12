> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/displayname](https://developer.apple.com/documentation/appkit/nsfont/displayname)

# displayName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the font, including family and face names, to use when displaying the font information to the user.

## Declaration

```swift
var displayName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The font’s display name is typically localized for the user’s language.

## See Also

### Getting Font Names

- [familyName](familyname.md): The family name of the font—for example, “Times” or “Helvetica.”
- [fontName](fontname.md): The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”

# displayName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the font, including family and face names, to use when displaying the font information to the user.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

The font’s display name is typically localized for the user’s language.

## See Also

### Getting Font Names

- [familyName](familyname.md): The family name of the font—for example, “Times” or “Helvetica.”
- [fontName](fontname.md): The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”
