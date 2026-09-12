> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextparagraph/paragraphcontentrange](https://developer.apple.com/documentation/uikit/nstextparagraph/paragraphcontentrange)

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
