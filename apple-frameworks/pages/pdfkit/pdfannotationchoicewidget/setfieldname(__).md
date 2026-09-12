> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationchoicewidget/setfieldname(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotationchoicewidget/setfieldname(_:))

# setFieldName(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the internal field name associated with the widget annotation’s value.

## Declaration

```swift
func setFieldName(_ name: String!)
```

## Parameters

- `name`: The name to be used as the internal field name associated with the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation is backed by PDF form data, it can associate an optional field name with a value or other data.

## See Also

### Managing the Associated Field Name

- [fieldName()](fieldname%28%29.md): Deprecated. Returns the internal field name associated with the widget annotation.

# setFieldName: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the internal field name associated with the widget annotation’s value.

## Declaration

```objectivec
- (void) setFieldName:(NSString *) name;
```

## Parameters

- `name`: The name to be used as the internal field name associated with the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation is backed by PDF form data, it can associate an optional field name with a value or other data.

## See Also

### Managing the Associated Field Name

- [fieldName](fieldname%28%29.md): Deprecated. Returns the internal field name associated with the widget annotation.
