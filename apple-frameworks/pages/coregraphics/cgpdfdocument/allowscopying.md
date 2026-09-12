> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/allowscopying](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/allowscopying)

# allowsCopying (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the specified PDF document allows copying.

## Declaration

```swift
var allowsCopying: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the document is encrypted and the current password doesn’t grant permission to perform copying, this returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with an Encrypted PDF Document

- [isEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [allowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [isUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [unlockWithPassword(\_:)](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.

# CGPDFDocumentAllowsCopying (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the specified PDF document allows copying.

## Declaration

```objectivec
extern bool CGPDFDocumentAllowsCopying(CGPDFDocumentRef document);
```

## Parameters

- `document`: A PDF document.

<a id="return-value"></a>

## Return Value

A Boolean that, if [true](https://developer.apple.com/documentation/swift/true), indicates that the document allows copying. If the value is [false](https://developer.apple.com/documentation/swift/false), the document does not allow copying.

<a id="Discussion"></a>

## Discussion

If the document is encrypted and the current password doesn’t grant permission to perform copying, this returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with an Encrypted PDF Document

- [CGPDFDocumentIsEncrypted](isencrypted.md): Returns whether the specified PDF file is encrypted.
- [CGPDFDocumentAllowsPrinting](allowsprinting.md): Returns whether a PDF document allows printing.
- [CGPDFDocumentIsUnlocked](isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [CGPDFDocumentUnlockWithPassword](unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.
