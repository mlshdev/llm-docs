> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentwriteoption/ownerpasswordoption](https://developer.apple.com/documentation/pdfkit/pdfdocumentwriteoption/ownerpasswordoption)

# ownerPasswordOption (Swift)

**Framework:** PDFKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An `NSString` object for the owner’s password which is required for encryption.

## Declaration

```swift
static let ownerPasswordOption: PDFDocumentWriteOption
```

## See Also

### Getting Write Option Properties

- [userPasswordOption](userpasswordoption.md): An `NSString` object for the user’s password which is optional for encryption.

# PDFDocumentOwnerPasswordOption (Objective-C)

**Framework:** PDFKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An `NSString` object for the owner’s password which is required for encryption.

## Declaration

```objectivec
extern PDFDocumentWriteOption const PDFDocumentOwnerPasswordOption;
```

## See Also

### Getting Write Option Properties

- [PDFDocumentUserPasswordOption](userpasswordoption.md): An `NSString` object for the user’s password which is optional for encryption.
