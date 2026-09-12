> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentstorage/attributedstring(for:)](https://developer.apple.com/documentation/appkit/nstextcontentstorage/attributedstring(for:))

# attributedString(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new attributed string for the text element.

## Declaration

```swift
func attributedString(for textElement: NSTextElement) -> NSAttributedString?
```

## Parameters

- `textElement`: The [NSTextElement](../nstextelement.md) to map into an attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` if the method can’t map `textElement` to an [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring).

## See Also

### Managing text elements

- [textElement(for:)](textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.
- [includesTextListMarkers](includestextlistmarkers.md): When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.

# attributedStringForTextElement: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new attributed string for the text element.

## Declaration

```objectivec
- (NSAttributedString *) attributedStringForTextElement:(NSTextElement *) textElement;
```

## Parameters

- `textElement`: The [NSTextElement](../nstextelement.md) to map into an attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` if the method can’t map `textElement` to an [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring).

## See Also

### Managing text elements

- [textElementForAttributedString:](textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.
- [includesTextListMarkers](includestextlistmarkers.md): When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.
