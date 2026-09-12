> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationtextwidget/setfieldname(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotationtextwidget/setfieldname(_:))

# setFieldName(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the internal field name for the annotation text field.

## Declaration

```swift
func setFieldName(_ name: String!)
```

## Parameters

- `name`: The internal field name to be used for the annotation text field.

<a id="Discussion"></a>

## Discussion

Field names are optional, internal names that identify text fields in a PDF form. You use field names with the [PDFActionResetForm](../pdfactionresetform.md) action.

Note that multiple `PDFAnnotationTextWidget` objects with the same field name always have the same text associated with that field name. When text is entered into one of the objects, the text associated with that field name is changed in all objects. If you need to ensure unique text for a `PDFAnnotationTextWidget` object, you must give it a unique field name.

## See Also

### Related Documentation

- [PDFAnnotationTextWidget](../pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

### Working with Field Names

- [fieldName()](fieldname%28%29.md): Deprecated. Returns the internal name for the annotation text field.

# setFieldName: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the internal field name for the annotation text field.

## Declaration

```objectivec
- (void) setFieldName:(NSString *) name;
```

## Parameters

- `name`: The internal field name to be used for the annotation text field.

<a id="Discussion"></a>

## Discussion

Field names are optional, internal names that identify text fields in a PDF form. You use field names with the [PDFActionResetForm](../pdfactionresetform.md) action.

Note that multiple `PDFAnnotationTextWidget` objects with the same field name always have the same text associated with that field name. When text is entered into one of the objects, the text associated with that field name is changed in all objects. If you need to ensure unique text for a `PDFAnnotationTextWidget` object, you must give it a unique field name.

## See Also

### Related Documentation

- [PDFAnnotationTextWidget](../pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

### Working with Field Names

- [fieldName](fieldname%28%29.md): Deprecated. Returns the internal name for the annotation text field.
