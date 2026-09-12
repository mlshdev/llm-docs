> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/hascomb](https://developer.apple.com/documentation/pdfkit/pdfannotation/hascomb)

# hasComb (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the annotation divides the text widget’s bounds into equally spaced segments, such as in a form entry field.

## Declaration

```swift
var hasComb: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The [maximumLength](maximumlength.md) property specifies the number of spaces the text widget divides the bounds into.

## See Also

### Configuring Text Widget Annotations

- [isMultiline](ismultiline.md): A Boolean value that indicates whether the text widget annotation displays multiple lines.
- [isPasswordField](ispasswordfield.md): A Boolean value that indicates whether the text widget annotation displays a password field using bullet characters.
- [maximumLength](maximumlength.md): The maximum number of characters the text widget annotation allows.

# comb (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the annotation divides the text widget’s bounds into equally spaced segments, such as in a form entry field.

## Declaration

```objectivec
@property (nonatomic, getter=hasComb) BOOL comb;
```

<a id="Discussion"></a>

## Discussion

The [maximumLength](maximumlength.md) property specifies the number of spaces the text widget divides the bounds into.

## See Also

### Configuring Text Widget Annotations

- [multiline](ismultiline.md): A Boolean value that indicates whether the text widget annotation displays multiple lines.
- [isPasswordField](ispasswordfield.md): A Boolean value that indicates whether the text widget annotation displays a password field using bullet characters.
- [maximumLength](maximumlength.md): The maximum number of characters the text widget annotation allows.
