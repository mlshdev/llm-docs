> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/userfixedpitchfont(ofsize:)](https://developer.apple.com/documentation/appkit/nsfont/userfixedpitchfont(ofsize:))

# userFixedPitchFont(ofSize:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.

## Declaration

```swift
class func userFixedPitchFont(ofSize fontSize: CGFloat) -> NSFont?
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the fixed-pitch font at the default size.

The system does not guarantee that all the glyphs in a fixed-pitch font are the same width. For example, certain Japanese fonts are dual-pitch, and other fonts may have nonspacing marks that can affect the display of other glyphs.

## See Also

### Related Documentation

- [init(name:size:)](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [setUserFixedPitch(\_:)](setuserfixedpitch%28__%29.md): Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.

### Creating User Fonts

- [userFont(ofSize:)](userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.

# userFixedPitchFontOfSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.

## Declaration

```objectivec
+ (NSFont *) userFixedPitchFontOfSize:(CGFloat) fontSize;
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the fixed-pitch font at the default size.

The system does not guarantee that all the glyphs in a fixed-pitch font are the same width. For example, certain Japanese fonts are dual-pitch, and other fonts may have nonspacing marks that can affect the display of other glyphs.

## See Also

### Related Documentation

- [fontWithName:size:](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [setUserFixedPitchFont:](setuserfixedpitch%28__%29.md): Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.

### Creating User Fonts

- [userFontOfSize:](userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.
