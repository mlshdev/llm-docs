> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationstamp/setname(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotationstamp/setname(_:))

# setName(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Sets the name associated with the stamp annotation.

## Declaration

```swift
func setName(_ name: String!)
```

<a id="Discussion"></a>

## Discussion

The name must be representable in ASCII. You can set a stamp annotation’s name to help you identify it, but that name is not displayed on the PDF page. You must provide the string you want displayed on the page, such as “Draft” or “Top Secret”, in the appearance stream for the annotation.

## See Also

### Accessing and setting the stamp annotation

- [name()](name%28%29.md): Deprecated. Returns name associated with the stamp annotation.

# setName: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Sets the name associated with the stamp annotation.

## Declaration

```objectivec
- (void) setName:(NSString *) name;
```

<a id="Discussion"></a>

## Discussion

The name must be representable in ASCII. You can set a stamp annotation’s name to help you identify it, but that name is not displayed on the PDF page. You must provide the string you want displayed on the page, such as “Draft” or “Top Secret”, in the appearance stream for the annotation.

## See Also

### Accessing and setting the stamp annotation

- [name](name%28%29.md): Deprecated. Returns name associated with the stamp annotation.
