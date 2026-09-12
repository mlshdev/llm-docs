> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/hyphenationfactor](https://developer.apple.com/documentation/appkit/nstypesetter/hyphenationfactor)

# hyphenationFactor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current hyphenation factor.

## Declaration

```swift
var hyphenationFactor: Float { get set }
```

<a id="return-value"></a>

## Return Value

The hyphenation factor, a value ranging from 0.0 to 1.0 that controls when hyphenation is attempted. By default, the value is 0.0, meaning hyphenation is off. A factor of 1.0 causes hyphenation to be attempted always.

## See Also

### Accessing the layout manager

- [layoutManager](layoutmanager.md): Returns the layout manager for the text being typeset.
- [usesFontLeading](usesfontleading.md): Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.
- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.

# hyphenationFactor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current hyphenation factor.

## Declaration

```objectivec
@property float hyphenationFactor;
```

<a id="return-value"></a>

## Return Value

The hyphenation factor, a value ranging from 0.0 to 1.0 that controls when hyphenation is attempted. By default, the value is 0.0, meaning hyphenation is off. A factor of 1.0 causes hyphenation to be attempted always.

## See Also

### Accessing the layout manager

- [layoutManager](layoutmanager.md): Returns the layout manager for the text being typeset.
- [usesFontLeading](usesfontleading.md): Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.
- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.
