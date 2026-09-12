> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/selectedrange()](https://developer.apple.com/documentation/appkit/nstextinputclient/selectedrange())

# selectedRange() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of selected text.

## Declaration

```swift
func selectedRange() -> NSRange
```

<a id="return-value"></a>

## Return Value

The range of selected text or `{NSNotFound, 0}` if there is no selection.

<a id="Discussion"></a>

## Discussion

The returned range measures from the start of the receiver’s text storage, that is, from 0 to the document length.

## See Also

### Handling marked text

- [hasMarkedText()](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange()](markedrange%28%29.md): Returns the range of the marked text.
- [setMarkedText(\_:selectedRange:replacementRange:)](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText()](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText()](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.

# selectedRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of selected text.

## Declaration

```objectivec
- (NSRange) selectedRange;
```

<a id="return-value"></a>

## Return Value

The range of selected text or `{NSNotFound, 0}` if there is no selection.

<a id="Discussion"></a>

## Discussion

The returned range measures from the start of the receiver’s text storage, that is, from 0 to the document length.

## See Also

### Handling marked text

- [hasMarkedText](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange](markedrange%28%29.md): Returns the range of the marked text.
- [setMarkedText:selectedRange:replacementRange:](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.
