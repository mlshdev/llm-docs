> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationbuttonwidget/setonstatevalue(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotationbuttonwidget/setonstatevalue(_:))

# setOnStateValue(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the string that is associated with the on state of a radio button or checkbox control.

## Declaration

```swift
func setOnStateValue(_ name: String!)
```

<a id="Discussion"></a>

## Discussion

Required for controls of types [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md) and [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md), the value of `name` describes the on state of the control (the off state is always labeled “Off”). Although “On” is an acceptable string for the on state of a single checkbox, a group of two or more radio buttons should have a unique string associated with each control.

For example, a form might display a group of 3 radio buttons that allow users to indicate an account type, such as savings, checking, or investment. The strings associated with the on states of these buttons could be “Savings,” “Checking,” and “Investment.” In this example, these 3 radio buttons also would share a field name string, such as “AccountType.”

## See Also

### Related Documentation

- [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md): Deprecated. A `PDFAnnotationButtonWidget` object provides user interactivity on a page of a PDF document. There are three types of buttons available: push button, radio button, and checkbox.

### Managing Control State Values and Form Fields

- [onStateValue()](onstatevalue%28%29.md): Deprecated. Returns the string associated with the on state of a radio button or checkbox control.
- [fieldName()](fieldname%28%29.md): Deprecated. Returns the internal name of a field (used for reset-form actions).
- [setFieldName(\_:)](setfieldname%28__%29.md): Deprecated. Sets the internal name of a field (used for reset-form actions).

# setOnStateValue: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the string that is associated with the on state of a radio button or checkbox control.

## Declaration

```objectivec
- (void) setOnStateValue:(NSString *) name;
```

<a id="Discussion"></a>

## Discussion

Required for controls of types [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md) and [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md), the value of `name` describes the on state of the control (the off state is always labeled “Off”). Although “On” is an acceptable string for the on state of a single checkbox, a group of two or more radio buttons should have a unique string associated with each control.

For example, a form might display a group of 3 radio buttons that allow users to indicate an account type, such as savings, checking, or investment. The strings associated with the on states of these buttons could be “Savings,” “Checking,” and “Investment.” In this example, these 3 radio buttons also would share a field name string, such as “AccountType.”

## See Also

### Related Documentation

- [PDFAnnotationButtonWidget](../pdfannotationbuttonwidget.md): Deprecated. A `PDFAnnotationButtonWidget` object provides user interactivity on a page of a PDF document. There are three types of buttons available: push button, radio button, and checkbox.

### Managing Control State Values and Form Fields

- [onStateValue](onstatevalue%28%29.md): Deprecated. Returns the string associated with the on state of a radio button or checkbox control.
- [fieldName](fieldname%28%29.md): Deprecated. Returns the internal name of a field (used for reset-form actions).
- [setFieldName:](setfieldname%28__%29.md): Deprecated. Sets the internal name of a field (used for reset-form actions).
