> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/color](https://developer.apple.com/documentation/pdfkit/pdfannotation/color)

# color (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Sets the stroke color for the annotation.

## Declaration

```swift
@NSCopying var color: UIColor { get set }
```

```swift
@NSCopying var color: NSColor { get set }
```

## Parameters

- `color`: The stroke color for the annotation.

<a id="Discussion"></a>

## Discussion

Where this color is used depends on the annotation type.

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
- [hasAppearanceStream](hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

# color (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Sets the stroke color for the annotation.

## Declaration

```objectivec
@property (nonatomic, copy) UIColor * color;
```

```objectivec
@property (nonatomic, copy) NSColor * color;
```

## Parameters

- `color`: The stroke color for the annotation.

<a id="Discussion"></a>

## Discussion

Where this color is used depends on the annotation type.

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
- [hasAppearanceStream](hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.
