> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsatstypesetter/layoutparagraph(at:)

# layoutParagraph(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Lays out glyphs in the current glyph range until the next paragraph separator is reached.

## Declaration

```swift
func layoutParagraph(at lineFragmentOrigin: UnsafeMutablePointer<NSPoint>) -> Int
```

<a id="Discussion"></a>

## Discussion

The `lineFragmentOrigin` specifies the upper-left corner of line fragment rectangle. On return, `lineFragmentOrigin` contains the next origin. This method returns the next glyph index. Usually it’s the index right after the paragraph separator, but it can be inside the paragraph range if, for example, the end of the text container is reached before the paragraph separator.

# layoutParagraphAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Lays out glyphs in the current glyph range until the next paragraph separator is reached.

## Declaration

```objectivec
- (NSUInteger) layoutParagraphAtPoint:(NSPoint *) lineFragmentOrigin;
```

<a id="Discussion"></a>

## Discussion

The `lineFragmentOrigin` specifies the upper-left corner of line fragment rectangle. On return, `lineFragmentOrigin` contains the next origin. This method returns the next glyph index. Usually it’s the index right after the paragraph separator, but it can be inside the paragraph range if, for example, the end of the text container is reached before the paragraph separator.
