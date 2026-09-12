> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/attributedstring](https://developer.apple.com/documentation/pdfkit/pdfpage/attributedstring)

# attributedString (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an `NSAttributedString` object representing the text on the page.

## Declaration

```swift
var attributedString: NSAttributedString? { get }
```

## See Also

### Working with Textual Content

- [numberOfCharacters](numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](string.md): Returns an `NSString` object representing the text on the page.
- [characterBounds(at:)](characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.
- [characterIndex(at:)](characterindex%28at_%29.md): Returns the character index value for the specified point in page space.

# attributedString (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an `NSAttributedString` object representing the text on the page.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSAttributedString * attributedString;
```

## See Also

### Working with Textual Content

- [numberOfCharacters](numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](string.md): Returns an `NSString` object representing the text on the page.
- [characterBoundsAtIndex:](characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.
- [characterIndexAtPoint:](characterindex%28at_%29.md): Returns the character index value for the specified point in page space.
