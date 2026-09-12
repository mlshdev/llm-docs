> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/characterbounds(at:)](https://developer.apple.com/documentation/pdfkit/pdfpage/characterbounds(at:))

# characterBounds(at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the bounds, in page space, of the character at the specified index.

## Declaration

```swift
func characterBounds(at index: Int) -> CGRect
```

```swift
func characterBounds(at index: Int) -> NSRect
```

<a id="Discussion"></a>

## Discussion

In the unlikely event that there is more than one character at the specified index point, only the bounds of the first character is returned.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page. Note that the bounds returned are not guaranteed to have integer coordinates.

## See Also

### Working with Textual Content

- [numberOfCharacters](numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterIndex(at:)](characterindex%28at_%29.md): Returns the character index value for the specified point in page space.

# characterBoundsAtIndex: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the bounds, in page space, of the character at the specified index.

## Declaration

```objectivec
- (CGRect) characterBoundsAtIndex:(NSInteger) index;
```

```objectivec
- (NSRect) characterBoundsAtIndex:(NSInteger) index;
```

<a id="Discussion"></a>

## Discussion

In the unlikely event that there is more than one character at the specified index point, only the bounds of the first character is returned.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page. Note that the bounds returned are not guaranteed to have integer coordinates.

## See Also

### Working with Textual Content

- [numberOfCharacters](numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterIndexAtPoint:](characterindex%28at_%29.md): Returns the character index value for the specified point in page space.
