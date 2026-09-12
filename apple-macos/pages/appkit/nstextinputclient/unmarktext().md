> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/unmarktext()](https://developer.apple.com/documentation/appkit/nstextinputclient/unmarktext())

# unmarkText() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unmarks the marked text.

## Declaration

```swift
func unmarkText()
```

<a id="Discussion"></a>

## Discussion

The receiver removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally. If there is no marked text, the invocation of this method has no effect.

## See Also

### Handling marked text

- [hasMarkedText()](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange()](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange()](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText(\_:selectedRange:replacementRange:)](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [validAttributesForMarkedText()](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.

# unmarkText (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unmarks the marked text.

## Declaration

```objectivec
- (void) unmarkText;
```

<a id="Discussion"></a>

## Discussion

The receiver removes any marking from pending input text and disposes of the marked text as it wishes. The text view should accept the marked text as if it had been inserted normally. If there is no marked text, the invocation of this method has no effect.

## See Also

### Handling marked text

- [hasMarkedText](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText:selectedRange:replacementRange:](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [validAttributesForMarkedText](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.
