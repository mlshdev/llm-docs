> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/usesfontleading](https://developer.apple.com/documentation/appkit/nstypesetter/usesfontleading)

# usesFontLeading (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.

## Declaration

```swift
var usesFontLeading: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it uses the information in the font metrics, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Accessing the layout manager

- [layoutManager](layoutmanager.md): Returns the layout manager for the text being typeset.
- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.
- [hyphenationFactor](hyphenationfactor.md): Returns the current hyphenation factor.

# usesFontLeading (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.

## Declaration

```objectivec
@property BOOL usesFontLeading;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it uses the information in the font metrics, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Accessing the layout manager

- [layoutManager](layoutmanager.md): Returns the layout manager for the text being typeset.
- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.
- [hyphenationFactor](hyphenationfactor.md): Returns the current hyphenation factor.
