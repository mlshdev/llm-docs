> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/fontname](https://developer.apple.com/documentation/appkit/nsfont/fontname)

# fontName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”

## Declaration

```swift
var fontName: String { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is intended for an application’s internal usage and not for display. To get a name that you can display to the user, use the [displayName](displayname.md) property instead.

## See Also

### Getting Font Names

- [displayName](displayname.md): The name of the font, including family and face names, to use when displaying the font information to the user.
- [familyName](familyname.md): The family name of the font—for example, “Times” or “Helvetica.”

# fontName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”

## Declaration

```objectivec
@property (copy, readonly) NSString * fontName;
```

<a id="Discussion"></a>

## Discussion

The value in this property is intended for an application’s internal usage and not for display. To get a name that you can display to the user, use the [displayName](displayname.md) property instead.

## See Also

### Getting Font Names

- [displayName](displayname.md): The name of the font, including family and face names, to use when displaying the font information to the user.
- [familyName](familyname.md): The family name of the font—for example, “Times” or “Helvetica.”
