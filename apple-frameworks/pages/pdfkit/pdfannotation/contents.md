> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/contents](https://developer.apple.com/documentation/pdfkit/pdfannotation/contents)

# contents (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the textual content (if any) associated with the annotation.

## Declaration

```swift
var contents: String? { get set }
```

<a id="return-value"></a>

## Return Value

A string representing the textual content associated with the annotation.

<a id="Discussion"></a>

## Discussion

Textual content is typically associated with `PDFAnnotationText` and `PDFAnnotationFreeText` annotations.

## See Also

### Related Documentation

- [toolTip](tooltip.md): Deprecated. Returns text for display as a help tag.

### Managing Annotation Display Characteristics

- [alignment](alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](bounds.md): Returns the bounding box for the annotation in page space.
- [font](font.md): The font the annotation uses to display text.
- [fontColor](fontcolor.md): The font color the annotation uses to display text.
- [border](border.md): Sets the border style for the annotation.
- [PDFBorder](../pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

# contents (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the textual content (if any) associated with the annotation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * contents;
```

<a id="return-value"></a>

## Return Value

A string representing the textual content associated with the annotation.

<a id="Discussion"></a>

## Discussion

Textual content is typically associated with `PDFAnnotationText` and `PDFAnnotationFreeText` annotations.

## See Also

### Related Documentation

- [toolTip](tooltip.md): Deprecated. Returns text for display as a help tag.

### Managing Annotation Display Characteristics

- [alignment](alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](bounds.md): Returns the bounding box for the annotation in page space.
- [font](font.md): The font the annotation uses to display text.
- [fontColor](fontcolor.md): The font color the annotation uses to display text.
- [border](border.md): Sets the border style for the annotation.
- [PDFBorder](../pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.
