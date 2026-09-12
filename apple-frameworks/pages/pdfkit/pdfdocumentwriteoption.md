> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentwriteoption](https://developer.apple.com/documentation/pdfkit/pdfdocumentwriteoption)

# PDFDocumentWriteOption (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A structure that specifies file writing options for a document.

## Declaration

```swift
struct PDFDocumentWriteOption
```

## Topics

### Creating Write Options

- [init(rawValue:)](pdfdocumentwriteoption/init%28rawvalue_%29.md): Initialize a `PDFDocumentWriteOption` structure.

### Getting Write Option Properties

- [ownerPasswordOption](pdfdocumentwriteoption/ownerpasswordoption.md): An `NSString` object for the owner’s password which is required for encryption.
- [userPasswordOption](pdfdocumentwriteoption/userpasswordoption.md): An `NSString` object for the user’s password which is optional for encryption.

### Type Properties

- [accessPermissionsOption](pdfdocumentwriteoption/accesspermissionsoption.md)
- [burnInAnnotationsOption](pdfdocumentwriteoption/burninannotationsoption.md)
- [optimizeImagesForScreenOption](pdfdocumentwriteoption/optimizeimagesforscreenoption.md)
- [saveImagesAsJPEGOption](pdfdocumentwriteoption/saveimagesasjpegoption.md)
- [saveTextFromOCROption](pdfdocumentwriteoption/savetextfromocroption.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [PDFDocumentPermissions](pdfdocumentpermissions.md): An enumeration that specifies document permissions status.
- [PDFDocumentAttribute](pdfdocumentattribute.md): A structure that specifies document attributes.

# PDFDocumentWriteOption (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A structure that specifies file writing options for a document.

## Declaration

```objectivec
typedef NSString * PDFDocumentWriteOption;
```

## Topics

### Getting Write Option Properties

- [PDFDocumentOwnerPasswordOption](pdfdocumentwriteoption/ownerpasswordoption.md): An `NSString` object for the owner’s password which is required for encryption.
- [PDFDocumentUserPasswordOption](pdfdocumentwriteoption/userpasswordoption.md): An `NSString` object for the user’s password which is optional for encryption.

### Type Properties

- [PDFDocumentAccessPermissionsOption](pdfdocumentwriteoption/accesspermissionsoption.md)
- [PDFDocumentBurnInAnnotationsOption](pdfdocumentwriteoption/burninannotationsoption.md)
- [PDFDocumentOptimizeImagesForScreenOption](pdfdocumentwriteoption/optimizeimagesforscreenoption.md)
- [PDFDocumentSaveImagesAsJPEGOption](pdfdocumentwriteoption/saveimagesasjpegoption.md)
- [PDFDocumentSaveTextFromOCROption](pdfdocumentwriteoption/savetextfromocroption.md)

## See Also

### Constants

- [PDFDocumentPermissions](pdfdocumentpermissions.md): An enumeration that specifies document permissions status.
- [PDFDocumentAttribute](pdfdocumentattribute.md): A structure that specifies document attributes.
