> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/familyname](https://developer.apple.com/documentation/appkit/nsfont/familyname)

# familyName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The family name of the font—for example, “Times” or “Helvetica.”

## Declaration

```swift
var familyName: String? { get }
```

<a id="Discussion"></a>

## Discussion

This name is the one that `NSFontManager` uses and may differ slightly from the AFM name.

The value in this property is intended for an application’s internal usage and not for display. To get a name that you can display to the user, use the [displayName](displayname.md) property instead.

## See Also

### Getting Font Names

- [displayName](displayname.md): The name of the font, including family and face names, to use when displaying the font information to the user.
- [fontName](fontname.md): The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”

# familyName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The family name of the font—for example, “Times” or “Helvetica.”

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * familyName;
```

<a id="Discussion"></a>

## Discussion

This name is the one that `NSFontManager` uses and may differ slightly from the AFM name.

The value in this property is intended for an application’s internal usage and not for display. To get a name that you can display to the user, use the [displayName](displayname.md) property instead.

## See Also

### Getting Font Names

- [displayName](displayname.md): The name of the font, including family and face names, to use when displaying the font information to the user.
- [fontName](fontname.md): The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”
