> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextparagraph/paragraphcontentrange

# paragraphContentRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
