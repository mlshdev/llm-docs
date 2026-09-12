> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelement](https://developer.apple.com/documentation/appkit/nstextelement)

# NSTextElement (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.

## Declaration

```swift
class NSTextElement
```

## Topics

### Creating a text element

- [init(textContentManager:)](nstextelement/init%28textcontentmanager_%29.md): Creates a new text element with the content manager you provide.

### Accessing the content manager

- [textContentManager](nstextelement/textcontentmanager.md): The value that represents the current content manager.

### Accessing the text element range

- [elementRange](nstextelement/elementrange.md): A range value that represents the range of the element inside the document.

### Accessing text elements

- [isRepresentedElement](nstextelement/isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [parent](nstextelement/parent.md): A value that represents the parent element if this text element is a child of an enclosing element.
- [childElements](nstextelement/childelements.md): An array of zero or more child text elements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSTextParagraph](nstextparagraph.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Content elements

- [Enriching your text in text views](https://developer.apple.com/documentation/uikit/enriching-your-text-in-text-views): Support line numbering, section collapsing, inline attachment caching, exclusion paths, text attachments, and text lists in a text view.
- [NSTextParagraph](nstextparagraph.md): A class that represents a single paragraph backed by an attributed string as the contents.
- [NSTextListElement](nstextlistelement.md): A class that represents a text list node.
- [NSTextElementProvider](nstextelementprovider.md): A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.

# NSTextElement (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.

## Declaration

```objectivec
@interface NSTextElement : NSObject
```

## Topics

### Creating a text element

- [initWithTextContentManager:](nstextelement/init%28textcontentmanager_%29.md): Creates a new text element with the content manager you provide.

### Accessing the content manager

- [textContentManager](nstextelement/textcontentmanager.md): The value that represents the current content manager.

### Accessing the text element range

- [elementRange](nstextelement/elementrange.md): A range value that represents the range of the element inside the document.

### Accessing text elements

- [isRepresentedElement](nstextelement/isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [parentElement](nstextelement/parent.md): A value that represents the parent element if this text element is a child of an enclosing element.
- [childElements](nstextelement/childelements.md): An array of zero or more child text elements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSTextParagraph](nstextparagraph.md)

## See Also

### Content elements

- [NSTextParagraph](nstextparagraph.md): A class that represents a single paragraph backed by an attributed string as the contents.
- [NSTextListElement](nstextlistelement.md): A class that represents a text list node.
- [NSTextElementProvider](nstextelementprovider.md): A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.
