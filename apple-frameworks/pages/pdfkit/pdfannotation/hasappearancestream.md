> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/hasappearancestream](https://developer.apple.com/documentation/pdfkit/pdfannotation/hasappearancestream)

# hasAppearanceStream (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

## Declaration

```swift
var hasAppearanceStream: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the annotation has an appearance stream; otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

<a id="Discussion"></a>

## Discussion

An appearance stream is a sequence of draw instructions used to render a PDF item. If an appearance stream exists, PDF Kit draws the annotation using the stream, which may override existing set parameters (such as the stroke color set with `setColor`).

## See Also

### Managing Annotation Display Characteristics

- [alignment](alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](bounds.md): Returns the bounding box for the annotation in page space.
- [contents](contents.md): Returns the textual content (if any) associated with the annotation.
- [font](font.md): The font the annotation uses to display text.
- [fontColor](fontcolor.md): The font color the annotation uses to display text.
- [border](border.md): Sets the border style for the annotation.
- [PDFBorder](../pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](color.md): Sets the stroke color for the annotation.

# hasAppearanceStream (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAppearanceStream;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the annotation has an appearance stream; otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

<a id="Discussion"></a>

## Discussion

An appearance stream is a sequence of draw instructions used to render a PDF item. If an appearance stream exists, PDF Kit draws the annotation using the stream, which may override existing set parameters (such as the stroke color set with `setColor`).

## See Also

### Managing Annotation Display Characteristics

- [alignment](alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](bounds.md): Returns the bounding box for the annotation in page space.
- [contents](contents.md): Returns the textual content (if any) associated with the annotation.
- [font](font.md): The font the annotation uses to display text.
- [fontColor](fontcolor.md): The font color the annotation uses to display text.
- [border](border.md): Sets the border style for the annotation.
- [PDFBorder](../pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](color.md): Sets the stroke color for the annotation.
