> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocumentattribute](https://developer.apple.com/documentation/pdfkit/pdfdocumentattribute)

# PDFDocumentAttribute (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A structure that specifies document attributes.

## Declaration

```swift
struct PDFDocumentAttribute
```

## Topics

### Creating Document Attributes

- [init(rawValue:)](pdfdocumentattribute/init%28rawvalue_%29.md): Initialize a `PDFDocumentAttribute` structure.

### Getting Document Attributes

- [authorAttribute](pdfdocumentattribute/authorattribute.md): An optional text string containing the name of the author of the document.
- [creationDateAttribute](pdfdocumentattribute/creationdateattribute.md): An optional text string containing the document’s creation date.
- [creatorAttribute](pdfdocumentattribute/creatorattribute.md): An optional text string containing the name of the application that created the document content.
- [keywordsAttribute](pdfdocumentattribute/keywordsattribute.md): An optional array of text strings containing keywords for the document.
- [modificationDateAttribute](pdfdocumentattribute/modificationdateattribute.md): An optional text string containing the document’s last-modified date.
- [producerAttribute](pdfdocumentattribute/producerattribute.md): An optional text string containing the name of the application that produced the PDF data for the document.
- [subjectAttribute](pdfdocumentattribute/subjectattribute.md): An optional text string containing a description of the subject of the document.
- [titleAttribute](pdfdocumentattribute/titleattribute.md): An optional text string containing the title of the document.

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
- [PDFDocumentWriteOption](pdfdocumentwriteoption.md): A structure that specifies file writing options for a document.

# PDFDocumentAttribute (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A structure that specifies document attributes.

## Declaration

```objectivec
typedef NSString * PDFDocumentAttribute;
```

## Topics

### Getting Document Attributes

- [PDFDocumentAuthorAttribute](pdfdocumentattribute/authorattribute.md): An optional text string containing the name of the author of the document.
- [PDFDocumentCreationDateAttribute](pdfdocumentattribute/creationdateattribute.md): An optional text string containing the document’s creation date.
- [PDFDocumentCreatorAttribute](pdfdocumentattribute/creatorattribute.md): An optional text string containing the name of the application that created the document content.
- [PDFDocumentKeywordsAttribute](pdfdocumentattribute/keywordsattribute.md): An optional array of text strings containing keywords for the document.
- [PDFDocumentModificationDateAttribute](pdfdocumentattribute/modificationdateattribute.md): An optional text string containing the document’s last-modified date.
- [PDFDocumentProducerAttribute](pdfdocumentattribute/producerattribute.md): An optional text string containing the name of the application that produced the PDF data for the document.
- [PDFDocumentSubjectAttribute](pdfdocumentattribute/subjectattribute.md): An optional text string containing a description of the subject of the document.
- [PDFDocumentTitleAttribute](pdfdocumentattribute/titleattribute.md): An optional text string containing the title of the document.

## See Also

### Constants

- [PDFDocumentPermissions](pdfdocumentpermissions.md): An enumeration that specifies document permissions status.
- [PDFDocumentWriteOption](pdfdocumentwriteoption.md): A structure that specifies file writing options for a document.
