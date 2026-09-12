> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationstamp/name()](https://developer.apple.com/documentation/pdfkit/pdfannotationstamp/name())

# name() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Returns name associated with the stamp annotation.

## Declaration

```swift
func name() -> String!
```

<a id="Discussion"></a>

## Discussion

Note that the name value of the stamp annotation is not necessarily identical to the user-visible appearance of the stamp annotation. For example, a stamp annotation that displays “Confidential” on a PDF page may not have a name value of “Confidential”.

## See Also

### Accessing and setting the stamp annotation

- [setName(\_:)](setname%28__%29.md): Deprecated. Sets the name associated with the stamp annotation.

# name (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Returns name associated with the stamp annotation.

## Declaration

```objectivec
- (NSString *) name;
```

<a id="Discussion"></a>

## Discussion

Note that the name value of the stamp annotation is not necessarily identical to the user-visible appearance of the stamp annotation. For example, a stamp annotation that displays “Confidential” on a PDF page may not have a name value of “Confidential”.

## See Also

### Accessing and setting the stamp annotation

- [setName:](setname%28__%29.md): Deprecated. Sets the name associated with the stamp annotation.
