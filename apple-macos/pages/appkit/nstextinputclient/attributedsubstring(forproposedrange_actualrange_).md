> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/attributedsubstring(forproposedrange:actualrange:)](https://developer.apple.com/documentation/appkit/nstextinputclient/attributedsubstring(forproposedrange:actualrange:))

# attributedSubstring(forProposedRange:actualRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns an attributed string derived from the given range in the receiver’s text storage.

## Declaration

```swift
func attributedSubstring(forProposedRange range: NSRange, actualRange: NSRangePointer?) -> NSAttributedString?
```

## Parameters

- `range`: The range in the text storage from which to create the returned string.
- `actualRange`: The actual range of the returned string if it was adjusted, for example, to a grapheme cluster boundary or for performance or other reasons. `NULL` if range was not adjusted.

<a id="return-value"></a>

## Return Value

The string created from the given range. May return `nil`.

<a id="Discussion"></a>

## Discussion

An implementation of this method should be prepared for `aRange` to be out of bounds. For example, the InkWell text input service can ask for the contents of the text input client that extends beyond the document’s range. In this case, you should return the intersection of the document’s range and `aRange`. If the location of `aRange` is completely outside of the document’s range, return `nil`.

## See Also

### Storing text

- [attributedString()](attributedstring%28%29.md): Returns an attributed string representing the receiver’s text storage.
- [insertText(\_:replacementRange:)](inserttext%28__replacementrange_%29.md): Inserts the given string into the receiver, replacing the specified content.

# attributedSubstringForProposedRange:actualRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an attributed string derived from the given range in the receiver’s text storage.

## Declaration

```objectivec
- (NSAttributedString *) attributedSubstringForProposedRange:(NSRange) range actualRange:(NSRangePointer) actualRange;
```

## Parameters

- `range`: The range in the text storage from which to create the returned string.
- `actualRange`: The actual range of the returned string if it was adjusted, for example, to a grapheme cluster boundary or for performance or other reasons. `NULL` if range was not adjusted.

<a id="return-value"></a>

## Return Value

The string created from the given range. May return `nil`.

<a id="Discussion"></a>

## Discussion

An implementation of this method should be prepared for `aRange` to be out of bounds. For example, the InkWell text input service can ask for the contents of the text input client that extends beyond the document’s range. In this case, you should return the intersection of the document’s range and `aRange`. If the location of `aRange` is completely outside of the document’s range, return `nil`.

## See Also

### Storing text

- [attributedString](attributedstring%28%29.md): Returns an attributed string representing the receiver’s text storage.
- [insertText:replacementRange:](inserttext%28__replacementrange_%29.md): Inserts the given string into the receiver, replacing the specified content.
