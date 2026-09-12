> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojecttextelement](https://developer.apple.com/documentation/photosui/phprojecttextelement)

# PHProjectTextElement (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An element that represents text within project section content.

## Declaration

```swift
class PHProjectTextElement
```

## Topics

### Describing a Text Element

- [text](phprojecttextelement/text.md): The raw unformatted string for the text element.
- [attributedText](phprojecttextelement/attributedtext.md): The stylized attributed string for the text element as presented to the user in Photos.
- [textElementType](phprojecttextelement/textelementtype.md): The enumerated type of the text element.
- [PHProjectTextElement.ElementType](phprojecttextelement/elementtype.md): An enumeration of the type of text element.

## Relationships

### Inherits From

- [PHProjectElement](phprojectelement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Subclassing Project Elements

- [PHProjectAssetElement](phprojectassetelement.md): An element that represents a media asset within project section content.
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md): An element that represents a journal entry within project section content.
- [PHProjectMapElement](phprojectmapelement.md): An element that represents a map within project section content.

# PHProjectTextElement (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An element that represents text within project section content.

## Declaration

```objectivec
@interface PHProjectTextElement : PHProjectElement
```

## Topics

### Describing a Text Element

- [text](phprojecttextelement/text.md): The raw unformatted string for the text element.
- [attributedText](phprojecttextelement/attributedtext.md): The stylized attributed string for the text element as presented to the user in Photos.
- [textElementType](phprojecttextelement/textelementtype.md): The enumerated type of the text element.
- [PHProjectTextElementType](phprojecttextelement/elementtype.md): An enumeration of the type of text element.

## Relationships

### Inherits From

- [PHProjectElement](phprojectelement.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Subclassing Project Elements

- [PHProjectAssetElement](phprojectassetelement.md): An element that represents a media asset within project section content.
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md): An element that represents a journal entry within project section content.
- [PHProjectMapElement](phprojectmapelement.md): An element that represents a map within project section content.
