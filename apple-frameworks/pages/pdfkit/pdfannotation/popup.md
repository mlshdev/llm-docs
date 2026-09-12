> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/popup](https://developer.apple.com/documentation/pdfkit/pdfannotation/popup)

# popup (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the pop-up annotation associated with an annotation.

## Declaration

```swift
var popup: PDFAnnotation? { get set }
```

<a id="return-value"></a>

## Return Value

The pop-up annotation associated with the annotation, or `NULL` if no pop-up exists.

<a id="Discussion"></a>

## Discussion

Pop-up annotations are not used with links or widgets. The bounds and open state of the pop-up annotation indicate the placement and open state of the pop-up window.

## See Also

### Related Documentation

- [PDFAnnotation](../pdfannotation.md): An annotation in a PDF document.

### Configuring Pop-Up Annotations

- [isOpen](isopen.md): A Boolean value that indicates whether the pop-up annotation is in an opened state, displaying its text content, or in a closed state, displaying an icon.

# popup (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the pop-up annotation associated with an annotation.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PDFAnnotation * popup;
```

<a id="return-value"></a>

## Return Value

The pop-up annotation associated with the annotation, or `NULL` if no pop-up exists.

<a id="Discussion"></a>

## Discussion

Pop-up annotations are not used with links or widgets. The bounds and open state of the pop-up annotation indicate the placement and open state of the pop-up window.

## See Also

### Related Documentation

- [PDFAnnotation](../pdfannotation.md): An annotation in a PDF document.

### Configuring Pop-Up Annotations

- [open](isopen.md): A Boolean value that indicates whether the pop-up annotation is in an opened state, displaying its text content, or in a closed state, displaying an icon.
