> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/unlockwithpassword(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/unlockwithpassword(_:))

# unlockWithPassword(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Unlocks an encrypted PDF document when a valid password is supplied.

## Declaration

```swift
func unlockWithPassword(_ password: UnsafePointer<CChar>) -> Bool
```

## Parameters

- `password`: A pointer to a string that contains the password.

<a id="return-value"></a>

## Return Value

A Boolean that, if [true](https://developer.apple.com/documentation/swift/true), indicates that the document has been successfully unlocked. If the value is [false](https://developer.apple.com/documentation/swift/false), the document has not been unlocked.

<a id="Discussion"></a>

## Discussion

Given an encrypted PDF document and a password, this function does the following:

- Sets the lock state of the document, based on the validity of the password.
- Returns [true](https://developer.apple.com/documentation/swift/true) if the document is unlocked.
- Returns [false](https://developer.apple.com/documentation/swift/false) if the document cannot be unlocked with the specified password.

Unlocking a PDF document makes it possible to decrypt the document and perform other privileged operations. Different passwords enable different operations.

## See Also

### Working with an Encrypted PDF Document

- [isEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [allowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [allowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [isUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.

# CGPDFDocumentUnlockWithPassword (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Unlocks an encrypted PDF document when a valid password is supplied.

## Declaration

```objectivec
extern bool CGPDFDocumentUnlockWithPassword(CGPDFDocumentRef document, const char *password);
```

## Parameters

- `document`: A PDF document.
- `password`: A pointer to a string that contains the password.

<a id="return-value"></a>

## Return Value

A Boolean that, if [true](https://developer.apple.com/documentation/swift/true), indicates that the document has been successfully unlocked. If the value is [false](https://developer.apple.com/documentation/swift/false), the document has not been unlocked.

<a id="Discussion"></a>

## Discussion

Given an encrypted PDF document and a password, this function does the following:

- Sets the lock state of the document, based on the validity of the password.
- Returns [true](https://developer.apple.com/documentation/swift/true) if the document is unlocked.
- Returns [false](https://developer.apple.com/documentation/swift/false) if the document cannot be unlocked with the specified password.

Unlocking a PDF document makes it possible to decrypt the document and perform other privileged operations. Different passwords enable different operations.

## See Also

### Working with an Encrypted PDF Document

- [CGPDFDocumentIsEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [CGPDFDocumentAllowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [CGPDFDocumentAllowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [CGPDFDocumentIsUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.
