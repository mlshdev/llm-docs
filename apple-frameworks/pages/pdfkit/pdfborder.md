> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfborder](https://developer.apple.com/documentation/pdfkit/pdfborder)

# PDFBorder (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An optional border for an annotation that lies completely within the annotation rectangle.

## Declaration

```swift
class PDFBorder
```

## Topics

### Working with Border Styles and Characteristics

- [style](pdfborder/style.md): Sets the border style.
- [PDFBorderStyle](pdfborderstyle.md): PDF Kit annotation borders may have the following styles.
- [lineWidth](pdfborder/linewidth.md): Sets the line width (in points) for the border.
- [dashPattern](pdfborder/dashpattern.md): Gets the dash pattern for the border as an array of NSNumber objects.
- [borderKeyValues](pdfborder/borderkeyvalues.md): A dictionary that contains a deep copy of all border properties.
- [PDFBorderKey](pdfborderkey.md)

### Drawing Borders

- [draw(in:)](pdfborder/draw%28in_%29.md): Draws the border.

### Initializers

- [init(coder:)](pdfborder/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Annotation Display Characteristics

- [alignment](pdfannotation/alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](pdfannotation/bounds.md): Returns the bounding box for the annotation in page space.
- [contents](pdfannotation/contents.md): Returns the textual content (if any) associated with the annotation.
- [font](pdfannotation/font.md): The font the annotation uses to display text.
- [fontColor](pdfannotation/fontcolor.md): The font color the annotation uses to display text.
- [border](pdfannotation/border.md): Sets the border style for the annotation.
- [isHighlighted](pdfannotation/ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](pdfannotation/color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](pdfannotation/hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

# PDFBorder (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An optional border for an annotation that lies completely within the annotation rectangle.

## Declaration

```objectivec
@interface PDFBorder : NSObject
```

## Topics

### Working with Border Styles and Characteristics

- [style](pdfborder/style.md): Sets the border style.
- [PDFBorderStyle](pdfborderstyle.md): PDF Kit annotation borders may have the following styles.
- [lineWidth](pdfborder/linewidth.md): Sets the line width (in points) for the border.
- [dashPattern](pdfborder/dashpattern.md): Gets the dash pattern for the border as an array of NSNumber objects.
- [borderKeyValues](pdfborder/borderkeyvalues.md): A dictionary that contains a deep copy of all border properties.
- [PDFBorderKey](pdfborderkey.md)

### Drawing Borders

- [drawInRect:](pdfborder/draw%28in_%29.md): Draws the border.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Managing Annotation Display Characteristics

- [alignment](pdfannotation/alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](pdfannotation/bounds.md): Returns the bounding box for the annotation in page space.
- [contents](pdfannotation/contents.md): Returns the textual content (if any) associated with the annotation.
- [font](pdfannotation/font.md): The font the annotation uses to display text.
- [fontColor](pdfannotation/fontcolor.md): The font color the annotation uses to display text.
- [border](pdfannotation/border.md): Sets the border style for the annotation.
- [highlighted](pdfannotation/ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](pdfannotation/color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](pdfannotation/hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.
