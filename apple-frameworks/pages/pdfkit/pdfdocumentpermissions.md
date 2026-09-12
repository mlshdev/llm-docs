> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentpermissions](https://developer.apple.com/documentation/pdfkit/pdfdocumentpermissions)

# PDFDocumentPermissions (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An enumeration that specifies document permissions status.

## Declaration

```swift
enum PDFDocumentPermissions
```

## Topics

### Enumeration Cases

- [PDFDocumentPermissions.none](pdfdocumentpermissions/none.md): The status that indicates no document permissions.
- [PDFDocumentPermissions.user](pdfdocumentpermissions/user.md): The status that indicates user document permissions.
- [PDFDocumentPermissions.owner](pdfdocumentpermissions/owner.md): The status that indicates owner document permissions.

### Initializers

- [init(rawValue:)](pdfdocumentpermissions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [PDFDocumentAttribute](pdfdocumentattribute.md): A structure that specifies document attributes.
- [PDFDocumentWriteOption](pdfdocumentwriteoption.md): A structure that specifies file writing options for a document.

# PDFDocumentPermissions (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

An enumeration that specifies document permissions status.

## Declaration

```objectivec
enum PDFDocumentPermissions : NSInteger;
```

## Topics

### Enumeration Cases

- [kPDFDocumentPermissionsNone](pdfdocumentpermissions/none.md): The status that indicates no document permissions.
- [kPDFDocumentPermissionsUser](pdfdocumentpermissions/user.md): The status that indicates user document permissions.
- [kPDFDocumentPermissionsOwner](pdfdocumentpermissions/owner.md): The status that indicates owner document permissions.

## See Also

### Constants

- [PDFDocumentAttribute](pdfdocumentattribute.md): A structure that specifies document attributes.
- [PDFDocumentWriteOption](pdfdocumentwriteoption.md): A structure that specifies file writing options for a document.
