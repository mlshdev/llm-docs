> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/font](https://developer.apple.com/documentation/pdfkit/pdfannotation/font)

# font (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The font the annotation uses to display text.

## Declaration

```swift
@NSCopying var font: UIFont? { get set }
```

```swift
@NSCopying var font: NSFont? { get set }
```

## Mentioned In

- [Adding Widgets to a PDF Document](../adding-widgets-to-a-pdf-document.md)

## See Also

### Managing Annotation Display Characteristics

- [alignment](alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](bounds.md): Returns the bounding box for the annotation in page space.
- [contents](contents.md): Returns the textual content (if any) associated with the annotation.
- [fontColor](fontcolor.md): The font color the annotation uses to display text.
- [border](border.md): Sets the border style for the annotation.
- [PDFBorder](../pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

# font (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The font the annotation uses to display text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIFont * font;
```

```objectivec
@property (nonatomic, copy, nullable) NSFont * font;
```

## Mentioned In

- [Adding Widgets to a PDF Document](../adding-widgets-to-a-pdf-document.md)

## See Also

### Managing Annotation Display Characteristics

- [alignment](alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](bounds.md): Returns the bounding box for the annotation in page space.
- [contents](contents.md): Returns the textual content (if any) associated with the annotation.
- [fontColor](fontcolor.md): The font color the annotation uses to display text.
- [border](border.md): Sets the border style for the annotation.
- [PDFBorder](../pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.
