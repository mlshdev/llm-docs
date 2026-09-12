> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionresetform/fields](https://developer.apple.com/documentation/pdfkit/pdfactionresetform/fields)

# fields (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of fields associated with the reset action.

## Declaration

```swift
var fields: [String]? { get set }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects that corresponds to the `fieldNames` property of widget annotations (such as [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md)) on the PDF page. This method can return `NULL`.

## See Also

### Related Documentation

- [PDFActionResetForm](../pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.

# fields (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of fields associated with the reset action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * fields;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects that corresponds to the `fieldNames` property of widget annotations (such as [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md)) on the PDF page. This method can return `NULL`.

## See Also

### Related Documentation

- [PDFActionResetForm](../pdfactionresetform.md): `PDFActionResetForm`, a subclass of `PDFAction`, defines methods for getting and clearing fields in a PDF form.
