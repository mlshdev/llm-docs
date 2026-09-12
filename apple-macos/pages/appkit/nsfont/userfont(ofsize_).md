> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/userfont(ofsize:)](https://developer.apple.com/documentation/appkit/nsfont/userfont(ofsize:))

# userFont(ofSize:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.

## Declaration

```swift
class func userFont(ofSize fontSize: CGFloat) -> NSFont?
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the user font at the default size.

## See Also

### Related Documentation

- [init(name:size:)](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [setUser(\_:)](setuser%28__%29.md): Sets the font used by default for documents and other text under the user’s control to the specified font.

### Creating User Fonts

- [userFixedPitchFont(ofSize:)](userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.

# userFontOfSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.

## Declaration

```objectivec
+ (NSFont *) userFontOfSize:(CGFloat) fontSize;
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the user font at the default size.

## See Also

### Related Documentation

- [fontWithName:size:](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [setUserFont:](setuser%28__%29.md): Sets the font used by default for documents and other text under the user’s control to the specified font.

### Creating User Fonts

- [userFixedPitchFontOfSize:](userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.
