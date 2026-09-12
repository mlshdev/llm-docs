> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/attributedsubstringfromrange:](https://developer.apple.com/documentation/appkit/nstextinput/attributedsubstringfromrange:)

# attributedSubstringFromRange:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns an attributed string derived from the given range in the receiver’s text storage.

## Declaration

```objectivec
- (NSAttributedString *) attributedSubstringFromRange:(NSRange) range;
```

## Parameters

- `range`: The range in the text storage from which to create the returned string.

<a id="return-value"></a>

## Return Value

The string created from the given range.

<a id="Discussion"></a>

## Discussion

This method allows input mangers to query any range in text storage.

An implementation of this method should be prepared for `theRange` to be out-of-bounds. For example, the InkWell text input service can ask for the contents of the text input client that extends beyond the document’s range. In this case, you should return the intersection of the document’s range and `theRange`. If the location of `theRange` is completely outside of the document’s range, return `nil`.

## See Also

### Text storage

- [insertText:](inserttext_.md): Deprecated. Inserts the given string into the receiver’s text storage.
