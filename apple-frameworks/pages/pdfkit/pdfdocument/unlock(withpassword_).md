> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/unlock(withpassword:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/unlock(withpassword:))

# unlock(withPassword:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Attempts to unlock an encrypted document.

## Declaration

```swift
func unlock(withPassword password: String) -> Bool
```

## Parameters

- `password`: The password to unlock an encrypted document (you cannot lock an unlocked PDF document by using an incorrect password).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified password unlocks the document, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the password is correct, this method returns [true](https://developer.apple.com/documentation/swift/true), and a `PDFDocumentDidUnlockNotification` notification is sent. Once unlocked, you cannot use this function to relock the document.

If you attempt to unlock an already unlocked document, one of the following occurs:

- If the document is unlocked with full owner permissions, `unlockWithPassword` does nothing and returns [true](https://developer.apple.com/documentation/swift/true). The password string is ignored.
- If the document is unlocked with only user permissions, `unlockWithPassword` attempts to obtain full owner permissions with the password string. If the string fails, the document maintains its user permissions. In either case, this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Document Security

- [isEncrypted](isencrypted.md): A Boolean value specifying whether the document is encrypted.
- [isLocked](islocked.md): A Boolean value indicating whether the document is locked.
- [permissionsStatus](permissionsstatus.md): The permissions status of the PDF document.
- [Permission Properties](../permission-properties.md): Properties that specify what functions are allowed for a PDF document.

# unlockWithPassword: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Attempts to unlock an encrypted document.

## Declaration

```objectivec
- (BOOL) unlockWithPassword:(NSString *) password;
```

## Parameters

- `password`: The password to unlock an encrypted document (you cannot lock an unlocked PDF document by using an incorrect password).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified password unlocks the document, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the password is correct, this method returns [true](https://developer.apple.com/documentation/swift/true), and a `PDFDocumentDidUnlockNotification` notification is sent. Once unlocked, you cannot use this function to relock the document.

If you attempt to unlock an already unlocked document, one of the following occurs:

- If the document is unlocked with full owner permissions, `unlockWithPassword` does nothing and returns [true](https://developer.apple.com/documentation/swift/true). The password string is ignored.
- If the document is unlocked with only user permissions, `unlockWithPassword` attempts to obtain full owner permissions with the password string. If the string fails, the document maintains its user permissions. In either case, this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Document Security

- [isEncrypted](isencrypted.md): A Boolean value specifying whether the document is encrypted.
- [isLocked](islocked.md): A Boolean value indicating whether the document is locked.
- [permissionsStatus](permissionsstatus.md): The permissions status of the PDF document.
- [Permission Properties](../permission-properties.md): Properties that specify what functions are allowed for a PDF document.
