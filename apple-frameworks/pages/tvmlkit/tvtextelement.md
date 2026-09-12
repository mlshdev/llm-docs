> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvtextelement](https://developer.apple.com/documentation/tvmlkit/tvtextelement)

# TVTextElement (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The textual content for the DOM element.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVTextElement
```

## Topics

### Creating Attributed Strings

- [makeAttributedString(font:)](tvtextelement/makeattributedstring%28font_%29.md): Deprecated. Provides an attributed string for a given font.
- [makeAttributedString(font:foregroundColor:textAlignment:)](tvtextelement/makeattributedstring%28font_foregroundcolor_textalignment_%29.md): Deprecated. Convenience method for configuring an attributed string given the specified attributes.

### Inspecting Text Elements

- [attributedString](tvtextelement/attributedstring.md): Deprecated. The text for an element.
- [textStyle](tvtextelement/textstyle.md): Deprecated. The style applied to the text of the element.
- [TVTextElementStyle](tvtextelementstyle.md): Deprecated. The style applied to the text inside of an element.

## Relationships

### Inherits From

- [TVViewElement](tvviewelement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom Elements

- [TVElementFactory](tvelementfactory.md): Deprecated. An object used to register new elements to extend the Apple TV Markup Language (TVML).
- [TVImageElement](tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [Creating TVML Elements](creating-tvml-elements.md): Avoid rewriting complex and often used elements by creating a simplified custom element.

# TVTextElement (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The textual content for the DOM element.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVTextElement : TVViewElement
```

## Topics

### Creating Attributed Strings

- [attributedStringWithFont:](tvtextelement/makeattributedstring%28font_%29.md): Deprecated. Provides an attributed string for a given font.
- [attributedStringWithFont:foregroundColor:textAlignment:](tvtextelement/makeattributedstring%28font_foregroundcolor_textalignment_%29.md): Deprecated. Convenience method for configuring an attributed string given the specified attributes.

### Inspecting Text Elements

- [attributedText](tvtextelement/attributedstring.md): Deprecated. The text for an element.
- [textStyle](tvtextelement/textstyle.md): Deprecated. The style applied to the text of the element.
- [TVTextElementStyle](tvtextelementstyle.md): Deprecated. The style applied to the text inside of an element.

## Relationships

### Inherits From

- [TVViewElement](tvviewelement.md)

## See Also

### Custom Elements

- [TVElementFactory](tvelementfactory.md): Deprecated. An object used to register new elements to extend the Apple TV Markup Language (TVML).
- [TVImageElement](tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [Creating TVML Elements](creating-tvml-elements.md): Avoid rewriting complex and often used elements by creating a simplified custom element.
