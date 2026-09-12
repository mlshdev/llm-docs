> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextparagraph/paragraphcontentrange](https://developer.apple.com/documentation/appkit/nstextparagraph/paragraphcontentrange)

# paragraphContentRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the range of the paragraph in the containing text’s attributed string.

## Declaration

```swift
var paragraphContentRange: NSTextRange? { get }
```

<a id="Discussion"></a>

## Discussion

The containing text is [NSTextContentStorage](../nstextcontentstorage.md)’s [attributedString](../nstextcontentstorage/attributedstring.md).

## See Also

### Getting paragraph characteristics

- [attributedString](attributedstring.md): Returns the source attributed string.
- [paragraphSeparatorRange](paragraphseparatorrange.md): Returns the range of the paragraph separator in the containing text’s attributed string.

# paragraphContentRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the range of the paragraph in the containing text’s attributed string.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSTextRange * paragraphContentRange;
```

<a id="Discussion"></a>

## Discussion

The containing text is [NSTextContentStorage](../nstextcontentstorage.md)’s [attributedString](../nstextcontentstorage/attributedstring.md).

## See Also

### Getting paragraph characteristics

- [attributedString](attributedstring.md): Returns the source attributed string.
- [paragraphSeparatorRange](paragraphseparatorrange.md): Returns the range of the paragraph separator in the containing text’s attributed string.
