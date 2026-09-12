> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/draw(with:in:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/draw(with:in:))

# draw(with:in:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Draws the annotation in a graphics context using page-space coordinates relative to the origin of the specified box.

## Declaration

```swift
func draw(with box: PDFDisplayBox, in context: CGContext)
```

## Parameters

- `box`: The display box that represents the rectangle to draw the annotation in, in page-space coordinates.
- `context`: The graphics context to draw the annotation in.

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Managing Annotation Drawing and Output

- [shouldDisplay](shoulddisplay.md): Returns a Boolean value indicating whether the annotation should be displayed.
- [shouldPrint](shouldprint.md): Returns a Boolean value indicating whether the annotation should appear when the document is printed.

# drawWithBox:inContext: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Draws the annotation in a graphics context using page-space coordinates relative to the origin of the specified box.

## Declaration

```objectivec
- (void) drawWithBox:(PDFDisplayBox) box inContext:(CGContextRef) context;
```

## Parameters

- `box`: The display box that represents the rectangle to draw the annotation in, in page-space coordinates.
- `context`: The graphics context to draw the annotation in.

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Managing Annotation Drawing and Output

- [shouldDisplay](shoulddisplay.md): Returns a Boolean value indicating whether the annotation should be displayed.
- [shouldPrint](shouldprint.md): Returns a Boolean value indicating whether the annotation should appear when the document is printed.
