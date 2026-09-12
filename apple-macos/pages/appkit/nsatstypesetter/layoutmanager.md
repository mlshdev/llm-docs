> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/layoutmanager](https://developer.apple.com/documentation/appkit/nsatstypesetter/layoutmanager)

# layoutManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The layout manager for the text being typeset.

## Declaration

```swift
unowned(unsafe) var layoutManager: NSLayoutManager? { get }
```

## See Also

### Accessing the layout manager

- [usesFontLeading](usesfontleading.md): A Boolean value controlling whether the typesetter uses the leading (or line gap) value specified in the font metric information.
- [typesetterBehavior](typesetterbehavior.md): The current typesetter behavior value.
- [hyphenationFactor](hyphenationfactor.md): The threshold controlling when hyphenation is attempted.
- [bidiProcessingEnabled](bidiprocessingenabled.md): A Boolean value controlling whether the typesetter performs bidirectional text processing.

# layoutManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The layout manager for the text being typeset.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSLayoutManager * layoutManager;
```

## See Also

### Accessing the layout manager

- [usesFontLeading](usesfontleading.md): A Boolean value controlling whether the typesetter uses the leading (or line gap) value specified in the font metric information.
- [typesetterBehavior](typesetterbehavior.md): The current typesetter behavior value.
- [hyphenationFactor](hyphenationfactor.md): The threshold controlling when hyphenation is attempted.
- [bidiProcessingEnabled](bidiprocessingenabled.md): A Boolean value controlling whether the typesetter performs bidirectional text processing.
