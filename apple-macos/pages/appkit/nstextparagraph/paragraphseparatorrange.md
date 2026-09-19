> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextparagraph/paragraphseparatorrange

# paragraphSeparatorRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the range of the paragraph separator in the containing text’s attributed string.

## Declaration

```swift
var paragraphSeparatorRange: NSTextRange? { get }
```

<a id="Discussion"></a>

## Discussion

The containing text is [NSTextContentStorage](../nstextcontentstorage.md)’s [attributedString](../nstextcontentstorage/attributedstring.md).

## See Also

### Getting paragraph characteristics

- [attributedString](attributedstring.md): Returns the source attributed string.
- [paragraphContentRange](paragraphcontentrange.md): Returns the range of the paragraph in the containing text’s attributed string.

# paragraphSeparatorRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the range of the paragraph separator in the containing text’s attributed string.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSTextRange * paragraphSeparatorRange;
```

<a id="Discussion"></a>

## Discussion

The containing text is [NSTextContentStorage](../nstextcontentstorage.md)’s [attributedString](../nstextcontentstorage/attributedstring.md).

## See Also

### Getting paragraph characteristics

- [attributedString](attributedstring.md): Returns the source attributed string.
- [paragraphContentRange](paragraphcontentrange.md): Returns the range of the paragraph in the containing text’s attributed string.
