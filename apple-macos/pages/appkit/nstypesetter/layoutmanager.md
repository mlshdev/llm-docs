> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/layoutmanager](https://developer.apple.com/documentation/appkit/nstypesetter/layoutmanager)

# layoutManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the layout manager for the text being typeset.

## Declaration

```swift
unowned(unsafe) var layoutManager: NSLayoutManager? { get }
```

<a id="return-value"></a>

## Return Value

The layout manager for the text being typeset. This value is valid only while the typesetter is performing layout.

## See Also

### Accessing the layout manager

- [usesFontLeading](usesfontleading.md): Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.
- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.
- [hyphenationFactor](hyphenationfactor.md): Returns the current hyphenation factor.

# layoutManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the layout manager for the text being typeset.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSLayoutManager * layoutManager;
```

<a id="return-value"></a>

## Return Value

The layout manager for the text being typeset. This value is valid only while the typesetter is performing layout.

## See Also

### Accessing the layout manager

- [usesFontLeading](usesfontleading.md): Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.
- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.
- [hyphenationFactor](hyphenationfactor.md): Returns the current hyphenation factor.
