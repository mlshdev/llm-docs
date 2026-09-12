> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/characterindex(at:)](https://developer.apple.com/documentation/pdfkit/pdfpage/characterindex(at:))

# characterIndex(at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the character index value for the specified point in page space.

## Declaration

```swift
func characterIndex(at point: CGPoint) -> Int
```

```swift
func characterIndex(at point: NSPoint) -> Int
```

<a id="Discussion"></a>

## Discussion

If there is no character at the specified point, the method returns `-1`.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Textual Content

- [numberOfCharacters](numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterBounds(at:)](characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.

# characterIndexAtPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the character index value for the specified point in page space.

## Declaration

```objectivec
- (NSInteger) characterIndexAtPoint:(CGPoint) point;
```

```objectivec
- (NSInteger) characterIndexAtPoint:(NSPoint) point;
```

<a id="Discussion"></a>

## Discussion

If there is no character at the specified point, the method returns `-1`.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Textual Content

- [numberOfCharacters](numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterBoundsAtIndex:](characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.
