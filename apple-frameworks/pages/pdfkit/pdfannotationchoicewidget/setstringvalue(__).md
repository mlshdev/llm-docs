> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationchoicewidget/setstringvalue(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotationchoicewidget/setstringvalue(_:))

# setStringValue(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the selection in the widget annotation.

## Declaration

```swift
func setStringValue(_ value: String!)
```

## Parameters

- `value`: The string that represents the selection in the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation object is backed by PDF form data, this method updates the value associated with the appropriate field in the form object.

## See Also

### Getting and Setting the String Value

- [stringValue()](stringvalue%28%29.md): Deprecated. Returns the selection in the widget annotation.

# setStringValue: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the selection in the widget annotation.

## Declaration

```objectivec
- (void) setStringValue:(NSString *) value;
```

## Parameters

- `value`: The string that represents the selection in the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation object is backed by PDF form data, this method updates the value associated with the appropriate field in the form object.

## See Also

### Getting and Setting the String Value

- [stringValue](stringvalue%28%29.md): Deprecated. Returns the selection in the widget annotation.
