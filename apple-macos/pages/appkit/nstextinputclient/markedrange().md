> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/markedrange()](https://developer.apple.com/documentation/appkit/nstextinputclient/markedrange())

# markedRange() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of the marked text.

## Declaration

```swift
func markedRange() -> NSRange
```

<a id="return-value"></a>

## Return Value

The range of marked text or `{NSNotFound, 0}` if there is no marked range.

<a id="Discussion"></a>

## Discussion

The returned range measures from the start of the receiver’s text storage. The return value’s `location` is `NSNotFound` and its `length` is 0 if and only if [hasMarkedText()](hasmarkedtext%28%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling marked text

- [hasMarkedText()](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [selectedRange()](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText(\_:selectedRange:replacementRange:)](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText()](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText()](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.

# markedRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of the marked text.

## Declaration

```objectivec
- (NSRange) markedRange;
```

<a id="return-value"></a>

## Return Value

The range of marked text or `{NSNotFound, 0}` if there is no marked range.

<a id="Discussion"></a>

## Discussion

The returned range measures from the start of the receiver’s text storage. The return value’s `location` is `NSNotFound` and its `length` is 0 if and only if [hasMarkedText](hasmarkedtext%28%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling marked text

- [hasMarkedText](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [selectedRange](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText:selectedRange:replacementRange:](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText](unmarktext%28%29.md): Unmarks the marked text.
- [validAttributesForMarkedText](validattributesformarkedtext%28%29.md): Returns an array of attribute names recognized by the receiver.
