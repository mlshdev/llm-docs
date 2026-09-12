> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationchoicewidget/fieldname()](https://developer.apple.com/documentation/pdfkit/pdfannotationchoicewidget/fieldname())

# fieldName() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the internal field name associated with the widget annotation.

## Declaration

```swift
func fieldName() -> String!
```

<a id="return-value"></a>

## Return Value

The internal field name associated with the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation is backed by PDF form data, it can associate an optional field name with a value or other data.

## See Also

### Managing the Associated Field Name

- [setFieldName(\_:)](setfieldname%28__%29.md): Deprecated. Sets the internal field name associated with the widget annotation’s value.

# fieldName (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the internal field name associated with the widget annotation.

## Declaration

```objectivec
- (NSString *) fieldName;
```

<a id="return-value"></a>

## Return Value

The internal field name associated with the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation is backed by PDF form data, it can associate an optional field name with a value or other data.

## See Also

### Managing the Associated Field Name

- [setFieldName:](setfieldname%28__%29.md): Deprecated. Sets the internal field name associated with the widget annotation’s value.
