> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextparagraph](https://developer.apple.com/documentation/appkit/nstextparagraph)

# NSTextParagraph (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that represents a single paragraph backed by an attributed string as the contents.

## Declaration

```swift
class NSTextParagraph
```

## Topics

### Creating a paragraph

- [init(attributedString:)](nstextparagraph/init%28attributedstring_%29.md): Creates a new paragraph with the attributed string you provide.

### Getting paragraph characteristics

- [attributedString](nstextparagraph/attributedstring.md): Returns the source attributed string.
- [paragraphContentRange](nstextparagraph/paragraphcontentrange.md): Returns the range of the paragraph in the containing text’s attributed string.
- [paragraphSeparatorRange](nstextparagraph/paragraphseparatorrange.md): Returns the range of the paragraph separator in the containing text’s attributed string.

## Relationships

### Inherits From

- [NSTextElement](nstextelement.md)

### Inherited By

- [NSTextListElement](nstextlistelement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content elements

- [Enriching your text in text views](https://developer.apple.com/documentation/uikit/enriching-your-text-in-text-views): Support line numbering, section collapsing, inline attachment caching, exclusion paths, text attachments, and text lists in a text view.
- [NSTextListElement](nstextlistelement.md): A class that represents a text list node.
- [NSTextElement](nstextelement.md): An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.
- [NSTextElementProvider](nstextelementprovider.md): A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.

# NSTextParagraph (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that represents a single paragraph backed by an attributed string as the contents.

## Declaration

```objectivec
@interface NSTextParagraph : NSTextElement
```

## Topics

### Creating a paragraph

- [initWithAttributedString:](nstextparagraph/init%28attributedstring_%29.md): Creates a new paragraph with the attributed string you provide.

### Getting paragraph characteristics

- [attributedString](nstextparagraph/attributedstring.md): Returns the source attributed string.
- [paragraphContentRange](nstextparagraph/paragraphcontentrange.md): Returns the range of the paragraph in the containing text’s attributed string.
- [paragraphSeparatorRange](nstextparagraph/paragraphseparatorrange.md): Returns the range of the paragraph separator in the containing text’s attributed string.

## Relationships

### Inherits From

- [NSTextElement](nstextelement.md)

### Inherited By

- [NSTextListElement](nstextlistelement.md)

## See Also

### Content elements

- [NSTextListElement](nstextlistelement.md): A class that represents a text list node.
- [NSTextElement](nstextelement.md): An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.
- [NSTextElementProvider](nstextelementprovider.md): A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.
