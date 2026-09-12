> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/currenttextcontainer](https://developer.apple.com/documentation/appkit/nstypesetter/currenttextcontainer)

# currentTextContainer (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the text container for the text being typeset.

## Declaration

```swift
unowned(unsafe) var currentTextContainer: NSTextContainer? { get }
```

<a id="return-value"></a>

## Return Value

The text container for the text being typeset. This value is valid only while the typesetter is performing layout.

## See Also

### Managing text containers

- [textContainers](textcontainers.md): Returns an array containing the text containers belonging to the current layout manager.
- [lineFragmentPadding](linefragmentpadding.md): Returns the current line fragment padding, in points.

# currentTextContainer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the text container for the text being typeset.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSTextContainer * currentTextContainer;
```

<a id="return-value"></a>

## Return Value

The text container for the text being typeset. This value is valid only while the typesetter is performing layout.

## See Also

### Managing text containers

- [textContainers](textcontainers.md): Returns an array containing the text containers belonging to the current layout manager.
- [lineFragmentPadding](linefragmentpadding.md): Returns the current line fragment padding, in points.
