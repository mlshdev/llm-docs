> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/characterindexforpoint:](https://developer.apple.com/documentation/appkit/nstextinput/characterindexforpoint:)

# characterIndexForPoint:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the index of the character whose frame rectangle includes the given point.

## Declaration

```objectivec
- (NSUInteger) characterIndexForPoint:(NSPoint) point;
```

## Parameters

- `point`: A point, in screen coordinates.

<a id="return-value"></a>

## Return Value

The character index, measured from the start of the receiver’s text storage, of the character containing the given point. Returns `NSNotFound` if the cursor is not within a character.

## See Also

### Character coordinates

- [firstRectForCharacterRange:](firstrectforcharacterrange_.md): Deprecated. Returns the first frame rectangle for characters in the given range, in screen coordinates.
