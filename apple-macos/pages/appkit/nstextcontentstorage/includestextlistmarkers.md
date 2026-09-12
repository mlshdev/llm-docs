> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentstorage/includestextlistmarkers](https://developer.apple.com/documentation/appkit/nstextcontentstorage/includestextlistmarkers)

# includesTextListMarkers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.

## Declaration

```swift
var includesTextListMarkers: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Utilizes `NSTextList.includesTextListMarkers` as the default value.

## See Also

### Managing text elements

- [textElement(for:)](textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.
- [attributedString(for:)](attributedstring%28for_%29.md): Returns a new attributed string for the text element.

# includesTextListMarkers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.

## Declaration

```objectivec
@property BOOL includesTextListMarkers;
```

<a id="discussion"></a>

## Discussion

Utilizes `NSTextList.includesTextListMarkers` as the default value.

## See Also

### Managing text elements

- [textElementForAttributedString:](textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.
- [attributedStringForTextElement:](attributedstring%28for_%29.md): Returns a new attributed string for the text element.
