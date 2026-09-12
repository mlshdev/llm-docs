> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/setuserfixedpitch(_:)](https://developer.apple.com/documentation/appkit/nsfont/setuserfixedpitch(_:))

# setUserFixedPitch(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.

## Declaration

```swift
class func setUserFixedPitch(_ font: NSFont?)
```

<a id="Discussion"></a>

## Discussion

Specifying `aFont` as `nil` causes the default to be removed from the application domain.

## See Also

### Related Documentation

- [userFixedPitchFont(ofSize:)](userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.

### Setting User Fonts

- [setUser(\_:)](setuser%28__%29.md): Sets the font used by default for documents and other text under the user’s control to the specified font.

# setUserFixedPitchFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.

## Declaration

```objectivec
+ (void) setUserFixedPitchFont:(NSFont *) font;
```

<a id="Discussion"></a>

## Discussion

Specifying `aFont` as `nil` causes the default to be removed from the application domain.

## See Also

### Related Documentation

- [userFixedPitchFontOfSize:](userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.

### Setting User Fonts

- [setUserFont:](setuser%28__%29.md): Sets the font used by default for documents and other text under the user’s control to the specified font.
