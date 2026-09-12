> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/permissionsstatus](https://developer.apple.com/documentation/pdfkit/pdfdocument/permissionsstatus)

# permissionsStatus (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

The permissions status of the PDF document.

## Declaration

```swift
var permissionsStatus: PDFDocumentPermissions { get }
```

## See Also

### Managing Document Security

- [isEncrypted](isencrypted.md): A Boolean value specifying whether the document is encrypted.
- [isLocked](islocked.md): A Boolean value indicating whether the document is locked.
- [unlock(withPassword:)](unlock%28withpassword_%29.md): Attempts to unlock an encrypted document.
- [Permission Properties](../permission-properties.md): Properties that specify what functions are allowed for a PDF document.

# permissionsStatus (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

The permissions status of the PDF document.

## Declaration

```objectivec
@property (nonatomic, readonly) PDFDocumentPermissions permissionsStatus;
```

## See Also

### Managing Document Security

- [isEncrypted](isencrypted.md): A Boolean value specifying whether the document is encrypted.
- [isLocked](islocked.md): A Boolean value indicating whether the document is locked.
- [unlockWithPassword:](unlock%28withpassword_%29.md): Attempts to unlock an encrypted document.
- [Permission Properties](../permission-properties.md): Properties that specify what functions are allowed for a PDF document.
