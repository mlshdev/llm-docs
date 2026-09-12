> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/bidiprocessingenabled](https://developer.apple.com/documentation/appkit/nsatstypesetter/bidiprocessingenabled)

# bidiProcessingEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value controlling whether the typesetter performs bidirectional text processing.

## Declaration

```swift
var bidiProcessingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this method to disable the bidirectional layout stage if you know the paragraph does not need this stage; that is, if the characters in the backing store are in display order.

## See Also

### Accessing the layout manager

- [layoutManager](layoutmanager.md): The layout manager for the text being typeset.
- [usesFontLeading](usesfontleading.md): A Boolean value controlling whether the typesetter uses the leading (or line gap) value specified in the font metric information.
- [typesetterBehavior](typesetterbehavior.md): The current typesetter behavior value.
- [hyphenationFactor](hyphenationfactor.md): The threshold controlling when hyphenation is attempted.

# bidiProcessingEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value controlling whether the typesetter performs bidirectional text processing.

## Declaration

```objectivec
@property BOOL bidiProcessingEnabled;
```

<a id="Discussion"></a>

## Discussion

You can use this method to disable the bidirectional layout stage if you know the paragraph does not need this stage; that is, if the characters in the backing store are in display order.

## See Also

### Accessing the layout manager

- [layoutManager](layoutmanager.md): The layout manager for the text being typeset.
- [usesFontLeading](usesfontleading.md): A Boolean value controlling whether the typesetter uses the leading (or line gap) value specified in the font metric information.
- [typesetterBehavior](typesetterbehavior.md): The current typesetter behavior value.
- [hyphenationFactor](hyphenationfactor.md): The threshold controlling when hyphenation is attempted.
