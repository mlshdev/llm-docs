> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/firstrectforcharacterrange:](https://developer.apple.com/documentation/appkit/nstextinput/firstrectforcharacterrange:)

# firstRectForCharacterRange:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the first frame rectangle for characters in the given range, in screen coordinates.

## Declaration

```objectivec
- (NSRect) firstRectForCharacterRange:(NSRange) range;
```

## Parameters

- `range`: The character range whose frame is returned.

<a id="return-value"></a>

## Return Value

The frame rectangle for the given range of characters.

<a id="Discussion"></a>

## Discussion

If `theRange` spans multiple lines of text in the text view, the rectangle returned is the one for the characters in the first line. If the length of `theRange` is 0 (as it would be if there is nothing selected at the insertion point), the rectangle coincides with the insertion point, and its width is 0.

## See Also

### Character coordinates

- [characterIndexForPoint:](characterindexforpoint_.md): Deprecated. Returns the index of the character whose frame rectangle includes the given point.
