> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentstorage/textelement(for:)](https://developer.apple.com/documentation/appkit/nstextcontentstorage/textelement(for:))

# textElement(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the text element corresponding to object’s attributed string.

## Declaration

```swift
func textElement(for attributedString: NSAttributedString) -> NSTextElement?
```

## Parameters

- `attributedString`: The attributed string to map into an [NSTextElement](../nstextelement.md).

<a id="return-value"></a>

## Return Value

An [NSTextElement](../nstextelement.md), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` when `attributedString` contains attributes not mappable to [NSTextElement](../nstextelement.md).

## See Also

### Managing text elements

- [attributedString(for:)](attributedstring%28for_%29.md): Returns a new attributed string for the text element.
- [includesTextListMarkers](includestextlistmarkers.md): When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.

# textElementForAttributedString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the text element corresponding to object’s attributed string.

## Declaration

```objectivec
- (NSTextElement *) textElementForAttributedString:(NSAttributedString *) attributedString;
```

## Parameters

- `attributedString`: The attributed string to map into an [NSTextElement](../nstextelement.md).

<a id="return-value"></a>

## Return Value

An [NSTextElement](../nstextelement.md), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` when `attributedString` contains attributes not mappable to [NSTextElement](../nstextelement.md).

## See Also

### Managing text elements

- [attributedStringForTextElement:](attributedstring%28for_%29.md): Returns a new attributed string for the text element.
- [includesTextListMarkers](includestextlistmarkers.md): When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.
