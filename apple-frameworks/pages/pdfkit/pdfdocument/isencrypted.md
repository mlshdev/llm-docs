> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/isencrypted](https://developer.apple.com/documentation/pdfkit/pdfdocument/isencrypted)

# isEncrypted (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value specifying whether the document is encrypted.

## Declaration

```swift
var isEncrypted: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document is encrypted, whether it is locked or unlocked; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If encrypted, reading the document requires a password.

Encrypted documents whose password is the empty string are unlocked automatically upon opening, because PDF Kit tries the empty string as a password if none is supplied. Use the [unlock(withPassword:)](unlock%28withpassword_%29.md) method to unlock a document using a password.

## See Also

### Managing Document Security

- [isLocked](islocked.md): A Boolean value indicating whether the document is locked.
- [unlock(withPassword:)](unlock%28withpassword_%29.md): Attempts to unlock an encrypted document.
- [permissionsStatus](permissionsstatus.md): The permissions status of the PDF document.
- [Permission Properties](../permission-properties.md): Properties that specify what functions are allowed for a PDF document.

# isEncrypted (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value specifying whether the document is encrypted.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isEncrypted;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document is encrypted, whether it is locked or unlocked; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If encrypted, reading the document requires a password.

Encrypted documents whose password is the empty string are unlocked automatically upon opening, because PDF Kit tries the empty string as a password if none is supplied. Use the [unlockWithPassword:](unlock%28withpassword_%29.md) method to unlock a document using a password.

## See Also

### Managing Document Security

- [isLocked](islocked.md): A Boolean value indicating whether the document is locked.
- [unlockWithPassword:](unlock%28withpassword_%29.md): Attempts to unlock an encrypted document.
- [permissionsStatus](permissionsstatus.md): The permissions status of the PDF document.
- [Permission Properties](../permission-properties.md): Properties that specify what functions are allowed for a PDF document.
