> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/validattributesformarkedtext()](https://developer.apple.com/documentation/appkit/nstextinputclient/validattributesformarkedtext())

# validAttributesForMarkedText() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns an array of attribute names recognized by the receiver.

## Declaration

```swift
func validAttributesForMarkedText() -> [NSAttributedString.Key]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects representing names for the supported attributes.

<a id="Discussion"></a>

## Discussion

Returns an empty array if no attributes are supported. See NSAttributedString Application Kit Additions Reference for the set of string constants representing standard attributes.

## See Also

### Handling marked text

- [hasMarkedText()](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange()](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange()](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText(\_:selectedRange:replacementRange:)](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText()](unmarktext%28%29.md): Unmarks the marked text.

# validAttributesForMarkedText (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of attribute names recognized by the receiver.

## Declaration

```objectivec
- (NSArray<NSString *> *) validAttributesForMarkedText;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects representing names for the supported attributes.

<a id="Discussion"></a>

## Discussion

Returns an empty array if no attributes are supported. See NSAttributedString Application Kit Additions Reference for the set of string constants representing standard attributes.

## See Also

### Handling marked text

- [hasMarkedText](hasmarkedtext%28%29.md): Returns a Boolean value indicating whether the receiver has marked text.
- [markedRange](markedrange%28%29.md): Returns the range of the marked text.
- [selectedRange](selectedrange%28%29.md): Returns the range of selected text.
- [setMarkedText:selectedRange:replacementRange:](setmarkedtext%28__selectedrange_replacementrange_%29.md): Replaces a specified range in the receiver’s text storage with the given string and sets the selection.
- [unmarkText](unmarktext%28%29.md): Unmarks the marked text.
