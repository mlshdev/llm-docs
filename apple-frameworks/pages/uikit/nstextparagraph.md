> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextparagraph](https://developer.apple.com/documentation/uikit/nstextparagraph)

# NSTextParagraph (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content elements

- [Enriching your text in text views](enriching-your-text-in-text-views.md): Support line numbering, section collapsing, inline attachment caching, exclusion paths, text attachments, and text lists in a text view.
- [NSTextListElement](nstextlistelement.md): A class that represents a text list node.
- [NSTextElement](nstextelement.md): An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.
- [NSTextElementProvider](nstextelementprovider.md): A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.

# NSTextParagraph (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
