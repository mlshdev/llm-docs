> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/textcontainers](https://developer.apple.com/documentation/appkit/nstypesetter/textcontainers)

# textContainers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns an array containing the text containers belonging to the current layout manager.

## Declaration

```swift
unowned(unsafe) var textContainers: NSArray? { get }
```

<a id="return-value"></a>

## Return Value

An array containing the text containers belonging to the current layout manager. This value is valid only while the typesetter is performing layout.

## See Also

### Related Documentation

- [layoutManager](layoutmanager.md): Returns the layout manager for the text being typeset.

### Managing text containers

- [currentTextContainer](currenttextcontainer.md): Returns the text container for the text being typeset.
- [lineFragmentPadding](linefragmentpadding.md): Returns the current line fragment padding, in points.

# textContainers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns an array containing the text containers belonging to the current layout manager.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSArray<NSTextContainer *> * textContainers;
```

<a id="return-value"></a>

## Return Value

An array containing the text containers belonging to the current layout manager. This value is valid only while the typesetter is performing layout.

## See Also

### Related Documentation

- [layoutManager](layoutmanager.md): Returns the layout manager for the text being typeset.

### Managing text containers

- [currentTextContainer](currenttextcontainer.md): Returns the text container for the text being typeset.
- [lineFragmentPadding](linefragmentpadding.md): Returns the current line fragment padding, in points.
