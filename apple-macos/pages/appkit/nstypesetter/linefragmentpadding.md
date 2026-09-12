> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/linefragmentpadding](https://developer.apple.com/documentation/appkit/nstypesetter/linefragmentpadding)

# lineFragmentPadding (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current line fragment padding, in points.

## Declaration

```swift
var lineFragmentPadding: CGFloat { get set }
```

<a id="return-value"></a>

## Return Value

The current line fragment padding, in points; that is, the portion on each end of the line fragment rectangle left blank.

<a id="Discussion"></a>

## Discussion

Text is inset within the line fragment rectangle by this amount.

## See Also

### Managing text containers

- [currentTextContainer](currenttextcontainer.md): Returns the text container for the text being typeset.
- [textContainers](textcontainers.md): Returns an array containing the text containers belonging to the current layout manager.

# lineFragmentPadding (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current line fragment padding, in points.

## Declaration

```objectivec
@property CGFloat lineFragmentPadding;
```

<a id="return-value"></a>

## Return Value

The current line fragment padding, in points; that is, the portion on each end of the line fragment rectangle left blank.

<a id="Discussion"></a>

## Discussion

Text is inset within the line fragment rectangle by this amount.

## See Also

### Managing text containers

- [currentTextContainer](currenttextcontainer.md): Returns the text container for the text being typeset.
- [textContainers](textcontainers.md): Returns an array containing the text containers belonging to the current layout manager.
