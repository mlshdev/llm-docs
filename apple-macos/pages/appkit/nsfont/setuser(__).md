> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/setuser(_:)](https://developer.apple.com/documentation/appkit/nsfont/setuser(_:))

# setUser(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the font used by default for documents and other text under the user’s control to the specified font.

## Declaration

```swift
class func setUser(_ font: NSFont?)
```

<a id="Discussion"></a>

## Discussion

Specifying `aFont` as `nil` causes the default to be removed from the application domain.

## See Also

### Related Documentation

- [userFont(ofSize:)](userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.

### Setting User Fonts

- [setUserFixedPitch(\_:)](setuserfixedpitch%28__%29.md): Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.

# setUserFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sets the font used by default for documents and other text under the user’s control to the specified font.

## Declaration

```objectivec
+ (void) setUserFont:(NSFont *) font;
```

<a id="Discussion"></a>

## Discussion

Specifying `aFont` as `nil` causes the default to be removed from the application domain.

## See Also

### Related Documentation

- [userFontOfSize:](userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.

### Setting User Fonts

- [setUserFixedPitchFont:](setuserfixedpitch%28__%29.md): Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.
