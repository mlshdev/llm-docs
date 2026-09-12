> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationchoicewidget/stringvalue()](https://developer.apple.com/documentation/pdfkit/pdfannotationchoicewidget/stringvalue())

# stringValue() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the selection in the widget annotation.

## Declaration

```swift
func stringValue() -> String!
```

<a id="return-value"></a>

## Return Value

The string that represents the selection in the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation object is backed by PDF form data, this method returns the value associated with the appropriate field in the form object, if possible.

## See Also

### Getting and Setting the String Value

- [setStringValue(\_:)](setstringvalue%28__%29.md): Deprecated. Sets the selection in the widget annotation.

# stringValue (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the selection in the widget annotation.

## Declaration

```objectivec
- (NSString *) stringValue;
```

<a id="return-value"></a>

## Return Value

The string that represents the selection in the widget annotation.

<a id="Discussion"></a>

## Discussion

If the widget annotation object is backed by PDF form data, this method returns the value associated with the appropriate field in the form object, if possible.

## See Also

### Getting and Setting the String Value

- [setStringValue:](setstringvalue%28__%29.md): Deprecated. Sets the selection in the widget annotation.
