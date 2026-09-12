> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationtextwidget/rotation()](https://developer.apple.com/documentation/pdfkit/pdfannotationtextwidget/rotation())

# rotation() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the rotation angle of the annotation text field in degrees.

## Declaration

```swift
func rotation() -> Int
```

<a id="return-value"></a>

## Return Value

The rotation angle of the annotation text field in degrees.

<a id="Discussion"></a>

## Discussion

Note that the rotation value is a positive multiple of 90, such as 0, 90, 180, or 270. The rotation of annotation text fields with negative rotation is converted to a corresponding positive rotation. For example, -90 is changed to 270.

## See Also

### Related Documentation

- [PDFAnnotationTextWidget](../pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

### Managing Background Color, Alignment, and Rotation

- [backgroundColor()](backgroundcolor%28%29.md): Deprecated. Returns the background color of the annotation text field.
- [setBackgroundColor(\_:)](setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the annotation text field.
- [alignment()](alignment%28%29.md): Deprecated. Returns the text alignment setting for the annotation.
- [setAlignment(\_:)](setalignment%28__%29.md): Deprecated. Sets the text alignment for the annotation.
- [setRotation(\_:)](setrotation%28__%29.md): Deprecated. Sets the rotation angle of the annotation text field in degrees.

# rotation (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the rotation angle of the annotation text field in degrees.

## Declaration

```objectivec
- (NSInteger) rotation;
```

<a id="return-value"></a>

## Return Value

The rotation angle of the annotation text field in degrees.

<a id="Discussion"></a>

## Discussion

Note that the rotation value is a positive multiple of 90, such as 0, 90, 180, or 270. The rotation of annotation text fields with negative rotation is converted to a corresponding positive rotation. For example, -90 is changed to 270.

## See Also

### Related Documentation

- [PDFAnnotationTextWidget](../pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

### Managing Background Color, Alignment, and Rotation

- [backgroundColor](backgroundcolor%28%29.md): Deprecated. Returns the background color of the annotation text field.
- [setBackgroundColor:](setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the annotation text field.
- [alignment](alignment%28%29.md): Deprecated. Returns the text alignment setting for the annotation.
- [setAlignment:](setalignment%28__%29.md): Deprecated. Sets the text alignment for the annotation.
- [setRotation:](setrotation%28__%29.md): Deprecated. Sets the rotation angle of the annotation text field in degrees.
