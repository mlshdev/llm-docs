> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/isencrypted](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/isencrypted)

# isEncrypted (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the specified PDF file is encrypted.

## Declaration

```swift
var isEncrypted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the document is encrypted, a password must be supplied before certain operations are enabled. For more information, see [unlockWithPassword(\_:)](unlockwithpassword%28__%29.md).

## See Also

### Working with an Encrypted PDF Document

- [allowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [allowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [isUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [unlockWithPassword(\_:)](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.

# CGPDFDocumentIsEncrypted (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the specified PDF file is encrypted.

## Declaration

```objectivec
extern bool CGPDFDocumentIsEncrypted(CGPDFDocumentRef document);
```

## Parameters

- `document`: A PDF document.

<a id="return-value"></a>

## Return Value

A Boolean that, if [true](https://developer.apple.com/documentation/swift/true), indicates that the document is encrypted. If the value is [false](https://developer.apple.com/documentation/swift/false), the document is not encrypted.

<a id="Discussion"></a>

## Discussion

If the document is encrypted, a password must be supplied before certain operations are enabled. For more information, see [CGPDFDocumentUnlockWithPassword](unlockwithpassword%28__%29.md).

## See Also

### Working with an Encrypted PDF Document

- [CGPDFDocumentAllowsCopying](allowscopying.md): Returns whether the specified PDF document allows copying.
- [CGPDFDocumentAllowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [CGPDFDocumentIsUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [CGPDFDocumentUnlockWithPassword](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.
