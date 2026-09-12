> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/numberofcharacters](https://developer.apple.com/documentation/pdfkit/pdfpage/numberofcharacters)

# numberOfCharacters (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the number of characters on the page, including whitespace characters.

## Declaration

```swift
var numberOfCharacters: Int { get }
```

## See Also

### Working with Textual Content

- [string](string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterBounds(at:)](characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.
- [characterIndex(at:)](characterindex%28at_%29.md): Returns the character index value for the specified point in page space.

# numberOfCharacters (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the number of characters on the page, including whitespace characters.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger numberOfCharacters;
```

## See Also

### Working with Textual Content

- [string](string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterBoundsAtIndex:](characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.
- [characterIndexAtPoint:](characterindex%28at_%29.md): Returns the character index value for the specified point in page space.
